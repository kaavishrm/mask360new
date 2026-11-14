export default {
  slug: 'fd-calculator',
  title: 'FD Calculator',
  h1: 'Fixed Deposit Calculator: maturity amount and interest',
  summary: 'Maturity value of a bank FD with quarterly or other compounding.',
  description: 'Free fixed deposit calculator for Indian banks. Find the maturity amount and total interest on an FD with quarterly, monthly, yearly or simple interest.',
  category: 'investments',
  related: ['ppf-calculator', 'sip-calculator', 'income-tax-calculator'],
  intro: 'Enter the deposit, rate and tenure. Most Indian banks compound quarterly, which is the default here.',
  tool: `
<form id="f">
  <div class="grid">
    <label>Deposit amount (₹)<input type="number" name="p" value="500000" min="0" step="1000"></label>
    <label>Interest rate (% per year)<input type="number" name="r" value="7" min="0" step="0.05"></label>
    <label>Tenure: years<input type="number" name="y" value="3" min="0" max="20" step="1"></label>
    <label>Tenure: extra months<input type="number" name="m" value="0" min="0" max="11" step="1"></label>
    <label>Compounding<select name="k"><option value="4" selected>Quarterly (most banks)</option><option value="12">Monthly</option><option value="2">Half-yearly</option><option value="1">Yearly</option><option value="0">Simple interest (paid out)</option></select></label>
  </div>
  <div class="result" id="out"></div>
</form>`,
  script: function () {
    const H = window.H;
    H.bind('f', (f) => {
      const P = H.val(f, 'p'), r = H.val(f, 'r') / 100, t = H.val(f, 'y') + H.val(f, 'm') / 12, k = H.val(f, 'k');
      const A = k ? P * Math.pow(1 + r / k, k * t) : P * (1 + r * t);
      let rows = '';
      for (let yr = 1; yr <= Math.ceil(t); yr++) { const tt = Math.min(yr, t); const v = k ? P * Math.pow(1 + r / k, k * tt) : P * (1 + r * tt); rows += '<tr><td>' + (tt === yr ? 'End of year ' + yr : 'Maturity') + '</td><td>' + H.inr(v - P) + '</td><td>' + H.inr(v) + '</td></tr>'; }
      document.getElementById('out').innerHTML = '<div class="big"><div class="stat"><b>' + H.inr(P) + '</b><span>Deposit</span></div><div class="stat"><b>' + H.inr(A - P) + '</b><span>Total interest</span></div><div class="stat best"><b>' + H.inr(A) + '</b><span>Maturity amount</span></div></div>' +
        '<div class="tbl-wrap"><table><thead><tr><th>Period</th><th>Interest earned</th><th>Value</th></tr></thead><tbody>' + rows + '</tbody></table></div>' +
        '<p class="note">Effective annual yield: ' + (k ? (100 * (Math.pow(1 + r / k, k) - 1)).toFixed(2) : (r * 100).toFixed(2)) + '%. Interest is taxable at your slab rate; TDS applies above the bank threshold.</p>';
    });
  },
  explainer: `
<h2>How FD interest is calculated</h2>
<span class="formula">Maturity = P × (1 + r ÷ k)^(k × t)
P = deposit, r = annual rate, k = compounding periods per year, t = years</span>
<p>Indian banks almost always compound quarterly on cumulative deposits. A ₹5 lakh FD at 7% for 3 years matures at about ₹6,16,000, with ₹1,16,000 of interest. The same deposit with simple interest paid out monthly or quarterly earns ₹1,05,000, because the payouts do not compound.</p>
<h2>Cumulative or payout?</h2>
<p>Choose cumulative if you do not need the income now; the compounding adds up over longer tenures. Choose a payout option if you need the interest for monthly expenses, as many retirees do. The rate quoted for payout FDs is usually slightly lower.</p>
<h2>Tax on FD interest</h2>
<p>FD interest is added to your income and taxed at your slab rate. Banks deduct TDS at 10% once interest in a year crosses the threshold (₹50,000 for most depositors and ₹1,00,000 for senior citizens from FY 2025-26). Submitting Form 15G or 15H stops TDS if your total income is below the taxable limit. Senior citizens can claim a deduction of up to ₹50,000 on deposit interest under Section 80TTB in the old regime.</p>
<h2>Premature withdrawal</h2>
<p>Breaking an FD early usually costs a penalty of 0.5% to 1% on the rate, and the bank pays interest at the rate applicable for the period the money actually stayed, not the rate you booked. Laddering several smaller FDs across tenures avoids breaking a large one.</p>`,
  faq: [
    { q: 'Why does the bank show a slightly different maturity amount?', a: '<p>Banks count days rather than whole quarters and may round at each compounding step, so the figure can differ by a few rupees. Any larger gap usually means a different compounding frequency or a different rate for part of the tenure.</p>' },
    { q: 'Is a 5-year tax-saving FD different?', a: '<p>The interest works the same way. The difference is that the deposit qualifies for the Section 80C deduction in the old regime and cannot be withdrawn before five years.</p>' },
    { q: 'Do senior citizens get a higher rate?', a: '<p>Most banks add 0.25% to 0.75% for depositors aged 60 and above. Enter the senior citizen rate your bank quotes to get the right maturity amount.</p>' },
  ],
};
