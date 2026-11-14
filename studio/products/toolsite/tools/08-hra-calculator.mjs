export default {
  slug: 'hra-calculator',
  title: 'HRA Exemption Calculator',
  h1: 'HRA Exemption Calculator (Section 10(13A))',
  summary: 'How much of your house rent allowance is tax free.',
  description: 'Free HRA exemption calculator for salaried employees in India. Find the tax-free part of your house rent allowance under Section 10(13A) using the three-condition rule for metro and non-metro cities.',
  category: 'salary',
  related: ['rent-receipt-generator', 'income-tax-calculator', 'gratuity-calculator'],
  intro: 'Enter your monthly basic, DA, HRA received and rent paid. The exemption is the least of three amounts, all shown below.',
  tool: `
<form id="f">
  <div class="grid">
    <label>Basic salary per month (₹)<input type="number" name="basic" value="50000" min="0" step="1000"></label>
    <label>Dearness allowance per month (₹) <span class="hint">Only if it forms part of retirement benefits</span><input type="number" name="da" value="0" min="0" step="500"></label>
    <label>HRA received per month (₹)<input type="number" name="hra" value="20000" min="0" step="500"></label>
    <label>Rent paid per month (₹)<input type="number" name="rent" value="18000" min="0" step="500"></label>
    <label class="chk"><input type="checkbox" name="metro" checked> I live in Delhi, Mumbai, Kolkata or Chennai</label>
  </div>
  <div class="result" id="out"></div>
</form>`,
  script: function () {
    const H = window.H;
    H.bind('f', (f) => {
      const sal = (H.val(f, 'basic') + H.val(f, 'da')) * 12, hra = H.val(f, 'hra') * 12, rent = H.val(f, 'rent') * 12, metro = H.val(f, 'metro');
      const a = hra, b = Math.max(0, rent - 0.10 * sal), c = (metro ? 0.5 : 0.4) * sal;
      const ex = Math.max(0, Math.min(a, b, c));
      document.getElementById('out').innerHTML = '<div class="big"><div class="stat best"><b>' + H.inr(ex) + '</b><span>HRA exempt for the year</span></div><div class="stat"><b>' + H.inr(hra - ex) + '</b><span>Taxable HRA</span></div><div class="stat"><b>' + H.inr(ex / 12) + '</b><span>Exempt per month</span></div></div>' +
        '<div class="tbl-wrap"><table><thead><tr><th>Condition</th><th>Annual amount</th></tr></thead><tbody><tr><td>Actual HRA received</td><td>' + H.inr(a) + '</td></tr><tr><td>Rent paid minus 10% of salary</td><td>' + H.inr(b) + '</td></tr><tr><td>' + (metro ? '50%' : '40%') + ' of salary (basic + DA)</td><td>' + H.inr(c) + '</td></tr><tr><td><strong>Exemption: least of the three</strong></td><td><strong>' + H.inr(ex) + '</strong></td></tr></tbody></table></div>' +
        (rent > 100000 ? '<p class="note">Rent above ₹1,00,000 a year: your employer will ask for the landlord\'s PAN.</p>' : '') +
        '<p class="note">HRA exemption is available only in the old tax regime.</p>';
    });
  },
  explainer: `
<h2>The three-condition rule</h2>
<p>Section 10(13A) exempts the least of:</p>
<ol><li>The HRA you actually received.</li><li>Rent paid minus 10% of salary (basic plus DA).</li><li>50% of salary if you live in Delhi, Mumbai, Kolkata or Chennai, otherwise 40%.</li></ol>
<p>The rest of the HRA is added to your taxable salary. Note that only those four cities count as metro for this purpose; Bengaluru, Hyderabad, Pune and Gurugram are 40% cities despite their rents.</p>
<h2>Example</h2>
<p>Basic ₹50,000 a month, HRA ₹20,000, rent ₹18,000 in Mumbai. Annual figures: HRA ₹2,40,000; rent minus 10% of salary is ₹2,16,000 minus ₹60,000, which is ₹1,56,000; 50% of salary is ₹3,00,000. The exemption is ₹1,56,000 and ₹84,000 of HRA is taxable.</p>
<h2>What you need to claim it</h2>
<p>Rent receipts for the year, a rent agreement if your employer asks, and the landlord's PAN when annual rent exceeds ₹1,00,000. If the landlord has no PAN, a declaration in the prescribed form is accepted. Paying rent to a parent is allowed as long as the money actually changes hands and the parent declares it as income.</p>
<h2>If your employer did not consider HRA</h2>
<p>You can still claim the exemption when filing your return by reducing the taxable salary figure and keeping the receipts for any later query. Form 16 will show the higher figure, so expect the return to differ from it.</p>
<h2>New regime</h2>
<p>HRA exemption is not available under the new tax regime. If HRA is a large part of your salary and you pay substantial rent, run both regimes in the income tax calculator before choosing.</p>`,
  faq: [
    { q: 'Can I claim HRA if I own a house?', a: '<p>Yes, if you live in a rented house in a different city for work and pay rent there. You can claim HRA for the rented house and home loan deductions on the owned house in the same year.</p>' },
    { q: 'Is Bengaluru a metro for HRA?', a: '<p>No. For HRA purposes only Delhi, Mumbai, Kolkata and Chennai qualify for the 50% limit. All other cities use 40%.</p>' },
    { q: 'What if I changed cities during the year?', a: '<p>Calculate month by month with the limit applicable to each city and the rent paid in each, then add up the monthly exemptions. The annual figures above assume one city for the whole year.</p>' },
  ],
};
