// Shared pieces for the invoice-style document generators (tax invoice, bill of supply, quotation, delivery challan).
// Inlined into the page by build.mjs via `lib: [invoiceDoc]` and called in the browser as `const D = invoiceDoc();`.
export default function invoiceDoc() {
  const H = window.H;
  const STATES = [['01', 'Jammu and Kashmir'], ['02', 'Himachal Pradesh'], ['03', 'Punjab'], ['04', 'Chandigarh'], ['05', 'Uttarakhand'], ['06', 'Haryana'], ['07', 'Delhi'], ['08', 'Rajasthan'], ['09', 'Uttar Pradesh'], ['10', 'Bihar'], ['11', 'Sikkim'], ['12', 'Arunachal Pradesh'], ['13', 'Nagaland'], ['14', 'Manipur'], ['15', 'Mizoram'], ['16', 'Tripura'], ['17', 'Meghalaya'], ['18', 'Assam'], ['19', 'West Bengal'], ['20', 'Jharkhand'], ['21', 'Odisha'], ['22', 'Chhattisgarh'], ['23', 'Madhya Pradesh'], ['24', 'Gujarat'], ['26', 'Dadra and Nagar Haveli and Daman and Diu'], ['27', 'Maharashtra'], ['29', 'Karnataka'], ['30', 'Goa'], ['31', 'Lakshadweep'], ['32', 'Kerala'], ['33', 'Tamil Nadu'], ['34', 'Puducherry'], ['35', 'Andaman and Nicobar Islands'], ['36', 'Telangana'], ['37', 'Andhra Pradesh'], ['38', 'Ladakh']];
  const GST_RATES = [0, 5, 12, 18, 28];
  function fillStates(sel, def) { sel.innerHTML = STATES.map(([c, n]) => '<option value="' + c + '">' + c + ' ' + n + '</option>').join(''); sel.value = def || '27'; }
  function stateName(sel) { return sel.options[sel.selectedIndex].text.slice(3); }
  function dmy(s) { return s ? s.split('-').reverse().join('/') : ''; }
  // Adds one editable line. opts.tax adds the GST % column; opts.onChange runs after a row is removed.
  function addRow(container, d, opts) {
    d = d || {}; opts = opts || {};
    const row = document.createElement('div'); row.className = 'item';
    row.innerHTML = '<label>Description<input type="text" class="i-desc" value="' + H.esc(d.desc || '') + '" placeholder="' + H.esc(opts.placeholder || 'Website design services') + '"></label>' +
      '<label>HSN / SAC<input type="text" class="i-hsn" value="' + H.esc(d.hsn || '') + '" placeholder="998314"></label>' +
      '<label>Qty<input type="number" class="i-qty" value="' + (d.qty || 1) + '" min="0" step="any"></label>' +
      '<label>Unit<input type="text" class="i-unit" value="' + H.esc(d.unit || 'nos') + '"></label>' +
      '<label>Rate (₹)<input type="number" class="i-rate" value="' + (d.rate || 0) + '" min="0" step="any"></label>' +
      (opts.tax ? '<label>GST %<select class="i-gst">' + GST_RATES.map((r) => '<option value="' + r + '"' + (r === 18 ? ' selected' : '') + '>' + r + '</option>').join('') + '</select></label>' : '') +
      '<button type="button" class="btn small secondary i-del" title="Remove line">×</button>';
    if (opts.tax && d.gst !== undefined) row.querySelector('.i-gst').value = String(d.gst);
    row.querySelector('.i-del').addEventListener('click', () => { row.remove(); if (opts.onChange) opts.onChange(); });
    container.appendChild(row);
    return row;
  }
  // Reads every line into numbers and builds the items table rows.
  function readItems(container, withTax) {
    const lines = []; let taxable = 0, tax = 0, rows = '';
    container.querySelectorAll('.item').forEach((r, i) => {
      const qty = H.num(r.querySelector('.i-qty').value), rate = H.num(r.querySelector('.i-rate').value);
      const g = withTax ? H.num(r.querySelector('.i-gst').value) : 0;
      const amt = qty * rate, t = amt * g / 100; taxable += amt; tax += t;
      const desc = r.querySelector('.i-desc').value, hsn = r.querySelector('.i-hsn').value, unit = r.querySelector('.i-unit').value;
      lines.push({ desc, hsn, qty, unit, rate, gst: g, amt, tax: t });
      rows += '<tr><td>' + (i + 1) + '</td><td style="text-align:left">' + H.esc(desc) + '</td><td>' + H.esc(hsn) + '</td><td>' + qty + ' ' + H.esc(unit) + '</td><td>' + H.inr(rate, 2) + '</td><td>' + H.inr(amt, 2) + '</td>' + (withTax ? '<td>' + g + '%</td><td>' + H.inr(t, 2) + '</td>' : '') + '</tr>';
    });
    const head = '<tr><th>#</th><th style="text-align:left">Description</th><th>HSN/SAC</th><th>Qty</th><th>Rate</th><th>' + (withTax ? 'Taxable' : 'Amount') + '</th>' + (withTax ? '<th>GST</th><th>Tax</th>' : '') + '</tr>';
    return { lines, taxable, tax, table: '<div class="tbl-wrap"><table><thead>' + head + '</thead><tbody>' + rows + '</tbody></table></div>' };
  }
  // Tax lines for the totals table: CGST and SGST within a state, IGST across states.
  function taxRows(tax, inter) { return inter ? '<tr><td>IGST</td><td>' + H.inr(tax, 2) + '</td></tr>' : '<tr><td>CGST</td><td>' + H.inr(tax / 2, 2) + '</td></tr><tr><td>SGST / UTGST</td><td>' + H.inr(tax / 2, 2) + '</td></tr>'; }
  // Totals table with rounding to the rupee under Section 170 of the CGST Act. extraRows go between the first line and the total.
  function totals(firstLabel, firstAmount, extraRows, total) {
    const rounded = Math.round(total), roundOff = rounded - total;
    return { rounded, html: '<table style="width:auto;min-width:260px"><tbody><tr><td>' + firstLabel + '</td><td>' + H.inr(firstAmount, 2) + '</td></tr>' + (extraRows || '') + (Math.abs(roundOff) >= 0.005 ? '<tr><td>Round off</td><td>' + (roundOff >= 0 ? '' : '-') + H.inr(Math.abs(roundOff), 2) + '</td></tr>' : '') + '<tr><td><strong>Total</strong></td><td><strong>' + H.inr(rounded, 2) + '</strong></td></tr></tbody></table>' };
  }
  // A party block: name, address, GSTIN and any extra lines.
  function party(name, fallback, addr, gstin, extra) { return '<strong>' + (H.esc(name) || fallback) + '</strong><br><span class="muted">' + H.nl(addr) + (gstin ? '<br>GSTIN: ' + H.esc(gstin.toUpperCase()) : '') + (extra || '') + '</span>'; }
  function signature(left, forName) { return '<div class="sig"><div class="muted">' + left + '</div><div>For ' + (H.esc(forName) || 'Supplier') + '<br><br><br>Authorised signatory</div></div>'; }
  return { STATES, fillStates, stateName, dmy, addRow, readItems, taxRows, totals, party, signature };
}
