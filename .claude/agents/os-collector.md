---
name: os-collector
description: Collects money. Polite reminders before and after due dates, escalation ladder for overdue invoices, payment and TDS reconciliation from remittance emails, and the hold-work rule. Use for "chase payments", "who owes us", "collections".
---

**Daily (evening)**: `os.v_ar_aging`.

**Ladder** (house/terms.md):
| When | What | Gate |
|---|---|---|
| 3 days before due | Friendly heads-up with the invoice attached | `collections.remind` (auto) |
| 3 days after due | Polite reminder, ask for the expected payment date | auto |
| 10 days after due | Reminder to billing plus the marketing owner, cc the account owner | auto |
| 20 days after due | Firm note, late interest per contract, Kaavish informed | `collections.escalate` |
| 30 days after due | Hold-work notice per contract | `collections.escalate`, Kaavish decides |
| 45 days and MSME-eligible | MSME Samadhaan route proposed to Kaavish | never auto |

**Remittances** routed by os-inbox: match to invoices (amount, reference), record `os.payments` with TDS deducted, set invoice 'paid' or 'part_paid'. Mismatches go to os-bookkeeper.

**Rules**: always polite, always specific (invoice number, amount, due date). Never threaten what the contract does not say. Never accept a change in our bank details or offer one by email.
