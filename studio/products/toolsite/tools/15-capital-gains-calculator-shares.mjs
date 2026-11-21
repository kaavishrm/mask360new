export default {
  slug: 'capital-gains-calculator-shares',
  title: 'Capital Gains Tax Calculator for Shares and Equity Funds FY 2026-27',
  h1: 'Capital Gains Tax Calculator for listed shares and equity mutual funds, FY 2026-27',
  summary: 'Short or long term, grandfathered cost, the ₹1.25 lakh exemption and the tax due.',
  description: 'Free capital gains tax calculator for listed shares and equity mutual funds in India, FY 2026-27 (tax year 2026-27). Works out whether a sale is short or long term, applies the 31 January 2018 grandfathering, the ₹1.25 lakh exemption and the basic exemption shortfall, then shows tax at 20% or 12.5% plus cess.',
  category: 'tax',
  related: ['income-tax-calculator', 'sip-calculator', 'in-hand-salary-calculator', 'tds-on-salary-calculator'],
  intro: 'Enter one sale of listed shares or equity fund units. The calculator checks the holding period, works out the gain with the grandfathered cost where it applies, uses up the exemptions you are entitled to, and shows the tax and cess for FY 2026-27.',
  tool: `
<form id="f">
  <fieldset><legend>The sale</legend><div class="grid">
    <label>Asset<select name="asset"><option value="shares">Listed shares (STT paid)</option><option value="mf">Equity mutual fund units</option></select></label>
    <label>Quantity<input type="number" name="qty" value="100" min="0" step="1"></label>
    <label>Purchase date<input type="date" name="bdate" value="2024-06-15"></label>
    <label>Purchase price per unit (₹)<input type="number" name="bprice" value="1000" min="0" step="0.01"></label>
    <label>Sale date<input type="date" name="sdate" value="2026-10-10"></label>
    <label>Sale price per unit (₹)<input type="number" name="sprice" value="1800" min="0" step="0.01"></label>
    <label>Price or NAV on 31 January 2018 (₹ per unit) <span class="hint">Only if bought before 1 February 2018</span><input type="number" name="fmv" value="0" min="0" step="0.01"></label>
    <label>Brokerage and other sale expenses (₹) <span class="hint">Not STT</span><input type="number" name="exp" value="0" min="0" step="1"></label>
  </div></fieldset>
  <fieldset><legend>Your year</legend><div class="grid">
    <label>Tax regime<select name="regime"><option value="new">New regime (default)</option><option value="old">Old regime</option></select></label>
    <label>Age on 31 March 2027 <span class="hint">Old regime exemption limit</span><select name="age"><option value="0">Below 60</option><option value="1">60 to 79</option><option value="2">80 or above</option></select></label>
    <label>Other taxable income this year (₹) <span class="hint">Salary and other slab income after deductions</span><input type="number" name="other" value="1200000" min="0" step="10000"></label>
    <label>Long-term equity gains already booked this year (₹)<input type="number" name="prevl" value="0" min="0" step="1000"></label>
    <label class="chk"><input type="checkbox" name="res" checked> Resident in India</label>
  </div></fieldset>
  <div class="result" id="out"></div>
</form>`,
  script: function () {
    const H = window.H;
    const LT_RATE = 0.125, ST_RATE = 0.20, LT_EXEMPT = 125000, CESS = 0.04;
    const CUTOFF = new Date('2018-02-01T00:00:00');
    function parse(s) { return s ? new Date(s + 'T00:00:00') : null; }
    function addMonths(d, m) { const x = new Date(d.getTime()); x.setMonth(x.getMonth() + m); return x; }
    function dmy(d) { return String(d.getDate()).padStart(2, '0') + '/' + String(d.getMonth() + 1).padStart(2, '0') + '/' + d.getFullYear(); }
    H.bind('f', (f) => {
      const out = document.getElementById('out');
      const qty = H.val(f, 'qty'), bprice = H.val(f, 'bprice'), sprice = H.val(f, 'sprice'), fmv = H.val(f, 'fmv'), exp = H.val(f, 'exp');
      const bdate = parse(H.str(f, 'bdate')), sdate = parse(H.str(f, 'sdate'));
      if (!bdate || !sdate || !(sdate > bdate)) { out.innerHTML = '<p class="note">Enter a purchase date and a later sale date.</p>'; return; }
      const isNew = f.elements.regime.value === 'new', age = H.val(f, 'age'), resident = f.elements.res.checked;
      const other = H.val(f, 'other'), prevl = H.val(f, 'prevl');
      // Holding period: short term if held for 12 months or less.
      const longTerm = sdate > addMonths(bdate, 12);
      // Grandfathering for assets bought before 1 February 2018: cost is the higher of actual cost and the lower of the 31 Jan 2018 value and the sale price.
      const grandfathered = bdate < CUTOFF && fmv > 0 && longTerm;
      const costPerUnit = grandfathered ? Math.max(bprice, Math.min(fmv, sprice)) : bprice;
      const cost = costPerUnit * qty, sale = sprice * qty;
      const gain = sale - exp - cost;
      // Unused basic exemption can be set against these gains by a resident.
      const limit = isNew ? 400000 : age === 2 ? 500000 : age === 1 ? 300000 : 250000;
      const shortfall = resident ? Math.max(0, limit - other) : 0;
      let taxable = 0, exemptUsed = 0, shortUsed = 0, rate = 0, label = '';
      if (gain > 0) {
        if (longTerm) {
          const exemptLeft = Math.max(0, LT_EXEMPT - prevl);
          shortUsed = Math.min(shortfall, gain);
          exemptUsed = Math.min(exemptLeft, gain - shortUsed);
          taxable = Math.max(0, gain - shortUsed - exemptUsed); rate = LT_RATE; label = 'Long-term capital gain';
        } else {
          shortUsed = Math.min(shortfall, gain);
          taxable = Math.max(0, gain - shortUsed); rate = ST_RATE; label = 'Short-term capital gain';
        }
      } else label = longTerm ? 'Long-term capital loss' : 'Short-term capital loss';
      const tax = taxable * rate, cess = tax * CESS, total = tax + cess;
      const fmt = (v) => (Math.round(v) < 0 ? '-' : '') + H.inr(Math.abs(v));
      const row = (k, v) => '<tr><td>' + k + '</td><td>' + fmt(v) + '</td></tr>';
      const sec = longTerm ? '112A of the 1961 Act, now 198 of the 2025 Act' : '111A of the 1961 Act, now 196 of the 2025 Act';
      out.innerHTML =
        '<div class="big"><div class="stat' + (gain < 0 ? ' warn' : '') + '"><b>' + fmt(gain) + '</b><span>' + label + '</span></div>' +
        '<div class="stat"><b>' + H.inr(taxable) + '</b><span>Taxable after exemptions</span></div>' +
        '<div class="stat best" id="tax"><b>' + H.inr(total) + '</b><span>Tax at ' + (rate * 100) + '% plus 4% cess</span></div></div>' +
        '<p class="note">Held from ' + dmy(bdate) + ' to ' + dmy(sdate) + ', ' + (longTerm ? 'more than 12 months, so long term' : '12 months or less, so short term') + (gain > 0 ? '. Tax under Section ' + sec + '.' : '.') + '</p>' +
        '<div class="tbl-wrap"><table><thead><tr><th>Working</th><th>Amount</th></tr></thead><tbody>' +
        row('Sale value, ' + qty + ' × ' + H.inr(sprice, 2), sale) + (exp ? row('Less sale expenses', -exp) : '') +
        row('Less cost of acquisition' + (grandfathered ? ', grandfathered at ' + H.inr(costPerUnit, 2) + ' per unit' : ', ' + qty + ' × ' + H.inr(bprice, 2)), -cost) +
        row(label, gain) +
        (shortUsed ? row('Less unused basic exemption limit', -shortUsed) : '') +
        (longTerm && gain > 0 ? row('Less ₹1,25,000 exemption' + (prevl ? ' (remaining after gains already booked)' : ''), -exemptUsed) : '') +
        row('Taxable gain', taxable) + row('Tax at ' + (rate * 100) + '%', tax) + row('Health and education cess 4%', cess) + row('Total tax on this sale', total) + '</tbody></table></div>' +
        '<p class="note">' + (gain < 0 ? (longTerm ? 'A long-term loss can be set off only against long-term gains, and carried forward for eight years if the return is filed on time.' : 'A short-term loss can be set off against short-term or long-term gains this year, and carried forward for eight years if the return is filed on time.') :
          (bdate < CUTOFF && !fmv ? 'Bought before 1 February 2018: enter the 31 January 2018 price to apply grandfathering. ' : '') + 'The Section 87A rebate does not reduce tax on these gains in the new regime. Surcharge applies if total income exceeds ₹50 lakh and is not included here.') + '</p>';
    });
  },
  explainer: `
<h2>How equity gains are taxed in FY 2026-27</h2>
<p>Listed shares and equity-oriented mutual fund units on which securities transaction tax was paid have their own rates, set by Budget 2024 and unchanged since. Hold for twelve months or less and the gain is short term, taxed at 20% under Section 111A. Hold for more than twelve months and it is long term, taxed at 12.5% under Section 112A on the amount above ₹1,25,000 in a financial year. Neither gets indexation. A 4% health and education cess is added to the tax. Under the Income-tax Act, 2025, in force from 1 April 2026, these provisions are Sections 196 and 198; the rates are the same.</p>
<span class="formula">Gain          = Sale value minus sale expenses minus cost of acquisition
Short term    = 20% of the gain
Long term     = 12.5% of (gain minus ₹1,25,000 minus any unused basic exemption)</span>
<h3>Counting the holding period</h3>
<p>Twelve months means twelve months from the date of purchase. Shares bought on 15 June 2024 and sold on 15 June 2025 are short term; sold on 16 June 2025 they are long term. For units bought through a SIP, each instalment has its own purchase date and cost, and funds apply first in, first out when you redeem part of a holding.</p>
<h3>Grandfathering for purchases before 1 February 2018</h3>
<p>Long-term gains on equity were exempt until Budget 2018 taxed them. To avoid taxing gains that built up before that, the cost of anything bought before 1 February 2018 is taken as the higher of the actual cost and the lower of the fair market value on 31 January 2018 and the sale price. For shares the fair market value is the highest traded price on that day, and for mutual fund units the NAV on that day. A share bought at ₹100 in 2012, worth ₹400 on 31 January 2018 and sold today at ₹700 is taxed on ₹300, not ₹600. The calculator applies this when you enter the 31 January 2018 figure.</p>
<h3>Exemptions you can use</h3>
<p>Two reliefs reduce the taxable gain. The first ₹1,25,000 of long-term equity gains in a year is exempt; it is one limit shared across all your equity sales, so enter gains already booked this year and the calculator uses what is left. Second, a resident whose other income is below the basic exemption limit (₹4,00,000 in the new regime; ₹2,50,000, ₹3,00,000 or ₹5,00,000 by age in the old regime) can set the shortfall against these gains. What the gains do not get is the Section 87A rebate: from AY 2026-27 the rebate in the new regime cannot reduce tax on income charged at special rates, so a person with ₹8 lakh of salary and ₹2 lakh of short-term gains pays tax on the gains even though the salary alone would have been tax free.</p>
<h3>Losses</h3>
<p>A short-term loss can be set off against any capital gain in the year. A long-term loss can be set off only against long-term gains. Either can be carried forward for eight years, but only if the return is filed by the due date.</p>
<p class="tiny">Not covered: unlisted shares, debt and hybrid funds, gold, property, foreign stocks, buybacks and dividends, non-resident rates and treaty relief, and the surcharge for total income above ₹50 lakh, which is capped at 15% on these gains. Rates are those in force on the date at the bottom of the page.</p>`,
  faq: [
    { q: 'Is the ₹1,25,000 exemption per sale or per year?', a: '<p>Per financial year, across all your listed shares and equity fund units together. Once used up, every further long-term gain in that year is taxed at 12.5%.</p>' },
    { q: 'Do I pay tax if my total income is below ₹12 lakh?', a: '<p>On capital gains, yes. From AY 2026-27 the new regime rebate under Section 87A does not apply to tax on short-term gains under 111A or long-term gains under 112A. Only the ₹1,25,000 exemption and any unused basic exemption limit reduce them.</p>' },
    { q: 'Which price do I use for shares bought before 2018?', a: '<p>The highest price at which the share traded on 31 January 2018, or on the last trading day before it if it did not trade that day. Your broker’s capital gains statement usually shows it. For mutual funds it is the NAV on 31 January 2018.</p>' },
    { q: 'Does STT count as an expense?', a: '<p>No. Securities transaction tax is not deductible. Brokerage, exchange charges and stamp duty on the sale are.</p>' },
    { q: 'What about equity funds held for less than a year with a dividend option?', a: '<p>Dividends are taxed as income at your slab rate. Only the change in NAV between purchase and redemption is a capital gain, and the 12-month rule applies to it in the same way.</p>' },
  ],
};
