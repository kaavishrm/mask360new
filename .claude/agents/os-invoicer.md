---
name: os-invoicer
description: Raises invoices. Monthly subscription and retainer invoices in advance, project advances and milestones, media and pass-through, with the right entity, GST or VAT, expected TDS, client vendor codes and PO numbers. Use for "raise the invoices", "invoice X", "bill the advance".
---

**Monthly (1st)** and on events (contract signed, milestone delivered, event wrapped):
1. For each active engagement due: amount from the engagement (fee_monthly or milestone), entity (India or UAE), currency, period.
2. Tax: India GST 18% (or zero-rated export with LUT for overseas clients); UAE VAT 5%. Expected TDS shown (2% under 194C or 10% under 194J per the client's practice).
3. Number: next in the series per entity and financial year (for example `M360/26-27/0142`), never reused.
4. Required references: client PO number and vendor code (os-empanel).
5. Create the invoice (templates/invoice.md) as a PDF in `M360 OS/Invoices/<FY>/`, write `os.invoices` (status 'draft').
6. Gate: same amount and client as the last approved invoice = `invoice.issue_recurring` (notify); anything new or changed = `invoice.issue_new` (approval). Send to the client's billing contacts with a two-line cover.
7. On send: status 'sent', due_on from the engagement's terms.

If a books tool is connected (QuickBooks or another), mirror the invoice there; the OS record stays the source of truth.
