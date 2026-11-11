export default {
  slug: 'salary-slip-generator',
  title: 'Salary Slip Generator',
  h1: 'Salary Slip Generator: payslip in PDF, free',
  summary: 'A clean monthly payslip with earnings, deductions and net pay in words.',
  description: 'Free salary slip generator for India. Create a monthly payslip with basic, HRA, allowances, PF, professional tax and TDS, then print or save as PDF. No signup, no watermark.',
  category: 'documents',
  related: ['income-tax-calculator', 'hra-calculator', 'rent-receipt-generator'],
  print: true,
  intro: 'Enter the company, employee and salary components. The payslip updates as you type. Print it or save as PDF.',
  tool: `
<form id="f">
  <fieldset><legend>Company</legend><div class="grid-2">
    <label>Company name<input type="text" name="co" placeholder="Acme Technologies Pvt Ltd"></label>
    <label>Address<textarea name="coaddr" placeholder="4th Floor, Prestige Tower, MG Road, Bengaluru 560001"></textarea></label>
  </div></fieldset>
  <fieldset><legend>Employee</legend><div class="grid">
    <label>Name<input type="text" name="emp" placeholder="Priya Nair"></label>
    <label>Employee ID<input type="text" name="eid" placeholder="EMP-0142"></label>
    <label>Designation<input type="text" name="desig" placeholder="Senior Analyst"></label>
    <label>Department<input type="text" name="dept" placeholder="Finance"></label>
    <label>PAN<input type="text" name="pan" placeholder="ABCDE1234F" maxlength="10" style="text-transform:uppercase"></label>
    <label>UAN / PF number<input type="text" name="uan" placeholder="100123456789"></label>
    <label>Bank account (last 4 digits)<input type="text" name="bank" placeholder="XXXX1234"></label>
    <label>Pay month<input type="month" name="month" value="2026-10"></label>
    <label>Paid days<input type="number" name="days" value="31" min="0" max="31"></label>
    <label>Loss of pay days<input type="number" name="lop" value="0" min="0" max="31"></label>
  </div></fieldset>
  <div class="grid-2">
  <fieldset><legend>Earnings (₹ per month)</legend><div class="grid">
    <label>Basic<input type="number" name="basic" value="40000" min="0"></label>
    <label>HRA<input type="number" name="hra" value="16000" min="0"></label>
    <label>Dearness allowance<input type="number" name="da" value="0" min="0"></label>
    <label>Conveyance<input type="number" name="conv" value="1600" min="0"></label>
    <label>Special allowance<input type="number" name="spl" value="12400" min="0"></label>
    <label>Other earnings<input type="number" name="oe" value="0" min="0"></label>
  </div></fieldset>
  <fieldset><legend>Deductions (₹ per month)</legend><div class="grid">
    <label>Provident fund (employee)<input type="number" name="pf" value="1800" min="0"></label>
    <label>ESI<input type="number" name="esi" value="0" min="0"></label>
    <label>Professional tax<input type="number" name="pt" value="200" min="0"></label>
    <label>TDS (income tax)<input type="number" name="tds" value="0" min="0"></label>
    <label>Other deductions<input type="number" name="od" value="0" min="0"></label>
  </div></fieldset>
  </div>
  <div class="actions"><button type="button" class="btn secondary" id="pr">Print or save as PDF</button></div>
  <div class="sheet" id="sheet"></div>
</form>`,
  script: function () {
    const H = window.H;
    const sheet = document.getElementById('sheet');
    H.bind('f', (f) => {
      const e = { Basic: H.val(f, 'basic'), 'House rent allowance': H.val(f, 'hra'), 'Dearness allowance': H.val(f, 'da'), Conveyance: H.val(f, 'conv'), 'Special allowance': H.val(f, 'spl'), 'Other earnings': H.val(f, 'oe') };
      const d = { 'Provident fund': H.val(f, 'pf'), ESI: H.val(f, 'esi'), 'Professional tax': H.val(f, 'pt'), 'TDS': H.val(f, 'tds'), 'Other deductions': H.val(f, 'od') };
      const gross = Object.values(e).reduce((a, b) => a + b, 0), ded = Object.values(d).reduce((a, b) => a + b, 0), net = gross - ded;
      const [y, m] = (H.str(f, 'month') || '2026-10').split('-').map(Number);
      const rows = (o) => Object.entries(o).filter(([, v]) => v > 0).map(([k, v]) => '<tr><td>' + k + '</td><td>' + H.inr(v, 2) + '</td></tr>').join('');
      const kv = (k, v) => v ? '<div><span class="muted">' + k + ':</span> ' + H.esc(v) + '</div>' : '';
      sheet.innerHTML = '<div class="row"><div><h2>' + (H.esc(H.str(f, 'co')) || 'Company name') + '</h2><div class="muted">' + H.nl(H.str(f, 'coaddr')) + '</div></div><div class="right"><strong>Payslip</strong><br><span class="muted">' + H.monthName(m - 1) + ' ' + y + '</span></div></div>' +
        '<div class="grid" style="margin:14px 0;gap:4px 16px">' + kv('Employee', H.str(f, 'emp')) + kv('Employee ID', H.str(f, 'eid')) + kv('Designation', H.str(f, 'desig')) + kv('Department', H.str(f, 'dept')) + kv('PAN', H.str(f, 'pan').toUpperCase()) + kv('UAN / PF no.', H.str(f, 'uan')) + kv('Bank account', H.str(f, 'bank')) + kv('Paid days', String(H.val(f, 'days'))) + kv('Loss of pay days', String(H.val(f, 'lop'))) + '</div>' +
        '<div class="grid-2"><table><thead><tr><th>Earnings</th><th>Amount</th></tr></thead><tbody>' + rows(e) + '<tr><td><strong>Gross earnings</strong></td><td><strong>' + H.inr(gross, 2) + '</strong></td></tr></tbody></table>' +
        '<table><thead><tr><th>Deductions</th><th>Amount</th></tr></thead><tbody>' + rows(d) + '<tr><td><strong>Total deductions</strong></td><td><strong>' + H.inr(ded, 2) + '</strong></td></tr></tbody></table></div>' +
        '<p style="margin-top:14px"><strong>Net pay: ' + H.inr(net, 2) + '</strong><br><span class="muted">' + H.words(net) + '</span></p>' +
        '<p class="muted" style="margin-top:24px">This is a computer-generated payslip and does not require a signature.</p>';
    });
    document.getElementById('pr').addEventListener('click', () => H.print());
  },
  explainer: `
<h2>What goes on a salary slip</h2>
<p>A payslip records what was earned and what was deducted in a month. The earnings side normally shows basic pay, house rent allowance, dearness allowance where applicable, conveyance, special allowance and any bonus or arrears. The deductions side shows the employee's provident fund contribution, ESI if covered, professional tax levied by the state, and TDS on salary. The difference is net pay, which should match the bank credit.</p>
<h2>Typical components explained</h2>
<p><strong>Basic</strong> is usually 40% to 50% of CTC and drives PF, gratuity and HRA limits. <strong>HRA</strong> is often 40% or 50% of basic. <strong>Provident fund</strong> is 12% of basic (and DA) from the employee, with a matching employer share that does not appear as a deduction. <strong>Professional tax</strong> is a state levy, at most ₹2,500 a year, deducted monthly in most states. <strong>TDS</strong> is the income tax the employer withholds based on your declared regime and investments.</p>
<h2>Who uses a generated payslip</h2>
<p>Small businesses and startups without payroll software, employers of household staff, and freelancers who need to document retainers for a loan or visa application. Banks and embassies look for the employer's name, the employee's details, a month, a breakdown and a net figure; this template includes all of them.</p>
<h2>A note on accuracy</h2>
<p>The generator does not compute PF, professional tax or TDS for you, because the right figures depend on state, wage ceilings and the employee's tax declaration. Enter the amounts from your payroll working. The income tax calculator on this site helps with the TDS figure.</p>`,
  faq: [
    { q: 'Does the payslip need a signature or stamp?', a: '<p>Not usually. Payslips generated by software carry a line saying no signature is required, which this template includes. Some banks ask for a stamped copy; print it and have the employer stamp it if so.</p>' },
    { q: 'Should employer PF appear on the slip?', a: '<p>Employer contributions are part of CTC but are not deducted from gross pay, so they are typically shown separately or not at all. This slip shows only the employee share as a deduction.</p>' },
    { q: 'Can I use this for a domestic worker or driver?', a: '<p>Yes. Fill in your own name as the employer, leave PF and ESI at zero unless you register, and keep a copy for both parties.</p>' },
  ],
};
