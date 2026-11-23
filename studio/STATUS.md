# Status

Last run: 2026-11-23 (thirteenth scheduled operator run)

Pull request for the studio branch: #3, open as a draft. Do not open another; push to the branch and the PR updates. The scheduled task is named "Studio operator" and fires daily at 02:45 IST.

## Products

| Product | Status | Live URL | Notes |
|---|---|---|---|
| P1 Hisaab Tools | built, tested, not live | none yet | 20 tools, 3 pages, sitemap, robots, print styles, smoke test passing. Blocked on domain and Vercel project (see APPROVALS.md). |
| P2 Chat extension | milestones 1 and 2 built and tested, not published | none yet | Conversation Shelf 0.2.0 (provisional name). Side panel lists conversations from the page's own links on ChatGPT, Claude and Gemini with filter, active marker and live updates; folders (create, rename, delete, file from a drop-down, filter by folder or unfiled) stored per site in chrome.storage.local with a localStorage fallback. 43 Playwright checks against hand-written fixtures (`node test/run.mjs`). Blocked on the Chrome developer registration for publishing only. |
| P3 Weekly shot | first shot built, not live | none yet | Shots are authored in products/shots and rendered by the tool site build under /shots/. Shot 1 (20 Nov): Money Rules Quiz FY 2026-27 with a 1200×630 score card. Traffic per shot unmeasured until the site is live and Search Console is connected. |
| P4 Tenant Calc (US) | milestones 1 and 2 built, tested, not live | none yet | products/rentcalc, same builder as P1. Security deposit return deadline calculator for 20 states (AZ, CA, CO, FL, GA, IL, IN, MA, MD, MI, MO, NJ, NY, NC, OH, PA, TN, TX, VA, WA), each rule cited to its section and dated, with business-day, calendar-month and no-deadline handling; late rent fee checker for the same 20 states (11 with a statute, 9 marked as resting on published charts); prorated rent calculator by three methods. 3 tools, 3 pages, smoke test passing. Plan in reports/2026-11-19-usd-demand-scan.md. Blocked for publishing on a domain and a Vercel project (APPROVALS.md). |

## Backlog, in priority order

1. P1: capital gains for property (Section 112, indexation choice for property bought before 23 Jul 2024) and for debt funds; verify rates first.
2. P3 shot 2, due the week of 27 Nov: a "your CTC in one card" share image built on the in-hand salary engine (gross, PF, tax, in-hand as a wrapped-style card). One shot a week from here; keep each under a day.
3. P2 milestone 3: search. Index conversation titles now and, where the page exposes it, message text, with a results list that filters the shelf; extend the fixtures with message bodies; keep everything local.
4. P4 milestone 3: notice to vacate date calculator (month-to-month notice periods) and the rent increase notice generator on the invoice-doc library pattern.
5. P1: retirement corpus and inflation calculators; home loan eligibility; loan prepayment vs invest.
6. P1: credit note, purchase order and cash receipt generators on the shared invoice library in tools/lib/invoice-doc.mjs; then the letter generators (offer, experience, NOC, rent agreement).
7. P4 content accuracy: re-read Georgia 44-7-34 from an official or newer source (the reproduction read was current to March 2024 and its damages subsection could not be read); re-check Texas chapter 92 and RCW 59.18.280 and 59.18.170 against the official pages when they serve text; confirm the Illinois Act's scope; find an open current text of Tennessee 66-28-201 and 66-28-301 (the reproduction read is current to January 2024); check whether Ohio has any late fee statute (one chart lists a cap the other two do not); replace the nine chart-based late fee entries with statute reads or a reasoned statement that none exists. Re-verify all twenty states each January.
8. P2 content accuracy: the fixtures are hand-written to the sites' URL shapes (/c/, /chat/, /app/). Replace them with saved copies of the real navigation markup when a signed-in page can be captured, and re-run the tests.
9. P1 content accuracy, due April 2027: re-verify professional tax schedules after the state budgets (verified 16 Nov 2026; Telangana, Andhra Pradesh and Madhya Pradesh were not re-checked against official texts), the EPF rate for FY 2026-27, the PPF rate for Jan to Mar 2027, and any Budget 2027 slab change.

## Blocked on owner

See APPROVALS.md. Nothing in the backlog above is blocked; publishing is.

## Metrics

Unmeasured. No product is live.
