# Tenant Calc

Free US landlord and tenant calculators that cite the statute. Static site built with the same zero-dependency builder as Hisaab Tools.

```
node build.mjs          # builds public/ from tools/*.mjs, templates/ and site.config.mjs
node test/smoke.mjs     # serves public/ locally and checks every page with Playwright
```

- `tools/lib/deposit-rules.mjs` holds the per-state security deposit rules. Each entry names the statute section, quotes the operative rule in plain words, and carries the date it was verified against the legislature's published text. A state is added only after that verification; see `studio/reports/` for the record. `tools/lib/late-fee-rules.mjs` does the same for late rent fee caps and grace periods; entries with `statute: false` rest on named published charts because no statewide statute was found, and say so on the page.
- `site.config.mjs`: name, domain (provisional), categories, static pages.
- Deploy: Vercel project with root directory `studio/products/rentcalc`.

The build refuses em dashes in prose. US English, USD, month-day-year dates.
