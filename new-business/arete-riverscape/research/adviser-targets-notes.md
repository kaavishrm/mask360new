# Riverscape adviser recruitment: research notes

Prepared 2026-11-03 for the Mask360 pitch to Arete Group (Riverscape, Tukwada, Vapi: 195 villas, 4 and 5 BHK, Rs 2.5 to 4 Cr). Goal: a day-1 call list for about 25 referral partners (independent wealth managers, MFDs, boutique family offices, CA firms) serving Gujarati business families. Referral fee of 3 to 4% would be paid through a GujRERA-registered entity.

Research only. Nobody was contacted, and nothing was written into Apollo.

## 1. What is in the CSV

File: `adviser-targets.csv`, 185 rows. That is above the 150 target because many C rows are thin directory listings. Work A and B first.

| Cut | Count |
|---|---|
| Priority A / B / C | 17 / 106 / 62 |
| Mumbai | 105 |
| Surat | 48 |
| Surat or South Gujarat CA firms (city not shown in Apollo) | 11 |
| Vapi-Valsad belt, city not shown in Apollo | 6 |
| Vapi 3, Valsad 2, Navsari 4, Daman 1 | 10 |
| Ahmedabad (lower priority) | 5 |
| Type: independent wealth / MFD / CA firm / family office / other | 82 / 72 / 18 / 9 / 4 |
| SEBI RIA: yes / no / unknown | 9 / 121 / 55 |
| Rows with a named person / firm only | 170 / 15 |
| Person names with Apollo-masked surname | 104 |

Priority rules used:
- **A**: hard evidence of a large HNI book or a family-business practice, plus a Gujarati market. Examples: top-100 individual MFDs (Cafemutual) with Gujarati or Kutchi surnames, top MFDs in Surat and Navsari, founder-led Surat wealth firms, and a Vapi CA firm serving industrial clients.
- **B**: likely fit. Boutique wealth founders, PMS-active MFDs in Gujarati suburbs, CA partners in the Surat-Vapi belt, and Ahmedabad top MFDs.
- **C**: possible fit. Small or retail-looking directory listings, firms with no Gujarati signal, and all RIAs (marked so they can be skipped for fees).

Column notes:
- `sebi_ria = no` means the firm or person was checked and nothing turned up. Firm rows were checked by name against SEBI's public RIA register on 2026-11-03. Individual MFDs on the Cafemutual list are marked `no` because they hold ARNs, and SEBI's 2020 IA amendments bar an individual from being both an RIA and a distributor. A name-search miss is not proof, because the legal entity name can differ. Confirm before any fee agreement.
- `unknown` means the name was not checked, or was too generic to check.
- Masked surnames (for example `Sudhakar De***i`) are exactly as Apollo returns them in free search. Getting the full name needs LinkedIn lookup by firm and first name, or paid Apollo enrichment. Each row carries the Apollo person URL.
- Cafemutual AUM figures are March 2023 MF AUM from AMFI data. They are old but the best public ranking of individual MFDs.

## 2. Method and sources

1. **Apollo.io people search** (`apollo_mixed_people_api_search`), 7 calls:
   - Wealth titles, Surat
   - Founder, partner and director titles with keyword "wealth", firms of 1 to 50 staff, Mumbai (249 matches; first 60 reviewed)
   - Founder, MFD, CA and proprietor titles, Vapi, Valsad, Navsari, Silvassa and Daman (1,117 matches, mostly manufacturers; 60 reviewed)
   - Founder and director titles with "wealth", Surat (33 matches, all reviewed)
   - "Family office", Mumbai, Surat and Ahmedabad (17 matches)
   - CA partners in Surat, Vapi, Valsad and Navsari (22 matches)
   - MFD and founder titles with "investments", Mumbai (90 matches; 40 reviewed)
2. **Cafemutual top-100 individual MFDs** (AMFI data, March 2023): https://cafemutual.com/news/industry/30255-meet-indias-top-100-individual-mfds. Also the top-50 distributor firms for FY2024: https://cafemutual.com/news/industry/32988-meet-indias-top-50-mutual-fund-distributors
3. **AdvisorKhoj directory**: listings by pin code and by service (MF, PMS) for Surat, Vapi, Valsad, Navsari and Mumbai pin 400077 (Ghatkopar), plus individual profile pages. The ARN dates shown there are often stale.
4. **SEBI RIA register**: public name search at https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=13 (append `&name=<firm>`), about 115 names checked one at a time. SEBI's AJAX pagination endpoint returned "Unauthorized Request Blocked", so a full register download was not attempted.
5. **Web and news sources**: PMS Bazaar (Turtle Wealth AUM), Hubbis and WealthBriefing (Cervin), altss.com (Altus, Kredere), BSE filing (Kakaria and Associates), and HSBC MF distributor commission disclosures (Nayan Saraiya).

### Apollo credit usage

- `apollo_mixed_people_api_search`: 7 calls. None of the results contained an `mcp_credits` block, so no credits were shown as consumed.
- `apollo_mixed_companies_search`: **not used.** Its tool description states it costs 1 credit per request that returns results, so it falls outside the no-credit rule.
- No enrichment, match, bulk-enrich, create, update, sequence, email or task tool was called.

## 3. How to extend the list with AMFI's distributor search

The page fields below were observed on 2026-11-03. The layout may change.

1. Open https://www.amfiindia.com/locate-distributor (Home, then Distributor Corner, then Locate a Mutual Fund Distributor).
2. The page asks for "any one detail". Either:
   - Enter a **Name** or **ARN code** to verify a specific person from the CSV, for example the Cafemutual names or Apollo first names plus firm. This confirms the ARN is valid and gives the registered address and city.
   - Or use **Filter Location** to pull everyone in a city or pin code.
3. Run separate location pulls for:
   - Surat
   - Vapi
   - Valsad
   - Navsari
   - Mumbai suburbs by pin code. Pin codes below are from general knowledge, so verify them:

   | Suburb | Pin codes |
   |---|---|
   | Ghatkopar | 400077, 400086 |
   | Mulund | 400080, 400081 |
   | Vile Parle | 400056, 400057 |
   | Juhu | 400049 |
   | Santacruz | 400054, 400055 |
   | Kandivali | 400067, 400101 |
   | Borivali | 400066, 400092 |
   | Malad | 400064, 400097 |
   | Malabar Hill and Walkeshwar | 400006 |
   | Opera House | 400004 |
   | Nariman Point | 400021 |
   | BKC | 400051 |
4. Set the **Type** dropdown (default "All") to separate individual and non-individual ARN holders. Non-individual holders (firms named Wealth, Investments, Finserv, Capital) are the better targets for a referral line.
5. Click **Download** to export, then filter in a sheet:
   - Keep ARNs whose validity date is in the future.
   - Drop anything that appears on AMFI's suspended or terminated list (https://www.amfiindia.com/locate-distributor/suspended-arn), its invalid ARN list (/locate-distributor/invalid-arn), or its mis-selling list (/locate-distributor/list-of-arn-misselling).
   - Check each surviving firm name against the SEBI RIA name search above.
6. To rank by size, use the AMC distributor commission disclosures, which list each distributor's annual commission. HSBC MF's FY2024-25 file is one example: https://www.assetmanagement.hsbc.co.in/assets/documents/mutual-funds/en/85c1961b-3587-491e-8351-f2e94578281e/commission-and-expenses-paid-to-distributors-and-additional-disclosures-for-fy-2024-2025.pdf. Higher commission means a bigger book. Search the PDFs for Surat, Vapi, Valsad and Navsari names.
7. AdvisorKhoj supports pin-code pages in the pattern `https://www.advisorkhoj.com/<City>/Mutual-Fund-Advisor-%3Cnear%3E-Pin-Code-<pin>` and `.../Portfolio-Management-Schemes-Advisor-%3Cnear%3E-Pin-Code-<pin>`. The PMS-tagged listings are the better HNI signal.
8. In Apollo, the same free people searches have more pages: the Mumbai wealth-founder search has 249 matches and only 60 were reviewed. Page further with `page=2,3...` in the same no-credit search.

## 4. Networking groups

### BNI regions

Source: https://bni-india.in/en-IN/regions. Chapter lists on the regional sites are rendered by JavaScript and could not be read in this session. Open each region site and use "Find a Chapter" or "Chapter Map", or call the regional contact.

| Region | Covers (for this project) | Contact listed | Site |
|---|---|---|---|
| BNI Vapi Valsad | Vapi, Valsad | Hemu Suvarna | www.bni-vapivalsad.in |
| BNI Navsari | Navsari | Gaurav V Singhvi | www.bni-navsari.in |
| BNI Surat North | Surat | Gaurav Singhvi | www.bni-suratnorth.in |
| BNI Surat South | Surat | Gaurav Singhvi | www.bni-suratsouth.in |
| BNI Bardoli | Bardoli (Surat district) | Gaurav V Singhvi | www.bni-bardoli.in |
| BNI Mumbai North East | Likely Ghatkopar, Mulund, Vikhroli (verify) | Rheet K Shroff | www.bni-mumbainortheast.in |
| BNI Mumbai North West | Likely Borivali, Kandivali, Malad (verify) | Rheet K Shroff | www.bni-mumbainorthwest.in |
| BNI Mumbai West | Likely Vile Parle, Santacruz, Juhu (verify) | Rheet K Shroff | www.bni-mumbaiwest.in |
| BNI Mumbai South | Likely Nariman Point, Opera House, Malabar Hill (verify) | Rheet K Shroff | www.bni-mumbaisouth.in |
| BNI Mumbai East | Eastern suburbs | Rheet K Shroff | www.bni-mumbaieast.in |
| BNI Ahmedabad | Ahmedabad | Yash Vasant | www.bni-ahmedabad.in |

- BNI Surat says it has been active since 2016 and reports more than 2,000 members (press coverage of its Business Conclave). Each chapter allows one member per category, so ask for the "financial planner / wealth manager" and "CA" seat holders in each chapter.
- The suburb mapping for the Mumbai regions is an inference from the region names. Confirm it on each region's chapter map.

### ICAI branches (WIRC)

Branch details come from the ICAI and WIRC directories in search results, latest about 2023-24. Verify the phone numbers before use.

| Branch | Address | Contact |
|---|---|---|
| Surat | ICAI Bhawan, 2nd Floor, Saifee Building, Dayalji Baug Road (Dutch Garden Road), near Makkaipul, Nanpura, Surat 395001 | Email surat@icai.org; phone 0261-2472932 (2012 listing, may be dated) |
| Vapi | 3rd Floor, Yamuna Complex, near Gokul Vihar First Gate, NH 8, Vapi 396195 | WIRC page lists vapibranch125@yahoo.com; older notice lists Vapi@icai.org and 0260-2468282. Branch page: http://old.wirc-icai.org/branches/vapi (not reachable from this session) |
| Navsari | 101 Harekrishna Complex, above IDBI Bank, near Prajapati Ashram, Navsari 396445 | Email navsari@icai.org; phone (02637) 259026 or 9825460245. A second directory gives 2nd Floor, Chamber Bhawan, Sayaji Road, Navsari 396445, so confirm which is current |
| Valsad | No separate branch found. ICAI lists a Valsad CPE study circle; Valsad CAs likely attend Vapi branch events | |

- Directories: https://www.icai.org/post/wirc-branches-directory and the WIRC Directory 2023-24 PDF (old.wirc-icai.org/images/announcement/WIRC-Directory-2023-24.pdf).
- The ICAI CSR unit list (https://app.csr.icai.org/unitList/1) also shows CPE study circles at Ghatkopar and Borivali in Mumbai. These are useful for meeting CAs in those suburbs.

### Other groups worth checking

These were not verified in this session.
- Vapi Industries Association (VIA): Vapi GIDC owners are the buyer pool, and their CAs and MF advisers are the referrers.
- Southern Gujarat Chamber of Commerce and Industry (SGCCI), Surat.
- MFD associations: FIFA (Foundation of Independent Financial Advisors), plus local MFD meets that AMCs run in Surat and Vapi. Tata MF and others hold Surat distributor events (Tata MF press release, Surat, 14 June 2024).
- Ghatkopar, Mulund and Borivali Gujarati and Jain samaj business forums, and Rotary and Lions clubs in the same suburbs.

## 5. Head-office tie-up candidates (not individual targets)

These are large platforms. Their relationship managers should not be approached one by one. A head-office tie-up would cover their whole network.

| Firm | Why | Note |
|---|---|---|
| NJ India Invest (NJ Wealth), Surat | #2 MF distributor in India, Rs 1,60,999 Cr avg AUM FY2024; Surat HQ with a nationwide partner network | Founder-CEO Neeraj Choksi. Strongest single Gujarat channel |
| Prudent Corporate Advisory Services, Ahmedabad | #5 distributor, Rs 69,785 Cr | Also appears on the SEBI RIA register (Ambawadi, Ahmedabad). Any fee would need to go to its non-RIA distribution arm, and only if allowed |
| Jainam Broking group, Surat | Surat broking and wealth group | Jainam Wealth director is also in the CSV |
| Anand Rathi Wealth, 360 ONE, Nuvama, ASK Wealth, Motilal Oswal Private Wealth, Centrum Wealth, Sanctum Wealth, JM Financial Services, Julius Baer India | Large HNI and UHNW books, top-50 distributors | Many have Surat and Ahmedabad desks; Apollo shows Nuvama and Motilal Oswal wealth managers in Surat |
| Sapient Wealth Advisors and Brokers, Mumbai | Rs 6,842 Cr, top-30 distributor | MFD-led platform |
| Shagun Sutaria Stock Broking, Ahmedabad | Rs 4,898 Cr, top-40 distributor | Founder is also a top-100 individual MFD |
| Mirae Asset Sharekhan, Bonanza Portfolio, Swastika Investmart | Broker-distributors with Surat RMs on Apollo | Lower fit |

**Excluded as individuals** (bank employees, whose employers usually bar personal referral fees): Apollo returned Surat wealth managers at ICICI Bank, IDFC FIRST Bank, Bank of Baroda, State Bank of India, Tata Capital, Bajaj Life, LIC and Tata AIA. The same exclusion applies to Kotak Private, HDFC Bank, ICICI Private and Axis Burgundy.

**RIAs kept in the CSV, marked `sebi_ria = yes`, priority C** (no referral fee):

| Firm | SEBI RIA no. |
|---|---|
| Cervin Family Office | INA000015385 |
| Waterfield | INA000001811 |
| Client Associates | INA100010660 |
| Entrust Family Office | INA200004201 |
| BugleRock group | INA200012674 |
| Neo Wealth | INA000017286 / INA000017958 |
| Onza | INA000023199 |
| Concept Investwell (Surat) | INA000018337 |
| Ckredence Wealth (Surat) | INA000020846 |

Some may still make no-fee introductions.

## 6. Best 15 to call first

1. Rikhav Suresh Desai, Navsari: top-100 MFD (Rs 297 Cr), closest top MFD to Vapi, 2,600 investors.
2. Kakaria and Associates LLP, Vapi (Chala): CA firm since 1983 with industrial clients. Local to the project.
3. Mehta Wealth Ltd, Surat and Mumbai: founder-led Surat wealth firm with a Mumbai arm.
4. Jignesh Shah, Surat: top-100 MFD (Rs 310 Cr).
5. Mihirkumar Vijaybhai Kaji, Surat: top-100 MFD (Rs 235 Cr).
6. Divyesh Rach, Mumbai: top-100 MFD (Rs 616 Cr), Kutchi surname.
7. Nayan Saraiya, Mumbai: top-100 MFD (Rs 439 Cr), still active in FY2024-25 AMC disclosures.
8. Bimal Panchamia, Ghatkopar East: top-100 MFD (Rs 334 Cr), in the core Gujarati suburb.
9. Salil Kothari, Mumbai: top-100 MFD (Rs 546 Cr).
10. Sachin Parekh, Mumbai: top-100 MFD (Rs 339 Cr).
11. Haardik Nayak Wealth Management, Surat: founder-led wealth firm.
12. Jumbo Wealth, Surat: MD is the chief wealth adviser.
13. Innovest Wealth, Mumbai: family-run (Vora founders) boutique wealth firm.
14. Hitesh Vasani, Vapi (Chala): 20-year MFD and CFP, local to the project.
15. KD Financial Service (Keyur Dalal), Vapi (Chala): local MFD, active ARN.

## 7. Gaps and risks

- **Masked surnames**: 104 rows carry Apollo-masked surnames. Reveal them through LinkedIn (firm plus first name) or approved paid enrichment.
- **No contact details**: the CSV has no phone numbers or emails, by design. Get them from AMFI ARN search, the firm's website or LinkedIn.
- **Missing areas**: Apollo rows give the city but not the area. Many Mumbai rows may sit outside the Gujarati suburbs.
- **Thin Vapi coverage**: Vapi, Valsad and Navsari have only 22 rows. The Apollo region search was dominated by manufacturers. Best fixes: AMFI location download for 396191, 396195, 396001 and 396445, and the Vapi ICAI branch and BNI Vapi Valsad member lists.
- **Unverified CA city**: 11 CA firms from Apollo carry a Surat-Vapi-Valsad-Navsari filter with the city not shown. Verify each before calling.
- **Old AUM data**: the Cafemutual figures are from March 2023. People may have moved, merged or slowed down.
- **RIA checks are name-based**: a trade name can differ from the registered entity. Re-check the legal entity at signing.
- **CA fee rules**: offering a referral fee to a CA in practice may conflict with the ICAI Code of Ethics (restrictions on commission and on other business). Take advice before offering fees to CA firms. Some may only refer without a fee, or route it through a permitted entity.
- **Old ARN dates**: the ARN validity dates on AdvisorKhoj are often old (2015 to 2016). Confirm every MFD's ARN on AMFI before onboarding.
- **Access limits in this session**: BNI chapter-level lists (JavaScript pages), old.wirc-icai.org (network-blocked), and bulk SEBI pagination (blocked by SEBI's firewall) could not be read.
