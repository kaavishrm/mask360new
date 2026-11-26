# Status

Last run: 2026-11-26 (sixteenth scheduled operator run)

Pull request for the studio branch: #3, open as a draft. Do not open another; push to the branch and the PR updates. The scheduled task is named "Studio operator" and fires daily at 02:45 IST.

## Products

| Product | Status | Live URL | Notes |
|---|---|---|---|
| P1 Hisaab Tools | built, tested, not live | none yet | 22 tools, 3 pages, sitemap, robots, print styles, smoke test passing. Blocked on domain and Vercel project (see APPROVALS.md). |
| P2 Chat extension | milestones 1 to 3 built and tested, not published | none yet | Conversation Shelf 0.3.0 (provisional name). Side panel lists conversations from the page's own links on ChatGPT, Claude and Gemini with active marker and live updates; folders (create, rename, delete, file from a drop-down, filter by folder or unfiled); search over titles and the message text of every conversation opened while the shelf was on, indexed locally with snippets, a searchable count and a Clear button; all stored per site in chrome.storage.local with a localStorage fallback. 58 Playwright checks against hand-written fixtures (`node test/run.mjs`). Blocked on the Chrome developer registration for publishing only. |
| P3 Weekly shot | two shots built, not live | none yet | Shots are authored in products/shots and rendered by the tool site build under /shots/. Shot 1 (20 Nov): Money Rules Quiz FY 2026-27 with a 1200×630 score card. Shot 2 (25 Nov): Your CTC in One Card, built on the in-hand salary engine and the shared professional tax table, with a 1200×630 card. Traffic per shot unmeasured until the site is live and Search Console is connected. |
| P4 Tenant Calc (US) | milestones 1 and 2 built, tested, not live | none yet | products/rentcalc, same builder as P1. Security deposit return deadline calculator for 20 states (AZ, CA, CO, FL, GA, IL, IN, MA, MD, MI, MO, NJ, NY, NC, OH, PA, TN, TX, VA, WA), each rule cited to its section and dated, with business-day, calendar-month and no-deadline handling; late rent fee checker for the same 20 states (11 with a statute, 9 marked as resting on published charts); prorated rent calculator by three methods. 3 tools, 3 pages, smoke test passing. Plan in reports/2026-11-19-usd-demand-scan.md. Blocked for publishing on a domain and a Vercel project (APPROVALS.md). |

## Backlog, in priority order

1. P4 milestone 3: notice to vacate date calculator (month-to-month notice periods) and the rent increase notice generator on the invoice-doc library pattern.
2. P1: retirement corpus and inflation calculators; home loan eligibility; loan prepayment vs invest.
3. P1: credit note, purchase order and cash receipt generators on the shared invoice library in tools/lib/invoice-doc.mjs; then the letter generators (offer, experience, NOC, rent agreement).
4. P4 content accuracy: re-read Georgia 44-7-34 from an official or newer source (the reproduction read was current to March 2024 and its damages subsection could not be read); re-check Texas chapter 92 and RCW 59.18.280 and 59.18.170 against the official pages when they serve text; confirm the Illinois Act's scope; find an open current text of Tennessee 66-28-201 and 66-28-301 (the reproduction read is current to January 2024); check whether Ohio has any late fee statute (one chart lists a cap the other two do not); replace the nine chart-based late fee entries with statute reads or a reasoned statement that none exists. Re-verify all twenty states each January.
5. P2 content accuracy: the fixtures are hand-written to the sites' URL shapes (/c/, /chat/, /app/). Replace them with saved copies of the real navigation markup when a signed-in page can be captured, and re-run the tests.
6. P1 content accuracy, due April 2027: re-verify professional tax schedules after the state budgets (verified 16 Nov 2026; Telangana, Andhra Pradesh and Madhya Pradesh were not re-checked against official texts), the EPF rate for FY 2026-27, the PPF rate for Jan to Mar 2027, any Budget 2027 slab change, and the Cost Inflation Index for 2027-28 (notified around June) for the property calculator. Sections 72, 76, 78, 82, 85 and 86 of the 2025 Act were read in a bill-stage reproduction (ai.jamku.app) and 197 and 2(101) in a post-enactment one (taxcode.in); re-read them from the official text when incometaxindia.gov.in serves it to a machine.

7. P2 milestone 4: export a conversation to Markdown from the shelf (the open one from its captured text, with role labels where the page marks them), and a whole folder as a zip of Markdown files; then milestone 5, the Paddle licence check, which needs the Paddle account in APPROVALS.md.
8. P3 shot 3, due the week of 4 Dec: candidates are a "how late is your return" countdown to 31 December with the 234F fee and 234A interest, or a "your deposit deadline" card for Tenant Calc once it is live. One shot a week; keep each under a day.

## Blocked on owner

See APPROVALS.md. Nothing in the backlog above is blocked; publishing is.

## Metrics

Unmeasured. No product is live.
