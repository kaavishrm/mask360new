import taxEngine from './lib/income-tax.mjs';

export default {
  slug: 'income-tax-calculator-fy-2025-26',
  title: 'Income Tax Calculator FY 2025-26 (AY 2026-27)',
  h1: 'Income Tax Calculator for FY 2025-26 (AY 2026-27), with late filing fee and interest',
  summary: 'For returns filed late: tax under both regimes, plus the 234F fee and 234A interest.',
  description: 'Free income tax calculator for FY 2025-26 (AY 2026-27) for belated returns filed by 31 December 2026. Compares the new and old regimes with rebate, surcharge and cess, and adds the Section 234F late fee and Section 234A interest for the filing date you choose.',
  category: 'tax',
  lib: [taxEngine],
  related: ['income-tax-calculator', 'in-hand-salary-calculator', 'tds-on-salary-calculator', 'hra-calculator'],
  intro: 'Still to file your return for the year ended 31 March 2026? Enter your income and deductions, pick the date you will file, and see the tax under both regimes together with what being late adds.',
  tool: `
<form id="f">
  <div class="grid">
    <label>Age on 31 March 2026<select name="age"><option value="0">Below 60</option><option value="1">60 to 79 (senior citizen)</option><option value="2">80 or above (super senior)</option></select></label>
    <label>Gross salary for FY 2025-26 (₹)<input type="number" name="salary" value="1200000" min="0" step="1000"></label>
    <label>Other income (₹) <span class="hint">interest, rent, freelance, etc.</span><input type="number" name="other" value="0" min="0" step="1000"></label>
    <label>Employer NPS contribution, 80CCD(2) (₹) <span class="hint">allowed in both regimes</span><input type="number" name="nps2" value="0" min="0" step="1000"></label>
  </div>
  <fieldset><legend>Deductions and exemptions (old regime only)</legend>
  <div class="grid">
    <label>HRA exemption (₹)<input type="number" name="hra" value="0" min="0" step="1000"></label>
    <label>Section 80C (₹) <span class="hint">Max 1,50,000</span><input type="number" name="c80" value="150000" min="0" max="150000" step="1000"></label>
    <label>Section 80D health insurance (₹)<input type="number" name="d80" value="25000" min="0" step="1000"></label>
    <label>NPS own contribution, 80CCD(1B) (₹) <span class="hint">Max 50,000</span><input type="number" name="nps1b" value="0" min="0" max="50000" step="1000"></label>
    <label>Home loan interest, Section 24(b) (₹) <span class="hint">Max 2,00,000 for self-occupied</span><input type="number" name="hl" value="0" min="0" max="200000" step="1000"></label>
    <label>Other deductions (₹) <span class="hint">80E, 80G, 80TTA, LTA, professional tax</span><input type="number" name="oth" value="0" min="0" step="1000"></label>
  </div></fieldset>
  <fieldset><legend>Late filing</legend>
  <div class="grid">
    <label>Tax already paid: TDS, TCS and advance tax (₹)<input type="number" name="paid" value="0" min="0" step="1000"></label>
    <label>Due date that applied to you<select name="due"><option value="2026-07-31">31 July 2026 (no audit)</option><option value="2026-10-31">31 October 2026 (audit cases)</option></select></label>
    <label>Date you will file<input type="date" name="filed" value="2026-11-30" min="2026-04-01" max="2026-12-31"></label>
  </div></fieldset>
  <div class="result" id="out"></div>
</form>`,
  script: function () {
    const H = window.H, T = taxEngine();
    const FY = '2025-26';
    function monthsLate(due, filed) {
      // Interest under 234A runs from the day after the due date to the filing date, counting any part of a month as a month.
      if (!(filed > due)) return 0;
      const s = new Date(due.getTime() + 86400000);
      return (filed.getFullYear() - s.getFullYear()) * 12 + (filed.getMonth() - s.getMonth()) + (filed.getDate() >= s.getDate() ? 1 : 0);
    }
    H.bind('f', (f) => {
      const age = H.val(f, 'age');
      const gross = H.val(f, 'salary') + H.val(f, 'other');
      const nps2 = H.val(f, 'nps2');
      const newTaxable = Math.max(0, gross - 75000 - nps2);
      const oldDed = 50000 + Math.min(150000, H.val(f, 'c80')) + H.val(f, 'd80') + Math.min(50000, H.val(f, 'nps1b')) + Math.min(200000, H.val(f, 'hl')) + H.val(f, 'oth') + H.val(f, 'hra') + nps2;
      const oldTaxable = Math.max(0, gross - oldDed);
      const n = T.compute(newTaxable, true, age, FY), o = T.compute(oldTaxable, false, age, FY);
      // Late filing. A belated return under 139(4) can only be filed under the new regime for taxpayers without business income.
      const due = new Date(H.str(f, 'due') + 'T00:00:00'), filedStr = H.str(f, 'filed');
      const filed = filedStr ? new Date(filedStr + 'T00:00:00') : null;
      const late = !!(filed && filed > due);
      const better = late ? 'new' : n.total <= o.total ? 'new' : 'old';
      const best = better === 'new' ? n : o, bestTaxable = better === 'new' ? newTaxable : oldTaxable;
      const exempt = age === 2 ? 500000 : age === 1 ? 300000 : 250000;
      const mustFile = gross > exempt;
      const fee = late && mustFile ? (gross <= 500000 ? 1000 : 5000) : 0;
      const unpaid = Math.max(0, Math.round(best.total) - H.val(f, 'paid'));
      const months = late ? monthsLate(due, filed) : 0;
      const interest = Math.round(unpaid * 0.01 * months);
      const payable = unpaid + fee + interest;
      const fmt = (v) => (Math.round(v) < 0 ? '-' : '') + H.inr(Math.abs(v));
      const row = (k, a, b) => '<tr><td>' + k + '</td><td>' + fmt(a) + '</td><td>' + fmt(b) + '</td></tr>';
      document.getElementById('out').innerHTML =
        '<div class="big"><div class="stat' + (better === 'new' ? ' best' : '') + '"><b>' + H.inr(n.total) + '</b><span>Tax under new regime</span></div>' +
        '<div class="stat' + (better === 'old' ? ' best' : '') + '"><b>' + H.inr(o.total) + '</b><span>Tax under old regime' + (late ? ', not available in a belated return' : '') + '</span></div>' +
        '<div class="stat' + (fee + interest ? ' warn' : '') + '" id="late"><b>' + H.inr(fee + interest) + '</b><span>Late fee and interest' + (late ? ', filing ' + months + ' month' + (months === 1 ? '' : 's') + ' late' : '') + '</span></div>' +
        '<div class="stat"><b>' + H.inr(payable) + '</b><span>To pay before filing, ' + better + ' regime</span></div></div>' +
        '<div class="tbl-wrap"><table><thead><tr><th>Line</th><th>New regime</th><th>Old regime</th></tr></thead><tbody>' +
        row('Gross income', gross, gross) + row('Deductions', 75000 + nps2, oldDed) + row('Taxable income', newTaxable, oldTaxable) +
        row('Tax on slabs', n.tax + n.rebate, o.tax + o.rebate) + row('Rebate u/s 87A', -n.rebate, -o.rebate) + row('Surcharge (after marginal relief)', n.sur, o.sur) + row('Health and education cess 4%', n.cess, o.cess) + row('Total tax', n.total, o.total) + '</tbody></table></div>' +
        '<div class="tbl-wrap"><table><thead><tr><th>Late filing, ' + better + ' regime</th><th>Amount</th></tr></thead><tbody>' +
        '<tr><td>Tax for the year</td><td>' + H.inr(best.total) + '</td></tr><tr><td>Less TDS, TCS and advance tax</td><td>' + fmt(-H.val(f, 'paid')) + '</td></tr><tr><td>Self-assessment tax</td><td>' + H.inr(unpaid) + '</td></tr>' +
        '<tr><td>Fee u/s 234F' + (late && !mustFile ? ' (not charged: income within the exemption limit)' : '') + '</td><td>' + H.inr(fee) + '</td></tr><tr><td>Interest u/s 234A, 1% × ' + months + ' month' + (months === 1 ? '' : 's') + '</td><td>' + H.inr(interest) + '</td></tr><tr><td><strong>Total to pay</strong></td><td><strong>' + H.inr(payable) + '</strong></td></tr></tbody></table></div>' +
        '<p class="note">' + (late ? 'Filing after the due date: the return goes in under the new regime, and the belated return for AY 2026-27 can be filed until 31 December 2026. ' : 'Filing on or before the due date: no fee or interest under 234A, and either regime can be chosen. ') + 'Taxable income under the ' + better + ' regime is ' + H.inr(bestTaxable) + '. Interest under 234B and 234C for short payment of advance tax is not included.</p>';
    });
  },
  explainer: `
<h2>Who this page is for</h2>
<p>FY 2025-26 ran from 1 April 2025 to 31 March 2026 and is assessed in AY 2026-27. The due date for most individuals was 31 July 2026. If you missed it, you can still file a belated return under Section 139(4) of the Income-tax Act, 1961 until 31 December 2026, or until the assessment is completed if that is earlier. After that the only route is an updated return with additional tax. This page computes the tax itself and then what being late adds, so the amount you pay before filing is right the first time.</p>
<h3>The slabs for FY 2025-26</h3>
<p>Budget 2025 rewrote the new regime for this year: nil up to ₹4,00,000, then 5% to ₹8,00,000, 10% to ₹12,00,000, 15% to ₹16,00,000, 20% to ₹20,00,000, 25% to ₹24,00,000 and 30% above that. The Section 87A rebate of up to ₹60,000 removes all tax when taxable income is ₹12,00,000 or less, and marginal relief applies just above it. The standard deduction is ₹75,000 for salary and pension. The old regime kept its slabs: nil up to ₹2,50,000 (₹3,00,000 for senior citizens, ₹5,00,000 above 80), 5% to ₹5,00,000, 20% to ₹10,00,000 and 30% beyond, with a ₹12,500 rebate up to ₹5,00,000 of taxable income and a ₹50,000 standard deduction. These are the same figures as FY 2026-27, so the two calculators share one engine; what differs is the year, the due dates and the late-filing arithmetic.</p>
<h3>What being late costs</h3>
<span class="formula">Fee u/s 234F       = ₹5,000, or ₹1,000 if total income is ₹5,00,000 or less
Interest u/s 234A  = 1% × unpaid tax × months from the day after the due date to the filing date
                     (part of a month counts as a full month)</span>
<p>The fee applies to anyone who was required to file and files after the due date. If your income is within the basic exemption limit and none of the other filing triggers apply (foreign assets, large bank deposits, high electricity or travel spending), you are not required to file and the fee does not apply, though you may still want to file for a refund or a loan application. The interest is simple, not compounded, and is charged only on tax still unpaid: tax deducted at source, tax collected at source and advance tax come off first. Filing on 30 November against a 31 July due date is four months late: August, September, October and November. Filing on 1 December makes it five.</p>
<h3>What else to expect</h3>
<p>A belated return goes in under the new regime. Section 115BAC lets a taxpayer without business income opt for the old regime only in a return filed by the due date under Section 139(1), so once the due date has passed the old regime is off the table, and the calculator locks it when your filing date is late. The old regime column stays visible so you can see what the delay cost you in deductions. Losses other than house property loss cannot be carried forward from a belated return. Interest under Sections 234B and 234C applies separately if advance tax was short, and is not included here.</p>
<h3>Which Act</h3>
<p>Returns for AY 2026-27 are filed under the Income-tax Act, 1961, so the section numbers on this page are the familiar ones. The Income-tax Act, 2025 applies from tax year 2026-27 onwards; use the <a href="/income-tax-calculator/">FY 2026-27 calculator</a> for the current year.</p>
<p class="tiny">Capital gains at special rates, agricultural income, relief under Section 89, and penalty for under-reporting are outside this calculator. Figures are those in force on the date shown at the bottom of the page.</p>`,
  faq: [
    { q: 'What is the last date to file the return for FY 2025-26?', a: '<p>31 December 2026 for a belated return, or the date the assessment is completed if earlier. The original due date for individuals without audit was 31 July 2026.</p>' },
    { q: 'Is the late fee ₹5,000 even if I have no tax to pay?', a: '<p>Yes, if your total income is above the basic exemption limit you must file, and a late filing attracts the fee regardless of tax due: ₹1,000 up to ₹5 lakh of total income, ₹5,000 above it. Below the exemption limit there is no obligation to file and no fee.</p>' },
    { q: 'Can I choose the old regime in a belated return?', a: '<p>No. The option to use the old regime must be exercised in a return filed by the due date. A belated return is assessed under the new regime, and a revised return cannot switch to the old regime unless the original return was filed on time. Those with business income also needed Form 10-IEA by the due date.</p>' },
    { q: 'Does interest run on the whole tax or only on what is unpaid?', a: '<p>Only on what remains after TDS, TCS and advance tax. If your employer deducted the full amount, the interest is nil and only the fee applies.</p>' },
    { q: 'Why are the slabs the same as FY 2026-27?', a: '<p>Budget 2025 set these slabs for FY 2025-26 and Budget 2026 left them unchanged, so both years use the same rates. The late-filing rules and due dates are what differ.</p>' },
  ],
};
