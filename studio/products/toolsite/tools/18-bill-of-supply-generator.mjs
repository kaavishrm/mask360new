import invoiceDoc from './lib/invoice-doc.mjs';

export default {
  slug: 'bill-of-supply-generator',
  title: 'Bill of Supply Generator',
  h1: 'Bill of Supply Generator: invoice without GST for composition dealers, exempt supplies and unregistered sellers',
  summary: 'A bill with no tax lines and the declaration the rules require, ready to print.',
  description: 'Free bill of supply generator for India. Create an invoice without GST for a composition dealer, an exempt or nil-rated supply, or an unregistered seller, with the declaration required by Rule 49, then print or save as PDF. No signup, no watermark.',
  category: 'documents',
  lib: [invoiceDoc],
  related: ['gst-invoice-generator', 'quotation-generator', 'delivery-challan-generator', 'gst-calculator'],
  print: true,
  intro: 'Pick why no tax is charged, fill in the two parties and the line items, and the bill updates as you type with the correct declaration at the top.',
  tool: `
<form id="f">
  <fieldset><legend>Why no GST is charged</legend><div class="grid">
    <label>Reason<select name="reason"><option value="comp">I am a composition taxable person</option><option value="exempt">The supply is exempt or nil rated</option><option value="unreg">I am not registered under GST</option></select></label>
    <label>Bill number<input type="text" name="no" value="BOS-2026-001"></label>
    <label>Date<input type="date" name="date"></label>
  </div></fieldset>
  <div class="grid-2">
  <fieldset><legend>Supplier (you)</legend><div class="grid">
    <label>Business name<input type="text" name="sname" placeholder="Sharma Sweets"></label>
    <label>GSTIN <span class="hint">Leave blank if unregistered</span><input type="text" name="sgst" placeholder="27ABCDE1234F1Z5" maxlength="15" style="text-transform:uppercase"></label>
    <label style="grid-column:1/-1">Address<textarea name="saddr" placeholder="12, Station Road, Thane 400601, Maharashtra"></textarea></label>
    <label>State<select name="sstate" id="sstate"></select></label>
    <label>Email or phone<input type="text" name="scontact" placeholder="98765 43210"></label>
  </div></fieldset>
  <fieldset><legend>Recipient</legend><div class="grid">
    <label>Name<input type="text" name="bname" placeholder="Verma Caterers"></label>
    <label>GSTIN (if registered)<input type="text" name="bgst" placeholder="27PQRST5678G1Z2" maxlength="15" style="text-transform:uppercase"></label>
    <label style="grid-column:1/-1">Address<textarea name="baddr" placeholder="Shop 9, Market Yard, Pune 411037"></textarea></label>
  </div></fieldset>
  </div>
  <fieldset><legend>Items</legend>
    <div class="item-rows" id="items"></div>
    <div class="actions"><button type="button" class="btn small secondary" id="add">Add line</button></div>
  </fieldset>
  <fieldset><legend>Payment and notes (optional)</legend><div class="grid-2">
    <label>Bank or UPI details<textarea name="bank" placeholder="UPI: sharmasweets@upi"></textarea></label>
    <label>Notes<textarea name="notes" placeholder="Goods once sold will not be taken back."></textarea></label>
  </div></fieldset>
  <div class="actions"><button type="button" class="btn secondary" id="pr">Print or save as PDF</button></div>
  <div class="sheet" id="sheet"></div>
</form>`,
  script: function () {
    const H = window.H, D = invoiceDoc();
    const f = document.getElementById('f'), items = document.getElementById('items'), sheet = document.getElementById('sheet');
    D.fillStates(f.elements.sstate, '27');
    f.elements.date.value = H.today();
    const addRow = (d) => D.addRow(items, d, { tax: false, onChange: render, placeholder: 'Mixed sweets, 1 kg box' });
    addRow({ desc: 'Mixed sweets, 1 kg box', hsn: '2106', qty: 50, unit: 'nos', rate: 500 });
    document.getElementById('add').addEventListener('click', () => { addRow(); render(); });
    const DECL = { comp: 'Composition taxable person, not eligible to collect tax on supplies', exempt: 'Exempt supply. No GST is charged on this bill.', unreg: 'Supplier is not registered under GST. No GST is charged on this bill.' };
    function render() {
      const reason = f.elements.reason.value;
      const it = D.readItems(items, false);
      const tot = D.totals('Value of supply', it.taxable, '', it.taxable);
      sheet.innerHTML = '<p class="muted" style="text-align:center;margin:0 0 10px;font-weight:600">' + DECL[reason] + '</p>' +
        '<div class="row"><div><h2>Bill of Supply</h2><div class="muted">Bill no. <strong>' + H.esc(H.str(f, 'no')) + '</strong><br>Date: ' + D.dmy(H.str(f, 'date')) + '</div></div>' +
        '<div class="right">' + D.party(H.str(f, 'sname'), 'Supplier name', H.str(f, 'saddr'), H.str(f, 'sgst'), '<br>State: ' + D.stateName(f.elements.sstate) + ' (' + f.elements.sstate.value + ')' + (H.str(f, 'scontact') ? '<br>' + H.esc(H.str(f, 'scontact')) : '')) + '</div></div>' +
        '<div class="row" style="margin:14px 0"><div><strong>Bill to</strong><br>' + D.party(H.str(f, 'bname'), 'Recipient name', H.str(f, 'baddr'), H.str(f, 'bgst')) + '</div></div>' +
        it.table +
        '<div class="row" style="align-items:flex-start"><div style="flex:1;min-width:200px">' + (H.str(f, 'bank') ? '<strong>Payment</strong><br><span class="muted">' + H.nl(H.str(f, 'bank')) + '</span>' : '') + (H.str(f, 'notes') ? '<p class="muted">' + H.nl(H.str(f, 'notes')) + '</p>' : '') + '</div>' + tot.html + '</div>' +
        '<p><span class="muted">Amount in words:</span> ' + H.words(tot.rounded) + '</p>' +
        D.signature('No tax is charged on this document and no input tax credit can be claimed against it.', H.str(f, 'sname'));
    }
    H.bind(f, render);
    items.addEventListener('input', render); items.addEventListener('change', render);
    document.getElementById('pr').addEventListener('click', () => H.print());
  },
  explainer: `
<h2>When a bill of supply is the right document</h2>
<p>A tax invoice is for a registered supplier charging GST. In three situations the supplier must not charge GST on the document, and the GST law calls the document a bill of supply. First, a composition taxable person, who pays a flat rate of tax out of pocket and may not collect it from customers. Second, a registered person making an exempt or nil-rated supply, such as unbranded food grains, fresh produce, educational services or residential rent. Third, by extension, an unregistered seller whose turnover is below the registration threshold; strictly they issue an ordinary bill, but the same layout without tax lines does the job and keeps a registered customer from mistaking it for a tax invoice.</p>
<h3>What Rule 49 requires</h3>
<p>Rule 49 of the CGST Rules sets the contents: the supplier's name, address and GSTIN; a consecutive serial number unique for the financial year, up to 16 characters; the date of issue; the recipient's name, address and GSTIN if registered; the HSN code of goods or accounting code of services; a description; the value of the supply after any discount; and the signature of the supplier or an authorised person. There is no tax column, no place-of-supply line and no reverse charge declaration, because none of these apply.</p>
<h3>The composition declaration</h3>
<p>A composition dealer must print the words "composition taxable person, not eligible to collect tax on supplies" at the top of every bill of supply. The generator puts it there when you choose that reason. Shortened forms such as "composition dealer" do not satisfy the rule. The dealer also displays the same words on a board at the place of business.</p>
<h3>Numbering and records</h3>
<p>Keep one series for bills of supply and another for any tax invoices you also issue; do not mix them. Numbers run consecutively within the financial year. A composition dealer reports the quarter's outward supplies in CMP-08 and the year in GSTR-4, so retain a copy of every bill for 72 months from the due date of the annual return.</p>
<h3>Mixed supplies</h3>
<p>If a registered person makes a taxable and an exempt supply to the same customer, the rules allow a single "invoice-cum-bill of supply" showing both. This generator does not combine the two; issue a tax invoice for the taxable part with the <a href="/gst-invoice-generator/">GST invoice generator</a> and a bill of supply for the exempt part.</p>
<p class="tiny">The bill shows one value column with no tax. If you need discounts shown per line, enter the net rate. Rules are those in force on the date at the bottom of the page.</p>`,
  faq: [
    { q: 'Can a composition dealer charge GST on the bill?', a: '<p>No. The composition scheme requires the dealer to pay tax at a flat rate out of their own pocket and bars them from collecting it. A bill with a GST line from a composition dealer is a breach of the scheme.</p>' },
    { q: 'Does an unregistered seller need a GSTIN on the bill?', a: '<p>No. Leave the GSTIN blank; the bill will show the supplier’s name and address only, with the declaration that the supplier is unregistered.</p>' },
    { q: 'Is HSN code compulsory on a bill of supply?', a: '<p>Rule 49 lists the HSN code among the contents. A GST Council FAQ from the early days of GST said composition dealers need not mention HSN. Showing it does no harm and the field is there if you want it.</p>' },
    { q: 'Can the recipient claim input tax credit on a bill of supply?', a: '<p>No. There is no tax on the document, so there is nothing to claim. The generator says this in the footer so a registered customer is not misled.</p>' },
  ],
};
