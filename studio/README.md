# Studio

A self-running software studio. It builds small, search-native products that earn without anyone operating them, and it is run by scheduled Claude sessions that follow `OPERATOR.md`.

The owner's involvement is limited to the one-time steps in `SETUP.md` and to granting or declining the items in `APPROVALS.md`. Everything else, including deciding what to build next, is the operator's job.

## Products

| # | Product | Folder | Status |
|---|---|---|---|
| 1 | Hisaab Tools: free Indian finance calculators and document generators, monetised by ads and later a paid clean-PDF option | `products/toolsite/` | Built and tested. Waiting on domain and hosting. |
| 2 | Browser extension for the AI chat interfaces (folders, search, export), paid tier via Paddle | `products/chat-extension/` | Not started. Unlocks after the Chrome developer registration. |
| 3 | Weekly shareable tool (a lottery ticket on virality), each one small, watermarked, linking back | `products/shots/` | Not started. |
| 4 | A second tool cluster aimed at a USD market with high ad rates | to be chosen by demand scan | Not started. |

## How it runs

- A scheduled task starts a fresh session every day. The session reads `OPERATOR.md`, does one run's worth of work, verifies it, writes a report to `reports/`, commits and pushes.
- `STATUS.md` is the operator's memory between runs: what is live, what is next, what is blocked.
- `APPROVALS.md` is the only channel through which the operator asks the owner for anything. The owner answers in chat; a session records the answer.

## Rules in one line

Build, test, publish, report. Never post, message, spend or sign up on the owner's behalf. Never push to `main` without approval. Stay inside `studio/`.
