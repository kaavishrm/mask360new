import invoiceDoc from './lib/invoice-doc.mjs';

export default {
  slug: 'quotation-generator',
  title: 'Quotation Generator',
  h1: 'Quotation Generator: a priced estimate with GST, validity and terms',
  summary: 'A clean quote or estimate with line items, GST and an acceptance block.',
  description: 'Free quotation generator for India. Create a quote or estimate with line items, HSN or SAC codes, GST shown separately, validity date, terms and an acceptance block, then print or save as PDF. No signup, no watermark.',
  category: 'documents',
  lib: [invoiceDoc],
  related: ['gst-invoice-generator', 'bill-of-supply-generator', 'delivery-challan-generator', 'gst-calculator'],
  print: true,
  intro: 'Fill in your details, the customer, what you are offering and your terms. The quotation updates as you type and is ready to print or send as a PDF.',
  tool: `
<form id="f">
  <div class="grid-2">
  <fieldset><legend>From (you)</legend><div class="grid">
    <label>Business name<input type="text" name="sname" placeholder="Hisaab Consulting"></label>
    <label>GSTIN (if registered)<input type="text" name="sgst" placeholder="27ABCDE1234F1Z5" maxlength="15" style="text-transform:uppercase"></label>
    <label style="grid-column:1/-1">Address<textarea name="saddr" placeholder="12, Link Road, Malad West, Mumbai 400064, Maharashtra"></textarea></label>
    <label>State<select name="sstate" id="sstate"></select></label>
    <label>Email or phone<input type="text" name="scontact" placeholder="hello@example.in"></label>
  </div></fieldset>
  <fieldset><legend>To</legend><div class="grid">
    <label>Customer name<input type="text" name="bname" placeholder="Sharma Traders"></label>
    <label>Contact person<input type="text" name="bperson" placeholder="Mr Rohit Sharma"></label>
    <label style="grid-column:1/-1">Address<textarea name="baddr" placeholder="Shop 4, Karol Bagh, New Delhi 110005"></textarea></label>
    <label>Customer's state<select name="pos" id="pos"></select></label>
  </div></fieldset>
  </div>
  <fieldset><legend>Quotation</legend><div class="grid">
    <label>Quotation number<input type="text" name="no" value="QT-2026-001"></label>
    <label>Date<input type="date" name="date"></label>
    <label>Valid until<input type="date" name="valid"></label>
    <label style="grid-column:1/-1">Subject<input type="text" name="subject" placeholder="Website design and development"></label>
  </div></fieldset>
  <fieldset><legend>Items</legend>
    <div class="item-rows" id="items"></div>
    <div class="actions"><button type="button" class="btn small secondary" id="add">Add line</button></div>
  </fieldset>
  <fieldset><legend>Terms</legend><div class="grid-2">
    <label>Terms and conditions<textarea name="terms">Prices are valid until the date shown. GST as applicable at the time of invoicing.
Payment: 50% advance with the order, balance on delivery.
Delivery: within 4 weeks of advance and approved brief.</textarea></label>
    <label>Notes<textarea name="notes" placeholder="Two rounds of revisions included."></textarea></label>
  </div></fieldset>
  <div class="actions"><button type="button" class="btn secondary" id="pr">Print or save as PDF</button></div>
  <div class="sheet" id="sheet"></div>
</form>`,
  script: function () {
    const H = window.H, D = invoiceDoc();
    const f = document.getElementById('f'), items = document.getElementById('items'), sheet = document.getElementById('sheet');
    D.fillStates(f.elements.sstate, '27'); D.fillStates(f.elements.pos, '27');
    f.elements.date.value = H.today();
    const v = new Date(); v.setDate(v.getDate() + 30); f.elements.valid.value = v.toISOString().slice(0, 10);
    const addRow = (d) => D.addRow(items, d, { tax: true, onChange: render });
    addRow({ desc: 'Website design and development', hsn: '998314', qty: 1, unit: 'nos', rate: 25000, gst: 18 });
    document.getElementById('add').addEventListener('click', () => { addRow(); render(); });
    function render() {
      const inter = f.elements.sstate.value !== f.elements.pos.value;
      const it = D.readItems(items, true);
      const tot = D.totals('Subtotal', it.taxable, D.taxRows(it.tax, inter), it.taxable + it.tax);
      sheet.innerHTML = '<div class="row"><div><h2>Quotation</h2><div class="muted">Quotation no. <strong>' + H.esc(H.str(f, 'no')) + '</strong><br>Date: ' + D.dmy(H.str(f, 'date')) + (H.str(f, 'valid') ? '<br>Valid until: ' + D.dmy(H.str(f, 'valid')) : '') + '</div></div>' +
        '<div class="right">' + D.party(H.str(f, 'sname'), 'Your business name', H.str(f, 'saddr'), H.str(f, 'sgst'), (H.str(f, 'scontact') ? '<br>' + H.esc(H.str(f, 'scontact')) : '')) + '</div></div>' +
        '<div class="row" style="margin:14px 0"><div><strong>To</strong><br>' + D.party(H.str(f, 'bname'), 'Customer name', H.str(f, 'baddr'), '', (H.str(f, 'bperson') ? '<br>Attn: ' + H.esc(H.str(f, 'bperson')) : '')) + '</div>' + (H.str(f, 'subject') ? '<div><strong>Subject</strong><br>' + H.esc(H.str(f, 'subject')) + '</div>' : '') + '</div>' +
        it.table +
        '<div class="row" style="align-items:flex-start"><div style="flex:1;min-width:200px">' + (H.str(f, 'terms') ? '<strong>Terms</strong><br><span class="muted">' + H.nl(H.str(f, 'terms')) + '</span>' : '') + (H.str(f, 'notes') ? '<p class="muted">' + H.nl(H.str(f, 'notes')) + '</p>' : '') + '</div>' + tot.html + '</div>' +
        '<p><span class="muted">Amount in words:</span> ' + H.words(tot.rounded) + '</p>' +
        '<p class="muted">This is a quotation, not a tax invoice. No tax credit can be claimed on it. A tax invoice will be issued on confirmation of the order.</p>' +
        '<div class="sig"><div>Accepted for ' + (H.esc(H.str(f, 'bname')) || 'Customer') + '<br><br><br>Signature and date</div><div>For ' + (H.esc(H.str(f, 'sname')) || 'Supplier') + '<br><br><br>Authorised signatory</div></div>';
    }
    H.bind(f, render);
    items.addEventListener('input', render); items.addEventListener('change', render);
    document.getElementById('pr').addEventListener('click', () => H.print());
  },
  explainer: `
<h2>What a good quotation contains</h2>
<p>A quotation has no statutory format, but a customer, a bank or an auditor expects the same things on every one: who is quoting, to whom, a number and a date, a validity period, the items with quantity and rate, the tax shown separately, the total in words, and the terms under which the price holds. A quotation that leaves out validity or payment terms invites the two arguments that cost small businesses the most: a price held open for months and an unpaid advance.</p>
<h3>Showing GST on a quote</h3>
<p>Quote the price before tax and show GST as a separate line at the rate that will apply on the invoice. The customer sees the full outgo, and if a registered customer will claim the credit, they can see the taxable value at a glance. The generator splits the tax into CGST and SGST when your state matches the customer's, and shows IGST otherwise, the same way the eventual invoice will. If you are a composition dealer or unregistered, set every line to 0%.</p>
<h3>A quotation is not an invoice</h3>
<p>No tax is payable on a quotation, no input credit arises from it, and it does not need a GSTIN series or e-invoice registration. The footer says so, so that nobody books it as a purchase. Once the customer accepts, issue a tax invoice with the <a href="/gst-invoice-generator/">GST invoice generator</a> using the same line items, or a <a href="/bill-of-supply-generator/">bill of supply</a> if you do not charge GST.</p>
<h3>Validity and terms worth stating</h3>
<p>Thirty days is the common validity for services; for goods with volatile input costs, seven to fifteen days is safer. State the advance you need to start, when the balance falls due, what is included and what costs extra, the delivery or completion period, and who bears freight and insurance for goods. For services, name the number of revision rounds. Each line you write here is one fewer email later.</p>
<h3>Acceptance</h3>
<p>The two signature blocks at the bottom let the customer countersign the quote. A signed quotation with clear terms is a contract in substance and is usually enough for a small engagement; larger ones still need a work order or agreement.</p>
<p class="tiny">The generator does not number quotations automatically; keep your own series. Rules on tax rates are those in force on the date at the bottom of the page.</p>`,
  faq: [
    { q: 'Should I quote inclusive or exclusive of GST?', a: '<p>Exclusive, with GST on a separate line, unless you are selling to consumers who expect one all-in price. Business customers compare taxable values and claim credit on the tax.</p>' },
    { q: 'Is a quotation legally binding?', a: '<p>A quotation is an offer. Once the customer accepts it within the validity period, a contract forms on those terms. That is why the validity date and the terms matter, and why the acceptance block is there.</p>' },
    { q: 'What is the difference between a quotation, an estimate and a proforma invoice?', a: '<p>In practice the first two are the same document. A proforma invoice looks like an invoice but is issued before supply, often so a customer can arrange payment or an import permit. None of the three is a tax invoice.</p>' },
    { q: 'Can I convert this into an invoice?', a: '<p>Not automatically. Re-enter the lines in the GST invoice generator once the order is confirmed. Keeping the two separate avoids accidentally sending a quotation numbered like an invoice.</p>' },
  ],
};
