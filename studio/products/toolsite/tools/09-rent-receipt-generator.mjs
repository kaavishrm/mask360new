export default {
  slug: 'rent-receipt-generator',
  title: 'Rent Receipt Generator',
  h1: 'Rent Receipt Generator for HRA claims',
  summary: 'Monthly rent receipts, ready to print or save as PDF. No watermark.',
  description: 'Free rent receipt generator for HRA. Create monthly rent receipts with tenant, landlord, PAN and property details, then print or save as PDF. No signup, no watermark.',
  category: 'documents',
  related: ['hra-calculator', 'salary-slip-generator', 'gst-invoice-generator'],
  print: true,
  intro: 'Fill in the details once and generate a receipt for each month. Use Print and choose Save as PDF to download. Nothing you type leaves your browser.',
  tool: `
<form id="f">
  <div class="grid-2">
    <label>Tenant name<input type="text" name="tenant" placeholder="Rahul Sharma" required></label>
    <label>Landlord name<input type="text" name="landlord" placeholder="Sunita Verma" required></label>
    <label>Landlord PAN <span class="hint">Needed if rent exceeds ₹1,00,000 a year</span><input type="text" name="pan" placeholder="ABCDE1234F" maxlength="10" style="text-transform:uppercase"></label>
    <label>Monthly rent (₹)<input type="number" name="rent" value="18000" min="0" step="100"></label>
    <label>Address of rented property<textarea name="addr" placeholder="Flat 302, Sunrise Apartments, Andheri West, Mumbai 400053"></textarea></label>
    <label>Payment mode<select name="mode"><option>Bank transfer</option><option>UPI</option><option>Cheque</option><option>Cash</option></select></label>
    <label>First month<input type="month" name="from" value="2026-04"></label>
    <label>Number of months<input type="number" name="n" value="12" min="1" max="12"></label>
    <label>Receipt date<select name="dt"><option value="last" selected>Last day of each month</option><option value="first">First day of each month</option><option value="today">Today, on every receipt</option></select></label>
  </div>
  <div class="actions"><button type="button" class="btn" id="go">Generate receipts</button><button type="button" class="btn secondary" id="pr">Print or save as PDF</button></div>
  <p class="tool-note note">Tip: in the print dialog, set destination to Save as PDF. One receipt prints per page.</p>
  <div class="sheet" id="sheet" hidden></div>
</form>`,
  script: function () {
    const H = window.H;
    const f = document.getElementById('f'), sheet = document.getElementById('sheet');
    function gen() {
      const tenant = H.str(f, 'tenant') || '____________', landlord = H.str(f, 'landlord') || '____________', pan = H.str(f, 'pan').toUpperCase();
      const rent = H.val(f, 'rent'), addr = H.str(f, 'addr') || '____________', mode = H.str(f, 'mode'), n = Math.max(1, Math.min(12, H.val(f, 'n'))), dt = H.str(f, 'dt');
      const [fy, fm] = (H.str(f, 'from') || '2026-04').split('-').map(Number);
      let html = '';
      for (let k = 0; k < n; k++) {
        const d0 = new Date(fy, fm - 1 + k, 1);
        const period = H.monthName(d0.getMonth()) + ' ' + d0.getFullYear();
        const rd = dt === 'today' ? new Date() : dt === 'first' ? d0 : new Date(d0.getFullYear(), d0.getMonth() + 1, 0);
        html += '<div class="receipt"><div class="row"><h2>Rent Receipt</h2><div class="muted">Receipt no. ' + (k + 1) + ' of ' + n + '<br>Date: ' + H.dmy(rd) + '</div></div>' +
          '<p>Received with thanks from <strong>' + H.esc(tenant) + '</strong> a sum of <strong>' + H.inr(rent) + '</strong> (' + H.words(rent) + ') by ' + H.esc(mode) + ' towards rent for the month of <strong>' + period + '</strong> for the property at <strong>' + H.nl(addr) + '</strong>.</p>' +
          '<div class="row" style="margin-top:18px"><div><strong>Landlord:</strong> ' + H.esc(landlord) + (pan ? '<br><strong>PAN:</strong> ' + H.esc(pan) : '') + '</div>' + (mode === 'Cash' && rent > 5000 ? '<div class="stamp">Affix revenue stamp</div>' : '') + '</div>' +
          '<div class="sig"><div>Signature of landlord</div></div></div>';
      }
      sheet.innerHTML = html; sheet.hidden = false;
    }
    document.getElementById('go').addEventListener('click', gen);
    document.getElementById('pr').addEventListener('click', () => { gen(); H.print(); });
    f.addEventListener('submit', (e) => { e.preventDefault(); gen(); });
  },
  explainer: `
<h2>What a valid rent receipt contains</h2>
<p>The tenant's name, the landlord's name, the amount, the month it covers, the address of the property, the date, the mode of payment and the landlord's signature. The landlord's PAN is needed when the rent paid in a year is more than ₹1,00,000. For cash payments above ₹5,000 a revenue stamp is affixed and signed across. The generator leaves a box for it when you pick cash.</p>
<h2>Why employers ask for receipts</h2>
<p>To allow the HRA exemption under Section 10(13A), the employer needs proof that rent was paid. Most payroll teams collect receipts for the whole year in January or February. Many accept quarterly receipts; some want one for each month. Generate twelve at once here and submit whichever set is asked for.</p>
<h2>Paying rent to parents or a spouse</h2>
<p>Rent paid to a parent is allowed if the money is actually transferred and the parent declares it as rental income. Paying rent to a spouse is generally not accepted. Keep bank records in either case.</p>
<h2>Save as PDF</h2>
<p>Click Print, choose Save as PDF as the destination and each receipt lands on its own page. Nothing is uploaded; the PDF is created by your browser.</p>
<h2>Landlord without a PAN</h2>
<p>If annual rent exceeds ₹1,00,000 and the landlord has no PAN, ask for a signed declaration with name and address in the format your employer provides. The exemption can still be claimed.</p>`,
  faq: [
    { q: 'Do I need a rent agreement as well?', a: '<p>Receipts are usually enough for payroll. Some employers also ask for the agreement, and the tax department can ask for it later, so keep a copy.</p>' },
    { q: 'Is a digital or printed receipt valid?', a: '<p>Yes. A printed receipt signed by the landlord, or a PDF with the landlord\'s signature, is accepted. The format does not matter; the details do.</p>' },
    { q: 'Can I generate receipts for a past financial year?', a: '<p>Yes. Pick the first month and number of months. Receipts are typically dated the last day of the month they cover, which is the default here.</p>' },
  ],
};
