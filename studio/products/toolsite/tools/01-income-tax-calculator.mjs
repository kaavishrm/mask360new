import taxEngine from './lib/income-tax.mjs';

export default {
  slug: 'income-tax-calculator',
  lib: [taxEngine],
  title: 'Income Tax Calculator FY 2026-27',
  h1: 'Income Tax Calculator for FY 2026-27 (AY 2027-28)',
  summary: 'New vs old regime, side by side, with rebate, surcharge and cess.',
  description: 'Free income tax calculator for FY 2026-27 (AY 2027-28). Compare the new and old tax regimes side by side with standard deduction, Section 87A rebate, surcharge, marginal relief and 4% cess.',
  category: 'tax',
  related: ['income-tax-calculator-fy-2025-26', 'in-hand-salary-calculator', 'tds-on-salary-calculator', 'hra-calculator'],
  intro: 'Enter your salary and deductions once. The calculator works out tax under both regimes for FY 2026-27 and tells you which one leaves more in your hand.',
  tool: `
<form id="f">
  <div class="grid">
    <label>Age on 31 March 2027<select name="age"><option value="0">Below 60</option><option value="1">60 to 79 (senior citizen)</option><option value="2">80 or above (super senior)</option></select></label>
    <label>Gross salary for the year (₹)<input type="number" name="salary" value="1200000" min="0" step="1000"></label>
    <label>Other income (₹) <span class="hint">interest, rent, freelance, etc.</span><input type="number" name="other" value="0" min="0" step="1000"></label>
    <label>Employer NPS contribution, 80CCD(2) (₹) <span class="hint">allowed in both regimes</span><input type="number" name="nps2" value="0" min="0" step="1000"></label>
  </div>
  <fieldset><legend>Deductions and exemptions (old regime only)</legend>
  <div class="grid">
    <label>HRA exemption (₹)<input type="number" name="hra" value="0" min="0" step="1000"></label>
    <label>Section 80C (₹) <span class="hint">PF, PPF, ELSS, LIC, tuition, home loan principal. Max 1,50,000</span><input type="number" name="c80" value="150000" min="0" max="150000" step="1000"></label>
    <label>Section 80D health insurance (₹)<input type="number" name="d80" value="25000" min="0" step="1000"></label>
    <label>NPS own contribution, 80CCD(1B) (₹) <span class="hint">Max 50,000</span><input type="number" name="nps1b" value="0" min="0" max="50000" step="1000"></label>
    <label>Home loan interest, Section 24(b) (₹) <span class="hint">Max 2,00,000 for self-occupied</span><input type="number" name="hl" value="0" min="0" max="200000" step="1000"></label>
    <label>Other deductions (₹) <span class="hint">80E, 80G, 80TTA, LTA, professional tax</span><input type="number" name="oth" value="0" min="0" step="1000"></label>
  </div></fieldset>
  <div class="result" id="out"></div>
</form>`,
  script: function () {
    const H = window.H, T = taxEngine();
    const FY = '2026-27';
    function compute(taxable, isNew, age) { return T.compute(taxable, isNew, age, FY); }
    H.bind('f', (f) => {
      const age = H.val(f, 'age');
      const gross = H.val(f, 'salary') + H.val(f, 'other');
      const nps2 = H.val(f, 'nps2');
      const newTaxable = Math.max(0, gross - 75000 - nps2);
      const oldDed = 50000 + Math.min(150000, H.val(f, 'c80')) + H.val(f, 'd80') + Math.min(50000, H.val(f, 'nps1b')) + Math.min(200000, H.val(f, 'hl')) + H.val(f, 'oth') + H.val(f, 'hra') + nps2;
      const oldTaxable = Math.max(0, gross - oldDed);
      const n = compute(newTaxable, true, age), o = compute(oldTaxable, false, age);
      const better = n.total <= o.total ? 'new' : 'old';
      const diff = Math.abs(n.total - o.total);
      const fmt = (v) => (Math.round(v) < 0 ? '-' : '') + H.inr(Math.abs(v));
      const row = (k, a, b) => '<tr><td>' + k + '</td><td>' + fmt(a) + '</td><td>' + fmt(b) + '</td></tr>';
      document.getElementById('out').innerHTML =
        '<div class="big"><div class="stat' + (better === 'new' ? ' best' : '') + '"><b>' + H.inr(n.total) + '</b><span>Tax under new regime</span></div>' +
        '<div class="stat' + (better === 'old' ? ' best' : '') + '"><b>' + H.inr(o.total) + '</b><span>Tax under old regime</span></div>' +
        '<div class="stat"><b>' + H.inr(diff) + '</b><span>You save with the ' + better + ' regime</span></div></div>' +
        '<div class="tbl-wrap"><table><thead><tr><th>Line</th><th>New regime</th><th>Old regime</th></tr></thead><tbody>' +
        row('Gross income', gross, gross) + row('Deductions', 75000 + nps2, oldDed) + row('Taxable income', newTaxable, oldTaxable) +
        row('Tax on slabs', n.tax + n.rebate, o.tax + o.rebate) + row('Rebate u/s 87A', -n.rebate, -o.rebate) + row('Surcharge (after marginal relief)', n.sur, o.sur) + row('Health and education cess 4%', n.cess, o.cess) + row('Total tax', n.total, o.total) +
        row('Monthly tax (approx.)', n.total / 12, o.total / 12) + '</tbody></table></div>' +
        '<p class="note">Effective rate: ' + (gross ? (100 * Math.min(n.total, o.total) / gross).toFixed(1) : '0.0') + '% of gross income under the ' + better + ' regime. Standard deduction applied automatically: ₹75,000 new, ₹50,000 old.</p>';
    });
  },
  explainer: `
<h2>How this calculator works</h2>
<p>For FY 2026-27 (income earned between 1 April 2026 and 31 March 2027) the slabs announced in Budget 2025 continue to apply. The new regime is the default. You can still opt for the old regime if its deductions bring your tax lower, and this page shows both so you do not have to guess.</p>
<h3>New regime slabs for FY 2026-27</h3>
<div class="tbl-wrap"><table><thead><tr><th>Taxable income</th><th>Rate</th></tr></thead><tbody>
<tr><td>Up to ₹4,00,000</td><td>Nil</td></tr><tr><td>₹4,00,001 to ₹8,00,000</td><td>5%</td></tr><tr><td>₹8,00,001 to ₹12,00,000</td><td>10%</td></tr><tr><td>₹12,00,001 to ₹16,00,000</td><td>15%</td></tr><tr><td>₹16,00,001 to ₹20,00,000</td><td>20%</td></tr><tr><td>₹20,00,001 to ₹24,00,000</td><td>25%</td></tr><tr><td>Above ₹24,00,000</td><td>30%</td></tr></tbody></table></div>
<p>Under the new regime the Section 87A rebate wipes out tax entirely when taxable income is ₹12,00,000 or less. With the ₹75,000 standard deduction, a salaried person pays nothing up to a gross salary of ₹12,75,000. Just above that line, marginal relief makes sure the tax never exceeds the amount by which income crosses ₹12 lakh.</p>
<h3>Old regime slabs</h3>
<p>Nil up to ₹2,50,000 (₹3,00,000 for senior citizens and ₹5,00,000 for those 80 and above), then 5% up to ₹5,00,000, 20% up to ₹10,00,000 and 30% above that. The 87A rebate of up to ₹12,500 applies when taxable income is ₹5,00,000 or less. The standard deduction is ₹50,000.</p>
<h3>Surcharge and cess</h3>
<p>Surcharge applies on tax when taxable income crosses ₹50 lakh: 10% up to ₹1 crore, 15% up to ₹2 crore, 25% up to ₹5 crore, and 37% above ₹5 crore under the old regime (capped at 25% under the new regime). Marginal relief ensures the extra tax never exceeds the extra income. A 4% health and education cess is added on tax plus surcharge in both regimes.</p>
<h3>Which regime should you pick?</h3>
<p>The old regime only wins when your deductions are large: typically a full 80C, a sizeable HRA exemption, home loan interest and health insurance together. For most salaried people with deductions under about ₹3.75 lakh, the new regime is lower. Run both here with your real numbers rather than relying on a rule of thumb.</p>
<p class="tiny">Filing a late return for the previous year? Use the <a href="/income-tax-calculator-fy-2025-26/">FY 2025-26 calculator</a>, which also works out the late fee and interest. Capital gains taxed at special rates, agricultural income, and relief under Section 89 are outside this calculator. The slabs shown are those in force when the page was last updated and will be revised if a Budget changes them.</p>`,
  faq: [
    { q: 'Is the new tax regime the default for FY 2026-27?', a: '<p>Yes. The new regime applies unless you opt for the old one. Salaried taxpayers can switch every year when filing their return. Those with business income can opt out of the new regime only once.</p>' },
    { q: 'What is the maximum salary with zero tax in the new regime?', a: '<p>A gross salary of ₹12,75,000. After the ₹75,000 standard deduction, taxable income is ₹12,00,000, and the Section 87A rebate cancels the tax on it.</p>' },
    { q: 'Does the calculator include HRA for the new regime?', a: '<p>No. HRA exemption, 80C, 80D and most other deductions are available only in the old regime. The new regime allows the standard deduction and the employer NPS contribution under 80CCD(2).</p>' },
    { q: 'Which financial year does this calculator use?', a: '<p>FY 2026-27, which is assessment year 2027-28. The slabs are the ones in force on the date shown at the bottom of the page.</p>' },
  ],
};
