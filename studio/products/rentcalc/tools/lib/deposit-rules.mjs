// Security deposit return rules by state. Inlined into the page by build.mjs via `lib: [depositRules]`.
// A state appears here only after its rule was read in the legislature's published text (or, where the
// official site refuses automated reading, in a full reproduction of it), on the date in `verified`.
// `start` names the event that starts the clock: 'vacate' (tenant moves out), 'termination' (the rental
// agreement ends), or 'later' (the later of termination and delivery of possession).
export default function depositRules() {
  return [
    {
      code: 'CA', name: 'California', start: 'vacate', days: 21,
      steps: [[21, 'Itemized statement of deductions and the remaining deposit']],
      cite: 'Cal. Civ. Code § 1950.5(h)(1) and (m)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=1950.5',
      rule: 'No later than 21 calendar days after the tenant has vacated, the landlord must furnish an itemized statement of any deductions and return the remaining deposit.',
      forwarding: 'No forwarding address condition. The statement and refund go to the address the tenant provided, or to the vacated unit if none was.',
      penalty: 'Bad-faith retention can bring statutory damages of up to twice the deposit on top of actual damages.',
      verified: '2026-11-21', source: 'FindLaw reproduction of the Civil Code, current as of 1 January 2026 (the official site refused automated reading)',
    },
    {
      code: 'GA', name: 'Georgia', start: 'vacate', days: 30,
      steps: [[30, 'Return the full deposit, or the balance with a written statement of the exact reasons for retention']],
      cite: 'O.C.G.A. § 44-7-34(a)', url: 'https://codes.findlaw.com/ga/title-44-property/ga-code-sect-44-7-34/',
      rule: 'Within 30 days after obtaining possession of the premises, the landlord must return the full deposit, or deliver a written statement of the exact reasons for keeping any part together with payment of the balance. Mailing to the tenant\u2019s last known address by first-class mail counts as compliance.',
      forwarding: 'No forwarding address condition appears in the section; the landlord may mail to the last known address.',
      penalty: 'Where neither side is wholly entitled to the deposit the court decides an equitable split. The subsection on damages for wrongful retention could not be read on the day of verification and is not stated here.',
      verified: '2026-11-21', source: 'FindLaw reproduction of the Georgia Code, current as of 28 March 2024 (the official code is not published as open text)',
    },
    {
      code: 'IL', name: 'Illinois', start: 'later', days: 30,
      steps: [[30, 'Itemized statement of damage with estimates or paid receipts'], [45, 'Full deposit back if no itemized statement was furnished, counted from vacating', 'vacate']],
      cite: '765 ILCS 710/1(a) and (c)', url: 'https://www.ilga.gov/Legislation/ILCS/Articles?ActID=2201&ChapterID=62',
      rule: 'A landlord who keeps any part of the deposit must furnish an itemized statement of the damage within 30 days of the later of the tenant vacating and the right of possession ending. If no statement is furnished, the full deposit must be returned within 45 days of the tenant vacating.',
      forwarding: 'The statement may be mailed to the tenant\u2019s last known address, another address the tenant provided, or a verified e-mail address. A tenant who provides no mailing or e-mail address cannot hold the landlord liable for damages or penalties that follow from that.',
      penalty: 'On a court finding that the landlord refused or in bad faith supplied the statement and failed to return the deposit in time, twice the deposit plus court costs and attorney fees. Chicago has its own ordinance with different terms.',
      verified: '2026-11-21', source: 'FindLaw reproduction of the Illinois Compiled Statutes, current as of 1 January 2025 (the official site was unavailable)',
    },
    {
      code: 'NJ', name: 'New Jersey', start: 'termination', days: 30,
      steps: [[30, 'Deposit plus the tenant\u2019s share of interest, less lawful charges, with an itemized statement, by personal delivery or registered or certified mail']],
      cite: 'N.J.S.A. 46:8-21.1', url: 'https://codes.findlaw.com/nj/title-46-property/nj-st-sect-46-8-21-1/',
      rule: 'Within 30 days after the termination of the tenant\u2019s lease, the landlord must return the deposit plus the tenant\u2019s share of the interest earned, less itemized lawful charges, by personal delivery or registered or certified mail. The deadline is five business days where the tenant was displaced by fire, flood, condemnation or evacuation, and 15 business days after a lease ends under the Safe Housing Act.',
      forwarding: 'The section specifies the method of delivery rather than a forwarding address condition.',
      penalty: 'Double the amount wrongfully withheld, with full costs and, at the court\u2019s discretion, attorney fees.',
      verified: '2026-11-21', source: 'FindLaw reproduction of the New Jersey Statutes, current as of 1 January 2024 (the official site is a search gateway without stable section pages)',
    },
    {
      code: 'PA', name: 'Pennsylvania', start: 'earlier', days: 30,
      steps: [[30, 'Written list of damages claimed, with payment of the deposit and unpaid interest less actual damages']],
      cite: '68 P.S. § 250.512(a), (b), (c) and (e)', url: 'https://www.palegis.us/statutes/unconsolidated/law-information/view-statute?SESSYR=1951&SESSIND=0&ACTNUM=20&SMTHLWIND=&CHPT=5&SCTN=12&SUBSCTN=',
      rule: 'Within thirty days of termination of the lease or of surrender and acceptance of the premises, whichever comes first, the landlord must provide a written list of damages claimed, accompanied by payment of the escrowed deposit and unpaid interest less the actual damages.',
      forwarding: 'A tenant who does not give the landlord a new address in writing on termination or surrender relieves the landlord of liability under the section. Give it in writing.',
      penalty: 'A landlord who fails to provide the list within thirty days forfeits the right to withhold anything or to sue for damages to the premises. A landlord who fails to pay the balance within thirty days is liable for double the amount by which the deposit exceeds the actual damages.',
      verified: '2026-11-21', source: 'official text of the Landlord and Tenant Act of 1951 published by the Pennsylvania General Assembly',
    },
    {
      code: 'TX', name: 'Texas', start: 'vacate', days: 30, fwdCondition: true,
      steps: [[30, 'Refund the deposit, or the balance with a written description and itemized list of deductions']],
      cite: 'Tex. Prop. Code §§ 92.103, 92.104, 92.107 and 92.109', url: 'https://statutes.capitol.texas.gov/Docs/PR/htm/PR.92.htm',
      rule: 'The landlord must refund the deposit on or before the 30th day after the tenant surrenders the premises, with a written description and itemized list of any deductions. The landlord is not obliged to refund or itemize until the tenant gives a written forwarding address, but the tenant does not forfeit the refund by failing to give one.',
      forwarding: 'A written forwarding address is a condition: the 30 days run from surrender, and the landlord\u2019s duty arises once the address is given. The calculator moves the effective date to the day you gave the address if that is later.',
      penalty: 'A landlord who retains the deposit in bad faith owes $100 plus three times the amount wrongfully withheld plus attorney fees, and a landlord who has neither refunded nor itemized by the 30th day after surrender is presumed to have acted in bad faith. A tenant may not withhold the last month\u2019s rent against the deposit.',
      verified: '2026-11-21', source: 'Public.Law reproduction of the Property Code, verified against texas.gov on 26 May 2025 (the official page served only its navigation shell)',
    },
    {
      code: 'FL', name: 'Florida', start: 'termination', days: 15,
      steps: [[15, 'Return the full deposit, with any interest due, when the landlord makes no claim'], [30, 'Send written notice of any claim by certified mail (or e-mail where the tenant agreed); the tenant then has 15 days to object']],
      cite: 'Fla. Stat. § 83.49(3)(a) and (b)', url: 'http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0000-0099/0083/Sections/0083.49.html',
      rule: 'Within 15 days after the termination of the rental agreement the landlord must return the deposit if no claim is made. To keep any part of it the landlord must send written notice of the claim within 30 days after termination; a landlord who misses the 30 days forfeits the right to claim on the deposit and must return it.',
      forwarding: 'A tenant who does not give at least 7 days’ written notice before vacating, with an address, relieves the landlord of the 30-day notice duty but keeps the right to the deposit. The required lease disclosure tells tenants to give a new address.',
      penalty: 'A landlord who misses the 30-day notice forfeits the claim. The party that wins a dispute over the deposit recovers court costs and attorney fees.',
      verified: '2026-11-21', source: 'Official Florida Statutes site, 2026 Florida Statutes',
    },
    {
      code: 'NY', name: 'New York', start: 'vacate', days: 14,
      steps: [[14, 'Itemized statement and the remaining deposit, together']],
      cite: 'N.Y. Gen. Oblig. Law § 7-108(1-a)(e)', url: 'https://www.nysenate.gov/legislation/laws/GOB/7-108',
      rule: 'Within fourteen days after the tenant has vacated, the landlord must provide an itemized statement of any amount retained and return the rest of the deposit. The deposit itself may not exceed one month’s rent.',
      forwarding: 'No forwarding address condition appears in the section; the duty runs from vacating.',
      penalty: 'A landlord who fails to provide the statement and the deposit within fourteen days forfeits any right to retain any portion of it. Wilful violations can carry punitive damages of up to twice the deposit.',
      verified: '2026-11-21', source: 'New York State Senate statute site, revision of 4 March 2022',
    },
    {
      code: 'NC', name: 'North Carolina', start: 'later', days: 30,
      steps: [[30, 'Itemized statement of damage and the balance of the deposit, or an interim accounting if the claim cannot yet be determined'], [60, 'Final accounting where an interim accounting was given']],
      cite: 'N.C. Gen. Stat. § 42-52', url: 'https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/BySection/Chapter_42/GS_42-52.html',
      rule: 'No later than 30 days after termination of the tenancy and delivery of possession, the landlord must mail or deliver an itemization of any damage with the balance of the deposit. If the claim cannot be determined in 30 days, an interim accounting is due by then and a final accounting within 60 days.',
      forwarding: 'If the tenant’s address is unknown the landlord applies the deposit as permitted after 30 days and must hold the balance for collection by the tenant for at least six months.',
      penalty: 'The landlord may not withhold for normal wear and tear or retain more than actual damages. Remedies for wilful non-compliance are in § 42-55.',
      verified: '2026-11-21', source: 'North Carolina General Assembly statute site',
    },
    {
      code: 'OH', name: 'Ohio', start: 'later', days: 30,
      steps: [[30, 'Return the deposit, or the balance with a written itemized notice of deductions']],
      cite: 'Ohio Rev. Code § 5321.16(B) and (C)', url: 'https://codes.ohio.gov/ohio-revised-code/section-5321.16',
      rule: 'Within thirty days after termination of the rental agreement and delivery of possession, the landlord must return the deposit or deliver a written itemized notice of deductions together with the amount due.',
      forwarding: 'The tenant must give the landlord a forwarding or new address in writing. A tenant who does not is still owed the deposit but cannot recover the statutory damages or attorney fees.',
      penalty: 'A landlord who fails to comply owes the amount due plus damages equal to the amount wrongfully withheld and reasonable attorney fees.',
      verified: '2026-11-21', source: 'Ohio Revised Code official site (section effective 4 November 1974)',
    },
  ];
}
