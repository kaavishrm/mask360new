# Riverscape corporate block-sale targets: research notes

Prepared 2026-11-03 for the Mask360 pitch to Arete Group (Riverscape, Tukwada, Vapi). Research only. Nobody was contacted.

File: `corporate-targets.csv` (60 companies, ranked).

## Method

1. Built a long list of large employers with a plant or unit in Vapi GIDC, Sarigam, Umbergaon, Valsad/Atul, Pardi, Bhilad, Daman, Silvassa and Dadra and Nagar Haveli from web search, company sites, exchange filings, WHO and CDSCO plant records, and trade press.
2. Confirmed each unit location with at least one source. Where the only evidence was a directory listing or Apollo staff locations, confidence is marked low.
3. Ran Apollo people searches (search only, no enrichment) filtered by company domain and by person location in the belt towns, for HR, admin, finance, plant, site and unit heads. Also ran a belt-wide search for VP, director and head level staff at companies with 200+ employees and counted them by employer. This surfaced extra employers with a dense senior presence in the belt (hubergroup, Welspun, Waaree, JRF Global, Kabra Extrusiontechnik and others).
4. Added promoter, MD and CFO names from company sites, annual reports, exchange filings and business press.

## Sources used

- Company sites and filings: atul.co.in, aarti-industries.com, apar.com, polycab.com, corporate.celloworld.com, pidilite.com, wockhardt.com, hindalco.com, rossari.com, siyaram.com, NSE and BSE filings (Gujarat Themis Biosyn, Sanathan, Prince Pipes, Time Technoplast, Flair, Alkem).
- Regulators: WHO prequalification inspection reports (Macleods, IPCA), CDSCO lists (Alkem), GPCB orders cited in filings (Aarti Drugs, Heranba).
- Press: BioSpectrum, Business Standard, Indian Chemical News, Indian Textile Magazine, Packaging South Asia, Plastemart, boardstewardship.com, The People's Board, Sahi, Investywise, AgroSpectrum.
- Directories (lower weight): pharmchoices.com (Vapi and Daman pharma lists), companydetails.in, aggregator board listings.
- Apollo.io people search (masked surnames, see below).

Not reached: member lists of Vapi Industries Association, Sarigam Industries Association, Umbergaon Industries Association, and the DNH and Daman industry associations. None were found online in usable form. GIDC estate allotment lists were also not found.

## How the ranking works

Judgement score across four factors, roughly equal weight:

1. **Scale in the belt**: employee count or plant footprint at the belt units (not group-wide headcount where avoidable).
2. **Relocated senior staff**: evidence of senior managers, scientists or expatriates posted in from outside (MNCs, R&D campuses, new plants, Apollo counts of VP and GM level people located in the belt).
3. **Promoter buyer potential**: Mumbai, Surat or Gujarati promoter family who could buy personally as well as through the company.
4. **Recent expansion**: new plant, capex or acquisition since 2025, which means new hires who need housing now.

Corporate-owned or MNC units (Reliance, HUL, Bayer, Castrol, SCHOTT) score on factors 1, 2 and 4 only. Atul runs its own colony, so it is ranked for director residences and guest house use, not bulk staff housing.

## Decision maker data: read before using

- 44 of 60 companies have at least one named person.
- Names with a masked surname (for example `Lalit Ra***l`) come from Apollo search, which hides surnames unless you pay for enrichment. The first name, title and employer are real Apollo records, and the person is located in a belt town. To get the full name, check LinkedIn by hand (first name, title and company) or use enrichment after approval.
- Plant and HR names marked "Gujarat search; site not confirmed" came from a state-wide search, so they may sit at a non-belt plant.
- Several CFO seats changed in 2025-2026 (Alkem vacant after 2026-09-30, Pidilite CFO-designate from 2026-10-09, RR Kabel from 2025-11-01, Waaree 2026-03, Welspun Living 2025-12-31). Recheck before outreach.
- Macleods founder MD Rajendra Agarwal died 2025-11-24. Handle with care.
- No names were invented. Blank means not found.

## Apollo credit usage

- Tool used: `apollo_mixed_people_api_search`, 6 calls. No response carried an `mcp_credits` block, so no credits were shown as spent.
- Not used: `apollo_mixed_companies_search`. Its tool description states 1 credit per request that returns results, so I skipped it under the brief's credit rule.
- `apollo_organizations_lookup` (described as free) was loaded but not called.
- No enrichment, match, bulk enrich, create, update, sequence, email or task tools were used. Nothing was written to Apollo.

## Gaps

1. **Headcount by unit** is rarely published. Most size signals are group-wide or plant capacity. DOMS (about 7,400 at Umbergaon), Sanathan (1,394 plus 2,964 contract) and Filatex (1,063 plus 3,554 workers) are the only good unit-level figures.
2. **Unit HR heads are thin.** Apollo mostly returned HR managers, not unit HR heads. The admin or HR head who handles housing still needs to be found for most companies by calling the plant.
3. **Association member lists** (VIA, SIA, UIA, DNH) were not accessible. Getting them would add mid-size Gujarati-owned firms, which are good personal buyers.
4. **Umbergaon, Bhilad and Pardi** are covered less well than Vapi, Daman and Silvassa.
5. **Flood sensitivity.** Welspun Living disclosed a Vapi plant disruption on 2026-07-24, and Kabra Extrusiontechnik reported a Daman shutdown from extreme flooding. The same July 2026 floods hit Riverscape. Expect flood questions from every target. Arete needs a credible flood-mitigation answer (drainage, plinth levels, insurance, what changed since July) before the first meeting.
6. **Waaree** is moving its Tumb and Nandigram lines to Chikhli (about 50 km north) by 2026-12-31. The promoter angle holds. The staff housing angle is weaker.
7. Low-confidence rows (ranks 43 to 60) need a quick check on whether the plant still runs before anyone calls.

## First 20 calls

1. **Meril Life Sciences**: Vapi's largest home-grown employer (13,000+), fresh ADIA money, Bilakhia family lives locally.
2. **Aarti Industries**: multi-division Vapi and Sarigam base, Gujarati promoter family, new MD from 2026-10-01 setting priorities.
3. **UPL**: founded in Vapi, many plant heads there, Shroff family has long civic ties to Vapi.
4. **DOMS Industries**: about 7,400 staff in Umbergaon and a 44-acre expansion set to double headcount. Local promoters.
5. **Atul Ltd**: biggest campus in Valsad district. Pitch guest house and director residences to the CFO and the Lalbhai family.
6. **Welspun Living**: huge Vapi plant expanding rugs capacity. Lead with flood resilience given the July disruption.
7. **Pidilite**: one of its largest hubs is in Vapi, several unit heads there. Parekh family Gujarati promoters.
8. **Apar Industries**: four belt sites plus a greenfield Athola plant. Desai family Gujarati promoters.
9. **Polycab**: three decades in Daman, GM HR and Admin located there. Jaisinghani family.
10. **Cello World**: 8 of 13 plants in Daman, opalware expansion, billionaire Rathod family as personal buyers.
11. **Gujarat Themis Biosyn**: doubling Vapi fermentation capacity, new Japanese subsidiary visitors need a guest house.
12. **Sanathan Textiles**: newly listed, single big Silvassa site, Dattani family.
13. **RR Kabel**: Silvassa Unit 3 started 2026-09-15. The CFO appears to be located in the belt.
14. **Sun Pharma**: named Dadra site head. Founder story starts in Vapi.
15. **Bayer Vapi**: MNC site with global visitors. Guest house and expat housing fit.
16. **Vedanta Copper Silvassa**: CHRO based in Silvassa, staff relocated from Tamil Nadu, expansion shifting in.
17. **Alok Industries**: very large Silvassa and Vapi workforce, Reliance-run with rotating managers.
18. **Macleods**: three Daman units, large private pharma, IPO path. Approach carefully after the founder's death.
19. **Prince Pipes**: registered office and two plants in DNH. Kutchi Gujarati promoters.
20. **N R Agarwal Industries**: Vapi and Sarigam mills plus a Rs 1,200 crore board plant. Promoter family buyer.
