# Status

Last run: 2026-11-12 (second scheduled operator run)

Pull request for the studio branch: #3, open as a draft. Do not open another; push to the branch and the PR updates. The scheduled task is named "Studio operator" and fires daily at 02:45 IST.

## Products

| Product | Status | Live URL | Notes |
|---|---|---|---|
| P1 Hisaab Tools | built, tested, not live | none yet | 14 tools, 3 pages, sitemap, robots, print styles, smoke test passing. Blocked on domain and Vercel project (see APPROVALS.md). |
| P2 Chat extension | not started | | Can be built before the store registration exists. |
| P3 Weekly shot | not started | | |
| P4 USD cluster | not started | | Needs a demand scan first. |

## Backlog, in priority order

1. P1: capital gains calculator for listed shares and equity funds (FY 2026-27 rates; verify).
2. P1: EPF and NPS calculators. Use the ₹25,000 EPF wage ceiling in force from 17 Sep 2026 and the 8.33% EPS split.
3. P1: bill of supply (no-GST invoice), quotation and delivery challan generators, reusing the invoice code.
4. P1 content accuracy: confirm against official state notifications the professional tax points where secondary sources conflicted on 11 Nov 2026: Karnataka (whether ₹300 applies in February), Maharashtra (women's exemption up to ₹25,000), Gujarat threshold (₹12,000), Tamil Nadu and Kerala half-yearly slabs, and whether Odisha abolished the tax from 1 Apr 2026. Update the in-hand salary calculator if any differ.
5. P1 housekeeping: move the in-hand salary and TDS calculators onto the shared engine in tools/lib/income-tax.mjs (they still carry their own copy of the slab code). Smoke test values must not change.
6. P2: milestone 1, the extension skeleton with a conversation list read from the page's own links, tested against saved fixtures.
7. P4: demand scan for a USD tool cluster; write the findings to reports/ and pick one.
8. P3: first weekly shot.

## Blocked on owner

See APPROVALS.md. Nothing in the backlog above is blocked; publishing is.

## Metrics

Unmeasured. No product is live.
