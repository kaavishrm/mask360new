export default {
  slug: 'tds-on-salary-calculator',
  title: 'TDS on Salary Calculator FY 2026-27',
  h1: 'TDS on Salary Calculator: monthly deduction under Section 392 for FY 2026-27',
  summary: 'How much tax your employer should deduct each month, and how it changes mid-year.',
  description: 'Free TDS on salary calculator for FY 2026-27 (tax year 2026-27). Estimate the monthly tax your employer deducts under Section 392 of the Income-tax Act, 2025 (earlier Section 192), in the new or old regime, with mid-year adjustment for tax already deducted.',
  category: 'salary',
  related: ['in-hand-salary-calculator', 'income-tax-calculator', 'hra-calculator', 'salary-slip-generator'],
  intro: 'Enter your estimated salary for the year, your regime and any deductions you have declared. The calculator works out the tax for the year and spreads what is still due over the months left, which is how payroll does it.',
  tool: `
<form id="f">
  <div class="grid">
    <label>Age on 31 March 2027<select name="age"><option value="0">Below 60</option><option value="1">60 to 79</option><option value="2">80 or above</option></select></label>
    <label>Estimated gross salary for the year (₹) <span class="hint">All components including bonus, before any deduction</span><input type="number" name="salary" value="1500000" min="0" step="10000"></label>
    <label>Tax regime<select name="regime"><option value="new">New regime (default)</option><option value="old">Old regime</option></select></label>
    <label>Employer NPS contribution, 80CCD(2) (₹) <span class="hint">Deductible in both regimes</span><input type="number" name="nps2" value="0" min="0" step="1000"></label>
    <label>Other income declared to employer (₹) <span class="hint">Interest, rent; optional</span><input type="number" name="other" value="0" min="0" step="1000"></label>
    <label>TDS already deducted this year (₹)<input type="number" name="done" value="0" min="0" step="500"></label>
    <label>Months left in the year, including this one<input type="number" name="months" value="12" min="1" max="12" step="1"></label>
  </div>
  <fieldset><legend>Old regime only</legend><div class="grid">
    <label>Exempt allowances (₹) <span class="hint">HRA exemption, LTA</span><input type="number" name="exempt" value="0" min="0" step="1000"></label>
    <label>Professional tax for the year (₹)<input type="number" name="pt" value="2500" min="0" max="2500" step="100"></label>
    <label>Chapter VI-A deductions (₹) <span class="hint">80C, 80D, 80CCD(1B), 80E, 80G</span><input type="number" name="ded" value="150000" min="0" step="5000"></label>
    <label>Home loan interest, self-occupied (₹) <span class="hint">Max 2,00,000</span><input type="number" name="hl" value="0" min="0" max="200000" step="5000"></label>
  </div></fieldset>
  <div class="result" id="out"></div>
</form>`,
  script: function () {
    const H = window.H;
    const NEW = [[400000, 0], [800000, 0.05], [1200000, 0.10], [1600000, 0.15], [2000000, 0.20], [2400000, 0.25], [Infinity, 0.30]];
    function oldSlabs(age) { const ex = age === 2 ? 500000 : age === 1 ? 300000 : 250000; return [[ex, 0], [500000, 0.05], [1000000, 0.20], [Infinity, 0.30]]; }
    function slabTax(inc, slabs) { let t = 0, prev = 0; for (const [upto, r] of slabs) { if (inc > prev) t += (Math.min(inc, upto) - prev) * r; prev = upto; if (inc <= upto) break; } return t; }
    function surchargeRate(inc, isNew) { if (inc > 5e7) return isNew ? 0.25 : 0.37; if (inc > 2e7) return 0.25; if (inc > 1e7) return 0.15; if (inc > 5e6) return 0.10; return 0; }
    function thresholdBelow(inc) { let t = 0; for (const x of [5e6, 1e7, 2e7, 5e7]) if (inc > x) t = x; return t; }
    function compute(taxable, isNew, age) {
      const slabs = isNew ? NEW : oldSlabs(age);
      let tax = slabTax(taxable, slabs), rebate = 0;
      if (isNew) { if (taxable <= 1200000) rebate = tax; else { const cap = taxable - 1200000; if (tax > cap) rebate = tax - cap; } }
      else if (taxable <= 500000) rebate = Math.min(tax, 12500);
      const gross = tax; tax -= rebate;
      let sur = tax * surchargeRate(taxable, isNew);
      const th = thresholdBelow(taxable);
      if (sur > 0 && th > 0) { const maxAllowed = slabTax(th, slabs) * (1 + surchargeRate(th, isNew)) + (taxable - th); if (tax + sur > maxAllowed) sur = Math.max(0, maxAllowed - tax); }
      const cess = (tax + sur) * 0.04;
      return { gross, rebate, sur, cess, total: Math.round(tax + sur + cess) };
    }
    H.bind('f', (f) => {
      const age = H.val(f, 'age'), isNew = f.elements.regime.value === 'new';
      const salary = H.val(f, 'salary'), nps2 = H.val(f, 'nps2'), other = H.val(f, 'other');
      const done = H.val(f, 'done'), months = Math.min(12, Math.max(1, Math.round(H.val(f, 'months')) || 1));
      const exempt = isNew ? 0 : H.val(f, 'exempt'), pt = isNew ? 0 : Math.min(2500, H.val(f, 'pt'));
      const std = isNew ? 75000 : 50000;
      const via = isNew ? 0 : H.val(f, 'ded'), hl = isNew ? 0 : Math.min(200000, H.val(f, 'hl'));
      const salaryIncome = Math.max(0, salary - exempt - std - pt);
      const taxable = Math.max(0, salaryIncome + other - hl - via - nps2);
      const t = compute(taxable, isNew, age);
      const remaining = Math.max(0, t.total - done);
      const perMonth = remaining / months;
      const row = (k, v) => '<tr><td>' + k + '</td><td>' + (Math.round(v) < 0 ? '-' : '') + H.inr(Math.abs(v)) + '</td></tr>';
      document.getElementById('out').innerHTML =
        '<div class="big"><div class="stat best"><b>' + H.inr(perMonth) + '</b><span>TDS per month for the next ' + months + ' month' + (months > 1 ? 's' : '') + '</span></div>' +
        '<div class="stat"><b>' + H.inr(t.total) + '</b><span>Tax for the year</span></div>' +
        '<div class="stat"><b>' + H.inr(remaining) + '</b><span>Still to be deducted</span></div>' +
        '<div class="stat"><b>' + (salary + other ? (100 * t.total / (salary + other)).toFixed(1) : '0.0') + '%</b><span>Average rate on gross</span></div></div>' +
        '<div class="tbl-wrap"><table><thead><tr><th>Working</th><th>Amount</th></tr></thead><tbody>' +
        row('Gross salary', salary) + (exempt ? row('Less exempt allowances', -exempt) : '') + row('Less standard deduction', -std) + (pt ? row('Less professional tax', -pt) : '') +
        row('Income from salary', salaryIncome) + (other ? row('Add other income declared', other) : '') + (hl ? row('Less home loan interest', -hl) : '') + (via ? row('Less Chapter VI-A deductions', -via) : '') + (nps2 ? row('Less employer NPS, 80CCD(2)', -nps2) : '') +
        row('Taxable income', taxable) + row('Tax on slabs', t.gross) + (t.rebate ? row('Less rebate (taxable income up to ₹12 lakh)', -t.rebate) : '') + (t.sur ? row('Surcharge after marginal relief', t.sur) : '') + row('Health and education cess 4%', t.cess) + row('Total tax for the year', t.total) +
        (done ? row('Already deducted', -done) : '') + row('Balance over ' + months + ' month' + (months > 1 ? 's' : ''), perMonth) + '</tbody></table></div>' +
        '<p class="note">' + (isNew ? 'New regime: only the standard deduction and employer NPS are allowed. ' : 'Old regime: deductions apply only if you have declared them and will submit proof. ') + 'Tax year 2026-27 (1 April 2026 to 31 March 2027). Figures are rounded to the rupee.</p>';
    });
  },
  explainer: `
<h2>How employers work out TDS on salary</h2>
<p>Tax on salary is not deducted slab by slab each month. The employer estimates your total salary for the year, applies the regime you have chosen and the deductions you have declared, computes the tax for the whole year, and deducts it in equal instalments. This is the average-rate method in Section 392 of the Income-tax Act, 2025, which replaced Section 192 of the 1961 Act on 1 April 2026. The rates and slabs did not change; only the section numbers did.</p>
<span class="formula">Tax for the year  = tax on (estimated salary minus deductions) plus cess
TDS this month    = (tax for the year minus TDS already deducted) ÷ months left</span>
<h3>Why TDS jumps mid-year</h3>
<p>Any change to the estimate is absorbed by the remaining months. A raise in October, a bonus in December, or investment proofs that fall short of the declaration in January all change the year's tax, and the difference is spread over what is left of the year rather than over twelve months. Enter the tax already deducted and the months left to see the new instalment. The same arithmetic explains why TDS is often highest in February and March.</p>
<h3>What counts and what does not</h3>
<p>The employer starts from gross salary including allowances, bonus and perquisites. In the new regime the only reductions are the ₹75,000 standard deduction and the employer's NPS contribution under 80CCD(2). In the old regime the exempt part of HRA and leave travel allowance comes off first, then the ₹50,000 standard deduction and professional tax, then home loan interest on a self-occupied house up to ₹2,00,000 and Chapter VI-A deductions such as 80C, 80D and 80CCD(1B). You can also declare other income such as bank interest or rent so that the employer deducts tax on it; a loss can be declared only from house property.</p>
<h3>The regime declaration</h3>
<p>The new regime applies unless you tell the employer otherwise at the start of the year. If you do not make a choice, the employer must deduct under the new regime. You can still pick the other regime when you file the return, and any excess TDS comes back as a refund, but the cash sits with the government until then. Declaring early is the cheaper option.</p>
<h3>Zero tax and small salaries</h3>
<p>In the new regime the rebate makes tax nil when taxable income is ₹12 lakh or less, so no TDS is deducted on a gross salary of up to ₹12,75,000. In the old regime the rebate applies up to ₹5 lakh of taxable income. If your estimated tax is nil, the employer deducts nothing, and if you expect that your other income will push you over, you pay advance tax yourself.</p>
<h3>Checking the deduction</h3>
<p>Match the TDS on your payslip against the working above, and at year end match Form 16 against Form 26AS and the Annual Information Statement. Rounding to the rupee is normal; a gap of hundreds means the employer's estimate differs from yours, usually because of a deduction that was declared but not proved.</p>
<p class="tiny">Not covered: relief for arrears under Section 89, income from two employers in the same year, perquisite valuation, and the surcharge rules for income above ₹5 crore beyond the 25% cap in the new regime. Slabs are those in force on the date at the bottom of the page.</p>`,
  faq: [
    { q: 'Is Section 192 still the TDS section for salary?', a: '<p>Not since 1 April 2026. The Income-tax Act, 2025 moved salary TDS to Section 392. Salary paid up to 31 March 2026 followed Section 192 of the 1961 Act. The computation is the same under both.</p>' },
    { q: 'Can I ask my employer to deduct less TDS?', a: '<p>Only by declaring deductions, exempt allowances or the other regime, with proof where required. An employer cannot deduct less than the tax computed on the declaration. If you expect a refund, the alternative is to file the return early.</p>' },
    { q: 'What happens if I join mid-year?', a: '<p>Give the new employer your previous employer’s salary and TDS details in the prescribed form. The new employer then computes tax on the combined salary and deducts the balance. If you do not, both employers apply the standard deduction and slabs separately and you will owe tax when you file.</p>' },
    { q: 'Why is there no TDS even though my salary is above the exemption limit?', a: '<p>Because the rebate brings the tax to zero. In the new regime that covers taxable income up to ₹12 lakh, or a gross salary of ₹12,75,000. Just above that, marginal relief keeps the tax small.</p>' },
    { q: 'Does the calculator handle surcharge?', a: '<p>Yes. Surcharge starts at 10% of tax when taxable income exceeds ₹50 lakh and rises in steps, with marginal relief so that the extra tax never exceeds the extra income. Cess of 4% is added on top.</p>' },
  ],
};
