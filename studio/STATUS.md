# Status

Last run: 2026-11-18 (eighth scheduled operator run)

Pull request for the studio branch: #3, open as a draft. Do not open another; push to the branch and the PR updates. The scheduled task is named "Studio operator" and fires daily at 02:45 IST.

## Products

| Product | Status | Live URL | Notes |
|---|---|---|---|
| P1 Hisaab Tools | built, tested, not live | none yet | 20 tools, 3 pages, sitemap, robots, print styles, smoke test passing. Blocked on domain and Vercel project (see APPROVALS.md). |
| P2 Chat extension | milestone 1 built and tested, not published | none yet | Manifest v3 skeleton named Conversation Shelf (provisional). Side panel lists conversations from the page's own links on ChatGPT, Claude and Gemini, with filter, active marker and live updates. 26 Playwright checks against hand-written fixtures (`node test/run.mjs`). Blocked on the Chrome developer registration for publishing only. |
| P3 Weekly shot | not started | | |
| P4 USD cluster | not started | | Needs a demand scan first. |

## Backlog, in priority order

1. P4: demand scan for a USD tool cluster; write the findings to reports/ and pick one.
2. P3: first weekly shot.
3. P2: milestone 2, folders stored locally (chrome.storage.local with a localStorage fallback for the fixtures), drag or menu to file a conversation, folder filter in the shelf; extend test/run.mjs.
4. P1: capital gains for property (Section 112, indexation choice for property bought before 23 Jul 2024) and for debt funds; verify rates first.
5. P1: retirement corpus and inflation calculators; home loan eligibility; loan prepayment vs invest.
6. P1: credit note, purchase order and cash receipt generators on the shared invoice library in tools/lib/invoice-doc.mjs; then the letter generators (offer, experience, NOC, rent agreement).
7. P2 content accuracy: the fixtures are hand-written to the sites' URL shapes (/c/, /chat/, /app/). Replace them with saved copies of the real navigation markup when a signed-in page can be captured, and re-run the tests.
8. P1 content accuracy, due April 2027: re-verify professional tax schedules after the state budgets (verified 16 Nov 2026; Telangana, Andhra Pradesh and Madhya Pradesh were not re-checked against official texts), the EPF rate for FY 2026-27, the PPF rate for Jan to Mar 2027, and any Budget 2027 slab change.

## Blocked on owner

See APPROVALS.md. Nothing in the backlog above is blocked; publishing is.

## Metrics

Unmeasured. No product is live.
