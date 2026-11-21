export default {
  slug: 'sip-calculator',
  title: 'SIP Calculator',
  h1: 'SIP Calculator with step-up and lumpsum',
  summary: 'What a monthly SIP grows to, with optional yearly step-up.',
  description: 'Free SIP calculator for mutual funds in India. See what a monthly SIP grows to over time, add a yearly step-up, or compare with a one-time lumpsum investment.',
  category: 'investments',
  related: ['ppf-calculator', 'fd-calculator', 'emi-calculator', 'capital-gains-calculator-shares'],
  intro: 'Enter the monthly amount, expected return and how long you will invest. Add a yearly step-up to see how raising the SIP each year changes the result.',
  tool: `
<form id="f">
  <div class="grid">
    <div class="field"><span>Mode</span><div class="seg"><input type="radio" name="mode" id="m1" value="sip" checked><label for="m1">Monthly SIP</label><input type="radio" name="mode" id="m2" value="lump"><label for="m2">Lumpsum</label></div></div>
    <label>Amount (₹)<input type="number" name="amt" value="10000" min="0" step="500"></label>
    <label>Expected return (% per year)<input type="number" name="r" value="12" min="0" step="0.5"></label>
    <label>Period (years)<input type="number" name="y" value="15" min="1" max="50" step="1"></label>
    <label>Yearly step-up (%) <span class="hint">SIP only; 0 for none</span><input type="number" name="su" value="0" min="0" max="100" step="1"></label>
  </div>
  <div class="result" id="out"></div>
</form>`,
  script: function () {
    const H = window.H;
    H.bind('f', (f) => {
      const amt = H.val(f, 'amt'), r = H.val(f, 'r') / 100, y = Math.round(H.val(f, 'y')), su = H.val(f, 'su') / 100;
      const lump = f.elements.mode.value === 'lump';
      let invested = 0, fv = 0, rows = '';
      if (lump) {
        invested = amt; fv = amt * Math.pow(1 + r, y);
        for (let k = 1; k <= y; k++) rows += '<tr><td>Year ' + k + '</td><td>' + H.inr(amt) + '</td><td>' + H.inr(amt * Math.pow(1 + r, k)) + '</td></tr>';
      } else {
        const i = r / 12; let bal = 0, monthly = amt;
        for (let k = 1; k <= y; k++) {
          for (let m = 0; m < 12; m++) { bal = (bal + monthly) * (1 + i); invested += monthly; }
          rows += '<tr><td>Year ' + k + '</td><td>' + H.inr(invested) + '</td><td>' + H.inr(bal) + '</td></tr>';
          monthly = monthly * (1 + su);
        }
        fv = bal;
      }
      document.getElementById('out').innerHTML = '<div class="big"><div class="stat"><b>' + H.inr(invested) + '</b><span>Total invested</span></div><div class="stat"><b>' + H.inr(fv - invested) + '</b><span>Estimated gains</span></div><div class="stat best"><b>' + H.inr(fv) + '</b><span>Value after ' + y + ' years</span></div></div>' +
        '<div class="tbl-wrap"><table><thead><tr><th>Period</th><th>Invested</th><th>Value</th></tr></thead><tbody>' + rows + '</tbody></table></div><p class="note">Returns are assumed to compound monthly at the rate you entered. Actual mutual fund returns vary year to year and are not guaranteed.</p>';
    });
  },
  explainer: `
<h2>How SIP returns are calculated</h2>
<p>Each monthly instalment compounds for the months remaining until the end of the period. The standard formula for a level SIP is:</p>
<span class="formula">FV = A × ((1 + i)^n − 1) ÷ i × (1 + i)
A = monthly amount, i = annual return ÷ 12, n = total months</span>
<p>This calculator runs the month-by-month version of the same arithmetic so that step-ups can be applied at each anniversary.</p>
<h2>Why step-up matters</h2>
<p>A ₹10,000 SIP for 15 years at 12% grows to roughly ₹50 lakh. Raising it by 10% every year, in line with a salary hike, takes the same plan to about ₹90 lakh while the extra outgo is spread over the years when you can afford it. Most fund houses let you set the step-up at the time of starting the SIP.</p>
<h2>What return should you assume?</h2>
<p>Long-run returns of diversified Indian equity funds have historically been in the 11% to 14% range, but any single ten-year window can be far better or worse. Use 10% to 12% for planning and treat anything higher as optimistic. Debt funds and hybrid funds sit lower, around 6% to 9%.</p>
<h2>Tax on SIP gains</h2>
<p>Each SIP instalment is a separate purchase with its own holding period. Equity fund units held longer than a year attract long-term capital gains tax above the annual exemption; units sold within a year are taxed at the short-term rate. Debt funds are taxed at your slab rate regardless of holding period for investments made after April 2023.</p>`,
  faq: [
    { q: 'Is the return shown guaranteed?', a: '<p>No. The calculator applies the return you type in, evenly, every month. Market-linked funds do not behave that way. The number is a planning estimate, not a promise.</p>' },
    { q: 'When does the step-up apply?', a: '<p>At the start of each new year of the SIP. A 10% step-up on ₹10,000 makes the second year ₹11,000 a month, the third ₹12,100, and so on.</p>' },
    { q: 'SIP or lumpsum, which is better?', a: '<p>If you already have the money, investing it at once has the higher expected return because it is invested longer. SIP suits people investing from monthly income and smooths out the entry price. Use the two modes above to compare the same total amount.</p>' },
  ],
};
