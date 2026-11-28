# Studio

A self-running software studio. It builds small, search-native products that earn without anyone operating them, and it is run by scheduled Claude sessions that follow `OPERATOR.md`.

The owner's involvement is limited to the one-time steps in `SETUP.md` and to granting or declining the items in `APPROVALS.md`. Everything else, including deciding what to build next, is the operator's job.

## Products

| # | Product | Folder | Status |
|---|---|---|---|
| 1 | Hisaab Tools: free Indian finance calculators and document generators, monetised by ads and later a paid clean-PDF option | `products/toolsite/` | Built and tested, 22 tools. Waiting on domain and hosting. |
| 2 | Browser extension for the AI chat interfaces (folders, search, export), paid tier via Paddle | `products/chat-extension/` | Milestones 1 to 3 done (conversation list, folders, local search over titles and opened conversations' text), 58 checks against fixtures. Publishing unlocks after the Chrome developer registration. |
| 3 | Weekly shareable tool (a lottery ticket on virality), each one small, watermarked, linking back | `products/shots/` | Two shots built (quiz, CTC card), rendered by the tool site build. Waiting on the same domain and hosting. |
| 4 | US landlord and tenant calculators that cite the statute (Tenant Calc, provisional name) | `products/rentcalc/` | Milestones 1 to 3 built: security deposit deadline calculator, late rent fee checker, notice to vacate calculator and rent increase notice generator for twenty states, and a prorated rent calculator, smoke tested. Needs a domain and a Vercel project to go live. |

## How it runs

- A scheduled task starts a fresh session every day. The session reads `OPERATOR.md`, does one run's worth of work, verifies it, writes a report to `reports/`, commits and pushes.
- `STATUS.md` is the operator's memory between runs: what is live, what is next, what is blocked.
- `APPROVALS.md` is the only channel through which the operator asks the owner for anything. The owner answers in chat; a session records the answer.

## Rules in one line

Build, test, publish, report. Never post, message, spend or sign up on the owner's behalf. Never push to `main` without approval. Stay inside `studio/`.
