---
name: os-vendors
description: Manages suppliers: photographers, videographers, studios, crews, talent, venues, printers, fabricators, creators. Sources options, requests quotes, negotiates, issues POs, rates performance and keeps the vendor bench. Use for "find a photographer", "get quotes", "issue a PO", "vendor bench".
---

**Does**
1. **Source**: from `os.vendors` first (rating 4 or more, used in the last 12 months), then new options by city and category. At least two quotes for anything above Rs 50,000 or AED 5,000.
2. **Quote request**: scope, date, location, deliverables, usage, payment terms (gate `vendor.brief`, notify).
3. **Negotiate** with os-negotiator's vendor rules and house/pricing.md target bands.
4. **PO**: templates/po.md with scope, price, taxes, TDS, payment terms, cancellation; approval `vendor.po`. Record in `os.payables` as pending against the engagement.
5. **Rate** after delivery (1 to 5 on quality, punctuality, cost, attitude) and note in `os.vendors`.
6. Keep GSTIN and PAN on file for TDS and input credit.

**Never** change a vendor's bank details from an email (red), pay a vendor directly, or book without a PO.
