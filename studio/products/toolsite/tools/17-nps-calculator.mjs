export default {
  slug: 'nps-calculator',
  title: 'NPS Calculator',
  h1: 'NPS Calculator: corpus at 60, lump sum and monthly pension',
  summary: 'What a monthly NPS contribution grows to, how much you can take out and what the annuity pays.',
  description: 'Free NPS calculator for India. Estimate your National Pension System corpus at retirement from a monthly contribution and expected return, then the 60% tax-free lump sum, the annuity purchase and the monthly pension, with the current 80CCD tax rules.',
  category: 'investments',
  related: ['epf-calculator', 'sip-calculator', 'ppf-calculator', 'income-tax-calculator'],
  intro: 'Enter what you put in each month and the return you expect. The calculator compounds it monthly to your retirement age, then shows the split between the lump sum you can withdraw and the annuity that pays your pension.',
  tool: `
<form id="f">
  <div class="grid">
    <label>Current age<input type="number" name="age" value="30" min="18" max="74" step="1"></label>
    <label>Age at exit <span class="hint">60 is normal; up to 75 allowed</span><input type="number" name="ret" value="60" min="19" max="75" step="1"></label>
    <label>Monthly contribution (₹)<input type="number" name="c" value="5000" min="0" step="500"></label>
    <label>Yearly increase in contribution (%)<input type="number" name="g" value="0" min="0" max="30" step="1"></label>
    <label>Expected return (% per year) <span class="hint">Depends on your equity and debt mix</span><input type="number" name="r" value="10" min="0" max="20" step="0.5"></label>
    <label>Current NPS corpus (₹)<input type="number" name="bal" value="0" min="0" step="10000"></label>
    <label>Share used to buy annuity (%) <span class="hint">At least 40% at normal exit</span><input type="number" name="ann" value="40" min="40" max="100" step="5"></label>
    <label>Annuity rate (% per year) <span class="hint">What insurers pay on the annuity</span><input type="number" name="ar" value="6" min="0" max="15" step="0.25"></label>
  </div>
  <div class="result" id="out"></div>
</form>`,
  script: function () {
    const H = window.H;
    H.bind('f', (f) => {
      const age = H.val(f, 'age'), ret = H.val(f, 'ret'), years = Math.max(0, Math.round(ret - age));
      const i = H.val(f, 'r') / 100 / 12, g = H.val(f, 'g') / 100, annShare = Math.min(100, Math.max(40, H.val(f, 'ann'))) / 100, ar = H.val(f, 'ar') / 100;
      let c = H.val(f, 'c'), bal = H.val(f, 'bal'), invested = bal, rows = '';
      const yearFactor = Math.pow(1 + i, 12);
      // Contributions go in at the start of each month and compound monthly.
      const fvYear = (m) => i ? m * ((yearFactor - 1) / i) * (1 + i) : m * 12;
      for (let y = 1; y <= years; y++) {
        bal = bal * yearFactor + fvYear(c); invested += c * 12;
        rows += '<tr><td>Year ' + y + '<br><span class="tiny">age ' + (age + y) + '</span></td><td>' + H.inr(c) + '</td><td>' + H.inr(invested) + '</td><td>' + H.inr(bal - invested) + '</td><td>' + H.inr(bal) + '</td></tr>';
        c = c * (1 + g);
      }
      const annuity = bal * annShare, lump = bal - annuity, pension = annuity * ar / 12;
      document.getElementById('out').innerHTML =
        '<div class="big"><div class="stat best"><b>' + H.inr(bal) + '</b><span>Corpus at ' + ret + '</span></div>' +
        '<div class="stat"><b>' + H.inr(lump) + '</b><span>Lump sum, ' + Math.round((1 - annShare) * 100) + '%, tax free</span></div>' +
        '<div class="stat"><b>' + H.inr(annuity) + '</b><span>Used to buy the annuity, ' + Math.round(annShare * 100) + '%</span></div>' +
        '<div class="stat"><b>' + H.inr(pension) + '</b><span>Pension per month at ' + H.val(f, 'ar') + '%, taxable</span></div></div>' +
        '<div class="tbl-wrap"><table class="wide"><thead><tr><th>Year</th><th>Monthly</th><th>Invested</th><th>Growth</th><th>Corpus</th></tr></thead><tbody>' + rows + '</tbody></table></div>' +
        '<p class="note">Total invested ' + H.inr(invested) + ', growth ' + H.inr(bal - invested) + '. ' + (bal <= 500000 && years ? 'A corpus of ₹5 lakh or less can be withdrawn in full at exit with no annuity. ' : '') + 'Returns are not guaranteed; NPS funds are market linked. The annuity rate is what insurers offer at the time you retire.</p>';
    });
  },
  explainer: `
<h2>What the calculator does</h2>
<p>The National Pension System is a defined-contribution scheme: what you get depends only on what you put in and what the pension fund earns. Each month's contribution is compounded at the return you choose until your exit age. At exit, at least 40% of the corpus must be used to buy an annuity from a life insurer, which pays a monthly pension for life, and the rest, up to 60%, can be taken as a lump sum. If the corpus is ₹5 lakh or less the whole amount can be withdrawn.</p>
<span class="formula">Corpus    = existing corpus × (1 + r/12)^months + each contribution × (1 + r/12)^(months remaining)
Lump sum  = Corpus × (100% minus annuity share), tax free
Pension   = Corpus × annuity share × annuity rate ÷ 12, taxed as income</span>
<h3>Choosing the return</h3>
<p>NPS lets you set the equity share up to 75% in active choice, or follow an auto choice that reduces equity as you age. Over long periods the equity schemes of the pension funds have returned more than the government bond and corporate bond schemes, but a blended portfolio is usually estimated at 9% to 11% a year. A conservative mix sits closer to 8%. The difference compounds: ₹5,000 a month for 30 years is about ₹1 crore at 10% and about ₹75 lakh at 8%. Try both.</p>
<h3>The annuity and the pension</h3>
<p>The annuity rate is set by the insurer at the time of purchase, not now. Rates in recent years have ranged between about 5.5% and 7% for a life annuity without return of purchase price, and lower when the purchase price is returned to the nominee. The pension is taxable as income in the year it is received. The 60% lump sum is exempt from tax under Section 10(12A). Partial withdrawals during the term, up to 25% of your own contributions, are also exempt.</p>
<h3>Tax on contributions</h3>
<p>In the old regime your own contribution counts under 80CCD(1) within the ₹1,50,000 limit of 80C (up to 10% of salary for employees, 20% of gross income for the self-employed), and a further ₹50,000 under 80CCD(1B) on top. In the new regime neither applies, but an employer's contribution under 80CCD(2) is deductible in both regimes, up to 14% of basic plus DA for every employer since the Finance Act 2024 (10% in the old regime for private employers). That makes employer NPS one of the few ways to reduce tax in the new regime, and it is often available as a salary restructuring option.</p>
<h3>Rules to know</h3>
<p>Tier I is the pension account with these rules; Tier II is a separate, freely withdrawable account without the tax benefits. Minimum contribution is ₹1,000 a year to keep Tier I active. Exit before 60 requires 80% of the corpus to go into an annuity unless the corpus is ₹2.5 lakh or less. You can stay invested and keep contributing until 75, and defer the annuity purchase and lump sum after 60.</p>
<p class="tiny">Not modelled: fund management and custodian charges (small), the Atal Pension Yojana, the Unified Pension Scheme for central government staff, and annuity options with return of purchase price or joint life. Rules are those in force on the date at the bottom of the page.</p>`,
  faq: [
    { q: 'Is NPS better than EPF or PPF?', a: '<p>They are different. EPF and PPF pay a declared rate with no market risk and are fully tax free on withdrawal. NPS is market linked, historically higher returning, locks 40% into a taxable annuity, and has the extra ₹50,000 deduction in the old regime and the employer deduction in the new one. Most salaried people hold EPF compulsorily and add NPS for the tax break and equity exposure.</p>' },
    { q: 'Can I withdraw everything at 60?', a: '<p>Only if the corpus is ₹5 lakh or less. Otherwise at least 40% must buy an annuity. You may also defer the lump sum until 75 and withdraw it in instalments.</p>' },
    { q: 'What return should I assume?', a: '<p>Use 8% for a debt-heavy mix and 10% for a mix with the maximum equity, and treat both as estimates. The calculator compounds monthly at a constant rate, which real returns never follow.</p>' },
    { q: 'Does the 14% employer deduction apply to private sector employees in the new regime?', a: '<p>Yes. Since the Finance Act 2024 the 80CCD(2) limit under the new regime is 14% of basic plus DA for all employers. Under the old regime it remains 10% for private employers and 14% for government employers.</p>' },
    { q: 'Is the annuity income taxed?', a: '<p>Yes, at your slab rate in the year received, like any pension. Only the lump sum at exit and partial withdrawals within the limits are tax free.</p>' },
  ],
};
