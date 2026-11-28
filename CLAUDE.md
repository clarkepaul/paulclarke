# CLAUDE.md

Guidance for Claude when working on paulclarke.nz, Paul Clarke's portfolio, résumé and CV. Read `README.md` for how to run and build the site; this file covers how Paul likes to work, decisions already made, and open items.

## The project

- One repository holds the portfolio and the résumé. The Résumé page (`src/resume.njk`, styled by `src/css/resume.css`) is the source of the downloadable CV, `src/Paul-Clarke-CV.pdf`.
- Eleventy 3 static site. Source in `src/`, output in `_site/`. Pushing to `main` deploys to GitHub Pages through `.github/workflows/deploy.yml`. The custom domain is set by `CNAME`.
- Purpose: support applications for Head of Design and design leadership roles. The site presents Paul as multidisciplinary (brand, experience, strategy and systems), not only as a design systems specialist. Tailor detail for a specific job in the cover letter rather than reshaping the site around one role.

## How Paul likes to work

- Preview every change locally before committing. Use `npm start` (http://localhost:8080) and check desktop and phone widths, light and dark mode, and that nothing scrolls sideways.
- Commit only when asked, and never push or merge without a clear yes. Paul usually publishes by pushing a branch and merging a pull request in the GitHub client.
- When a change needs a decision, explain the options briefly with a recommendation, rather than asking open questions.
- Small, separate commits with plain descriptive messages.
- If the working tree has Paul's own uncommitted edits, leave them alone and commit only your own changes.

## Writing style for site copy

- Plain British English, short sentences, active voice. Spell out acronyms and organisation names.
- Match the surrounding copy. Most pages avoid contractions; the Contact page and homepage introduction are deliberately more conversational.
- No internal identifiers on the site: no ticket numbers, branch names, repository paths or package names.
- Case studies are written from public-safe information. Do not add confidential employer detail, and flag anything that may need the former employer's clearance.
- Do not invent facts, dates, outcomes or metrics. Mark anything unconfirmed and ask.

## Design decisions already made

- Fonts: DM Sans for body text, Fraunces for headings and card titles, DM Mono for section labels. Urbanist was tried and rejected because body text read too small and light.
- Colour, type, space and layout are design tokens at the top of `src/css/site.css`. Dark mode values sit in two matching blocks (system setting and the header toggle); keep them in step. Printing always uses light colours.
- Accessibility target is WCAG 2.2 AA: check text contrast, keep visible focus styles, use real headings, lists and tables, and give decorative SVG `aria-hidden`.
- Content columns are centred: 8 of 12 columns from tablet up, and a narrower reading measure (`--measure`) for prose pages and case studies. The homepage hero heading is deliberately left aligned to the hero grid, not the centred column.
- Homepage hero: a "Head of Design" label in the mono label style above the heading, then "I combine strategic thinking and creative expertise to shape experiences and brands. I lead design teams and build systems that scale." Highlighter marks sit on experiences, brands and scale. A pill caption on the photo was tried and rejected.
- Focus areas: Brand, Experience, Strategy and Systems, defined in `src/_data/focusAreas.json` (label, Lucide icon, one-line text). They drive the homepage tiles and the Work page filters, and each tile links to `/work.html?focus=<key>`. Choose icons that are symmetrical and fill their space; compass and blocks were swapped out because they looked small or off centre.
- Navigation marks hover and the current page with a short line in the highlight colour that grows from the left; the current page label is also darker, so colour is not the only signal.
- The Paul Clarke mark is in `src/_includes/partials/mark.njk` (header, drawn in the text colour) and `src/favicons/`. The artwork includes deliberate space around it and sits slightly low so it looks centred. Regenerate the PNG and ICO favicons from `src/favicons/favicon.svg` if the mark changes.
- The email address must never appear as plain text in the HTML. `src/js/email.js` builds it in the browser from `data-email` elements, with "[at] [dot]" text as the fallback.

## Case studies

- Each case study is a file in `src/work/`, ordered by its `order` value. They appear on the Work page and in the "Read next" chain automatically. Start from `case-study-template.md`.
- Each case study sets `focus` in its front matter to one or more focus area keys, which become its tags and filters on the Work page (`src/js/work-filter.js`).
- Standard sections: Context, My role, The problem, Key decisions (or what was built), Outcome, Reflection.
- Markdown works for most. Use a `.njk` file when the layout needs components, as `design-maturity-labels.njk` does.
- Components available in `site.css`: the `stackedBar` shortcode (chart), `.maturity` label chip with a five-step meter, `.stage-list` (sequence joined by a line), `.term-list` (terms and meanings), `.example` (framed illustration with a caption) and `.data-table` inside `.table-scroll`. Add `.example__frame--logo` for a logo on a white background, centred, in both light and dark mode, and `.example__frame--sheet` as well for detailed artwork or screenshots that should use the full width.
- `earlier-work.md` is the last Work entry: earlier brand, print and website work listed by name without links, because the live sites have since been redesigned. Its Brand and print list links to the Silverstripe brand case study.
- Two Silverstripe case studies, written from Paul's own account:
  - `silverstripe-brand.md` (Brand and Experience): the company brand's versions and the product family built from one glyph. Images are in `src/images/silverstripe/`, extracted from Paul's Illustrator and PDF files. The logo history image is spaced so the gaps above, between and below the logos are equal.
  - `silverstripe-cms-research.md` (Experience and Systems): the 2014 usability study, the interface changes, and Paul's solo front-end rebuild on Bootstrap. Images are in `src/images/silverstripe-cms/`. The report cover is left out because it names colleagues. The screenshots are of the current CMS, captioned "today", because Paul says the interface has barely changed since he left.
- Credit collaborators by role ("another designer", "two designers in my team"), not by name, unless Paul asks otherwise.
- This Mac can read WebP but not write it. Save edited images as PNG (logos) or JPEG (screenshots).

## The CV

- The printed CV is two A4 pages; Paul chose this over cutting Experience detail to fit one. After changing the Résumé page or `resume.css`, run `npm run cv`, check that it stays at two pages and that the break falls between roles or sub-roles (the print styles keep roles, sub-roles and points whole), and commit the PDF with the change.
- The Résumé opens with Paul's profile and lists Strengths in the sidebar, rather than a second set of focus areas. The About page's "What I do" section groups his capabilities under the site's four focus areas plus Design leadership.
- Keep a phone number off the public site.

## Open items

- **Leaving Totara.** Paul's official end date is January 2027 (gardening leave from late November 2026). `totaraEnd` in `src/_data/site.json` holds it and is used only on the Résumé and CV. The homepage and About page say "Until recently" so nothing reads as future-dated. Keep "Head of Design" and "I lead" in the homepage hero.
- **Brand work.** The Silverstripe brand case study is live. Paul will add more brand work over time, and plans a motion graphic of the brand creation process and cleaner process sheets from Figma to replace the current construction image. The company logo version Paul designed alone, between the second and current versions, is not shown because there is no artwork for it yet.
- **Design leadership case study.** Remind Paul about this. The homepage has four focus tiles and no Design leadership tile, on purpose for now. The next step is one case study on building the Totara design practice (for example a competency framework and training, design operations, playbooks, communication channels and critique sessions), picking the three or four practices that changed how the team worked. Once it exists, add Design leadership to `focusAreas.json`, rethink the homepage tile layout for five, consider tagging the AI-first practice and design maturity labels case studies too, and check Totara clearance.
- **About page.** The hospitality and trades paragraph uses Paul's own list; "looking after guests" and "shaping a park for the season" are paraphrases to confirm.
- **Clearance.** The product health, research repository and design maturity labels case studies describe internal processes. Paul is confirming with Totara that they can be published.
- **Claims to confirm.** The design maturity labels outcomes ("reviews converged faster", "contentious calls reached me early") are not yet backed by measures. The AI-first practice reflection is marked as a draft in the source.
- **Earlier work details.** "Momentum sub-sites: Venator and RPM" needs a few words of context, and "JBSL" may need the company's full name.
- **Design maturity labels page.** Paul's images of the real labels are not needed; the chips and meters already explain them. Open choices: give the chips the real labels' colours (teal, blue, orange, grey), and stack the readiness table into cards on phones instead of scrolling it sideways. Paul's label images say "Future" where the page says "Discovery"; check which is right.

## Local preview in the Claude desktop app

`.claude/` is not committed. To preview in the app, create `.claude/launch.json`:

```json
{
  "version": "0.0.1",
  "configurations": [
    {
      "name": "eleventy",
      "runtimeExecutable": "npx",
      "runtimeArgs": ["@11ty/eleventy", "--serve", "--port=8080"],
      "port": 8080
    }
  ]
}
```

## Troubleshooting

- If the live site looks broken after a deploy, it is usually the browser cache (GitHub Pages lets browsers reuse files for 10 minutes). In Safari, reload with Cmd + Option + R, or try a private window. Safari keeps favicons in a separate cache.
