# USD tool cluster: demand scan and pick (19 November 2026)

## Method and limits

No keyword tool is available to the operator, so no search volumes appear here unless a source published them; none did for these queries. Demand and competition were judged from what the search results show: who ranks, whether the ranking pages are working tools or articles, how incumbents gate their output (sign-up, paywall, watermark), and how much the incumbents disagree with each other, which signals a maintenance gap. All sources were read on 19 November 2026 and are secondary unless stated.

## The premise: ad rates

Every source found agrees that US traffic pays several times Indian traffic for finance and legal content, with ratios quoted between 5x and 20x; none cites Google's own data (Adstimate, Ranktracker, Outlierkit, Revenuelab). The direction is not in doubt, the exact multiple is. US finance and legal page RPM estimates run from about $20 to $50 per thousand views on the same blogs; treat that as a ceiling, not a forecast.

## Candidates

| Cluster | What the results show | Incumbents and gating | Fit with what we have | Verdict |
|---|---|---|---|---|
| Freelancer invoice and contract generators | Dozens of 2026 listicles and no-signup generators; the category is a commodity | FreshBooks, Zoho, Wave, Invoice Simple, plus many microsites | High (invoice library exists) | Pass: crowded, no gap |
| US state paycheck and salary tax tools | Twenty-plus Texas calculators in one query, many launched in 2026 | QuickBooks, SmartAsset, ADP, Gusto, PaycheckCity, plus microsites | Medium (tax engine pattern) | Pass: saturated, accuracy burden across 50 states and local taxes |
| Small-business compliance calendars | Vendor PDFs and blog posts; dates change yearly; federal BOI rule in flux | Paychex, Gusto, Holdings, 1-800Accountant | Low (content, not calculation) | Pass: high upkeep, weak tool angle |
| US landlord and tenant documents | Heavily served by template farms | DocuSign, eForms, LegalTemplates, LawDepot, Smallpdf; sign-up or paywall common | High (generator library, print styles) | Hold: documents alone are crowded |
| US landlord and tenant calculators by state rule | Deposit return deadlines, late fee caps, grace periods and notice periods are served by articles (Nolo, Zillow, iPropertyManagement, Hemlane, RentRedi) that contradict one another on Texas grace periods and California caps; working calculators are rare (one at terms.law). Prorated rent calculators do exist (Zillow, TurboTenant, Inch Calculator) | Content sites and landlord software blogs whose tools funnel into paid products | High: same build system, same page pattern, plus the generator library for the notices that follow | Pick |
| UK landlord tools | Renters' Rights Act 2025 in force from 1 May 2026: Section 21 abolished, new Section 8 grounds, rent rises once a year by notice | Councils, Shelter, Which, law firms; official prescribed forms exist | Medium | Later: lower ad rates than the US, forms are prescribed, but date calculators have a fresh opening; revisit after the US cluster is live |

## The pick: a US landlord and tenant toolkit

Calculators first, documents second. Each calculator answers a question a landlord or tenant types with a state name in it, and the incumbents answer with an article they rarely update. Our pages will show the statute, the date it was checked, and a worked example, in the same style that makes Hisaab Tools credible.

### Tools, in build order

1. Security deposit return deadline calculator: state, move-out date, forwarding address date; shows the deadline, the statute, what starts the clock and the penalty for missing it.
2. Late rent fee checker: state, rent, lease late fee; says whether the fee and grace period fit the statute, or that the state has no cap.
3. Notice to vacate date calculator: state, tenancy type, date served; shows the earliest valid end date under the month-to-month notice rule.
4. Prorated rent calculator showing both methods (actual days and 30-day month) side by side, since the incumbents disagree.
5. Rent increase notice generator with the state's notice period built in.
6. Late rent notice, security deposit itemisation letter, move-in and move-out checklist, rent receipt, lease renewal letter, all on the invoice-doc library pattern.
7. Lease agreement last, state by state, only once the calculators have traffic data to show which states matter.

### Rules for the build

- US English, US date format, USD. One page per tool, same page pattern as Hisaab Tools, with a state selector where the rule varies.
- Every state rule carries a citation to the statute section and a verification date. Rules are verified against the state legislature's own text, ten states per run, not against landlord blogs. A state is not shown until verified.
- Start with the ten states with the most renter households and expand; the page says plainly which states are covered.
- Reuse the toolsite build script by copying it with its own site config; extract a shared builder only if a third site appears.
- Monetisation as for P1: AdSense first. Landlord software affiliate programmes exist but need the owner's accounts; not requested yet.

### Name and domain

The name is provisional. RDAP lookups on 19 November 2026 (no registrar account, no cost): unregistered: tenantcalc.com, noticecalc.com, tenantmath.com; registered: rentrules.com, depositdeadline.com, leasedates.com, landlordmath.com, rentkit.com. The owner's choice is requested in APPROVALS.md, not urgent until milestone 1 is built.

### Risks

State law changes and local ordinances (city rent control and notice rules) can make a state-level answer wrong; the pages must say so and name the statute. The sources that rank today conflict with each other, which is the opportunity and the warning. Legal content is held to a higher standard by ad networks; disclaimers and citations on every page, as on Hisaab Tools.
