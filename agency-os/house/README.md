# house/

Everything that makes this agency this agency. The engine (agents, runbook, database) is generic; these files are the tenant.
A new agency replaces this folder and the org row in `db/seed.sql`, and the system runs for them.

| File | What it holds | Who reads it |
|---|---|---|
| `profile.md` | Who we are, markets, offices, units, proof bank, signatures | every agent |
| `voice.md` | Copy rules for every kind of message | every agent that writes |
| `icp.md` | Lanes, tiers, scoring, who to target, who never to contact | hunt and reach desks |
| `offers.md` | What we sell, per unit and per lane, with the value prop and proof for each | reach and convert desks |
| `pricing.md` | Rate card, floors, margin rules, how to build a quote | pricer, proposer, negotiator, invoicer |
| `terms.md` | Commercial and legal terms we contract on | contracts, proposer, invoicer, collector |
| `gates.md` | What runs alone, what needs a yes, what never happens | gatekeeper, every agent before an outward action |
| `stack.md` | Connected tools, account IDs, sequences, labels, what is blocked | every agent that touches a tool |
| `team.md` | People, roles, owners, who gets which task | capacity, producer, chief |
| `calendar.md` | Working hours, routines, statutory deadlines | chief, tax, invoicer |

Rules for editing: plain sentences, no em dashes or en dashes, numbers with units and currency. When a rule here conflicts with an agent file, this folder wins.
