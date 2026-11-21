export default {
  slug: 'ppf-calculator',
  title: 'PPF Calculator',
  h1: 'PPF Calculator: maturity after 15 years and extensions',
  summary: 'Year-by-year growth of a Public Provident Fund account.',
  description: 'Free PPF calculator. See the maturity value of a Public Provident Fund account after 15 years or longer, with a year-by-year table of deposits, interest and balance.',
  category: 'investments',
  related: ['sip-calculator', 'fd-calculator', 'income-tax-calculator'],
  intro: 'Enter your yearly deposit and the current PPF rate. The table shows how the balance builds each year through the 15-year term and any 5-year extensions.',
  tool: `
<form id="f">
  <div class="grid">
    <label>Yearly deposit (₹) <span class="hint">Minimum 500, maximum 1,50,000</span><input type="number" name="d" value="150000" min="500" max="150000" step="500"></label>
    <label>Interest rate (% per year) <span class="hint">Set by the government each quarter</span><input type="number" name="r" value="7.1" min="0" step="0.1"></label>
    <label>Duration<select name="y"><option value="15" selected>15 years</option><option value="20">20 years (one extension)</option><option value="25">25 years (two extensions)</option><option value="30">30 years (three extensions)</option></select></label>
    <label>Deposit timing<select name="when"><option value="start" selected>Before 5 April each year (full year interest)</option><option value="end">End of each year</option></select></label>
  </div>
  <div class="result" id="out"></div>
</form>`,
  script: function () {
    const H = window.H;
    H.bind('f', (f) => {
      const d = H.val(f, 'd'), r = H.val(f, 'r') / 100, y = H.val(f, 'y'), start = f.elements.when.value === 'start';
      let bal = 0, inv = 0, rows = '';
      for (let k = 1; k <= y; k++) {
        const interest = start ? (bal + d) * r : bal * r;
        bal = bal + d + interest; inv += d;
        rows += '<tr><td>Year ' + k + '</td><td>' + H.inr(inv) + '</td><td>' + H.inr(interest) + '</td><td>' + H.inr(bal) + '</td></tr>';
      }
      document.getElementById('out').innerHTML = '<div class="big"><div class="stat"><b>' + H.inr(inv) + '</b><span>Total deposited</span></div><div class="stat"><b>' + H.inr(bal - inv) + '</b><span>Interest earned, tax free</span></div><div class="stat best"><b>' + H.inr(bal) + '</b><span>Maturity after ' + y + ' years</span></div></div>' +
        '<div class="tbl-wrap"><table><thead><tr><th>Period</th><th>Deposited</th><th>Interest</th><th>Balance</th></tr></thead><tbody>' + rows + '</tbody></table></div>';
    });
  },
  explainer: `
<h2>How PPF interest works</h2>
<p>Interest is calculated monthly on the lowest balance between the 5th and the last day of the month, and credited once at the end of the financial year. Deposit before the 5th of a month and that month's interest counts. Deposit the full year's amount before 5 April and the whole year's interest counts, which is what the default setting above assumes.</p>
<p>The rate is notified by the government every quarter. It has been 7.1% since April 2020. If it changes, enter the new rate; the calculator does not assume any particular rate stays fixed.</p>
<h2>Why PPF still matters</h2>
<p>PPF is one of the few instruments where the deposit, the interest and the maturity amount are all exempt from tax. A full ₹1.5 lakh a year at 7.1% for 15 years grows to about ₹40.7 lakh, of which roughly ₹18 lakh is interest you never pay tax on. Compared with an FD at a similar rate, the after-tax difference for someone in the 30% slab is large.</p>
<h2>Extensions after 15 years</h2>
<p>The account can be extended in blocks of five years, with or without fresh deposits, any number of times. Extensions with deposits keep the tax-free compounding going, which is why the 20, 25 and 30-year options are shown above. Submit Form H within a year of maturity to extend with contributions.</p>
<h2>Loans and withdrawals</h2>
<p>A loan against the balance is allowed from the third to the sixth year. Partial withdrawals are allowed from the seventh year, limited to half the balance at the end of the fourth preceding year. Premature closure is allowed after five years only for specified reasons such as serious illness or higher education, with a 1% rate penalty.</p>`,
  faq: [
    { q: 'What is the current PPF interest rate?', a: '<p>7.1% per year, unchanged since April 2020 at the time this page was last updated. The government reviews it each quarter, so check the latest notification and update the rate field if it has changed.</p>' },
    { q: 'Can I deposit more than ₹1.5 lakh in a year?', a: '<p>No. ₹1,50,000 per financial year is the ceiling across all PPF accounts you hold, including a minor child\'s account you operate. Excess deposits earn no interest and are returned.</p>' },
    { q: 'Is PPF interest taxable?', a: '<p>No. PPF has exempt-exempt-exempt status: the deposit qualifies for Section 80C in the old regime, the interest is tax free, and so is the maturity amount.</p>' },
  ],
};
