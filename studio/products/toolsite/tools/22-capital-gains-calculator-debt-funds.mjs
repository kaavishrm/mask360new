import taxEngine from './lib/income-tax.mjs';

export default {
  slug: 'capital-gains-calculator-debt-funds',
  title: 'Capital Gains Tax Calculator for Debt Funds FY 2026-27',
  h1: 'Capital Gains Tax Calculator for debt, gold and other non-equity funds, FY 2026-27',
  summary: 'Units bought before or after 1 April 2023, the 24-month test, slab rate or 12.5%, and the tax due.',
  description: 'Free capital gains tax calculator for debt mutual funds, gold funds, international funds and other non-equity funds in India for FY 2026-27 (tax year 2026-27). Applies the 1 April 2023 cut-off for specified funds, the 24-month holding period, slab rates with rebate, surcharge and cess for short-term gains and 12.5% for long-term gains.',
  category: 'tax',
  lib: [taxEngine],
  related: ['capital-gains-calculator-shares', 'capital-gains-calculator-property', 'fd-calculator', 'sip-calculator'],
  intro: 'Enter one redemption of debt fund, liquid fund, gold fund, international fund or hybrid fund units. The calculator checks when the units were bought and how long they were held, then shows the tax at your slab or at the long-term rate for FY 2026-27.',
  tool: `
<form id="f">
  <fieldset><legend>The redemption</legend><div class="grid">
    <label>Fund type<select name="kind"><option value="debt">Debt or liquid fund (more than 65% in debt)</option><option value="other">Gold, international, hybrid or fund of funds (65% or less in debt, under 65% in equity)</option></select></label>
    <label>Units redeemed<input type="number" name="qty" value="1000" min="0" step="0.001"></label>
    <label>Purchase date<input type="date" name="bdate" value="2022-06-15"></label>
    <label>Purchase NAV (₹)<input type="number" name="bprice" value="25" min="0" step="0.0001"></label>
    <label>Redemption date<input type="date" name="sdate" value="2026-10-10"></label>
    <label>Redemption NAV (₹)<input type="number" name="sprice" value="32" min="0" step="0.0001"></label>
    <label>Exit load and other charges (₹)<input type="number" name="exp" value="0" min="0" step="1"></label>
  </div></fieldset>
  <fieldset><legend>Your year</legend><div class="grid">
    <label>Tax regime<select name="regime"><option value="new">New regime (default)</option><option value="old">Old regime</option></select></label>
    <label>Age on 31 March 2027 <span class="hint">Old regime exemption limit</span><select name="age"><option value="0">Below 60</option><option value="1">60 to 79</option><option value="2">80 or above</option></select></label>
    <label>Other taxable income this year (₹) <span class="hint">After deductions, before this gain</span><input type="number" name="other" value="1200000" min="0" step="10000"></label>
    <label class="chk"><input type="checkbox" name="res" checked> Resident in India</label>
  </div></fieldset>
  <div class="result" id="out"></div>
</form>`,
  script: function () {
    const H = window.H, T = taxEngine();
    const LT_RATE = 0.125, CESS = 0.04, CUTOFF = new Date('2023-04-01T00:00:00');
    function parse(s) { return s ? new Date(s + 'T00:00:00') : null; }
    function addMonths(d, m) { const x = new Date(d.getTime()); x.setMonth(x.getMonth() + m); return x; }
    function dmy(d) { return String(d.getDate()).padStart(2, '0') + '/' + String(d.getMonth() + 1).padStart(2, '0') + '/' + d.getFullYear(); }
    const fmt = (v) => (Math.round(v) < 0 ? '-' : '') + H.inr(Math.abs(v));
    H.bind('f', (f) => {
      const out = document.getElementById('out');
      const kind = H.str(f, 'kind'), qty = H.val(f, 'qty'), bprice = H.val(f, 'bprice'), sprice = H.val(f, 'sprice'), exp = H.val(f, 'exp');
      const bdate = parse(H.str(f, 'bdate')), sdate = parse(H.str(f, 'sdate'));
      const isNew = H.str(f, 'regime') === 'new', age = H.val(f, 'age'), other = H.val(f, 'other'), resident = f.elements.res.checked;
      if (!bdate || !sdate || !(sdate > bdate) || !qty) { out.innerHTML = '<p class="note">Enter the units, a purchase date and a later redemption date.</p>'; return; }
      const gain = (sprice - bprice) * qty - exp;
      const held24 = sdate > addMonths(bdate, 24);
      // Section 76: specified fund units bought on or after 1 April 2023 are short term whatever the holding period.
      const deemedShort = kind === 'debt' && bdate >= CUTOFF;
      const longTerm = held24 && !deemedShort;
      const limit = isNew ? 400000 : age === 2 ? 500000 : age === 1 ? 300000 : 250000;
      const shortfall = resident ? Math.max(0, limit - other) : 0;
      let taxable = 0, tax = 0, cess = 0, total = 0, label = '';
      if (gain <= 0) label = longTerm ? 'Long-term capital loss' : 'Short-term capital loss';
      else if (longTerm) {
        label = 'Long-term capital gain';
        taxable = Math.max(0, gain - Math.min(shortfall, gain));
        tax = taxable * LT_RATE; cess = tax * CESS; total = tax + cess;
      } else {
        label = 'Short-term capital gain';
        taxable = gain;
        total = T.compute(other + gain, isNew, age, '2026-27').total - T.compute(other, isNew, age, '2026-27').total;
      }
      const why = deemedShort ? 'Bought on or after 1 April 2023 in a fund with more than 65% in debt, so the gain is short term whatever the holding period (Section 76 of the Income-tax Act, 2025, the old Section 50AA).' :
        held24 ? 'Held for more than 24 months' + (kind === 'debt' ? ' and bought before 1 April 2023' : '') + ', so long term under Section 197 (the old Section 112) at 12.5% without indexation.' :
        'Held for 24 months or less, so short term and taxed at your slab rates.';
      const row = (k, v) => '<tr><td>' + k + '</td><td>' + fmt(v) + '</td></tr>';
      out.innerHTML =
        '<div class="big"><div class="stat' + (gain < 0 ? ' warn' : '') + '"><b>' + fmt(gain) + '</b><span>' + label + '</span></div>' +
        '<div class="stat"><b>' + H.inr(taxable) + '</b><span>Taxable gain</span></div>' +
        '<div class="stat best" id="tax"><b>' + H.inr(Math.round(total)) + '</b><span>' + (gain <= 0 ? 'No tax; loss to set off or carry forward' : longTerm ? 'Tax at 12.5% plus 4% cess' : 'Extra tax at your slab rates') + '</span></div></div>' +
        '<p class="note">Held from ' + dmy(bdate) + ' to ' + dmy(sdate) + '. ' + why + '</p>' +
        '<div class="tbl-wrap"><table><thead><tr><th>Working</th><th>Amount</th></tr></thead><tbody>' +
        row('Redemption value, ' + qty + ' × ' + H.inr(sprice, 2), sprice * qty) + (exp ? row('Less exit load and charges', -exp) : '') + row('Less cost, ' + qty + ' × ' + H.inr(bprice, 2), -bprice * qty) + row(label, gain) +
        (gain > 0 && longTerm ? (shortfall ? row('Less unused basic exemption limit', -Math.min(shortfall, gain)) : '') + row('Taxable gain', taxable) + row('Tax at 12.5%', tax) + row('Health and education cess 4%', cess) + row('Total tax on this redemption', total) : '') +
        (gain > 0 && !longTerm ? row('Tax on ' + H.inr(other + gain) + ' less tax on ' + H.inr(other) + ', with rebate, surcharge and cess', total) : '') + '</tbody></table></div>' +
        '<p class="note">' + (gain < 0 ? (longTerm ? 'A long-term loss can be set off only against long-term gains, and carried forward for eight years if the return is filed on time.' : 'A short-term loss can be set off against short-term or long-term gains this year, and carried forward for eight years if the return is filed on time.') :
          longTerm ? 'No indexation applies to fund units sold after 23 July 2024. The Section 87A rebate does not reduce this tax in the new regime, and surcharge above ₹50 lakh of total income, capped at 15% on these gains, is not included.' :
          'Short-term gains are ordinary income: the rebate, slab and surcharge your total income attracts all apply, which is why the tax is shown as the difference between two full-year computations.') + '</p>';
    });
  },
  explainer: `
<h2>How debt and other non-equity funds are taxed in FY 2026-27</h2>
<p>Mutual fund units that are not equity-oriented fall into two groups, and the date you bought them matters as much as how long you held them. A specified mutual fund is one that invests more than 65% of its money in debt and money market instruments, or a fund of funds that puts 65% or more into such funds: liquid, overnight, money market, corporate bond, gilt, banking and PSU, credit risk and most target maturity funds. Units of these bought on or after 1 April 2023 are, by Section 76 of the Income-tax Act, 2025 (the old Section 50AA), short term whatever the holding period, so the gain is added to your income and taxed at your slab. Units of the same funds bought before 1 April 2023 escape that rule: held for more than 24 months they are long term and taxed at 12.5% without indexation under Section 197, and held for 24 months or less they are short term at slab rates.</p>
<span class="formula">Gain = (redemption NAV minus purchase NAV) × units, less exit load
Specified fund, bought on or after 1 April 2023: slab rate, always
Otherwise: slab rate if held 24 months or less, 12.5% if held longer</span>
<h3>Funds outside the 65% debt rule</h3>
<p>Gold funds and gold ETFs, international and overseas feeder funds, funds of funds holding under 65% in debt, and hybrid funds with between 35% and 65% in Indian equity are not specified funds and are not equity-oriented either. For them the only test is time: more than 24 months is long term at 12.5%, and anything shorter is short term at slab rates, regardless of when they were bought. Fund-house tax reckoners for 2026-27 list these categories the same way, and a scheme’s own factsheet states its asset mix, which is averaged over the year for this purpose.</p>
<h3>Why the 24 months and no indexation</h3>
<p>Before 23 July 2024 these units needed 36 months to be long term and the long-term rate was 20% with indexation. Budget 2024 cut the holding period to 24 months and the rate to 12.5%, and removed indexation for everything except the transitional choice on land and buildings. A debt fund unit bought in 2019 and sold today therefore pays 12.5% on the whole nominal gain. For many investors in the 30% bracket that is still well below slab, which is why older debt fund holdings remain attractive to keep rather than churn.</p>
<h3>Short-term gains at slab</h3>
<p>Because a short-term gain is ordinary income, the tax it causes depends on everything else in your return: the new regime rebate that makes income up to ₹12 lakh tax free, the marginal relief just above it, and surcharge above ₹50 lakh. The calculator therefore computes the tax on your other income with and without the gain and shows the difference. Someone with ₹12 lakh of salary and a ₹7,000 gain pays ₹7,280, which is the gain plus cess, because marginal relief caps the tax at the income over ₹12 lakh; someone with ₹5 lakh of salary and the same gain pays nothing.</p>
<h3>Losses and set-off</h3>
<p>A short-term loss can be set off against any capital gain in the year. A long-term loss can be set off only against long-term gains, including those on shares and property. Both carry forward for eight years if the return is filed by the due date. Systematic withdrawal plans and partial redemptions use first in, first out, so the oldest units go first, and for a holding straddling 1 April 2023 that means the pre-cut-off units with their better treatment are consumed before the newer ones.</p>
<p class="tiny">Not covered: market linked debentures and unlisted bonds (also short term under Section 76), listed bonds and debentures (12 months, 12.5%), dividends from the IDCW option (slab rate, TDS above ₹10,000), non-resident rates and treaty relief, and surcharge. Figures were verified on 24 November 2026 against the ICICI Prudential tax reckoner for FY 2026-27 and reproductions of Sections 2(101), 76 and 197 of the Income-tax Act, 2025.</p>`,
  faq: [
    { q: 'I started a debt fund SIP in 2021 and still invest. How are the units taxed?', a: '<p>Instalment by instalment. Units bought before 1 April 2023 are long term after 24 months at 12.5%; units bought from that date are short term at slab rates however long you hold them. Redemptions go out first in, first out, so the 2021 and 2022 units leave first.</p>' },
    { q: 'Is a gold ETF a specified fund?', a: '<p>No. It holds gold, not debt, so it is outside the 65% debt test. Units held for more than 24 months are long term at 12.5% whenever they were bought; 24 months or less is short term at slab.</p>' },
    { q: 'Do I get indexation on units bought in 2020?', a: '<p>Not for a sale in FY 2026-27. Indexation on fund units ended for transfers on or after 23 July 2024. The 2020 units are long term at 12.5% on the nominal gain.</p>' },
    { q: 'Does the ₹1.25 lakh exemption apply?', a: '<p>No. That exemption is only for listed shares and equity-oriented funds under Section 198. Debt and other non-equity funds get no fixed exemption, only the unused basic exemption limit for residents.</p>' },
    { q: 'What about an arbitrage or balanced advantage fund?', a: '<p>If it keeps 65% or more in Indian equity it is equity-oriented and belongs in the shares calculator: 20% short term and 12.5% long term after 12 months. If it holds between 35% and 65% in equity, use this calculator with the second fund type.</p>' },
  ],
};
