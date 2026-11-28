// Late rent fee rules by state. Inlined into the page by build.mjs via `lib: [lateFeeRules]`.
// `grace` is the number of days after the due date on which a fee may first be charged (null: the statute
// sets none). `graceBusiness` counts business days instead. `cap(c)` returns the statutory maximum for
// c = { rent, unpaid, weekly, units } or null where the statute sets none. `statute` is false where no
// statewide statute was found and the entry rests on secondary sources named in `source`.
export default function lateFeeRules() {
  const none = (code, name) => ({
    code, name, statute: false, grace: null, cap: () => null,
    rule: 'No statewide statute was found that caps the late fee or requires a grace period, so the lease governs. A court can still refuse to enforce a fee that is a penalty rather than a reasonable estimate of the landlord’s loss, and some cities add their own rules.',
    penalty: 'None stated in a statewide statute.',
    cite: 'no statewide late fee statute found', url: '',
    verified: '2026-11-23', source: 'three published state charts (Baselane, updated 22 October 2026; Flex, 2021; Landlord Studio, updated 6 November 2026) read on 2026-11-23, which agree on this state except that Baselane alone lists an unsourced Ohio cap; this is a secondary-source statement, not a verified statute',
  });
  return [
    {
      code: 'NY', name: 'New York', statute: true, grace: 6,
      cap: (c) => Math.min(50, c.rent * 0.05),
      rule: 'No late fee may be charged unless the rent has not been paid within five days of the date it was due, and the fee may not exceed fifty dollars or five percent of the monthly rent, whichever is less. A lease term that waives this is void. Co-operative apartments have a separate limit tied to the maintenance fee.',
      penalty: 'The limit cannot be waived by lease; a fee above it is not collectable.',
      cite: 'N.Y. Real Prop. Law § 238-a(2) and (3)', url: 'https://www.nysenate.gov/legislation/laws/RPP/238-A',
      verified: '2026-11-23', source: 'New York State Senate statute site, revision of 17 October 2025',
    },
    {
      code: 'NC', name: 'North Carolina', statute: true, grace: 5,
      cap: (c) => (c.weekly ? Math.max(4, c.rent * 0.05) : Math.max(15, c.rent * 0.05)),
      rule: 'A late fee may be charged only if the rent is five calendar days or more late, counting the day after the due date as day one. For monthly rent the fee may not exceed fifteen dollars or five percent of the monthly rent, whichever is greater; for weekly rent, four dollars or five percent of the weekly rent. It may be charged once per late payment and may not be deducted from a later payment so as to make that payment late.',
      penalty: 'A lease term contrary to the section is void.',
      cite: 'N.C. Gen. Stat. § 42-46(a), (b) and (h)', url: 'https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/BySection/Chapter_42/GS_42-46.html',
      verified: '2026-11-23', source: 'North Carolina General Assembly statute site (history through 2025-54)',
    },
    {
      code: 'TX', name: 'Texas', statute: true, grace: 3, units: true,
      cap: (c) => c.rent * (c.units > 4 ? 0.10 : 0.12),
      rule: 'A landlord may not collect a late fee unless notice of it is in a written lease, the fee is reasonable, and some part of the rent has remained unpaid two full days after the day it was due. A fee is presumed reasonable if it does not exceed 12 percent of the rent for the period in a building of four or fewer units, or 10 percent in a larger building; a higher fee is allowed only if it does not exceed the landlord’s uncertain damages. An initial fee plus daily fees count as one fee.',
      penalty: 'A landlord who violates the section owes $100, three times the improper fee, and the tenant’s attorney fees. A lease term waiving the section is void.',
      cite: 'Tex. Prop. Code § 92.019(a), (a-1), (b), (c) and (d)', url: 'https://texas.public.law/statutes/tex._prop._code_section_92.019',
      verified: '2026-11-23', source: 'Public.Law reproduction of the Property Code, verified against texas.gov on 26 May 2025 (the official page serves only its navigation to a machine)',
    },
    {
      code: 'CO', name: 'Colorado', statute: true, grace: 7,
      cap: (c) => Math.max(50, c.unpaid * 0.05),
      rule: 'No late fee unless the rent payment is late by at least seven calendar days, and no fee above the greater of fifty dollars or five percent of the past-due rent. The fee must be disclosed in the rental agreement, no interest may be charged on it, fees for one late payment may not together exceed the cap, and the landlord must give written notice of the fee within 180 days of the due date. A late fee is not rent and cannot be the basis of an eviction.',
      penalty: 'A non-compliant lease term is void. The landlord owes a fifty-dollar penalty for each violation and, if it is not cured within seven days of written notice, damages, a further penalty of $150 to $1,000 per violation, and attorney fees.',
      cite: 'C.R.S. § 38-12-105(1) to (5) and (7)', url: 'https://codes.findlaw.com/co/title-38-property-real-and-personal/co-rev-st-sect-38-12-105/',
      verified: '2026-11-23', source: 'FindLaw reproduction of the Colorado Revised Statutes, current as of 1 January 2025',
    },
    {
      code: 'MA', name: 'Massachusetts', statute: true, grace: 30,
      cap: () => null,
      rule: 'No lease or rental agreement may impose any interest or penalty for failure to pay rent until thirty days after the rent was due. The section sets no cap on the amount once the thirty days have passed.',
      penalty: 'A fee charged inside the thirty days is not permitted by the section.',
      cite: 'M.G.L. c. 186, § 15B(1)(c)', url: 'https://malegislature.gov/Laws/GeneralLaws/PartII/TitleI/Chapter186/Section15B',
      verified: '2026-11-23', source: 'official General Laws published by the Massachusetts Legislature (page dated 23 November 2026)',
    },
    {
      code: 'MD', name: 'Maryland', statute: true, grace: null,
      cap: (c) => (c.weekly ? Math.min(3, c.unpaid * 0.05) : c.unpaid * 0.05),
      rule: 'A lease may not provide a penalty for late payment of rent above five percent of the unpaid rent due for the period for which the payment is delinquent. Where rent is paid weekly the penalty may not exceed three dollars a week or twelve dollars a month in total. The section sets no grace period.',
      penalty: 'A lease provision above the cap is one the landlord may not use or enforce.',
      cite: 'Md. Code, Real Prop. § 8-208(d)(3)', url: 'https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=grp&section=8-208',
      verified: '2026-11-23', source: 'official statute text published by the Maryland General Assembly (the page shows no currency date)',
    },
    {
      code: 'VA', name: 'Virginia', statute: true, grace: null,
      cap: (c) => Math.min(c.rent * 0.10, c.unpaid * 0.10),
      rule: 'A landlord may charge for late payment only if the written rental agreement provides for it, and the charge may not exceed the lesser of ten percent of the periodic rent or ten percent of the remaining balance the tenant owes. The section sets no grace period for a written lease; where the landlord offers no written agreement, rent is late if unpaid by the fifth of the month.',
      penalty: 'A charge above the cap, or one not provided for in the written agreement, is not permitted by the section.',
      cite: 'Va. Code § 55.1-1204(C) and (E)', url: 'https://law.lis.virginia.gov/vacode/title55.1/chapter12/section55.1-1204/',
      verified: '2026-11-23', source: 'official Code of Virginia (page dated 23 November 2026; subsection E reads the same in the version effective 1 July 2027)',
    },
    {
      code: 'TN', name: 'Tennessee', statute: true, grace: 5,
      cap: (c) => c.unpaid * 0.10,
      rule: 'There is a five-day grace period beginning on the day the rent is due, with the due date counted as day one; no fee may be charged until it ends. If the last day falls on a Sunday or legal holiday and the rent is paid on the next business day, no fee may be charged. The fee may not exceed ten percent of the amount of rent past due. The Act applies in counties above a population threshold.',
      penalty: 'A fee inside the grace period or above ten percent is not permitted by the section.',
      cite: 'Tenn. Code § 66-28-201(d)', url: 'https://codes.findlaw.com/tn/title-66-property/tn-code-sect-66-28-201/',
      verified: '2026-11-23', source: 'FindLaw reproduction of the Tennessee Code, current as of 2 January 2024 (the official code is published through a commercial service that refuses automated reading)',
    },
    {
      code: 'NJ', name: 'New Jersey', statute: true, grace: 5, graceBusiness: true, groupOnly: true,
      cap: () => null,
      rule: 'For rent due on the first of the month, a tenant who is a senior citizen receiving a Social Security old-age pension (or a railroad or other governmental pension in its place), or who receives Social Security disability benefits, Supplemental Security Income or Work First New Jersey benefits, has a grace period of five business days in which to pay, and no late charge may include that period. A business day excludes Saturdays, Sundays and State or federal holidays. For other tenants the statute sets no grace period and no cap.',
      penalty: 'A late charge that includes the grace period is not permitted for a covered tenant.',
      cite: 'N.J.S.A. 2A:42-6.1 and 2A:42-6.3', url: 'https://codes.findlaw.com/nj/title-2a-administration-of-civil-and-criminal-justice/nj-st-sect-2a-42-6-1/',
      verified: '2026-11-23', source: 'FindLaw reproduction of the New Jersey Statutes, current as of 1 January 2024',
    },
    {
      code: 'AZ', name: 'Arizona', statute: true, grace: null,
      cap: () => null,
      rule: 'The Residential Landlord and Tenant Act refers to a reasonable late fee set forth in a written rental agreement: a tenant who tenders all past-due rent and that fee before a special detainer action is filed is reinstated. The Act sets no cap and no grace period for the fee itself; the fee must be in the written lease and be reasonable.',
      penalty: 'None stated for the fee itself.',
      cite: 'A.R.S. § 33-1368(B)', url: 'https://www.azleg.gov/ars/33/01368.htm',
      verified: '2026-11-23', source: 'official Arizona Revised Statutes published by the Arizona Legislature',
    },
    none('CA', 'California'), none('FL', 'Florida'), none('GA', 'Georgia'), none('IL', 'Illinois'), none('IN', 'Indiana'),
    none('MI', 'Michigan'), none('MO', 'Missouri'), none('OH', 'Ohio'), none('PA', 'Pennsylvania'),
    {
      code: 'WA', name: 'Washington', statute: true, grace: 6,
      cap: () => null,
      rule: 'The landlord may not charge a late fee for rent that is paid within five days following its due date. If rent is more than five days past due, late fees may be charged from the first day after the due date until paid, so a payment on the sixth day or later can carry a fee for the whole period. The section sets no cap. A tenant whose income is monthly governmental assistance that arrives after the due date can require, in writing, a due date up to five days later.',
      penalty: 'A fee for rent paid within the five days is not permitted by the section.',
      cite: 'RCW 59.18.170(2) and (3)', url: 'https://app.leg.wa.gov/RCW/default.aspx?cite=59.18.170',
      verified: '2026-11-23', source: 'FindLaw reproduction of the Revised Code of Washington, current as of 1 January 2025 (the official page serves only its navigation to a machine)',
    },
  ];
}
