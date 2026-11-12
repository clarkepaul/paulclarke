import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, join } from "node:path";

const lucideIcons = join(dirname(createRequire(import.meta.url).resolve("lucide-static/package.json")), "icons");
const iconCache = new Map();

export default function (eleventyConfig) {
	// Files copied as they are
	eleventyConfig.addPassthroughCopy({ "src/css": "css" });
	eleventyConfig.addPassthroughCopy({ "src/js": "js" });
	eleventyConfig.addPassthroughCopy({ "src/images": "images" });
	eleventyConfig.addPassthroughCopy({ "src/favicons": "/" });
	eleventyConfig.addPassthroughCopy({ "CNAME": "CNAME" });
	eleventyConfig.addPassthroughCopy({ "src/Paul-Clarke-CV.pdf": "Paul-Clarke-CV.pdf" }); // built by npm run cv

	// Case studies, in the order set by each file's `order` value
	eleventyConfig.addCollection("caseStudies", (collectionApi) =>
		collectionApi
			.getFilteredByTag("caseStudy")
			.sort((a, b) => a.data.order - b.data.order)
	);

	// The item after the one at `url`, wrapping round to the first
	eleventyConfig.addFilter("nextAfter", (items, url) => {
		const index = items.findIndex((item) => item.url === url);
		return index === -1 ? undefined : items[(index + 1) % items.length];
	});

	// Single stacked bar with a text legend. `segments` is a list of { label, value };
	// the caption explains what the bar shows, and `subject` names what is counted. Output is one line so it can sit inside a Markdown list item.
	eleventyConfig.addShortcode("stackedBar", (segments, caption, subject = "items") => {
		const total = segments.reduce((sum, s) => sum + s.value, 0);
		let x = 0;
		const rects = segments
			.map((s, i) => {
				const rect = `<rect class="chart__segment chart__segment--${i + 1}" x="${x + 1}" y="1" width="${s.value - 2}" height="38"/>`;
				x += s.value;
				return rect;
			})
			.join("");
		const description = segments.map((s) => `${s.label} ${s.value}`).join(", ");
		const legend = segments
			.map((s, i) => `<li><span class="chart__swatch chart__swatch--${i + 1}" aria-hidden="true"></span>${s.label}: <strong>${s.value}</strong></li>`)
			.join("");
		return `<figure class="chart"><svg class="chart__bar" viewBox="0 0 ${total} 40" role="img" aria-label="Stacked bar of ${total} ${subject}: ${description}.">${rects}</svg><ul class="chart__legend">${legend}</ul><figcaption>${caption}</figcaption></figure>`;
	});

	// Lucide icon, inlined as decorative SVG: {% icon "download" %} or {% icon "download", "extra-class" %}.
	// Browse names at https://lucide.dev/icons. The icon takes the text colour and is sized by .icon in site.css.
	eleventyConfig.addShortcode("icon", (name, className = "") => {
		if (!iconCache.has(name)) {
			const svg = readFileSync(join(lucideIcons, `${name}.svg`), "utf8")
				.replace(/<!--[\s\S]*?-->/, "")
				.replace(/\s*(class|width|height)="[^"]*"/g, "")
				.replace(/\s+/g, " ")
				.replace(/> </g, "><")
				.trim();
			iconCache.set(name, svg);
		}
		const classes = ["icon", `icon--${name}`, className].filter(Boolean).join(" ");
		return iconCache.get(name).replace("<svg", `<svg class="${classes}" aria-hidden="true" focusable="false"`);
	});

	return {
		dir: {
			input: "src",
			includes: "_includes",
			data: "_data",
			output: "_site",
		},
		markdownTemplateEngine: "njk",
		htmlTemplateEngine: "njk",
	};
}
