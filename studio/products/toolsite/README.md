# Hisaab Tools

Free Indian finance calculators and document generators. Static site, no dependencies, everything runs in the browser.

```
node build.mjs          # builds public/ from tools/*.mjs, templates/ and site.config.mjs
node test/smoke.mjs     # serves public/ locally and checks every page with Playwright
```

- `site.config.mjs`: name, domain, categories, static pages. Change the domain here if a different one is registered.
- `tools/NN-slug.mjs`: one tool per file. Fields: slug, title, h1, summary, description, category, related, intro, tool (HTML), script (a function, inlined at build), explainer (HTML), faq, print.
- `templates/base.html`: the page shell. The AdSense snippet goes in its head once approved.
- `public/assets/`: stylesheet, shared helpers (`H.inr`, `H.words`, `H.bind`), favicon.
- Deploy: Vercel project with root directory `studio/products/toolsite`; `vercel.json` sets build and output.

The build refuses em dashes in prose. Keep explainers accurate to the financial year named on the page.
