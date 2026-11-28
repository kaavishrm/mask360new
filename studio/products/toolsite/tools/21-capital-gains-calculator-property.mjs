import taxEngine from './lib/income-tax.mjs';
import cii from './lib/cii.mjs';

export default {
  slug: 'capital-gains-calculator-property',
  title: 'Capital Gains Tax Calculator for Property FY 2026-27',
  h1: 'Capital Gains Tax Calculator for property sold in FY 2026-27: 12.5% or 20% with indexation, with Section 82, 85 and 86 relief',
  summary: 'Land or house sold this year: holding period, indexed cost with the 2026-27 index, the lower of the two rates, and the reinvestment exemptions.',
  description: 'Free capital gains tax calculator for the sale of a house, flat or land in India in FY 2026-27 (tax year 2026-27). Checks the 24-month holding period, indexes the cost with the Cost Inflation Index of 384, compares 12.5% without indexation against 20% with indexation for property bought before 23 July 2024, applies the stamp duty value rule and the reinvestment exemptions for a new house and capital gains bonds, and shows the tax and cess.',
  category: 'tax',
  lib: [taxEngine, cii],
  related: ['capital-gains-calculator-shares', 'capital-gains-calculator-debt-funds', 'income-tax-calculator', 'emi-calculator'],
  intro: 'Enter one sale of a house, flat, plot or other building. The calculator decides whether the gain is long or short term, works out the gain with and without indexation where the law allows the choice, applies the reinvestment reliefs you enter, and shows the tax for FY 2026-27 with the section it rests on.',
  tool: `
<form id="f">
  <fieldset><legend>The property</legend><div class="grid">
    <label>What was sold<select name="kind"><option value="house">Residential house or flat</option><option value="land">Land, plot or non-residential building</option></select></label>
    <label>Purchase date<input type="date" name="bdate" value="2015-06-10"></label>
    <label>Purchase cost (₹) <span class="hint">Price plus stamp duty and registration paid then</span><input type="number" name="cost" value="4000000" min="0" step="1000"></label>
    <label>Fair market value on 1 April 2001 (₹) <span class="hint">Only if bought before 1 April 2001; not above its stamp duty value then</span><input type="number" name="fmv01" value="0" min="0" step="1000"></label>
    <label>Cost of improvement (₹) <span class="hint">Construction or major renovation, if any</span><input type="number" name="imp" value="0" min="0" step="1000"></label>
    <label>Improvement date<input type="date" name="idate" value="2018-06-10"></label>
    <label>Sale date<input type="date" name="sdate" value="2026-10-10"></label>
    <label>Sale price (₹)<input type="number" name="sale" value="9000000" min="0" step="1000"></label>
    <label>Stamp duty value on sale (₹) <span class="hint">Circle rate value, if known</span><input type="number" name="sdv" value="0" min="0" step="1000"></label>
    <label>Brokerage and other sale expenses (₹)<input type="number" name="exp" value="0" min="0" step="1000"></label>
  </div></fieldset>
  <fieldset><legend>Reinvestment relief</legend><div class="grid">
    <label>New residential house bought or built (₹) <span class="hint">Within 1 year before or 2 years after, or built within 3 years</span><input type="number" name="house" value="0" min="0" step="10000"></label>
    <label>Capital gains bonds bought within 6 months (₹) <span class="hint">REC, PFC, IRFC and similar; ₹50 lakh cap</span><input type="number" name="bonds" value="0" min="0" step="10000"></label>
  </div></fieldset>
  <fieldset><legend>Your year</legend><div class="grid">
    <label>Seller<select name="who"><option value="ind">Resident individual or HUF</option><option value="other">Other (non-resident, company, firm)</option></select></label>
    <label>Tax regime<select name="regime"><option value="new">New regime (default)</option><option value="old">Old regime</option></select></label>
    <label>Age on 31 March 2027 <span class="hint">Old regime exemption limit</span><select name="age"><option value="0">Below 60</option><option value="1">60 to 79</option><option value="2">80 or above</option></select></label>
    <label>Other taxable income this year (₹) <span class="hint">After deductions, before this gain</span><input type="number" name="other" value="1200000" min="0" step="10000"></label>
  </div></fieldset>
  <div class="result" id="out"></div>
</form>`,
  script: function () {
    const H = window.H, T = taxEngine(), C = cii();
    const LT_RATE = 0.125, IDX_RATE = 0.20, CESS = 0.04, CUTOFF = new Date('2024-07-23T00:00:00'), BASE = new Date('2001-04-01T00:00:00');
    const BOND_CAP = 5000000, HOUSE_CAP = 100000000;
    function parse(s) { return s ? new Date(s + 'T00:00:00') : null; }
    function addMonths(d, m) { const x = new Date(d.getTime()); x.setMonth(x.getMonth() + m); return x; }
    function dmy(d) { return String(d.getDate()).padStart(2, '0') + '/' + String(d.getMonth() + 1).padStart(2, '0') + '/' + d.getFullYear(); }
    const fmt = (v) => (Math.round(v) < 0 ? '-' : '') + H.inr(Math.abs(v));
    H.bind('f', (f) => {
      const out = document.getElementById('out');
      const kind = H.str(f, 'kind'), bdate = parse(H.str(f, 'bdate')), sdate = parse(H.str(f, 'sdate')), idate = parse(H.str(f, 'idate'));
      let cost = H.val(f, 'cost'); const fmv01 = H.val(f, 'fmv01'), imp = H.val(f, 'imp'), sale = H.val(f, 'sale'), sdv = H.val(f, 'sdv'), exp = H.val(f, 'exp');
      const house = H.val(f, 'house'), bonds = H.val(f, 'bonds'), isInd = H.str(f, 'who') === 'ind', isNew = H.str(f, 'regime') === 'new', age = H.val(f, 'age'), other = H.val(f, 'other');
      if (!bdate || !sdate || !(sdate > bdate) || !sale) { out.innerHTML = '<p class="note">Enter the purchase date, a later sale date and the sale price.</p>'; return; }
      const saleFY = C.fyOf(sdate);
      if (saleFY !== 2026) { out.innerHTML = '<p class="note">This calculator covers sales in FY 2026-27 (1 April 2026 to 31 March 2027). The index for other years is in the explainer below.</p>'; return; }
      // Section 78: stamp duty value above 110% of the price replaces the price as the full value of consideration.
      const useSdv = sdv > sale * 1.10, consideration = useSdv ? sdv : sale;
      // Property bought before 1 April 2001 may take the fair market value on that day as its cost.
      const pre2001 = bdate < BASE, costUsed = pre2001 && fmv01 > 0 ? fmv01 : cost;
      const longTerm = sdate > addMonths(bdate, 24);
      const gain = consideration - exp - costUsed - imp;
      // Indexation: only the comparison in section 197(3), for a resident individual or HUF, land or building bought before 23 July 2024.
      const canIndex = longTerm && isInd && bdate < CUTOFF;
      const buyIdx = C.index(C.fyOf(bdate)), saleIdx = C.index(saleFY), impIdx = idate ? C.index(C.fyOf(idate)) : null;
      const idxCost = costUsed * saleIdx / buyIdx, idxImp = imp && impIdx ? imp * saleIdx / impIdx : imp;
      const gainIdx = consideration - exp - idxCost - idxImp;
      // Reliefs apply to the long-term gain. Section 82: house sold, new house; section 86: other asset, proportionate; section 85: bonds up to 50 lakh.
      const netC = consideration - exp;
      const relief = (g) => {
        if (!longTerm || g <= 0) return [0, 0];
        const h = Math.min(house, HOUSE_CAP);
        let ex = kind === 'house' ? Math.min(g, h) : (Math.min(netC, HOUSE_CAP) <= h ? g : g * h / Math.min(netC, HOUSE_CAP));
        ex = Math.min(ex, g);
        const b = Math.min(bonds, BOND_CAP, g - ex);
        return [ex, b];
      };
      const [exHouse, exBonds] = relief(gain), [exHouseI, exBondsI] = relief(gainIdx);
      const limit = isNew ? 400000 : age === 2 ? 500000 : age === 1 ? 300000 : 250000;
      const shortfall = isInd ? Math.max(0, limit - other) : 0;
      let taxable = 0, tax = 0, taxA = null, taxB = null, chosen = '', label = '';
      if (gain <= 0) { label = longTerm ? 'Long-term capital loss' : 'Short-term capital loss'; }
      else if (longTerm) {
        label = 'Long-term capital gain';
        taxable = Math.max(0, gain - exHouse - exBonds);
        taxA = LT_RATE * Math.max(0, taxable - Math.min(shortfall, taxable));
        if (canIndex) {
          const taxableI = Math.max(0, gainIdx - exHouseI - exBondsI);
          taxB = IDX_RATE * Math.max(0, taxableI - Math.min(shortfall, taxableI));
          tax = Math.min(taxA, taxB); chosen = taxB < taxA ? 'idx' : 'flat';
        } else { tax = taxA; chosen = 'flat'; }
      } else {
        label = 'Short-term capital gain';
        taxable = gain;
        // Added to other income and taxed at slab rates, with the engine's rebate, surcharge and cess.
        tax = T.compute(other + gain, isNew, age, '2026-27').total - T.compute(other, isNew, age, '2026-27').total;
      }
      const cess = longTerm && gain > 0 ? tax * CESS : 0, total = longTerm ? tax + cess : tax;
      const row = (k, v) => '<tr><td>' + k + '</td><td>' + fmt(v) + '</td></tr>';
      const sec = longTerm ? 'Section 197 of the Income-tax Act, 2025 (Section 112 of the 1961 Act)' : 'slab rates, as the asset was held for 24 months or less';
      let working = row('Full value of consideration' + (useSdv ? ', stamp duty value (more than 110% of the price)' : ''), consideration) + (exp ? row('Less sale expenses', -exp) : '') +
        row('Less cost of acquisition' + (pre2001 && fmv01 > 0 ? ' (fair market value on 1 April 2001)' : ''), -costUsed) + (imp ? row('Less cost of improvement', -imp) : '') + row(label, gain);
      if (longTerm && gain > 0) {
        if (exHouse) working += row('Less exemption for the new house, Section ' + (kind === 'house' ? '82' : '86'), -exHouse);
        if (exBonds) working += row('Less exemption for capital gains bonds, Section 85', -exBonds);
        if (shortfall) working += row('Less unused basic exemption limit', -Math.min(shortfall, taxable));
        working += row('Taxable gain without indexation', Math.max(0, taxable - Math.min(shortfall, taxable))) + row('Tax at 12.5% (A)', taxA);
        if (canIndex) {
          working += row('Indexed cost: ' + H.inr(costUsed) + ' × ' + saleIdx + ' / ' + buyIdx + ' (FY ' + C.label(C.fyOf(bdate) < 2001 ? 2001 : C.fyOf(bdate)) + ')', -idxCost) + (imp ? row('Indexed improvement: ' + H.inr(imp) + ' × ' + saleIdx + ' / ' + impIdx, -idxImp) : '') +
            row('Gain with indexation', gainIdx) + ((exHouseI || exBondsI) ? row('Less the same exemptions on the indexed gain', -(exHouseI + exBondsI)) : '') + row('Tax at 20% on the indexed gain (B)', taxB) +
            row('Tax payable: the lower of A and B', tax);
        }
        working += row('Health and education cess 4%', cess) + row('Total tax on this sale', total);
      } else if (gain > 0) working += row('Extra tax at your slab rates, with rebate, surcharge and cess', total);
      const stat = longTerm && gain > 0 && canIndex ? (chosen === 'idx' ? '20% with indexation is lower' : '12.5% without indexation is lower') : longTerm && gain > 0 ? 'Tax at 12.5% plus cess' : gain > 0 ? 'Tax at slab rates' : 'No tax; loss to set off or carry forward';
      out.innerHTML =
        '<div class="big"><div class="stat' + (gain < 0 ? ' warn' : '') + '"><b>' + fmt(gain) + '</b><span>' + label + '</span></div>' +
        (canIndex && gain > 0 ? '<div class="stat"><b>' + fmt(gainIdx) + '</b><span>Gain with indexation</span></div>' : '<div class="stat"><b>' + H.inr(taxable) + '</b><span>Taxable gain</span></div>') +
        '<div class="stat best" id="tax"><b>' + H.inr(Math.round(total)) + '</b><span>' + stat + '</span></div></div>' +
        '<p class="note">Held from ' + dmy(bdate) + ' to ' + dmy(sdate) + ', ' + (longTerm ? 'more than 24 months, so long term' : '24 months or less, so short term') + (gain > 0 ? '. Taxed under ' + sec + '.' : '.') +
        (longTerm && isInd && bdate >= CUTOFF ? ' Bought on or after 23 July 2024, so there is no indexation option.' : '') + (longTerm && !isInd ? ' The indexation comparison is only for resident individuals and HUFs.' : '') + '</p>' +
        '<div class="tbl-wrap"><table><thead><tr><th>Working</th><th>Amount</th></tr></thead><tbody>' + working + '</tbody></table></div>' +
        '<p class="note">' + (gain < 0 ? 'A long-term loss can be set off only against long-term gains; a short-term loss against any capital gain. Either can be carried forward for eight years if the return is filed on time. The loss is computed without indexation.' :
          longTerm ? 'The Section 87A rebate does not reduce tax on these gains in the new regime. Surcharge applies if total income exceeds ₹50 lakh and is not included; on these gains it is capped at 15%. Unused gain meant for a new house must be deposited in a Capital Gains Account Scheme account before the return due date.' :
          'A short-term gain on property is added to your income and taxed at slab rates, so the figure shown is the extra tax across the year, including rebate, surcharge and cess. The reinvestment reliefs apply only to long-term gains.') + '</p>';
    });
  },
  explainer: `
<h2>How property gains are taxed in FY 2026-27</h2>
<p>A house, flat, plot or commercial building is a long-term capital asset once it has been held for more than 24 months; sold sooner, the gain is short term and simply joins your other income at slab rates. Long-term gains are taxed under Section 197 of the Income-tax Act, 2025, which replaced Section 112 of the 1961 Act on 1 April 2026, at 12.5% without indexation, plus 4% cess. That flat rate came in with Budget 2024 on 23 July 2024, and it came with a transitional choice: a resident individual or Hindu undivided family selling land or a building acquired before 23 July 2024 may instead have the tax worked out at 20% on the gain after indexation, and pays whichever is lower. The Act words this as ignoring the excess of the 12.5% tax over the 20% indexed tax, which is what the calculator does. Anyone who bought on or after that date, and every non-resident, company or firm, has only the 12.5% rate.</p>
<span class="formula">Indexed cost = cost × CII of the year of sale (384 for 2026-27) ÷ CII of the year of purchase (or 100 for 2001-02 if earlier)
Tax = lower of 12.5% × (gain without indexation) and 20% × (gain with indexation), plus 4% cess</span>
<h3>The index</h3>
<p>The Cost Inflation Index runs from 100 in 2001-02 to 384 in 2026-27, notified by the CBDT on 15 July 2026. A flat bought for ₹40 lakh in June 2015 (index 254) and sold in October 2026 has an indexed cost of ₹40,00,000 × 384 ÷ 254, about ₹60.5 lakh. Sold for ₹90 lakh, the gain is ₹50 lakh without indexation, taxed at 12.5% for ₹6,25,000, or ₹29.5 lakh with indexation, taxed at 20% for ₹5,90,551. The second is lower, so that is the tax, plus cess. For a property that has roughly doubled in a decade the two come out close; for one bought long ago and held through years of high inflation, indexation usually wins, and for recent purchases that rose fast, the flat rate wins. The cost of improvement is indexed from the year the work was done. Property bought before 1 April 2001 may take its fair market value on that date as the cost, capped at the stamp duty value then.</p>
<h3>Stamp duty value</h3>
<p>If the stamp duty value (the circle rate value the registrar uses) is higher than the price you actually received, the law takes the stamp duty value as the sale consideration, unless it is within 110% of the price. Enter it and the calculator applies the rule. A seller who believes the circle rate overstates the property can ask the assessing officer to refer it for valuation.</p>
<h3>Reinvestment relief</h3>
<p>Three exemptions can wipe out the tax on a long-term gain. Section 82 (the old Section 54) exempts the gain on a residential house to the extent you buy another residential house in India within one year before or two years after the sale, or build one within three years; cost above ₹10 crore is ignored, and a gain of up to ₹2 crore may once in a lifetime be put into two houses. Section 86 (the old 54F) does the same for any other long-term asset, including land, but proportionately: the exempt gain is the gain multiplied by the cost of the new house and divided by the net sale consideration, and the seller must not own more than one other house. Section 85 (the old 54EC) exempts gain from land or a building invested within six months in notified five-year bonds, up to ₹50 lakh in the year and the next together. The calculator applies the house exemption first and then the bonds, and uses both against the indexed gain too when comparing the two rates.</p>
<h3>Short-term sales</h3>
<p>Sell within 24 months and none of this applies: the gain is added to your income and taxed at your slab, with the rebate, surcharge and cess that your total income attracts. The calculator shows the extra tax the gain causes across the year, so a seller with ₹12 lakh of salary who makes a ₹50 lakh short-term gain sees the tax on ₹62 lakh less the tax on ₹12 lakh.</p>
<p class="tiny">Not covered: TDS of 1% on purchases above ₹50 lakh and the higher rates for non-resident sellers, joint ownership splits, inherited property (the previous owner’s holding period and cost carry over), agricultural land outside municipal limits, and surcharge above ₹50 lakh of income. Figures were verified on 24 November 2026 against reproductions of Sections 2(101), 72, 76, 78, 82, 85, 86 and 197 of the Income-tax Act, 2025 and the CBDT index notification.</p>`,
  faq: [
    { q: 'Can I still choose indexation?', a: '<p>Only if you are a resident individual or HUF, the asset is land or a building, and you bought it before 23 July 2024. Then the tax is the lower of 12.5% without indexation and 20% with it. For purchases on or after that date, and for all other sellers, the rate is 12.5% without indexation.</p>' },
    { q: 'Does indexation also reduce a loss or the exemption I can claim?', a: '<p>No. The Act only ignores the excess tax; the gain itself, and any loss, is computed without indexation. The calculator applies the reinvestment exemptions to the indexed gain as well so that the comparison is like for like.</p>' },
    { q: 'I inherited the flat. What purchase date and cost do I use?', a: '<p>The date and cost at which the person you inherited from acquired it, and the indexation runs from their year of purchase (or 2001-02 if earlier). Enter those figures rather than the date of inheritance.</p>' },
    { q: 'What if I have not bought the new house by the time I file?', a: '<p>Deposit the unused gain in a Capital Gains Account Scheme account at a bank before the return due date and withdraw it to buy or build within the time allowed. Money left unused after three years is taxed as a gain of that year.</p>' },
    { q: 'Is the 1% TDS the buyer deducted my tax?', a: '<p>No. It is an advance against your liability, credited when you file. The tax shown here is the full amount; the TDS reduces what you still have to pay.</p>' },
  ],
};
