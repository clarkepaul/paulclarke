// Builds Paul-Clarke-CV.pdf from resume.html.
//
// 1. Builds the site with Eleventy into _site/.
// 2. Serves _site/ on a local port, so root-relative CSS and font links resolve.
// 3. Renders /resume.html in Chrome with print media, waits for the web fonts,
//    and prints A4 using the page's CSS @page size, with no browser headers or footers.
// 4. Sets the PDF title and author, and writes the file to src/ (published at
//    /Paul-Clarke-CV.pdf) and to _site/ for a local preview.
//
// Run with: npm run cv

import { execFileSync } from "node:child_process";
import { createServer } from "node:http";
import { copyFile, readFile } from "node:fs/promises";
import { writeFile } from "node:fs/promises";
import { extname, join, normalize, resolve } from "node:path";
import { chromium } from "playwright";
import { PDFDocument } from "pdf-lib";

const root = resolve(import.meta.dirname, "..");
const siteDir = join(root, "_site");
const outFile = join(root, "src", "Paul-Clarke-CV.pdf");
const TITLE = "Paul Clarke — CV";
const AUTHOR = "Paul Clarke";
const STATIC_FONTS_UA = "Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko";

const types = {
	".html": "text/html; charset=utf-8",
	".css": "text/css",
	".js": "text/javascript",
	".png": "image/png",
	".jpg": "image/jpeg",
	".ico": "image/x-icon",
	".svg": "image/svg+xml",
};

// A minimal static server for _site/
function serve(dir) {
	const server = createServer(async (req, res) => {
		const path = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
		const file = normalize(join(dir, path.endsWith("/") ? `${path}index.html` : path));
		if (!file.startsWith(dir)) {
			res.writeHead(403).end();
			return;
		}
		try {
			const body = await readFile(file);
			res.writeHead(200, { "Content-Type": types[extname(file)] ?? "application/octet-stream" }).end(body);
		} catch {
			res.writeHead(404).end();
		}
	});
	return new Promise((done) => server.listen(0, "127.0.0.1", () => done(server)));
}

// Prefer the installed Chrome; fall back to Playwright's own Chromium (npx playwright install chromium)
async function launch() {
	try {
		return await chromium.launch({ channel: "chrome" });
	} catch {
		return await chromium.launch();
	}
}

console.log("Building the site…");
execFileSync("npx", ["@11ty/eleventy", "--quiet"], { cwd: root, stdio: "inherit" });

const server = await serve(siteDir);
const { port } = server.address();
const browser = await launch();

try {
	const page = await browser.newPage();
	// Keep analytics out of the render
	await page.route(/googletagmanager\.com|google-analytics\.com/, (route) => route.abort());
	// Google Fonts gives modern browsers one variable font file per family, which Chrome prints as
	// unnamed Type 3 glyphs. Asking as an older browser returns static files, one per weight, which
	// Chrome embeds as named Literata and Public Sans fonts. This affects the PDF only.
	await page.route("https://fonts.googleapis.com/css2?*", async (route) => {
		const response = await route.fetch({
			headers: { ...route.request().headers(), "user-agent": STATIC_FONTS_UA },
		});
		await route.fulfill({ response });
	});
	await page.emulateMedia({ media: "print" });
	await page.goto(`http://127.0.0.1:${port}/resume.html`, { waitUntil: "networkidle" });
	await page.evaluate(() => document.fonts.ready);

	// The Google Fonts stylesheet can arrive after fonts.ready first settles, so wait until
	// every face the résumé uses has actually loaded before printing.
	const faces = ['400 12px "Literata"', '600 12px "Literata"', '400 12px "Public Sans"', '600 12px "Public Sans"'];
	try {
		await page.waitForFunction(
			async (list) => {
				await Promise.all(list.map((face) => document.fonts.load(face)));
				return list.every((face) => document.fonts.check(face)) && [...document.fonts].some((f) => f.family === "Literata" && f.status === "loaded");
			},
			faces,
			{ timeout: 20000, polling: 250 }
		);
	} catch {
		throw new Error("Literata and Public Sans did not load from Google Fonts; check the network connection.");
	}
	await page.evaluate(() => document.fonts.ready);

	const raw = await page.pdf({
		preferCSSPageSize: true,
		printBackground: true,
		displayHeaderFooter: false,
		tagged: true,
	});

	const pdf = await PDFDocument.load(raw);
	pdf.setTitle(TITLE, { showInWindowTitleBar: true });
	pdf.setAuthor(AUTHOR);
	pdf.setSubject("Curriculum vitae");
	pdf.setCreator("paulclarke.nz");
	const bytes = await pdf.save();

	await writeFile(outFile, bytes);
	await copyFile(outFile, join(siteDir, "Paul-Clarke-CV.pdf"));
	console.log(`Wrote ${outFile} (${pdf.getPageCount()} pages, ${Math.round(bytes.length / 1024)} KB)`);
} finally {
	await browser.close();
	server.close();
}
