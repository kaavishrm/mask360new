export default {
  slug: 'in-hand-salary-calculator',
  title: 'In-Hand Salary Calculator from CTC',
  h1: 'In-Hand Salary Calculator: CTC to monthly take-home for FY 2026-27',
  summary: 'What actually lands in your bank each month after PF, professional tax, ESI and TDS.',
  description: 'Free CTC to in-hand salary calculator for India, FY 2026-27. Enter your CTC and see the monthly take-home after employee PF (new ₹25,000 wage ceiling), professional tax by state, ESI and income tax under the new or old regime.',
  category: 'salary',
  related: ['tds-on-salary-calculator', 'income-tax-calculator', 'hra-calculator', 'salary-slip-generator'],
  intro: 'Enter the CTC from your offer letter and how it is structured. The calculator removes the employer costs that never reach you, then the deductions that come off your payslip, and shows the monthly amount you can actually spend.',
  tool: `
<form id="f">
  <div class="grid">
    <label>Annual CTC (₹)<input type="number" name="ctc" value="1200000" min="0" step="10000"></label>
    <label>Basic pay as % of CTC <span class="hint">Usually 40% to 50%</span><input type="number" name="bpct" value="40" min="1" max="100" step="1"></label>
    <label>HRA as % of basic <span class="hint">Usually 40% or 50%</span><input type="number" name="hpct" value="50" min="0" max="100" step="1"></label>
    <label>Variable pay or bonus inside CTC (₹ per year) <span class="hint">Paid separately, not monthly</span><input type="number" name="vp" value="0" min="0" step="5000"></label>
    <label>Employer PF contribution<select name="pf"><option value="full">12% of full basic</option><option value="cap">12% of basic, capped at the ₹25,000 wage ceiling</option><option value="none">No PF</option></select></label>
    <label>State for professional tax<select name="state">
      <option value="MH">Maharashtra</option><option value="KA">Karnataka</option><option value="WB">West Bengal</option><option value="TG">Telangana</option><option value="AP">Andhra Pradesh</option><option value="GJ">Gujarat</option><option value="MP">Madhya Pradesh</option><option value="TN">Tamil Nadu (Chennai)</option><option value="KL">Kerala</option><option value="NONE">No professional tax (Delhi, UP, Haryana, Rajasthan, Punjab, Goa and others)</option><option value="MANUAL">Enter the monthly amount myself</option>
    </select></label>
    <label>Professional tax per month if entered manually (₹)<input type="number" name="ptm" value="200" min="0" step="1"></label>
    <label>Tax regime<select name="regime"><option value="new">New regime (default)</option><option value="old">Old regime</option></select></label>
  </div>
  <fieldset><legend>CTC structure</legend><div class="grid">
    <label class="chk"><input type="checkbox" name="incpf" checked> CTC includes the employer's PF and ESI share</label>
    <label class="chk"><input type="checkbox" name="grat"> CTC includes a gratuity provision (4.81% of basic)</label>
    <label class="chk"><input type="checkbox" name="esi" checked> Employer is covered under ESI (applies only if gross is ₹21,000 a month or less)</label>
  </div></fieldset>
  <fieldset><legend>Old regime only</legend><div class="grid">
    <label>Rent you pay per month (₹) <span class="hint">For the HRA exemption</span><input type="number" name="rent" value="0" min="0" step="500"></label>
    <label>City<select name="metro"><option value="0">Non-metro (40% of basic)</option><option value="1">Metro: Delhi, Mumbai, Kolkata, Chennai (50%)</option></select></label>
    <label>Deductions you will claim (₹ per year) <span class="hint">80C, 80D, 80CCD(1B), home loan interest, etc.</span><input type="number" name="ded" value="150000" min="0" step="5000"></label>
  </div></fieldset>
  <div class="result" id="out"></div>
</form>`,
  script: function () {
    const H = window.H;
    const CEIL = 25000, ESI_CEIL = 21000;
    const NEW = [[400000, 0], [800000, 0.05], [1200000, 0.10], [1600000, 0.15], [2000000, 0.20], [2400000, 0.25], [Infinity, 0.30]];
    const OLD = [[250000, 0], [500000, 0.05], [1000000, 0.20], [Infinity, 0.30]];
    function slabTax(inc, slabs) { let t = 0, prev = 0; for (const [upto, r] of slabs) { if (inc > prev) t += (Math.min(inc, upto) - prev) * r; prev = upto; if (inc <= upto) break; } return t; }
    function surchargeRate(inc, isNew) { if (inc > 5e7) return isNew ? 0.25 : 0.37; if (inc > 2e7) return 0.25; if (inc > 1e7) return 0.15; if (inc > 5e6) return 0.10; return 0; }
    function thresholdBelow(inc) { let t = 0; for (const x of [5e6, 1e7, 2e7, 5e7]) if (inc > x) t = x; return t; }
    function incomeTax(taxable, isNew) {
      const slabs = isNew ? NEW : OLD;
      let tax = slabTax(taxable, slabs), rebate = 0;
      if (isNew) { if (taxable <= 1200000) rebate = tax; else { const cap = taxable - 1200000; if (tax > cap) rebate = tax - cap; } }
      else if (taxable <= 500000) rebate = Math.min(tax, 12500);
      tax -= rebate;
      let sur = tax * surchargeRate(taxable, isNew);
      const th = thresholdBelow(taxable);
      if (sur > 0 && th > 0) { const maxAllowed = slabTax(th, slabs) * (1 + surchargeRate(th, isNew)) + (taxable - th); if (tax + sur > maxAllowed) sur = Math.max(0, maxAllowed - tax); }
      return (tax + sur) * 1.04;
    }
    // Professional tax: g is gross salary per month. Returns [typical month, annual].
    const PT = {
      MH: (g) => { const m = g <= 7500 ? 0 : g <= 10000 ? 175 : 200; return [m, m === 200 ? 2500 : m * 12]; },
      KA: (g) => { const m = g >= 25000 ? 200 : 0; return [m, m * 12]; },
      WB: (g) => { const m = g <= 10000 ? 0 : g <= 15000 ? 110 : g <= 25000 ? 130 : g <= 40000 ? 150 : 200; return [m, m * 12]; },
      TG: (g) => { const m = g <= 15000 ? 0 : g <= 20000 ? 150 : 200; return [m, m * 12]; },
      AP: (g) => { const m = g <= 15000 ? 0 : g <= 20000 ? 150 : 200; return [m, m * 12]; },
      GJ: (g) => { const m = g <= 12000 ? 0 : 200; return [m, m * 12]; },
      MP: (g) => { const y = g * 12; const a = y <= 225000 ? 0 : y <= 300000 ? 1500 : y <= 400000 ? 2000 : 2500; return [Math.round(a / 12), a]; },
      TN: (g) => { const h = g * 6; const s = h <= 21000 ? 0 : h <= 30000 ? 135 : h <= 45000 ? 315 : h <= 60000 ? 690 : h <= 75000 ? 1025 : 1250; return [Math.round(s / 6), s * 2]; },
      KL: (g) => { const h = g * 6; const s = h < 12000 ? 0 : h < 18000 ? 120 : h < 30000 ? 180 : h < 45000 ? 300 : h < 60000 ? 450 : h < 75000 ? 600 : h < 100000 ? 750 : h < 125000 ? 1000 : 1250; return [Math.round(s / 6), s * 2]; },
      NONE: () => [0, 0],
    };
    H.bind('f', (f) => {
      const ctc = H.val(f, 'ctc'), vp = Math.min(H.val(f, 'vp'), ctc);
      const fixed = ctc - vp;
      const basicY = Math.min(fixed, fixed * H.val(f, 'bpct') / 100);
      const pfMode = f.elements.pf.value;
      const pfBase = pfMode === 'none' ? 0 : pfMode === 'cap' ? Math.min(basicY, CEIL * 12) : basicY;
      const pfY = Math.round(pfBase * 0.12);
      const gratY = f.elements.grat.checked ? Math.round(basicY * 0.0481) : 0;
      const incPf = f.elements.incpf.checked;
      let grossY = fixed - gratY - (incPf ? pfY : 0);
      // ESI: employee 0.75%, employer 3.25%, when gross is within the ₹21,000 a month ceiling.
      let esiEmpY = 0, esiErY = 0;
      if (f.elements.esi.checked) {
        const g = incPf ? grossY / 1.0325 : grossY;
        if (g / 12 <= ESI_CEIL) { if (incPf) grossY = g; esiEmpY = Math.round(grossY * 0.0075); esiErY = Math.round(grossY * 0.0325); }
      }
      grossY = Math.max(0, grossY);
      const grossM = grossY / 12, basicM = Math.min(basicY, grossY) / 12;
      let hraM = basicM * H.val(f, 'hpct') / 100;
      let splM = grossM - basicM - hraM;
      if (splM < 0) { hraM = Math.max(0, grossM - basicM); splM = 0; }
      const st = f.elements.state.value;
      const [ptM, ptY] = st === 'MANUAL' ? [H.val(f, 'ptm'), H.val(f, 'ptm') * 12] : PT[st](grossM);
      const isNew = f.elements.regime.value === 'new';
      const rentY = H.val(f, 'rent') * 12, metro = H.val(f, 'metro') === 1;
      const hraEx = !isNew && rentY > 0 ? Math.max(0, Math.min(hraM * 12, rentY - 0.1 * basicM * 12, (metro ? 0.5 : 0.4) * basicM * 12)) : 0;
      const totalIncome = grossY + vp;
      const dedY = isNew ? 75000 : 50000 + ptY + hraEx + H.val(f, 'ded');
      const taxable = Math.max(0, totalIncome - dedY);
      const taxY = Math.round(incomeTax(taxable, isNew));
      const tdsM = taxY / 12;
      const pfM = pfY / 12, esiM = esiEmpY / 12;
      const dedM = pfM + ptM + esiM + tdsM;
      const inHandM = grossM - dedM;
      const inHandY = grossY + vp - pfY - ptY - esiEmpY - taxY;
      const fmt = (v) => (Math.round(v) < 0 ? '-' : '') + H.inr(Math.abs(v));
      const row = (k, m, y) => '<tr><td>' + k + '</td><td>' + (m === null ? '' : fmt(m)) + '</td><td>' + fmt(y) + '</td></tr>';
      const b = (s) => '<strong>' + s + '</strong>';
      document.getElementById('out').innerHTML =
        '<div class="big"><div class="stat best"><b>' + H.inr(inHandM) + '</b><span>In hand per month</span></div>' +
        '<div class="stat"><b>' + H.inr(grossM) + '</b><span>Gross salary per month</span></div>' +
        '<div class="stat"><b>' + H.inr(dedM) + '</b><span>Deductions per month</span></div>' +
        '<div class="stat"><b>' + H.inr(inHandY) + '</b><span>In hand per year' + (vp ? ', including variable pay' : '') + '</span></div></div>' +
        '<div class="tbl-wrap"><table><thead><tr><th>Line</th><th>Per month</th><th>Per year</th></tr></thead><tbody>' +
        row(b('Cost to company'), ctc / 12, ctc) +
        (vp ? row('Variable pay, paid separately', null, -vp) : '') +
        (incPf && pfY ? row('Employer PF (in CTC, goes to your PF account)', -pfY / 12, -pfY) : '') +
        (esiErY ? row('Employer ESI (in CTC)', -esiErY / 12, -esiErY) : '') +
        (gratY ? row('Gratuity provision (in CTC, paid after 5 years)', -gratY / 12, -gratY) : '') +
        row(b('Gross salary'), grossM, grossY) +
        row('of which basic', basicM, basicM * 12) + row('of which HRA', hraM, hraM * 12) + row('of which special and other allowances', splM, splM * 12) +
        row('Employee PF, 12%' + (pfMode === 'cap' ? ' of basic up to ₹25,000' : pfMode === 'full' ? ' of basic' : ''), -pfM, -pfY) +
        row('Professional tax' + (st === 'MH' && ptM === 200 ? ' (₹300 in February)' : ''), -ptM, -ptY) +
        (esiEmpY ? row('ESI, employee share 0.75%', -esiM, -esiEmpY) : '') +
        row('Income tax deducted at source, ' + (isNew ? 'new' : 'old') + ' regime', -tdsM, -taxY) +
        row(b('In hand'), inHandM, inHandY) + '</tbody></table></div>' +
        '<p class="note">Taxable income ' + H.inr(taxable) + ' after ' + (isNew ? 'the ₹75,000 standard deduction' : 'the ₹50,000 standard deduction, professional tax, HRA exemption of ' + H.inr(hraEx) + ' and your declared deductions') + '. Tax is for FY 2026-27 and is spread evenly over twelve months, which is how most employers deduct it. ' + (!incPf && pfY ? 'Employer PF is on top of CTC as you have selected.' : '') + '</p>';
    });
  },
  explainer: `
<h2>Why CTC and in-hand salary are so different</h2>
<p>Cost to company is everything the employer spends on you. In-hand salary is what reaches your bank account. The gap has two parts: amounts that are in your CTC but never paid out monthly, and amounts that are paid out but deducted before you see them.</p>
<span class="formula">Gross salary  = CTC minus employer PF minus employer ESI minus gratuity provision minus variable pay
In-hand       = Gross minus employee PF minus professional tax minus ESI minus TDS</span>
<h3>What comes out before gross</h3>
<p><strong>Employer PF.</strong> The employer contributes 12% of your PF wages (basic plus dearness allowance). From 17 September 2026 the statutory wage ceiling is ₹25,000 a month, up from ₹15,000, so an employer who contributes only on the ceiling pays at most ₹3,000 a month. Many employers contribute on full basic instead. Both the employer and employee shares go to your PF account, so the money is yours, just not now. Of the employer share, 8.33% of wages (up to ₹2,083 a month at the new ceiling) goes to the pension scheme.</p>
<p><strong>Gratuity.</strong> Some offer letters add 4.81% of basic as a gratuity provision. It is paid only if you complete five years, and it is calculated on your last drawn basic, so the provision in your CTC is an estimate, not money set aside for you.</p>
<p><strong>Variable pay.</strong> Performance bonus, retention bonus and joining bonus are part of CTC but are paid separately, often once a year and not in full. The calculator removes them from the monthly figure and adds them back to the annual total, taxed.</p>
<h3>What comes off your payslip</h3>
<p><strong>Employee PF</strong> is 12% of PF wages, on the same base the employer uses. <strong>Professional tax</strong> is a state levy with a ceiling of ₹2,500 a year. Maharashtra charges ₹200 a month and ₹300 in February for anyone above ₹10,000 a month. Karnataka charges ₹200 a month from ₹25,000. West Bengal, Telangana, Andhra Pradesh, Gujarat and Madhya Pradesh have their own slabs, and Tamil Nadu and Kerala collect half-yearly. Delhi, Uttar Pradesh, Haryana, Rajasthan, Punjab and Goa levy none. <strong>ESI</strong> applies at 0.75% of gross when gross is ₹21,000 a month or less and the establishment is covered. <strong>TDS</strong> is your estimated income tax for the year, deducted in equal monthly instalments by the employer.</p>
<h3>New regime or old</h3>
<p>Under the new regime the only deduction is the ₹75,000 standard deduction, and tax is nil when taxable income is ₹12 lakh or less, which for a salaried person means a gross salary of up to ₹12.75 lakh. Under the old regime you get a ₹50,000 standard deduction, the HRA exemption, professional tax and whatever you claim under 80C, 80D and the rest. Switch the regime above and the TDS line changes; the <a href="/income-tax-calculator/">income tax calculator</a> shows the full comparison.</p>
<h3>Where this calculator simplifies</h3>
<p>PF wages under the Code on Social Security include basic, dearness allowance and retaining allowance, and if other allowances exceed half of total pay the excess is treated as wages. The calculator uses basic alone. Employer NPS contributions, meal cards, leave travel allowance, company cars and other perquisites are not modelled; enter their value in the deductions field if your employer structures them. Professional tax slabs are the ones in force when the page was last updated and vary by municipality in Tamil Nadu and Kerala. Surcharge above ₹50 lakh and marginal relief are included.</p>`,
  faq: [
    { q: 'Is the PF deduction 12% of basic or 12% of ₹25,000?', a: '<p>It depends on your employer. The law requires contributions on wages up to the ₹25,000 ceiling that applies from 17 September 2026. Employers may contribute on full basic, and many do. Check your payslip: if your PF is ₹3,000 and your basic is higher than ₹25,000, your employer uses the ceiling.</p>' },
    { q: 'Why is my in-hand lower than this calculator shows?', a: '<p>Usually one of three things: the employer deducts TDS unevenly, you have not submitted investment proofs so the old-regime deductions were not applied, or part of your CTC is a benefit such as insurance, food coupons or a notice-period buyout that the calculator does not know about. Compare the payslip line by line with the table above.</p>' },
    { q: 'Does a higher basic mean a higher in-hand salary?', a: '<p>No, usually the opposite. A higher basic raises PF and gratuity, which lower the monthly figure, and raises HRA, which helps only if you pay rent and use the old regime. A lower basic with a larger special allowance gives more cash now and less retirement saving.</p>' },
    { q: 'What changed with the EPF wage ceiling in September 2026?', a: '<p>The ceiling for mandatory PF, pension and insurance coverage rose from ₹15,000 to ₹25,000 a month on 17 September 2026. Employees earning between ₹15,001 and ₹25,000 who were outside PF are now covered, and those contributing on the old ₹15,000 cap now contribute on actual wages up to ₹25,000. Take-home pay falls slightly and PF savings rise.</p>' },
    { q: 'Which financial year does the tax calculation use?', a: '<p>FY 2026-27, called tax year 2026-27 under the Income-tax Act, 2025. The slabs are the ones in force on the date shown at the bottom of the page.</p>' },
  ],
};
