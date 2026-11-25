import taxEngine from '../../toolsite/tools/lib/income-tax.mjs';
import professionalTax from '../../toolsite/tools/lib/professional-tax.mjs';

// Weekly shot 2: your CTC in one card. The split uses the same tax engine and professional tax table as the
// in-hand salary calculator, with a standard structure (basic 40% of CTC, HRA 50% of basic, employer PF 12%
// of basic inside CTC). Figures were verified in the studio reports of 11 to 16 November 2026.
export default {
  slug: 'ctc-in-one-card-fy-2026-27',
  published: '2026-11-25',
  title: 'Your CTC in One Card, FY 2026-27',
  summary: 'Enter your CTC and get a wrapped-style card: how much reaches your account, how much goes to tax and PF, and how many days a year you work for each.',
  description: 'Type your annual CTC and see it split into in-hand pay, income tax, employee and employer PF and professional tax for FY 2026-27, with the share that reaches your account and the days of the year each slice takes, as a card you can download or share.',
  intro: 'Your CTC, one card. Enter the number from your offer letter and see where every rupee goes this year, then download the card or share it.',
  lib: [taxEngine, professionalTax],
  body: `
<section class="tool">
  <form id="f" style="margin-bottom:16px">
    <div class="grid">
      <label>Annual CTC (₹)<input type="number" name="ctc" value="1200000" min="0" step="10000"></label>
      <label>State for professional tax<select name="state">
        <option value="MH">Maharashtra</option><option value="KA">Karnataka</option><option value="WB">West Bengal</option><option value="TG">Telangana</option><option value="AP">Andhra Pradesh</option><option value="GJ">Gujarat</option><option value="MP">Madhya Pradesh</option><option value="TN">Tamil Nadu (Chennai)</option><option value="KL">Kerala</option><option value="NONE">No professional tax (Delhi, UP, Haryana, Rajasthan, Punjab, Goa, Odisha and others)</option>
      </select></label>
      <label>Tax regime<select name="regime"><option value="new">New regime (default)</option><option value="old">Old regime, with ₹1,50,000 of deductions</option></select></label>
      <label class="chk"><input type="checkbox" name="grat"> CTC includes a gratuity provision (4.81% of basic)</label>
    </div>
  </form>
  <div class="big">
    <div class="stat best"><b id="c-inhand"></b><span>In hand per month</span></div>
    <div class="stat"><b id="c-pct"></b><span>of your CTC reaches your account</span></div>
    <div class="stat"><b id="c-days"></b><span>days a year you work for income tax</span></div>
  </div>
  <div class="bar" id="c-bar" aria-hidden="true"></div>
  <ul class="legend" id="c-legend"></ul>
  <img id="c-img" alt="Your CTC card" style="width:100%;max-width:600px;border:1px solid var(--line);border-radius:12px;margin-top:14px;display:block">
  <canvas id="c-canvas" width="1200" height="630" hidden></canvas>
  <div class="actions"><a class="btn" id="c-download" download="my-ctc-card.png">Download card</a><button type="button" class="btn secondary" id="c-share">Share</button><button type="button" class="btn secondary" id="c-copy">Copy summary</button></div>
  <p class="note" id="c-note"></p>
  <p class="tiny">Assumes basic pay of 40% of CTC, HRA of 50% of basic, the employer’s 12% PF share inside the CTC, no variable pay, age below 60, and in the old regime ₹1,50,000 of deductions and no HRA exemption. For your own structure use the <a href="/in-hand-salary-calculator/">in-hand salary calculator</a>, which this card is built on.</p>
</section>`,
  script: function () {
    const H = window.H, T = taxEngine(), PT = professionalTax();
    const $ = (id) => document.getElementById(id);
    const COLORS = { inhand: '#0f5132', tax: '#9a5b00', epf: '#5d655f', erpf: '#8a9a8e', pt: '#c9a227', grat: '#b8b2a4' };
    function split(ctc, state, isNew, grat) {
      const basicY = ctc * 0.40;
      const pfY = Math.round(basicY * 0.12);
      const gratY = grat ? Math.round(basicY * 0.0481) : 0;
      const grossY = Math.max(0, ctc - pfY - gratY);
      const [ptM, ptY] = PT[state](grossY / 12, false);
      const dedY = isNew ? 75000 : 50000 + ptY + 150000;
      const taxable = Math.max(0, grossY - dedY);
      const taxY = Math.round(T.compute(taxable, isNew, 0, '2026-27').total);
      const inHandY = grossY - pfY - ptY - taxY;
      return { ctc, basicY, pfY, gratY, grossY, ptM, ptY, taxable, taxY, inHandY, inHandM: inHandY / 12 + ptY / 12 - ptM, slices: [['In hand', inHandY, 'inhand'], ['Income tax', taxY, 'tax'], ['Your PF', pfY, 'epf'], ['Employer PF', pfY, 'erpf'], ['Professional tax', ptY, 'pt'], ['Gratuity provision', gratY, 'grat']].filter((s) => s[1] > 0) };
    }
    const days = (part, whole) => Math.round(part / whole * 365);
    function draw(r) {
      const c = $('c-canvas'), x = c.getContext('2d'), W = c.width, Hh = c.height, F = 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif';
      x.fillStyle = '#faf8f3'; x.fillRect(0, 0, W, Hh);
      x.fillStyle = '#0f5132'; x.fillRect(0, 0, W, 14);
      x.fillStyle = '#5d655f'; x.font = '600 28px ' + F; x.fillText('MY CTC OF ' + H.inr(r.ctc).toUpperCase() + ', FY 2026-27', 72, 96);
      x.fillStyle = '#0f5132'; x.font = '700 150px ' + F; x.fillText(H.inr(Math.round(r.inHandM)), 64, 250);
      x.fillStyle = '#1b1f1c'; x.font = '700 44px ' + F; x.fillText('in hand every month, ' + Math.round(r.inHandY / r.ctc * 100) + '% of CTC', 72, 318);
      // stacked bar
      let bx = 72; const by = 370, bw = W - 144, bh = 56;
      for (const [, v, k] of r.slices) { const w = bw * v / r.ctc; x.fillStyle = COLORS[k]; x.fillRect(bx, by, Math.max(w, 2), bh); bx += w; }
      let lx = 72; const ly = 480; x.font = '500 26px ' + F;
      for (const [name, v, k] of r.slices) { x.fillStyle = COLORS[k]; x.fillRect(lx, ly - 20, 20, 20); x.fillStyle = '#1b1f1c'; const label = name + ' ' + Math.round(v / r.ctc * 100) + '%'; x.fillText(label, lx + 30, ly); lx += 30 + x.measureText(label).width + 36; if (lx > W - 260) break; }
      x.fillStyle = '#5d655f'; x.font = '400 28px ' + F; x.fillText(days(r.taxY, r.ctc) + ' days of the year go to income tax, ' + days(r.pfY * 2, r.ctc) + ' to PF (both shares).', 72, 540);
      x.fillStyle = '#0f5132'; x.font = '600 32px ' + F; x.fillText('hisaabtools.in/shots', 72, Hh - 44);
      x.fillStyle = '#5d655f'; x.font = '400 26px ' + F; const t = 'Make your own card'; x.fillText(t, W - 72 - x.measureText(t).width, Hh - 44);
      return c.toDataURL('image/png');
    }
    let last = null;
    H.bind('f', (f) => {
      const ctc = H.val(f, 'ctc'); if (!ctc) return;
      const r = split(ctc, H.str(f, 'state'), H.str(f, 'regime') === 'new', f.elements.grat.checked); last = r;
      $('c-inhand').textContent = H.inr(Math.round(r.inHandM));
      $('c-pct').textContent = Math.round(r.inHandY / r.ctc * 100) + '%';
      $('c-days').textContent = String(days(r.taxY, r.ctc));
      $('c-bar').innerHTML = r.slices.map(([name, v, k]) => '<span style="width:' + (v / r.ctc * 100) + '%;background:' + COLORS[k] + '" title="' + name + '"></span>').join('');
      $('c-legend').innerHTML = r.slices.map(([name, v, k]) => '<li><i style="background:' + COLORS[k] + '"></i>' + name + ' <b>' + H.inr(v) + '</b> <span class="tiny">' + Math.round(v / r.ctc * 100) + '%, ' + days(v, r.ctc) + ' days</span></li>').join('');
      const url = draw(r); $('c-img').src = url; $('c-download').href = url;
      $('c-note').textContent = (r.taxY === 0 ? 'No income tax: taxable income of ' + H.inr(r.taxable) + ' is within the ₹12 lakh rebate limit of the new regime. ' : 'Income tax of ' + H.inr(r.taxY) + ' on taxable income of ' + H.inr(r.taxable) + ', spread over twelve months. ') + 'Your PF account grows by ' + H.inr(r.pfY * 2) + ' a year from both shares' + (r.ptY ? ', and professional tax takes ' + H.inr(r.ptY) : '') + '. The card uses the figures in force on 25 November 2026.';
    });
    const text = () => 'My CTC of ' + H.inr(last.ctc) + ' is ' + H.inr(Math.round(last.inHandM)) + ' a month in hand, ' + Math.round(last.inHandY / last.ctc * 100) + '% of CTC. ' + days(last.taxY, last.ctc) + ' days a year go to income tax. Make yours: ' + location.href;
    $('c-copy').addEventListener('click', async () => { try { await navigator.clipboard.writeText(text()); $('c-copy').textContent = 'Copied'; } catch (e) { $('c-copy').textContent = 'Copy failed'; } });
    $('c-share').addEventListener('click', async () => {
      try {
        const blob = await (await fetch($('c-img').src)).blob(); const file = new File([blob], 'my-ctc-card.png', { type: 'image/png' });
        if (navigator.canShare && navigator.canShare({ files: [file] })) await navigator.share({ files: [file], text: text() });
        else if (navigator.share) await navigator.share({ text: text(), url: location.href });
        else { await navigator.clipboard.writeText(text()); $('c-share').textContent = 'Link copied'; }
      } catch (e) { /* user cancelled or sharing unavailable */ }
    });
  },
};
