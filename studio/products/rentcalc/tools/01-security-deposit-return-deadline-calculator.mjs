import depositRules from './lib/deposit-rules.mjs';

export default {
  slug: 'security-deposit-return-deadline-calculator',
  title: 'Security Deposit Return Deadline Calculator',
  h1: 'Security Deposit Return Deadline Calculator: the date your landlord must return it, by state, with the statute',
  summary: 'Pick your state and move-out date. Get the deadline, what starts the clock, and the law section.',
  description: 'Free security deposit return deadline calculator. Choose your state and the date you moved out and see the date the landlord must return the deposit or an itemized statement, the event that starts the clock, the forwarding address rule and the penalty, each with the statute section cited and the date it was verified.',
  category: 'deposits',
  lib: [depositRules],
  related: ['prorated-rent-calculator'],
  intro: 'Choose the state, enter when the lease ended and when you handed back the keys, and the calculator works out the deadline from the rule in that state’s statute. Each answer names the section and the date it was checked against the legislature’s text.',
  tool: `
<form id="f">
  <div class="grid">
    <label>State<select name="state" id="state"></select></label>
    <label>Lease or tenancy ended on<input type="date" name="term" value="2026-10-31"></label>
    <label>Keys returned (possession delivered) on<input type="date" name="out" value="2026-10-31"></label>
    <label>Forwarding address given on <span class="hint">Leave blank if not yet</span><input type="date" name="fwd"></label>
    <label>Deposit amount ($) <span class="hint">Optional, for the penalty line</span><input type="number" name="amt" value="2000" min="0" step="1"></label>
  </div>
  <div class="result" id="out"></div>
</form>`,
  script: function () {
    const H = window.H, RULES = depositRules();
    const f = document.getElementById('f');
    f.elements.state.innerHTML = RULES.map((r) => '<option value="' + r.code + '">' + r.name + '</option>').join('');
    f.elements.state.value = 'NY';
    H.bind(f, () => {
      const r = RULES.find((x) => x.code === f.elements.state.value);
      const term = H.parse(H.str(f, 'term')), out = H.parse(H.str(f, 'out')), fwd = H.parse(H.str(f, 'fwd')), amt = H.val(f, 'amt');
      const el = document.getElementById('out');
      if (!out && !term) { el.innerHTML = '<p class="note">Enter the move-out date.</p>'; return; }
      const startFor = (kind) => {
        if (kind === 'vacate') return [out || term, 'the day you vacated'];
        if (kind === 'termination') return [term || out, 'the day the rental agreement ended'];
        if (kind === 'earlier') return [!term ? out : !out ? term : (out < term ? out : term), 'the earlier of the lease ending and the keys being handed back'];
        return [!term ? out : !out ? term : (out > term ? out : term), 'the later of the tenancy ending and possession being delivered'];
      };
      const [start, startLabel] = startFor(r.start);
      let main = H.addDays(start, r.days), mainLabel = r.days + ' days from ' + startLabel;
      let fwdNote = '';
      if (r.fwdCondition) {
        if (!fwd) fwdNote = '<p class="note">In ' + r.name + ' the landlord is not obliged to refund or itemize until you give a written forwarding address. Give it now, in writing, and keep proof; the date shown assumes it was given by move-out.</p>';
        else if (fwd > main) { main = fwd; mainLabel = 'the day you gave the forwarding address, which came after the 30 days from surrender'; fwdNote = '<p class="note">The 30 days from surrender ended on ' + H.mdy(H.addDays(start, r.days)) + ', but the landlord\u2019s duty arose only when you gave the address on ' + H.mdy(fwd) + '.</p>'; }
      } else if (fwd && fwd > start) fwdNote = '<p class="note">You gave the forwarding address on ' + H.mdy(fwd) + ', after ' + startLabel + '. In ' + r.name + ' the deadline still runs from ' + startLabel + '; the address matters for how the landlord reaches you and, in some states, for what you can recover if the deadline is missed.</p>';
      const rows = r.steps.map(([d, label, kind]) => { const [st] = kind ? startFor(kind) : [start]; return '<tr><td>' + label + '</td><td>' + d + ' days</td><td>' + H.mdy(H.addDays(st, d)) + '</td></tr>'; }).join('');
      el.innerHTML = '<div class="big"><div class="stat best"><b>' + H.mdy(main) + '</b><span>Deadline in ' + r.name + ': ' + mainLabel + '</span></div>' +
        '<div class="stat"><b>' + H.mdy(start) + '</b><span>Clock starts</span></div>' +
        (amt ? '<div class="stat"><b>' + H.usd(amt, 0) + '</b><span>Deposit at stake</span></div>' : '') + '</div>' +
        '<div class="tbl-wrap"><table class="wrap"><thead><tr><th>What is due</th><th>Within</th><th>By</th></tr></thead><tbody>' + rows + '</tbody></table></div>' +
        '<h3>The rule</h3><p>' + r.rule + '</p><p><strong>Forwarding address.</strong> ' + r.forwarding + '</p><p><strong>If the landlord misses it.</strong> ' + r.penalty + '</p>' + fwdNote +
        '<p class="tiny">Source: ' + r.cite + ', read in the ' + r.source + ' on ' + r.verified + '. <a href="' + r.url + '" rel="noopener">Read the section</a>. Dates are counted in calendar days from ' + startLabel + '; if a deadline falls on a weekend or holiday some courts allow the next business day, and this calculator shows the base date.</p>';
    });
  },
  explainer: `
<h2>How deposit deadlines work</h2>
<p>Every state with a deposit statute gives the landlord a fixed number of days to do two things: return the deposit, and explain in writing anything kept back. The number ranges from 14 days in New York to 30 in most states and longer in a few. What differs more than the number is the event that starts the clock. Some states count from the day the tenant vacates, some from the day the rental agreement ends, and many from the later of the two, so a tenant who stays a week past the lease end or leaves a week early moves the deadline. A forwarding address is a condition in some states and merely practical in others. The calculator applies the rule as the statute states it and names the section, so you can read it yourself.</p>
<span class="formula">Deadline = the event the statute names (vacating, termination, or the later of termination and possession) + the statute’s days</span>
<h3>States covered so far</h3>
<p>California, Florida, Georgia, Illinois, New Jersey, New York, North Carolina, Ohio, Pennsylvania and Texas, each verified on the date shown with the result against the legislature’s published text or, where the official site cannot be read by a machine, a full reproduction that states its currency date, named in the source line. More states are added only after the same check; the aim is all fifty, in order of renter population. A state that is not in the list is not covered yet, and a rule from a blog should not be relied on in its place.</p>
<h3>What to do before the deadline</h3>
<p>Give a forwarding address in writing, with proof of delivery, as soon as you know it; in Ohio it is a condition of recovering damages, in Florida the lease disclosure requires it, and everywhere it removes the landlord’s easiest excuse. Photograph the unit on the day you hand back the keys. Keep the lease, the move-in checklist and the key-return receipt together. If the deadline passes, write a short letter citing the section shown above and asking for the deposit within a stated number of days; most disputes end there, and the rest go to small claims court, where the statute’s penalty provisions apply.</p>
<h3>What this calculator does not cover</h3>
<p>City ordinances that add rules on top of state law, such as Chicago’s and several California cities’, interest on deposits where a state or city requires it, commercial leases, and the separate question of what a landlord may lawfully deduct. It also does not adjust for weekends and holidays, because the statutes mostly do not say, and a court may or may not extend the date.</p>`,
  faq: [
    { q: 'Does the deadline start when I move out or when the lease ends?', a: '<p>It depends on the state and the calculator applies each state’s wording. California, Georgia, New York and Texas count from vacating or surrender. Florida and New Jersey count from termination of the lease. Ohio, North Carolina and Illinois count from the later of termination and delivery of possession, and Pennsylvania from whichever comes first.</p>' },
    { q: 'What if I never gave a forwarding address?', a: '<p>The landlord still owes the deposit, but in some states your remedies shrink. In Ohio a tenant who gave no address in writing cannot recover the statutory damages or fees. In North Carolina the landlord holds the balance for at least six months for you to collect. Give the address in writing in every state.</p>' },
    { q: 'The landlord sent a list of deductions but no money. Is that compliance?', a: '<p>Only if the deductions use up the whole deposit and the list arrived in time. In New York the statement and any balance must arrive together within fourteen days. In Florida a landlord who wants to keep anything must send the claim notice within 30 days, and you then have 15 days to object.</p>' },
    { q: 'Can I withhold the last month’s rent instead?', a: '<p>Most states say no and some, such as Texas, make it a separate offence with its own penalty. Pay the rent, hand back the keys, give your address, and claim the deposit under the statute.</p>' },
  ],
};
