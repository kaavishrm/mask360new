export default {
  slug: 'emi-calculator',
  title: 'EMI Calculator',
  h1: 'EMI Calculator for home, car and personal loans',
  summary: 'Monthly instalment, total interest and a year-by-year schedule.',
  description: 'Free EMI calculator for home loans, car loans and personal loans in India. See the monthly instalment, total interest paid and a year-by-year repayment schedule.',
  category: 'loans',
  related: ['sip-calculator', 'fd-calculator', 'income-tax-calculator'],
  intro: 'Enter the loan amount, interest rate and tenure. The EMI, total interest and a yearly repayment schedule appear below.',
  tool: `
<form id="f">
  <div class="grid">
    <label>Loan amount (₹)<input type="number" name="p" value="3000000" min="0" step="10000"></label>
    <label>Interest rate (% per year)<input type="number" name="r" value="8.5" min="0" step="0.05"></label>
    <label>Tenure<input type="number" name="n" value="20" min="1" step="1"></label>
    <div class="field"><span>Tenure is in</span><div class="seg"><input type="radio" name="unit" id="u1" value="y" checked><label for="u1">Years</label><input type="radio" name="unit" id="u2" value="m"><label for="u2">Months</label></div></div>
  </div>
  <div class="result" id="out"></div>
</form>`,
  script: function () {
    const H = window.H;
    H.bind('f', (f) => {
      const P = H.val(f, 'p'), R = H.val(f, 'r') / 1200;
      const n = Math.round(H.val(f, 'n') * (f.elements.unit.value === 'y' ? 12 : 1));
      if (!P || !n) { document.getElementById('out').innerHTML = ''; return; }
      const emi = R ? P * R * Math.pow(1 + R, n) / (Math.pow(1 + R, n) - 1) : P / n;
      const total = emi * n, interest = total - P;
      let bal = P, rows = '', yr = 1, yi = 0, yp = 0;
      for (let m = 1; m <= n; m++) {
        const i = bal * R, pr = Math.min(emi - i, bal); bal -= pr; yi += i; yp += pr;
        if (m % 12 === 0 || m === n) { rows += '<tr><td>Year ' + yr + '</td><td>' + H.inr(yp) + '</td><td>' + H.inr(yi) + '</td><td>' + H.inr(Math.max(0, bal)) + '</td></tr>'; yr++; yi = 0; yp = 0; }
      }
      document.getElementById('out').innerHTML = '<div class="big"><div class="stat best"><b>' + H.inr(emi) + '</b><span>Monthly EMI</span></div><div class="stat"><b>' + H.inr(interest) + '</b><span>Total interest</span></div><div class="stat"><b>' + H.inr(total) + '</b><span>Total payment</span></div><div class="stat"><b>' + (P ? (100 * interest / P).toFixed(0) : 0) + '%</b><span>Interest as share of loan</span></div></div>' +
        '<div class="tbl-wrap"><table><thead><tr><th>Period</th><th>Principal paid</th><th>Interest paid</th><th>Balance</th></tr></thead><tbody>' + rows + '</tbody></table></div>';
    });
  },
  explainer: `
<h2>The EMI formula</h2>
<span class="formula">EMI = P × r × (1 + r)^n ÷ ((1 + r)^n − 1)
P = loan amount, r = monthly rate (annual ÷ 12 ÷ 100), n = number of months</span>
<p>A ₹30 lakh home loan at 8.5% for 20 years works out to an EMI of about ₹26,035. Over the full tenure you pay roughly ₹32.5 lakh in interest, more than the loan itself. That is normal for long tenures and is why prepaying early matters so much.</p>
<h2>How to read the schedule</h2>
<p>Each EMI is split between interest and principal. In the early years most of it is interest because the balance is high. The split flips later. The table above shows the yearly totals so you can see when you cross the halfway point.</p>
<h2>Shorter tenure or lower rate?</h2>
<p>Shortening the tenure raises the EMI but cuts total interest sharply. Cutting the rate by half a percent on a 20-year loan saves more than most people expect; use the calculator to compare two offers before accepting one. For floating-rate loans, the lender usually keeps the EMI fixed and changes the tenure when rates move, so check the revised tenure after every rate change.</p>
<h2>Prepayment</h2>
<p>Any lump sum paid against principal reduces the balance on which future interest is charged. Banks cannot charge prepayment penalties on floating-rate loans to individuals. Fixed-rate loans may carry a charge, so read the sanction letter.</p>`,
  faq: [
    { q: 'Does the EMI include processing fees or insurance?', a: '<p>No. The EMI covers principal and interest only. Processing fees, stamp duty and loan insurance are paid separately and are not part of this calculation.</p>' },
    { q: 'Why does the balance not drop much in the first year?', a: '<p>Because interest is charged on the outstanding balance, which is largest at the start. Most of the early EMIs go to interest. Principal repayment speeds up as the balance falls.</p>' },
    { q: 'Is the EMI the same for a reducing balance and a flat rate loan?', a: '<p>No. This calculator uses the reducing balance method that banks use for home, car and personal loans. A flat rate quoted by some lenders charges interest on the original amount for the whole tenure and costs far more; a 10% flat rate is roughly equal to an 18% reducing rate.</p>' },
  ],
};
