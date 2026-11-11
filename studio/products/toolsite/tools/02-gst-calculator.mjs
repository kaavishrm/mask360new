export default {
  slug: 'gst-calculator',
  title: 'GST Calculator',
  h1: 'GST Calculator: add or remove GST, with CGST, SGST and IGST split',
  summary: 'Add GST to a price or pull it out of an inclusive amount.',
  description: 'Free GST calculator for India. Add GST to a base price or extract GST from an inclusive amount at 5%, 12%, 18% or 28%, with the CGST, SGST and IGST split shown.',
  category: 'tax',
  related: ['gst-invoice-generator', 'income-tax-calculator'],
  intro: 'Type an amount, pick the rate and whether the amount already includes GST. The split between CGST, SGST and IGST updates as you type.',
  tool: `
<form id="f">
  <div class="grid">
    <label>Amount (₹)<input type="number" name="amt" value="10000" min="0" step="1"></label>
    <label>GST rate<select name="rate"><option value="0">0%</option><option value="0.25">0.25%</option><option value="3">3%</option><option value="5">5%</option><option value="12">12%</option><option value="18" selected>18%</option><option value="28">28%</option></select></label>
    <div class="field"><span>The amount is</span><div class="seg"><input type="radio" name="mode" id="m1" value="ex" checked><label for="m1">Without GST</label><input type="radio" name="mode" id="m2" value="in"><label for="m2">Inclusive of GST</label></div></div>
    <div class="field"><span>Supply type</span><div class="seg"><input type="radio" name="sup" id="s1" value="intra" checked><label for="s1">Within state</label><input type="radio" name="sup" id="s2" value="inter"><label for="s2">Between states</label></div></div>
  </div>
  <div class="result" id="out"></div>
</form>`,
  script: function () {
    const H = window.H;
    H.bind('f', (f) => {
      const amt = H.val(f, 'amt'), r = H.val(f, 'rate') / 100;
      const inclusive = f.elements.mode.value === 'in', inter = f.elements.sup.value === 'inter';
      const base = inclusive ? amt / (1 + r) : amt;
      const gst = base * r, total = base + gst;
      const split = inter ? '<div class="stat"><b>' + H.inr(gst, 2) + '</b><span>IGST ' + (r * 100) + '%</span></div>'
        : '<div class="stat"><b>' + H.inr(gst / 2, 2) + '</b><span>CGST ' + (r * 50) + '%</span></div><div class="stat"><b>' + H.inr(gst / 2, 2) + '</b><span>SGST ' + (r * 50) + '%</span></div>';
      document.getElementById('out').innerHTML = '<div class="big"><div class="stat"><b>' + H.inr(base, 2) + '</b><span>Taxable value</span></div>' + split + '<div class="stat best"><b>' + H.inr(total, 2) + '</b><span>Total with GST</span></div></div>' +
        '<p class="note">' + (inclusive ? 'GST removed: ' + H.inr(gst, 2) + ' was included in ' + H.inr(amt, 2) + '.' : 'GST added: ' + H.inr(gst, 2) + ' on ' + H.inr(amt, 2) + '.') + '</p>';
    });
  },
  explainer: `
<h2>The two calculations</h2>
<p>Adding GST to a price is straightforward: multiply by the rate. Removing GST from an inclusive price trips people up because you divide, not subtract.</p>
<span class="formula">Add GST:     GST = Price × Rate ÷ 100
Remove GST:  Base = Inclusive price ÷ (1 + Rate ÷ 100)</span>
<p>Example: a bill of ₹11,800 inclusive of 18% GST has a taxable value of ₹10,000 and GST of ₹1,800. Subtracting 18% of ₹11,800 would give the wrong answer.</p>
<h2>CGST, SGST and IGST</h2>
<p>When buyer and seller are in the same state, the GST is split equally between the Centre (CGST) and the state (SGST). An 18% supply becomes 9% CGST plus 9% SGST. When the supply crosses a state border, the whole amount is charged as IGST. The total tax is the same either way; only who collects it changes.</p>
<h2>GST rates in India</h2>
<p>The main slabs are 5%, 12%, 18% and 28%, with 0.25% for rough diamonds and 3% for gold and jewellery. Essentials such as unbranded food grains are nil-rated. Restaurant services are usually 5% without input credit. Most services and manufactured goods sit at 18%. Rates are set by the GST Council and change from time to time, so check the current schedule for anything borderline.</p>
<h2>Reverse calculation for invoices</h2>
<p>If a customer agrees to an all-inclusive price, use the inclusive mode here to find the taxable value you must show on the invoice. The GST invoice generator on this site does that automatically for each line.</p>`,
  faq: [
    { q: 'How do I remove 18% GST from an amount?', a: '<p>Divide the inclusive amount by 1.18. For ₹11,800 the base is ₹10,000 and the GST is ₹1,800.</p>' },
    { q: 'When is IGST charged instead of CGST and SGST?', a: '<p>IGST applies when the place of supply is in a different state from the supplier, and on imports. Within a state, the tax is split equally into CGST and SGST.</p>' },
    { q: 'Is the GST calculation different for services?', a: '<p>No. The arithmetic is the same for goods and services. Only the applicable rate differs.</p>' },
  ],
};
