window.H = (function () {
  const fmt0 = new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 });
  const fmt2 = new Intl.NumberFormat('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  function inr(n, dec) {
    if (!isFinite(n)) n = 0;
    return '₹' + (dec === 2 ? fmt2 : fmt0).format(n);
  }
  function num(v) { const n = parseFloat(String(v).replace(/,/g, '')); return isFinite(n) ? n : 0; }
  const ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  function two(n) { return n < 20 ? ones[n] : tens[Math.floor(n / 10)] + (n % 10 ? ' ' + ones[n % 10] : ''); }
  function three(n) { const h = Math.floor(n / 100), r = n % 100; return (h ? ones[h] + ' Hundred' + (r ? ' ' : '') : '') + (r ? two(r) : ''); }
  function wordsInt(n) {
    if (n === 0) return 'Zero';
    let out = [];
    const crore = Math.floor(n / 1e7); n %= 1e7;
    const lakh = Math.floor(n / 1e5); n %= 1e5;
    const thou = Math.floor(n / 1e3); n %= 1e3;
    if (crore) out.push(wordsInt(crore) + ' Crore');
    if (lakh) out.push(two(lakh) + ' Lakh');
    if (thou) out.push(two(thou) + ' Thousand');
    if (n) out.push(three(n));
    return out.join(' ');
  }
  function words(amount) {
    const r = Math.floor(Math.abs(amount)), p = Math.round((Math.abs(amount) - r) * 100);
    let s = 'Rupees ' + wordsInt(r);
    if (p) s += ' and ' + two(p) + ' Paise';
    return s + ' Only';
  }
  function bind(form, fn) {
    const f = typeof form === 'string' ? document.getElementById(form) : form;
    const run = () => { try { fn(f); } catch (e) { console.error(e); } };
    f.addEventListener('input', run);
    f.addEventListener('change', run);
    f.addEventListener('submit', (e) => { e.preventDefault(); run(); });
    run();
    return run;
  }
  function val(f, name) { const el = f.elements[name]; if (!el) return 0; if (el.type === 'checkbox') return el.checked; return num(el.value); }
  function str(f, name) { const el = f.elements[name]; return el ? String(el.value || '').trim() : ''; }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function nl(s) { return esc(s).replace(/\n/g, '<br>'); }
  function monthName(i) { return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][i]; }
  function dmy(d) { const dd = String(d.getDate()).padStart(2, '0'), mm = String(d.getMonth() + 1).padStart(2, '0'); return dd + '/' + mm + '/' + d.getFullYear(); }
  function today() { return new Date().toISOString().slice(0, 10); }
  function print() { window.print(); }
  return { inr, num, words, bind, val, str, esc, nl, monthName, dmy, today, print };
})();
