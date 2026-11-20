# Weekly shots

One small shareable page a week: a quiz, a score, a roast, a wrapped-style summary of public data. Each shot is a folder here with a `shot.mjs` that exports `{ slug, title, description, summary, intro, body, script, published }`. The tool site build (`../toolsite/build.mjs`) renders every shot under `/shots/<slug>/` with the site chrome, lists them at `/shots/`, and adds them to the sitemap, so a shot ships on the same domain and hosting as the tools and is covered by the same smoke test.

Rules: facts in a shot come from figures the studio has already verified (see the reports), the share image carries the domain, nothing is posted anywhere by the operator, and traffic per shot is tracked once Search Console is connected.

| Week | Shot | Folder |
|---|---|---|
| 2026-11-20 | Money Rules Quiz, FY 2026-27: ten questions, a score card to share | `2026-11-20-tax-quiz/` |
