// Notice rules for month-to-month residential tenancies, by state. Inlined via `lib: [noticeRules]`.
// `tenant` and `landlord` give the notice the statute requires to end the tenancy: { days } or { months },
// or { tiers: [[minMonthsOccupied, days], ...] } (first matching tier from the longest occupancy down),
// or { cause: true } where the landlord may end a periodic tenancy only for a listed cause. `align` is
// 'period' when the statute ties the notice to the rental period or rent due date (the tenancy then ends
// the day before a rent due date), or 'any' when the days simply run from the notice. `increase` gives the
// rent increase notice: { days } or { tiers } with an optional `pct` threshold, or null where the statute
// sets none. `verified` is the date the text was read; `source` says where.
export default function noticeRules() {
  return [
    { code: 'AZ', name: 'Arizona', tenant: { days: 30 }, landlord: { days: 30 }, align: 'period', week: 10, increase: null,
      cite: 'A.R.S. § 33-1375(A) and (B)', url: 'https://www.azleg.gov/ars/33/01375.htm',
      rule: 'Either party ends a month-to-month tenancy by written notice given at least thirty days before the periodic rental date named in the notice; a week-to-week tenancy needs ten days before the termination date.',
      increaseRule: 'The Residential Landlord and Tenant Act sets no notice period for a rent increase in the sections read; a change to a month-to-month tenancy is in practice given with the same thirty days to a rental date.',
      verified: '2026-11-27', source: 'official Arizona Revised Statutes published by the Arizona Legislature' },
    { code: 'CA', name: 'California', tenant: { days: 30 }, landlord: { tiers: [[12, 60], [0, 30]] }, align: 'any', week: null, increase: { tiers: [[10, 90], [0, 30]], pct: true, mail: true },
      cite: 'Cal. Civ. Code §§ 1946, 1946.1 and 827(b)', url: 'https://codes.findlaw.com/ca/civil-code/civ-sect-1946-1/',
      rule: 'A tenant ends a month-to-month tenancy with at least 30 days’ written notice given at any time, and rent is due through the termination date. An owner must give at least 60 days, or 30 days if the tenant has lived there for less than one year (and in certain owner-sale cases).',
      increaseRule: 'A rent increase needs at least 30 days’ written notice, or 90 days if the increase, combined with any other increases in the 12 months before it takes effect, is more than 10 percent of the rent charged at any time in those 12 months. Service by mail adds the days in Code of Civil Procedure section 1013.',
      verified: '2026-11-27', source: 'FindLaw reproduction of the Civil Code, current as of 1 January 2026 (the official site refuses automated reading)' },
    { code: 'CO', name: 'Colorado', tenant: { days: 21 }, landlord: { cause: true, note: 'a residential landlord’s right to end the tenancy is governed by the for-cause rules in C.R.S. § 38-12-1302, which were not read for this page' }, align: 'period', week: 3, increase: { days: 60, note: 'where there is no written agreement' },
      cite: 'C.R.S. §§ 13-40-107(1), (2)(c) and 38-12-701(2)', url: 'https://codes.findlaw.com/co/title-13-courts-and-court-procedure/co-rev-st-sect-13-40-107/',
      rule: 'A tenant ends a tenancy of one month or longer but less than six months with written notice of at least twenty-one days that expires at the end of a tenancy period, naming the property and the termination date; one week to one month needs three days.',
      increaseRule: 'In a residential tenancy with no written agreement the landlord may raise the rent only on at least sixty days’ written notice, and may not end such a tenancy mainly to raise the rent in a way inconsistent with that. The section sets no period for tenancies with a written agreement.',
      verified: '2026-11-27', source: 'FindLaw reproduction of the Colorado Revised Statutes, current as of 1 January 2025' },
    { code: 'FL', name: 'Florida', tenant: { days: 30 }, landlord: { days: 30 }, align: 'period', week: 7, increase: null,
      cite: 'Fla. Stat. § 83.57(3) and (4)', url: 'http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0000-0099/0083/Sections/0083.57.html',
      rule: 'Either party ends a month-to-month tenancy by written notice given not less than 30 days before the end of any monthly period; week-to-week needs 7 days before the end of a weekly period, quarter-to-quarter 30 days and year-to-year 60 days before the end of the period.',
      increaseRule: 'The section sets no notice period for a rent increase.',
      verified: '2026-11-27', source: 'official 2026 Florida Statutes site' },
    { code: 'GA', name: 'Georgia', tenant: { days: 30 }, landlord: { days: 60 }, align: 'any', week: null, increase: null,
      cite: 'O.C.G.A. § 44-7-7', url: 'https://codes.findlaw.com/ga/title-44-property/ga-code-sect-44-7-7/',
      rule: 'Sixty days’ notice from the landlord or 30 days’ notice from the tenant ends a tenancy at will, which is how Georgia treats a month-to-month tenancy without a fixed term.',
      increaseRule: 'The section says nothing about rent increases; a landlord changes the rent of a tenancy at will by giving the same sixty days’ notice.',
      verified: '2026-11-27', source: 'FindLaw reproduction of the Georgia Code, current as of 28 March 2024 (the official code is not published as open text)' },
    { code: 'IL', name: 'Illinois', tenant: { days: 30, note: 'the section states the landlord’s notice; a tenant’s notice follows the lease, which usually mirrors it' }, landlord: { days: 30 }, align: 'any', week: 7, increase: null,
      cite: '735 ILCS 5/9-207(a) and (b)', url: 'https://codes.findlaw.com/il/chapter-735-civil-procedure/il-st-sect-735-5-9-207/',
      rule: 'A landlord ends a tenancy for a term of less than one year, other than week to week, by 30 days’ written notice, and a week-to-week tenancy by 7 days’ written notice, except as provided in section 9-207.5 (not read for this page). Chicago and Cook County add their own rules.',
      increaseRule: 'The section sets no notice period for a rent increase; Chicago’s ordinance does.',
      verified: '2026-11-27', source: 'FindLaw reproduction of the Illinois Compiled Statutes, current as of 1 January 2025 (the official site returned an error)' },
    { code: 'IN', name: 'Indiana', tenant: { months: 1 }, landlord: { months: 1 }, align: 'any', week: null, increase: null,
      cite: 'Ind. Code § 32-31-1-1(a)', url: 'https://codes.findlaw.com/in/title-32-property/in-code-sect-32-31-1-1/',
      rule: 'A tenancy at will is ended by one month’s notice in writing delivered to the tenant. Indiana has no section naming month-to-month tenancies; this is the rule generally applied to them. Check the lease for its own notice clause.',
      increaseRule: 'The sections read set no notice period for a rent increase.',
      verified: '2026-11-27', source: 'FindLaw reproduction of the Indiana Code, current as of 1 January 2026' },
    { code: 'MA', name: 'Massachusetts', tenant: { months: 1, min: 30 }, landlord: { months: 1, min: 30 }, align: 'any', week: null, increase: null,
      cite: 'M.G.L. c. 186, § 12', url: 'https://malegislature.gov/Laws/GeneralLaws/PartII/TitleI/Chapter186/Section12',
      rule: 'A tenancy at will is ended by written notice equal to the interval between rent days or thirty days, whichever is longer, where rent is paid at intervals of less than three months (three months’ notice otherwise). To be safe, time the notice to expire on the day before a rent day.',
      increaseRule: 'The section sets no notice period for a rent increase; a landlord changes the rent of a tenancy at will by the same notice.',
      verified: '2026-11-27', source: 'official General Laws published by the Massachusetts Legislature (page dated 27 November 2026)' },
    { code: 'MD', name: 'Maryland', tenant: { days: 30, note: 'does not apply in Baltimore City' }, landlord: { days: 60 }, align: 'period', week: null, increase: { days: 60, note: 'the section gives 60 days for terms of more than a week up to a month and 90 days for terms of more than a month; it does not name month-to-month tenancies, so 60 is the literal reading' },
      cite: 'Md. Code, Real Prop. §§ 8-402(c) and 8-209(b)', url: 'https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=grp&section=8-402',
      rule: 'A landlord must give written notice 60 days before the expiration of a month-to-month tenancy; a tenant gives at least 30 days before the expiration (not in Baltimore City, which has its own rule). Local law in Baltimore City and Montgomery County adds to this.',
      increaseRule: 'A residential landlord must notify the tenant in writing before raising the rent, by first-class mail with a certificate of mailing or electronically if the tenant chose that: at least 60 days ahead for a term of more than a week up to a month, 90 days for a term of more than a month. Local law may require more.',
      verified: '2026-11-27', source: 'official statute text published by the Maryland General Assembly (the pages show no currency date)' },
    { code: 'MI', name: 'Michigan', tenant: { months: 1 }, landlord: { months: 1 }, align: 'period', week: null, increase: null,
      cite: 'MCL 554.134(1)', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-554-134',
      rule: 'Either party ends an estate at will by giving one month’s notice, which terminates the tenancy at the end of a period equal in length to the interval between times of payment: for monthly rent, the end of the next full rental period after the notice.',
      increaseRule: 'The section says nothing about rent increases; the same one month’s notice to the end of a rental period is used to change the rent.',
      verified: '2026-11-27', source: 'official Michigan Compiled Laws site, complete through PA 114 of 2026' },
    { code: 'MO', name: 'Missouri', tenant: { months: 1 }, landlord: { months: 1 }, align: 'period', week: null, increase: null,
      cite: 'Mo. Rev. Stat. § 441.060(4)', url: 'https://revisor.mo.gov/main/OneSection.aspx?section=441.060',
      rule: 'Either party ends a month-to-month tenancy by written notice stating that the tenancy ends on a periodic rent-paying date not less than one month after the notice is received.',
      increaseRule: 'The section sets no notice period for a rent increase.',
      verified: '2026-11-27', source: 'official Revised Statutes of Missouri published by the Missouri Revisor (section effective 28 August 1997)' },
    { code: 'NJ', name: 'New Jersey', tenant: { months: 1, note: 'the statute states the landlord’s notice to quit; a tenant’s one month follows the lease and general practice' }, landlord: { months: 1, cause: true, note: 'a landlord of a covered residential tenant may end the tenancy only on a ground listed in the Anti-Eviction Act; owner-occupied buildings of two units or fewer are exempt' }, align: 'any', week: null, increase: { months: 1, note: 'by a valid notice to quit and notice of the increase; the increase must not be unconscionable' },
      cite: 'N.J.S.A. 2A:18-56(b), 2A:18-61.1 and 2A:18-61.1(f)', url: 'https://codes.findlaw.com/nj/title-2a-administration-of-civil-and-criminal-justice/nj-st-sect-2a-18-56/',
      rule: 'A month-to-month tenancy is ended by one month’s notice to quit. A landlord of a residential tenant covered by the Anti-Eviction Act may remove the tenant only for one of its listed grounds, so cannot simply end a month-to-month tenancy; owner-occupied premises with no more than two rental units are outside the Act.',
      increaseRule: 'A rent increase is imposed by a valid notice to quit together with notice of the increase, one month for a month-to-month tenancy; a tenant who then fails to pay can be removed only if the increase is not unconscionable and complies with any rent control ordinance.',
      verified: '2026-11-27', source: 'FindLaw reproduction of the New Jersey Statutes, current as of 1 January 2024' },
    { code: 'NY', name: 'New York', tenant: { months: 1 }, landlord: { tiers: [[24, 90], [12, 60], [0, 30]] }, align: 'period', landlordAlign: 'any', week: null, increase: { tiers: [[24, 90], [12, 60], [0, 30]], pct: 5, occupancy: true },
      cite: 'N.Y. Real Prop. Law §§ 226-c and 232-b', url: 'https://www.nysenate.gov/legislation/laws/RPP/226-C',
      rule: 'Outside New York City a tenant ends a month-to-month tenancy by notifying the landlord at least one month before the end of the term. A landlord who will not renew must give at least 30 days’ notice if the tenant has occupied the unit for less than one year without a lease of a year or more, 60 days for one to two years, and 90 days for two years or more, counted by the longer of time in occupancy and lease length.',
      increaseRule: 'A rent increase of five percent or more needs the same 30, 60 or 90 days’ written notice by length of occupancy. Below five percent the section does not apply.',
      verified: '2026-11-27', source: 'New York State Senate statute site (226-c revision of 22 August 2025, 232-b of 18 October 2019)' },
    { code: 'NC', name: 'North Carolina', tenant: { days: 7 }, landlord: { days: 7 }, align: 'period', week: 2, increase: null,
      cite: 'N.C. Gen. Stat. § 42-14', url: 'https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/BySection/Chapter_42/GS_42-14.html',
      rule: 'A month-to-month tenancy is ended by a notice to quit given seven days or more before the end of the current month of the tenancy; week to week needs two days, year to year one month. A manufactured home lot needs 60 days.',
      increaseRule: 'The section says nothing about rent increases; a landlord changes the rent by the same notice before the end of the month.',
      verified: '2026-11-27', source: 'North Carolina General Assembly statute site' },
    { code: 'OH', name: 'Ohio', tenant: { days: 30 }, landlord: { days: 30 }, align: 'period', week: 7, increase: null,
      cite: 'Ohio Rev. Code § 5321.17(A) and (B)', url: 'https://codes.ohio.gov/ohio-revised-code/section-5321.17',
      rule: 'Either party ends or declines to renew a month-to-month tenancy by notice given at least thirty days before the periodic rental date; a week-to-week tenancy needs seven days before the termination date named in the notice.',
      increaseRule: 'The section sets no notice period for a rent increase.',
      verified: '2026-11-27', source: 'Ohio Revised Code official site (section effective 22 August 1990)' },
    { code: 'PA', name: 'Pennsylvania', tenant: { days: 15 }, landlord: { days: 15 }, align: 'any', week: null, increase: null,
      cite: '68 P.S. § 250.501(b) and (e)', url: 'https://codes.findlaw.com/pa/title-68-ps-real-and-personal-property/pa-st-sect-68-250-501/',
      rule: 'For a lease of one year or less or for an indeterminate time, the notice to quit gives the tenant fifteen days from the date of service to leave; thirty days for a lease of more than one year. The lease may shorten or waive the notice. The Act states the landlord’s notice; a tenant’s notice follows the lease.',
      increaseRule: 'The Act sets no notice period for a rent increase.',
      verified: '2026-11-27', source: 'FindLaw reproduction of the Landlord and Tenant Act of 1951, current as of 1 January 2026 (the official page served only its navigation)' },
    { code: 'TN', name: 'Tennessee', tenant: { days: 30 }, landlord: { days: 30 }, align: 'period', week: 10, increase: null,
      cite: 'Tenn. Code § 66-28-512(a) and (b)', url: 'https://codes.findlaw.com/tn/title-66-property/tn-code-sect-66-28-512/',
      rule: 'Either party ends a month-to-month tenancy by written notice given at least thirty days before the periodic rental date named in the notice; week to week needs ten days before the termination date. The Act applies in counties above a population threshold.',
      increaseRule: 'The section sets no notice period for a rent increase.',
      verified: '2026-11-27', source: 'FindLaw reproduction of the Tennessee Code, current as of 2 January 2024' },
    { code: 'TX', name: 'Texas', tenant: { months: 1 }, landlord: { months: 1 }, align: 'any', week: null, increase: null,
      cite: 'Tex. Prop. Code § 91.001(a), (b) and (e)', url: 'https://texas.public.law/statutes/tex._prop._code_section_91.001',
      rule: 'Either party ends a month-to-month tenancy by notice to the other; the tenancy ends on the later of the day named in the notice and one month after the day the notice is given. The parties may agree on a different period in a document signed by both.',
      increaseRule: 'The section says nothing about rent increases; a landlord changes the rent of a month-to-month tenancy by the same one month’s notice.',
      verified: '2026-11-27', source: 'Public.Law reproduction of the Property Code, verified against texas.gov on 26 May 2025' },
    { code: 'VA', name: 'Virginia', tenant: { days: 30 }, landlord: { days: 30 }, align: 'period', week: 7, increase: { days: 30, align: 'period' },
      cite: 'Va. Code § 55.1-1253(A) and (D)', url: 'https://law.lis.virginia.gov/vacode/title55.1/chapter12/section55.1-1253/',
      rule: 'Either party ends a month-to-month tenancy by written notice served at least 30 days before the next rent due date, unless the rental agreement sets a different period; week to week needs seven days before the next rent due date.',
      increaseRule: 'For a month-to-month tenant the new rent stated in a written notice takes effect on the next rent due date coming 30 days after the notice. Fixed-term and auto-renewing leases have a separate 60-day rule (90 days from 1 July 2027).',
      verified: '2026-11-27', source: 'official Code of Virginia (page dated 27 November 2026)' },
    { code: 'WA', name: 'Washington', tenant: { days: 20 }, landlord: { cause: true, note: 'only for a cause listed in RCW 59.18.650(2), with 60 to 120 days’ notice depending on the cause' }, align: 'period', week: null, increase: { days: 90 },
      cite: 'RCW 59.18.200(1)(a), 59.18.650 and 59.18.140(3)', url: 'https://app.leg.wa.gov/RCW/default.aspx?cite=59.18.140',
      rule: 'A tenant ends a month-to-month tenancy by written notice of 20 days or more before the end of any month of the tenancy. A landlord may not end a periodic tenancy except for a cause listed in RCW 59.18.650(2), each with its own notice (for example 90 days for owner occupancy or sale of a single-family home, 60 days for other good cause).',
      increaseRule: 'A landlord must give at least 90 days’ written notice of a rent increase (60 days under the pre-May 2025 text; 30 days for subsidized tenancies), and the increase cannot take effect before the end of the lease term. The same 2025 law caps annual increases at the lower of 7 percent plus inflation and 10 percent for most tenancies; Seattle requires 180 days.',
      verified: '2026-11-27', source: 'FindLaw reproductions of the RCW current as of 1 January 2025, with the 90 days taken from Chapter 209, Laws of 2025 (EHB 1217, effective 7 May 2025) as reported by the Rental Housing Association of Washington and the enrolled bill' },
  ];
}

// Date arithmetic shared by the notice tools. Inlined via `lib: [noticeRules, noticeMath]`.
export function noticeMath() {
  function addDays(d, n) { const x = new Date(d.getTime()); x.setDate(x.getDate() + n); return x; }
  function addMonths(d, n) { const x = new Date(d.getFullYear(), d.getMonth() + n, 1); const last = new Date(x.getFullYear(), x.getMonth() + 1, 0).getDate(); x.setDate(Math.min(d.getDate(), last)); return x; }
  // First rent due date on or after `after`.
  function nextDue(after, dueDay) { let D = new Date(after.getFullYear(), after.getMonth(), dueDay); if (D < after) D = new Date(after.getFullYear(), after.getMonth() + 1, dueDay); return D; }
  // Resolve a spec ({days}|{months}|{tiers}|{cause}) for a tenant who has been in occupancy `months` months.
  function pick(spec, months) {
    if (!spec) return null;
    if (spec.tiers) { const t = spec.tiers.find(([min]) => months >= min) || spec.tiers[spec.tiers.length - 1]; return { days: t[1], tier: t[0], cause: !!spec.cause, note: spec.note }; }
    return { days: spec.days, months: spec.months, min: spec.min, cause: !!spec.cause, note: spec.note };
  }
  function label(req) { if (!req || (req.days == null && req.months == null)) return ''; const base = req.months ? (req.months === 1 ? '1 month' : req.months + ' months') : req.days + ' days'; return req.min && req.min > 0 && req.months ? base + ' or ' + req.min + ' days, whichever is longer' : base; }
  // Earliest day the notice can take effect. With align 'period' the tenancy ends the day before the first
  // rent due date that is at least the required notice after the notice date; with 'any' it ends when the
  // notice runs out.
  function endDate(notice, req, align, dueDay) {
    let target = req.months ? addMonths(notice, req.months) : addDays(notice, req.days);
    if (req.min) { const alt = addDays(notice, req.min); if (alt > target) target = alt; }
    if (align !== 'period') return { ends: target, due: null, target };
    const D = nextDue(target, dueDay);
    return { ends: addDays(D, -1), due: D, target };
  }
  return { addDays, addMonths, nextDue, pick, label, endDate };
}
