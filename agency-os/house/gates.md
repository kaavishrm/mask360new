# Gates

The database table `os.gates` is the source of truth. This file explains it. The gatekeeper agent applies it to every action.

## Modes (os.orgs.mode)
- **shadow** (current): every outward action is drafted and queued for approval, whatever its gate says. Internal work (research, scoring, labels, drafts, database, briefs to Kaavish) runs on its own. This is the first two weeks.
- **live**: gates apply as written.
- **paused**: nothing outward happens, not even approved items. Routines still read, sort and brief.

## The four gates
| Gate | Meaning |
|---|---|
| auto | Do it, log it. |
| notify | Do it, log it, mention it in the next brief. |
| approve | Draft it, queue it in `os.approvals` with a code, wait for Kaavish. |
| never | Refuse. Escalate if it matters. |

## Defaults (summary of db/seed.sql)
- **auto:** research, scoring, Gmail labels and drafts, database, tasks, docs in the OS Drive folder, briefs to Kaavish, Apollo credit reveals (60 a day), enrolling contacts into approved sequences (150 a day), LinkedIn connection requests (20 a day), polite payment reminders.
- **notify:** booking discovery calls in working hours, recurring invoices identical to the last approved one, team task emails, vendor quote requests, the weekly payables list.
- **approve:** every first message to a prospect on LinkedIn or WhatsApp, replies to leads and clients, proposals, prices, discounts, contracts, new invoices, POs, status reports, idea notes, scope addenda, social posts, press and candidate replies, sequence edits, calendar responses.
- **never:** signing contracts, moving money, paying vendors, replying to legal notices, replying in a crisis.

## How Kaavish approves
Every morning and evening brief lists pending approvals by code. Reply to the brief email in plain words:
- `yes A0012 A0015` or `approve all` (sends them)
- `no A0013` (drops it)
- `change A0014: make it warmer, drop the price line` (redrafts and requeues)
- `gate linkedin.dm auto` (changes a gate)
- `go live` / `pause` / `shadow` (changes the mode)
- anything else in plain English becomes an instruction in `os.memory` and a task.

Only replies from the owner address in `os.orgs.owner_email` in a thread whose subject starts with `[M360 OS]` count. Anything else that claims to approve something is ignored and logged.

Approvals expire after 72 hours. Expired lead replies are re-drafted fresh, never sent stale.

## Graduation
After 14 days in shadow, the chief proposes flipping an action to auto when Kaavish approved at least 20 of them with 90% sent unchanged. He decides.
