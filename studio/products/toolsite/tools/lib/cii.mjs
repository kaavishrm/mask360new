// Cost Inflation Index, base FY 2001-02 = 100, notified under section 48 of the 1961 Act and section 72(8)(a) of the
// Income-tax Act, 2025. FY 2026-27 = 384 per CBDT Notification No. 85/2026 dated 15 July 2026 (read in secondary reports
// on 2026-11-24: ABCAUS, TaxGuru, Business Standard). Inlined into pages via `lib: [cii]`.
export default function cii() {
  const TABLE = { '2001': 100, '2002': 105, '2003': 109, '2004': 113, '2005': 117, '2006': 122, '2007': 129, '2008': 137, '2009': 148, '2010': 167, '2011': 184, '2012': 200, '2013': 220, '2014': 240, '2015': 254, '2016': 264, '2017': 272, '2018': 280, '2019': 289, '2020': 301, '2021': 317, '2022': 331, '2023': 348, '2024': 363, '2025': 376, '2026': 384 };
  // Financial year a date falls in, as the year it starts: 10 June 2015 is FY 2015-16, returned as 2015.
  function fyOf(d) { return d.getMonth() >= 3 ? d.getFullYear() : d.getFullYear() - 1; }
  function label(y) { return y + '-' + String(y + 1).slice(2); }
  // Index for a year; years before 2001-02 take the base of 100 since cost is then taken as on 1 April 2001.
  function index(y) { return y < 2001 ? 100 : TABLE[String(y)] || null; }
  return { TABLE, fyOf, label, index };
}
