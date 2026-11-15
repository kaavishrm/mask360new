import invoiceDoc from './lib/invoice-doc.mjs';

export default {
  slug: 'delivery-challan-generator',
  title: 'Delivery Challan Generator',
  h1: 'Delivery Challan Generator: move goods without an invoice under Rule 55',
  summary: 'A challan for job work, goods on approval, branch transfers and supplies where the invoice follows.',
  description: 'Free delivery challan generator for India. Create a GST delivery challan under Rule 55 for job work, goods sent on approval, branch transfers or supply with invoice to follow, marked original, duplicate or triplicate, with transport and e-way bill details. Print or save as PDF.',
  category: 'documents',
  lib: [invoiceDoc],
  related: ['gst-invoice-generator', 'bill-of-supply-generator', 'quotation-generator', 'gst-calculator'],
  print: true,
  intro: 'Fill in who is sending, who is receiving, why the goods are moving and how. Print the three copies the rules require by switching the copy label.',
  tool: `
<form id="f">
  <fieldset><legend>Challan</legend><div class="grid">
    <label>Challan number<input type="text" name="no" value="DC-2026-001"></label>
    <label>Date<input type="date" name="date"></label>
    <label>Purpose of movement<select name="purpose"><option value="jobwork">Job work</option><option value="approval">Goods sent on approval or return basis</option><option value="supply">Supply, tax invoice to follow</option><option value="branch">Transfer between branches under the same GSTIN</option><option value="exhibition">Exhibition or demonstration</option><option value="other">Other reason not amounting to supply</option></select></label>
    <label>Copy<select name="copy"><option value="ORIGINAL FOR CONSIGNEE">Original for consignee</option><option value="DUPLICATE FOR TRANSPORTER">Duplicate for transporter</option><option value="TRIPLICATE FOR CONSIGNOR">Triplicate for consignor</option></select></label>
  </div></fieldset>
  <div class="grid-2">
  <fieldset><legend>Consignor (sender)</legend><div class="grid">
    <label>Name<input type="text" name="sname" placeholder="Mehta Engineering Works"></label>
    <label>GSTIN<input type="text" name="sgst" placeholder="24ABCDE1234F1Z5" maxlength="15" style="text-transform:uppercase"></label>
    <label style="grid-column:1/-1">Address<textarea name="saddr" placeholder="Plot 14, GIDC, Vatva, Ahmedabad 382445, Gujarat"></textarea></label>
    <label>State<select name="sstate" id="sstate"></select></label>
  </div></fieldset>
  <fieldset><legend>Consignee (receiver)</legend><div class="grid">
    <label>Name<input type="text" name="bname" placeholder="Patel Powder Coating"></label>
    <label>GSTIN (if registered)<input type="text" name="bgst" placeholder="24PQRST5678G1Z2" maxlength="15" style="text-transform:uppercase"></label>
    <label style="grid-column:1/-1">Address<textarea name="baddr" placeholder="Survey 88, Changodar, Ahmedabad 382213"></textarea></label>
    <label>Place of supply<select name="pos" id="pos"></select></label>
  </div></fieldset>
  </div>
  <fieldset><legend>Items</legend>
    <div class="item-rows" id="items"></div>
    <div class="actions"><button type="button" class="btn small secondary" id="add">Add line</button></div>
  </fieldset>
  <fieldset><legend>Transport</legend><div class="grid">
    <label>Vehicle number<input type="text" name="vehicle" placeholder="GJ 01 AB 1234" style="text-transform:uppercase"></label>
    <label>Transporter<input type="text" name="transporter" placeholder="Own vehicle"></label>
    <label>E-way bill number <span class="hint">Needed above ₹50,000</span><input type="text" name="eway" placeholder="1234 5678 9012"></label>
    <label style="grid-column:1/-1">Remarks<textarea name="notes" placeholder="Material to be returned after powder coating within 30 days."></textarea></label>
  </div></fieldset>
  <div class="actions"><button type="button" class="btn secondary" id="pr">Print or save as PDF</button></div>
  <div class="sheet" id="sheet"></div>
</form>`,
  script: function () {
    const H = window.H, D = invoiceDoc();
    const f = document.getElementById('f'), items = document.getElementById('items'), sheet = document.getElementById('sheet');
    D.fillStates(f.elements.sstate, '24'); D.fillStates(f.elements.pos, '24');
    f.elements.date.value = H.today();
    const addRow = (d) => D.addRow(items, d, { tax: true, onChange: render, placeholder: 'MS brackets, 200 mm' });
    addRow({ desc: 'MS brackets, 200 mm', hsn: '7308', qty: 500, unit: 'nos', rate: 50, gst: 18 });
    document.getElementById('add').addEventListener('click', () => { addRow(); render(); });
    const PURPOSE = { jobwork: 'Goods sent for job work. Not a supply; to be returned after processing.', approval: 'Goods sent on approval or return basis. Tax invoice to be issued on acceptance.', supply: 'Supply of goods. Tax invoice to follow.', branch: 'Transfer between units of the same registered person. Not a supply.', exhibition: 'Goods sent for exhibition or demonstration. Not a supply.', other: 'Movement of goods for a reason other than supply.' };
    function render() {
      const purpose = f.elements.purpose.value, forSupply = purpose === 'supply';
      const inter = f.elements.sstate.value !== f.elements.pos.value;
      const it = D.readItems(items, forSupply);
      const tot = D.totals(forSupply ? 'Taxable value' : 'Value of goods', it.taxable, forSupply ? D.taxRows(it.tax, inter) : '', it.taxable + it.tax);
      sheet.innerHTML = '<p class="muted" style="text-align:right;margin:0;font-weight:600">' + H.esc(f.elements.copy.value) + '</p>' +
        '<div class="row"><div><h2>Delivery Challan</h2><div class="muted">Challan no. <strong>' + H.esc(H.str(f, 'no')) + '</strong><br>Date: ' + D.dmy(H.str(f, 'date')) + '</div></div>' +
        '<div class="right">' + D.party(H.str(f, 'sname'), 'Consignor name', H.str(f, 'saddr'), H.str(f, 'sgst'), '<br>State: ' + D.stateName(f.elements.sstate) + ' (' + f.elements.sstate.value + ')') + '</div></div>' +
        '<div class="row" style="margin:14px 0"><div><strong>Consignee</strong><br>' + D.party(H.str(f, 'bname'), 'Consignee name', H.str(f, 'baddr'), H.str(f, 'bgst')) + '</div><div><strong>Purpose</strong><br><span class="muted">' + PURPOSE[purpose] + '</span>' + (inter || forSupply ? '<br><strong>Place of supply</strong><br>' + D.stateName(f.elements.pos) + ' (' + f.elements.pos.value + ')' : '') + '</div></div>' +
        it.table +
        '<div class="row" style="align-items:flex-start"><div style="flex:1;min-width:200px"><strong>Transport</strong><br><span class="muted">' + (H.str(f, 'vehicle') ? 'Vehicle: ' + H.esc(H.str(f, 'vehicle').toUpperCase()) + '<br>' : '') + (H.str(f, 'transporter') ? 'Transporter: ' + H.esc(H.str(f, 'transporter')) + '<br>' : '') + (H.str(f, 'eway') ? 'E-way bill: ' + H.esc(H.str(f, 'eway')) : '') + '</span>' + (H.str(f, 'notes') ? '<p class="muted">' + H.nl(H.str(f, 'notes')) + '</p>' : '') + '</div>' + tot.html + '</div>' +
        '<p><span class="muted">Value in words:</span> ' + H.words(tot.rounded) + '</p>' +
        (forSupply ? '' : '<p class="muted">Not a tax invoice. ' + (purpose === 'jobwork' ? 'Inputs sent for job work must return within one year and capital goods within three years, failing which the dispatch is treated as a supply on the date it was sent.' : 'No tax is charged on this challan.') + '</p>') +
        '<div class="sig"><div>Received in good condition<br><br><br>Consignee signature</div><div>For ' + (H.esc(H.str(f, 'sname')) || 'Consignor') + '<br><br><br>Authorised signatory</div></div>';
    }
    H.bind(f, render);
    items.addEventListener('input', render); items.addEventListener('change', render);
    document.getElementById('pr').addEventListener('click', () => H.print());
  },
  explainer: `
<h2>When goods move without an invoice</h2>
<p>A tax invoice is issued when goods are supplied. Goods also move for reasons that are not a supply, or before the invoice can be raised, and Rule 55 of the CGST Rules lets them travel on a delivery challan instead. The usual cases: inputs or capital goods sent to a job worker and brought back; goods sent on approval or return, where the sale happens only if the customer keeps them; stock moving between two branches under the same GSTIN; machinery going to an exhibition; and a supply where the quantity is not known at dispatch, such as liquid gas, with the invoice to follow.</p>
<h3>What the challan must show</h3>
<p>Rule 55(1) lists the contents: the date and a serial number; the consignor's name, address and GSTIN; the consignee's name, address and GSTIN if registered; the HSN code and description of the goods; the quantity, which may be provisional where the exact quantity is not known; the taxable value; the tax rate and amount where the movement is for a supply; the place of supply for an inter-state movement; and the signature. The generator shows the tax lines only when you choose supply as the purpose, since that is the only case where tax belongs on the challan.</p>
<h3>Three copies</h3>
<p>Rule 55(2) requires the challan in triplicate, marked "Original for consignee", "Duplicate for transporter" and "Triplicate for consignor". Switch the copy field and print each one; the marking appears at the top right.</p>
<h3>E-way bill</h3>
<p>Where the value of the consignment, including tax, exceeds ₹50,000, an e-way bill must be generated on the portal before the goods move, with the challan as the supporting document. For job work sent across a state border, an e-way bill is required whatever the value, and either the principal or a registered job worker can generate it.</p>
<h3>Job work time limits</h3>
<p>Inputs sent for job work must come back, or be supplied from the job worker's premises, within one year, and capital goods within three years. If they do not, the original dispatch is treated as a supply on the date the goods went out, with tax and interest due from then. The challan is the record that starts the clock, so keep a register of challans issued and goods returned.</p>
<p class="tiny">Not covered: the ITC-04 return for job work, movement by a job worker back to the principal, and the specific rules for liquid gas and semi-knocked-down consignments. Rules are those in force on the date at the bottom of the page.</p>`,
  faq: [
    { q: 'Is a delivery challan the same as an invoice?', a: '<p>No. A challan records the movement of goods; an invoice records a supply and the tax on it. For a supply, the invoice follows the challan, usually at delivery or when the quantity is confirmed.</p>' },
    { q: 'Do I need a challan for goods going to my own branch?', a: '<p>If the branch is under the same GSTIN, yes, a challan is the right document and no tax applies. If the branch has a separate registration, even in the same state, the transfer is a supply and needs a tax invoice.</p>' },
    { q: 'What happens if the job worker keeps the goods beyond a year?', a: '<p>The dispatch is deemed a supply as of the original date. The principal pays tax on it with interest from that date. Sending the goods back before the deadline, even briefly, avoids this.</p>' },
    { q: 'Can one challan cover goods for several customers?', a: '<p>A challan runs between one consignor and one consignee. A vehicle carrying goods for several consignees carries one challan per consignee and a single e-way bill per challan where required.</p>' },
  ],
};
