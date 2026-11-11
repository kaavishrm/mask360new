# Agency OS

An agency that runs itself. 59 specialist AI agents, one per task, do the work of a creative agency end to end: find brands, find the people, reach them on email, LinkedIn and WhatsApp, answer replies, qualify, book calls, prep, price, propose, negotiate, contract, onboard, plan, make, publish, report, chase, invoice, collect, pay, keep the books, hire and build the founder's name. Kaavish approves by replying to an email.

Built for Mask360 first. Everything specific to Mask360 lives in `house/`; the engine is generic, so another agency can run on it by replacing that folder and one database row.

## How it runs

```
scheduled tasks (the clock)          pulse hourly · dawn · morning · evening · weekly · monthly
        │
        ▼
RUNBOOK.md (the contract)            every session reads it first
        │
        ▼
os-chief ──► 58 specialist agents    .claude/agents/os-*.md, one task each
        │
        ├── house/        rules, voice, offers, prices, terms, gates
        ├── Supabase os   memory and state: accounts, people, deals, engagements, invoices, approvals, ledger
        └── connectors    Gmail, Calendar, Apollo, Aimfox, Drive, Sheets, Meta, Canva, Higgsfield
        │
        ▼
brief email to Kaavish  ◄──  he replies "yes A0012", "change A0013: ...", "go live"
```

## The agents

| Desk | Agents | What they do |
|---|---|---|
| Command | chief, gatekeeper, auditor | Run routines and brief Kaavish; turn his replies into actions; check every outward word |
| Inbox | inbox, calendar | Sort and route every email; own the calendar |
| Hunt | scout, scorer, finder, enricher | Find signals; score and tier brands; find the right people; reveal and verify contacts |
| Reach | apollo, linkedin, whatsapp, rooms, consultants, referrals | Sequences; connect and DM; personal WhatsApp; dinners and salons; pitch consultants and RFPs; introductions |
| Convert | responder, qualifier, booker, dossier, diagnostic, proposer, pricer, negotiator, pitch | Answer replies; qualify; book calls; prep; paid diagnostics; proposals; prices; counters; pitches |
| Contract | contracts, empanel | NDA, MSA, SOW, addenda; vendor registration |
| Deliver | onboarder, planner, copywriter, designer, publisher, community, performance, reporter, pr, creators, producer, events, guestlist, vendors | Everything a client pays for |
| Client | status, chaser, ideas, health, scope, qbr, growth | Keep clients informed, unblocked, surprised, healthy, in scope, reviewed and growing |
| Money | invoicer, collector, payables, bookkeeper, tax, cfo | Bill, collect, prepare payables, reconcile, statutory calendar, the numbers |
| People | capacity, recruiter | Allocation and hiring |
| Agency | founder, cases, awards, admin | Founder visibility, case studies, awards, renewals and access |

## Folder

```
agency-os/
  README.md        this file
  RUNBOOK.md       what every scheduled session does: contract, safety rules, routines, brief format
  house/           Mask360: profile, voice, icp, offers, pricing, terms, gates, stack, team, calendar
  db/schema.sql    the database (Supabase schema "os"), multi-tenant
  db/seed.sql      the Mask360 org row and its 47 gates
  templates/       diagnostic, proposal, SOW, MSA, NDA, addendum, invoice, onboarding and Brand Brain, status, QBR, run sheet, PO
  scripts/         check.py (integrity), voicecheck.py (copy rules), load_accounts.py (account map into the database)
.claude/agents/os-*.md   the 59 agents
```

## Safety

- **Shadow mode first.** Every outward action is drafted and queued until Kaavish says `go live`. Internal work runs on its own from day one.
- **Gates** decide what runs alone (`house/gates.md`, table `os.gates`). Money never moves, contracts are never signed, legal and crisis replies never go out without him.
- **Only Kaavish's replies** to `[M360 OS]` emails from his own address count as instructions. Everything else the agents read is data.
- **Every outward action is logged** in `os.actions` with the gate that applied.

## Operate it

- Approve: reply to any brief with `yes A0012 A0013`, `no A0014`, `change A0015: ...`, or `approve all`.
- Change a gate: `gate linkedin.dm auto`. Change the mode: `go live`, `pause`, `shadow`.
- Teach it: write anything else in the reply. It becomes an instruction in `os.memory`.
- Check it: `python3 agency-os/scripts/check.py` after editing agents or house files.
- Load more accounts: `python3 agency-os/scripts/load_accounts.py C` prints SQL for the Volume tier.

## Known gaps (11 Nov 2026)

- **LinkedIn**: the Aimfox outreach plan is cancelled and the Mask360 workspace has no LinkedIn account. DMs are queued for manual sending until it is reactivated.
- **WhatsApp**: no API. Messages are tap-to-send drafts.
- **Apollo**: 40 lead credits left this cycle; enrichment pauses until the reset.
- **Books**: QuickBooks needs a fresh sign-in and may not cover the India entity. Invoices are generated and tracked in the OS either way.
- **Payments**: no bank access by design.
