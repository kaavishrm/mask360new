window.H = (function () {
  const fmt0 = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 });
  const fmt2 = new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  function usd(n, dec) { if (!isFinite(n)) n = 0; return '$' + (dec === 0 ? fmt0 : fmt2).format(n); }
  function num(v) { const n = parseFloat(String(v).replace(/,/g, '')); return isFinite(n) ? n : 0; }
  function bind(form, fn) {
    const f = typeof form === 'string' ? document.getElementById(form) : form;
    const run = () => { try { fn(f); } catch (e) { console.error(e); } };
    f.addEventListener('input', run); f.addEventListener('change', run); f.addEventListener('submit', (e) => { e.preventDefault(); run(); });
    run(); return run;
  }
  function val(f, name) { const el = f.elements[name]; if (!el) return 0; if (el.type === 'checkbox') return el.checked; return num(el.value); }
  function str(f, name) { const el = f.elements[name]; return el ? String(el.value || '').trim() : ''; }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function nl(s) { return esc(s).replace(/\n/g, '<br>'); }
  const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  function monthName(i) { return MONTHS[i]; }
  function parse(s) { if (!s) return null; const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); }
  function iso(d) { return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
  function mdy(d) { return MONTHS[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear(); }
  function addDays(d, n) { const x = new Date(d.getTime()); x.setDate(x.getDate() + n); return x; }
  function daysInMonth(y, m) { return new Date(y, m + 1, 0).getDate(); }
  function today() { return iso(new Date()); }
  function print() { window.print(); }
  return { usd, num, bind, val, str, esc, nl, monthName, parse, iso, mdy, addDays, daysInMonth, today, print };
})();
