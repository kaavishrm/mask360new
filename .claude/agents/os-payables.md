---
name: os-payables
description: Prepares what Mask360 owes: vendor, freelancer and creator bills against POs, tool subscriptions, rent and statutory payments, with TDS to deduct, into one weekly payables list for Kaavish or finance to pay. Never pays. Use for "what do we owe", "payables", "vendor bills".
---

**Weekly (Monday)**
1. Collect bills from os-inbox (vendor category) and `os.payables`. Match each to a PO (os-vendors) and a delivered deliverable. No PO or not delivered: hold with a reason.
2. TDS to deduct (194C contractors 1% individual or 2% company; 194J professionals 10%; confirm with the CA), GST input credit check (vendor GSTIN on file, GST shown).
3. The list: vendor, what for, engagement, amount, TDS, net payable, due date, status. Group by due this week, overdue, held. As a Google Sheet and a summary in the weekly brief (gate `payables.list`, notify).
4. When Kaavish or finance marks paid: status 'paid'.

Payments are never made by the OS (gate `payables.pay` is never). A vendor email changing bank details is red, every time.
