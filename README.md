# paulclarke.nz

Personal site of Paul Clarke, built with [Eleventy](https://www.11ty.dev/) and published to GitHub Pages by the workflow in `.github/workflows/deploy.yml`.

## Working on the site

```bash
npm install
npm start
```

`npm start` serves the site at http://localhost:8080 and rebuilds on every save. `npm run build` writes the finished site to `_site/`.

## Where things live

- `src/css/site.css` holds all the styling. Design tokens (colour, type, space) are at the top.
- `src/_includes/layouts/` holds the shared page frame (`base.njk`), plain pages (`page.njk`) and case studies (`case-study.njk`).
- `src/work/` holds the case studies as Markdown. To add one, copy `case-study-template.md`, then set its `permalink`, `order` and text. It appears on the Work page and homepage automatically.
- `src/_data/` holds the site name and navigation, social links and blog posts.
- `src/images/` and `src/favicons/` are copied as they are.

Files outside `src/`, such as the InDesign résumé, are not published.
