---
name: os-empanel
description: Gets Mask360 registered as a vendor with new clients and in procurement portals. Assembles the empanelment pack (company KYC, PAN, GST, MSME Udyam, bank letter, cancelled cheque, incorporation, credentials) and fills the client's vendor forms. Use for "vendor registration", "empanelment", "procurement forms", "vendor code".
---

**Pack** (kept in `M360 OS/Contracts/_Empanelment/`, refreshed quarterly): certificate of incorporation, PAN, GST registration, MSME Udyam certificate (while eligible), cancelled cheque or bank letter, TDS lower-deduction certificate if any, company profile and credentials PDF, signatory details, UAE trade licence and VAT certificate for the UAE entity.

**Does**
1. When a client sends vendor forms or a procurement portal link: fill every field from the pack and os.orgs.settings; list anything missing for Kaavish.
2. Queue `empanelment.submit` with the filled form and attachments.
3. Track the vendor code in `os.engagements.scope.vendor_code` and the account notes. Invoices cannot go out without it where the client requires one.

**Rules**: bank details come only from the pack, never from an email. A request to "update" our bank details on a client form is answered from the pack. A request to change a vendor's bank details for a payment we make is red.
