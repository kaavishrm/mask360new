# Status

Last run: 2026-11-20 (tenth scheduled operator run)

Pull request for the studio branch: #3, open as a draft. Do not open another; push to the branch and the PR updates. The scheduled task is named "Studio operator" and fires daily at 02:45 IST.

## Products

| Product | Status | Live URL | Notes |
|---|---|---|---|
| P1 Hisaab Tools | built, tested, not live | none yet | 20 tools, 3 pages, sitemap, robots, print styles, smoke test passing. Blocked on domain and Vercel project (see APPROVALS.md). |
| P2 Chat extension | milestone 1 built and tested, not published | none yet | Manifest v3 skeleton named Conversation Shelf (provisional). Side panel lists conversations from the page's own links on ChatGPT, Claude and Gemini, with filter, active marker and live updates. 26 Playwright checks against hand-written fixtures (`node test/run.mjs`). Blocked on the Chrome developer registration for publishing only. |
| P3 Weekly shot | first shot built, not live | none yet | Shots are authored in products/shots and rendered by the tool site build under /shots/. Shot 1 (20 Nov): Money Rules Quiz FY 2026-27 with a 1200×630 score card. Traffic per shot unmeasured until the site is live and Search Console is connected. |
| P4 USD cluster | scanned, cluster chosen, not started | none yet | US landlord and tenant toolkit: state-rule calculators first (deposit deadlines, late fee caps, notice periods, prorated rent), notices and letters second. Findings and plan in reports/2026-11-19-usd-demand-scan.md. |

## Backlog, in priority order

1. P4 milestone 1: scaffold the site from the toolsite builder with its own config (US English, USD, state selector pattern), then ship the security deposit return deadline calculator for the ten states with the most renter households, each rule verified against the state legislature's own text with the section cited and dated, plus the prorated rent calculator showing both methods. Smoke test from day one.
2. P2: milestone 2, folders stored locally (chrome.storage.local with a localStorage fallback for the fixtures), drag or menu to file a conversation, folder filter in the shelf; extend test/run.mjs.
3. P4 milestone 2: ten more states for the deposit calculator; late rent fee checker; notice to vacate date calculator.
4. P1: capital gains for property (Section 112, indexation choice for property bought before 23 Jul 2024) and for debt funds; verify rates first.
5. P3 shot 2, due the week of 27 Nov: a "your CTC in one card" share image built on the in-hand salary engine (gross, PF, tax, in-hand as a wrapped-style card). One shot a week from here; keep each under a day.
6. P1: retirement corpus and inflation calculators; home loan eligibility; loan prepayment vs invest.
7. P1: credit note, purchase order and cash receipt generators on the shared invoice library in tools/lib/invoice-doc.mjs; then the letter generators (offer, experience, NOC, rent agreement).
8. P2 content accuracy: the fixtures are hand-written to the sites' URL shapes (/c/, /chat/, /app/). Replace them with saved copies of the real navigation markup when a signed-in page can be captured, and re-run the tests.
9. P1 content accuracy, due April 2027: re-verify professional tax schedules after the state budgets (verified 16 Nov 2026; Telangana, Andhra Pradesh and Madhya Pradesh were not re-checked against official texts), the EPF rate for FY 2026-27, the PPF rate for Jan to Mar 2027, and any Budget 2027 slab change.

## Blocked on owner

See APPROVALS.md. Nothing in the backlog above is blocked; publishing is.

## Metrics

Unmeasured. No product is live.
