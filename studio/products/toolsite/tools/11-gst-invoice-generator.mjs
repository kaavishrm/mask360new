import invoiceDoc from './lib/invoice-doc.mjs';

export default {
  slug: 'gst-invoice-generator',
  lib: [invoiceDoc],
  title: 'GST Invoice Generator',
  h1: 'GST Invoice Generator: tax invoice with CGST, SGST or IGST',
  summary: 'A compliant tax invoice with HSN codes and automatic tax split.',
  description: 'Free GST invoice generator for India. Create a tax invoice with GSTIN, HSN or SAC codes, place of supply and automatic CGST, SGST or IGST calculation, then print or save as PDF. No signup, no watermark.',
  category: 'documents',
  related: ['bill-of-supply-generator', 'quotation-generator', 'delivery-challan-generator', 'gst-calculator'],
  print: true,
  intro: 'Fill in seller, buyer and line items. The invoice picks CGST plus SGST or IGST from the place of supply and totals everything, including the amount in words.',
  tool: `
<form id="f">
  <div class="grid-2">
  <fieldset><legend>Seller (you)</legend><div class="grid">
    <label>Business name<input type="text" name="sname" placeholder="Hisaab Consulting"></label>
    <label>GSTIN<input type="text" name="sgst" placeholder="27ABCDE1234F1Z5" maxlength="15" style="text-transform:uppercase"></label>
    <label style="grid-column:1/-1">Address<textarea name="saddr" placeholder="12, Link Road, Malad West, Mumbai 400064, Maharashtra"></textarea></label>
    <label>State<select name="sstate" id="sstate"></select></label>
    <label>Email or phone<input type="text" name="scontact" placeholder="billing@example.in"></label>
  </div></fieldset>
  <fieldset><legend>Buyer</legend><div class="grid">
    <label>Name<input type="text" name="bname" placeholder="Sharma Traders"></label>
    <label>GSTIN (if registered)<input type="text" name="bgst" placeholder="07PQRST5678G1Z2" maxlength="15" style="text-transform:uppercase"></label>
    <label style="grid-column:1/-1">Address<textarea name="baddr" placeholder="Shop 4, Karol Bagh, New Delhi 110005"></textarea></label>
    <label>Place of supply<select name="pos" id="pos"></select></label>
  </div></fieldset>
  </div>
  <fieldset><legend>Invoice</legend><div class="grid">
    <label>Invoice number<input type="text" name="no" value="INV-2026-001"></label>
    <label>Invoice date<input type="date" name="date"></label>
    <label>Due date<input type="date" name="due"></label>
    <label>Payment terms<input type="text" name="terms" value="Due within 15 days"></label>
  </div></fieldset>
  <fieldset><legend>Items</legend>
    <div class="item-rows" id="items"></div>
    <div class="actions"><button type="button" class="btn small secondary" id="add">Add line</button></div>
  </fieldset>
  <fieldset><legend>Bank details and notes (optional)</legend><div class="grid-2">
    <label>Bank account details<textarea name="bank" placeholder="HDFC Bank, A/c 50200012345678, IFSC HDFC0001234, UPI: hisaab@hdfcbank"></textarea></label>
    <label>Notes<textarea name="notes" placeholder="Thank you for your business."></textarea></label>
  </div></fieldset>
  <div class="actions"><button type="button" class="btn secondary" id="pr">Print or save as PDF</button></div>
  <div class="sheet" id="sheet"></div>
</form>`,
  script: function () {
    const H = window.H, D = invoiceDoc();
    const f = document.getElementById('f'), items = document.getElementById('items'), sheet = document.getElementById('sheet');
    D.fillStates(f.elements.sstate, '27'); D.fillStates(f.elements.pos, '27');
    f.elements.date.value = H.today();
    const addRow = (d) => D.addRow(items, d, { tax: true, onChange: render });
    addRow({ desc: 'Consulting services', hsn: '998311', qty: 1, unit: 'nos', rate: 25000, gst: 18 });
    document.getElementById('add').addEventListener('click', () => { addRow(); render(); });
    function render() {
      const sState = f.elements.sstate.value, pos = f.elements.pos.value, inter = sState !== pos;
      const sname = D.stateName(f.elements.sstate), pname = D.stateName(f.elements.pos);
      const it = D.readItems(items, true);
      const tot = D.totals('Taxable value', it.taxable, D.taxRows(it.tax, inter), it.taxable + it.tax);
      sheet.innerHTML = '<div class="row"><div><h2>Tax Invoice</h2><div class="muted">Invoice no. <strong>' + H.esc(H.str(f, 'no')) + '</strong><br>Date: ' + D.dmy(H.str(f, 'date')) + (H.str(f, 'due') ? '<br>Due: ' + D.dmy(H.str(f, 'due')) : '') + '</div></div>' +
        '<div class="right">' + D.party(H.str(f, 'sname'), 'Seller name', H.str(f, 'saddr'), H.str(f, 'sgst'), '<br>State: ' + sname + ' (' + sState + ')' + (H.str(f, 'scontact') ? '<br>' + H.esc(H.str(f, 'scontact')) : '')) + '</div></div>' +
        '<div class="row" style="margin:14px 0"><div><strong>Bill to</strong><br>' + D.party(H.str(f, 'bname'), 'Buyer name', H.str(f, 'baddr'), H.str(f, 'bgst')) + '</div><div><strong>Place of supply</strong><br>' + pname + ' (' + pos + ')<br><span class="muted">' + (inter ? 'Inter-state supply: IGST' : 'Intra-state supply: CGST + SGST') + '</span></div></div>' +
        it.table +
        '<div class="row" style="align-items:flex-start"><div style="flex:1;min-width:200px">' + (H.str(f, 'bank') ? '<strong>Payment</strong><br><span class="muted">' + H.nl(H.str(f, 'bank')) + '</span>' : '') + (H.str(f, 'terms') ? '<br><span class="muted">' + H.esc(H.str(f, 'terms')) + '</span>' : '') + (H.str(f, 'notes') ? '<p class="muted">' + H.nl(H.str(f, 'notes')) + '</p>' : '') + '</div>' + tot.html + '</div>' +
        '<p><span class="muted">Amount in words:</span> ' + H.words(tot.rounded) + '</p>' +
        D.signature('Whether tax is payable on reverse charge: No', H.str(f, 'sname'));
    }
    H.bind(f, render);
    items.addEventListener('input', render); items.addEventListener('change', render);
    document.getElementById('pr').addEventListener('click', () => H.print());
  },
  explainer: `
<h2>What a GST tax invoice must contain</h2>
<p>Rule 46 of the CGST Rules lists the required fields: the supplier's name, address and GSTIN; a consecutive invoice number unique for the financial year; the date; the recipient's name, address and GSTIN if registered; HSN code for goods or SAC for services; description, quantity and unit; taxable value; the rate and amount of CGST, SGST or IGST; the place of supply with state name; whether tax is payable on reverse charge; and the signature of the supplier or an authorised person. This generator covers each of these.</p>
<h2>CGST and SGST, or IGST?</h2>
<p>Compare the supplier's state with the place of supply. Same state: charge CGST and SGST, each at half the rate. Different state: charge IGST at the full rate. The invoice above does this automatically from the two state fields. For services, the place of supply is normally the recipient's location when the recipient is registered.</p>
<h2>HSN and SAC codes</h2>
<p>Businesses with turnover up to ₹5 crore must show at least four digits of the HSN code on B2B invoices; above ₹5 crore, six digits on every invoice. Services use six-digit SAC codes starting with 99. Common ones: 998314 for IT design and development, 998311 for management consulting, 998361 for advertising, 996511 for road transport of goods.</p>
<h2>Invoice numbering</h2>
<p>Numbers must run consecutively within a financial year and may include letters, hyphens and slashes, up to 16 characters. A fresh series can start each April. Do not reuse or skip numbers; a cancelled invoice is still reported.</p>
<h2>E-invoicing</h2>
<p>If your aggregate turnover exceeded ₹5 crore in any year since 2017-18, B2B invoices must be registered on the Invoice Registration Portal and carry an IRN and QR code. This generator is for businesses below that threshold or for B2C invoices; it does not produce an IRN.</p>
<h2>Saving and sending</h2>
<p>Click Print and choose Save as PDF. The invoice is created in your browser. Keep a copy; invoices must be retained for 72 months from the due date of the annual return for that year.</p>`,
  faq: [
    { q: 'Can I issue a GST invoice without a GSTIN?', a: '<p>No. Only registered persons can charge GST. If you are unregistered, issue a bill of supply with no tax lines. Leave the GSTIN and set GST to 0% on each line to use this layout as a plain invoice.</p>' },
    { q: 'What is the difference between a tax invoice and a bill of supply?', a: '<p>A tax invoice shows GST charged and lets a registered buyer claim input credit. A bill of supply is issued by composition dealers and for exempt supplies; it shows no tax.</p>' },
    { q: 'Should I round the total?', a: '<p>Yes. Section 170 of the CGST Act allows rounding of the tax amount to the nearest rupee. The generator rounds the invoice total and shows the round-off line when it applies.</p>' },
    { q: 'Is a digital signature required?', a: '<p>A physical or digital signature of the supplier or an authorised signatory is required. A printed invoice signed by hand is fine. A PDF can carry a digital signature or be signed after printing.</p>' },
  ],
};
