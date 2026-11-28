import lateFeeRules from './lib/late-fee-rules.mjs';

export default {
  slug: 'late-rent-fee-checker',
  title: 'Late Rent Fee Checker',
  h1: 'Late Rent Fee Checker: is the late fee legal in your state, and how much can it be?',
  summary: 'Enter your state, rent, due date and the fee in your lease. See the statutory cap, the grace period and the date a fee may first be charged.',
  description: 'Free late rent fee checker for tenants and landlords. Pick a state, enter the rent, the due date, the date you paid and the fee in your lease, and see whether a fee may be charged yet, the maximum the statute allows, and the penalty for charging more, each with the statute section cited and the date it was verified.',
  category: 'rent',
  lib: [lateFeeRules],
  related: ['prorated-rent-calculator', 'security-deposit-return-deadline-calculator'],
  intro: 'Most leases name a late fee. Some states cap it, some require a grace period before it can be charged, and many leave it to the lease. Choose your state and the checker applies the statute as written, names the section, and says when it was last checked.',
  tool: `
<form id="f">
  <div class="grid">
    <label>State<select name="state" id="state"></select></label>
    <label>Rent per period ($)<input type="number" name="rent" value="1500" min="0" step="1"></label>
    <label>Rent is paid<select name="period"><option value="m">Monthly</option><option value="w">Weekly</option></select></label>
    <label>Rent was due on<input type="date" name="due" value="2026-11-01"></label>
    <label>Paid on (or today, if unpaid)<input type="date" name="paid" value="2026-11-10"></label>
    <label>Late fee in your lease ($)<input type="number" name="fee" value="100" min="0" step="1"></label>
    <label>Still unpaid when the fee was charged ($) <span class="hint">Usually the whole rent</span><input type="number" name="unpaid" value="1500" min="0" step="1"></label>
    <label id="units-wrap">Units in the building<select name="units"><option value="4">4 or fewer</option><option value="5">More than 4</option></select></label>
  </div>
  <div class="result" id="out"></div>
</form>`,
  script: function () {
    const H = window.H, RULES = lateFeeRules().slice().sort((a, b) => a.name.localeCompare(b.name));
    const f = document.getElementById('f');
    f.elements.state.innerHTML = RULES.map((r) => '<option value="' + r.code + '">' + r.name + '</option>').join('');
    f.elements.state.value = 'TX';
    H.bind(f, () => {
      const r = RULES.find((x) => x.code === f.elements.state.value);
      document.getElementById('units-wrap').style.display = r.units ? '' : 'none';
      const rent = H.val(f, 'rent'), fee = H.val(f, 'fee'), unpaid = Math.min(H.val(f, 'unpaid'), rent || H.val(f, 'unpaid'));
      const weekly = H.str(f, 'period') === 'w', units = Number(H.str(f, 'units'));
      const due = H.parse(H.str(f, 'due')), paid = H.parse(H.str(f, 'paid')) || H.parse(H.today());
      const el = document.getElementById('out');
      if (!due || !rent) { el.innerHTML = '<p class="note">Enter the rent and the due date.</p>'; return; }
      const daysLate = Math.round((paid - due) / 86400000);
      const addBusiness = (d, n) => { let x = new Date(d.getTime()), left = n; while (left > 0) { x.setDate(x.getDate() + 1); if (x.getDay() !== 0 && x.getDay() !== 6) left--; } return x; };
      const feeFrom = r.grace === null ? null : r.graceBusiness ? H.addDays(addBusiness(due, r.grace), 1) : H.addDays(due, r.grace);
      const cap = r.cap({ rent, unpaid, weekly, units });
      const capped = cap === null ? null : Math.round(cap * 100) / 100;
      const tooEarly = feeFrom !== null && paid < feeFrom && !r.groupOnly;
      const allowed = tooEarly ? 0 : capped === null ? fee : Math.min(fee, capped);
      let verdict;
      if (!r.statute) verdict = 'No statewide statute caps the fee or sets a grace period in ' + r.name + ', so the lease fee of ' + H.usd(fee, 2) + ' stands unless a court finds it unreasonable or a city rule applies.';
      else if (tooEarly) verdict = 'Paid ' + daysLate + ' day' + (daysLate === 1 ? '' : 's') + ' after the due date. In ' + r.name + ' no fee may be charged before ' + H.mdy(feeFrom) + ', so no late fee is owed for this payment.';
      else if (capped === null) verdict = (feeFrom ? 'The grace period ended before you paid. ' : '') + 'The statute sets no cap, so the lease fee of ' + H.usd(fee, 2) + ' applies' + (r.groupOnly ? ' unless you are in a covered group, in which case no fee may be charged before ' + H.mdy(feeFrom) + '.' : '.');
      else if (fee > capped) verdict = 'The lease fee of ' + H.usd(fee, 2) + ' is above the ' + r.name + ' cap of ' + H.usd(capped, 2) + '. The most that can be charged is ' + H.usd(capped, 2) + '.';
      else verdict = 'The lease fee of ' + H.usd(fee, 2) + ' is within the ' + r.name + ' cap of ' + H.usd(capped, 2) + (feeFrom ? ' and the grace period ended on ' + H.mdy(H.addDays(feeFrom, -1)) : '') + '.';
      el.innerHTML = '<div class="big"><div class="stat best"><b>' + H.usd(allowed, 2) + '</b><span>Late fee that can be charged for this payment</span></div>' +
        '<div class="stat"><b>' + (capped === null ? 'No cap' : H.usd(capped, 2)) + '</b><span>' + (capped === null ? 'The statute sets no maximum' : 'Statutory maximum') + '</span></div>' +
        '<div class="stat"><b>' + (feeFrom ? H.mdy(feeFrom) : 'No grace period') + '</b><span>' + (feeFrom ? 'Earliest day a fee may be charged' + (r.groupOnly ? ' (covered tenants)' : '') : 'The statute sets none; the lease governs') + '</span></div>' +
        '<div class="stat"><b>' + daysLate + '</b><span>Days after the due date</span></div></div>' +
        '<p id="verdict"><strong>' + verdict + '</strong></p>' +
        '<h3>The rule</h3><p>' + r.rule + '</p><p><strong>If the landlord charges more.</strong> ' + r.penalty + '</p>' +
        '<p class="tiny">Source: ' + r.cite + ', read in the ' + r.source + ' on ' + r.verified + '.' + (r.url ? ' <a href="' + r.url + '" rel="noopener">Read the section</a>.' : '') + ' Days are counted from the due date; ' + (r.graceBusiness ? 'business days exclude Saturdays and Sundays here, and a State or federal holiday adds one more.' : 'where the statute speaks of days they are calendar days.') + '</p>';
    });
  },
  explainer: `
<h2>How late fee limits work</h2>
<p>A late fee is a term of the lease, not a right the landlord has by default, and in every state on this list it has to be in the written agreement before it can be collected. On top of that, eleven of the twenty states covered here add one or both of two limits. The first is a grace period: a number of days after the due date during which no fee may be charged at all. New York and Washington allow a fee only once the rent is more than five days late, North Carolina and Tennessee at five days, Colorado at seven, Texas after two full days, and Massachusetts not until thirty days have passed. The second is a cap on the amount. New York caps it at the lesser of fifty dollars or five percent of the monthly rent; North Carolina and Maryland at five percent (with a fifteen-dollar floor in North Carolina); Colorado at the greater of fifty dollars or five percent of the past-due rent; Tennessee and Virginia at ten percent; and Texas presumes a fee reasonable up to twelve percent in a building of four or fewer units and ten percent in a larger one.</p>
<span class="formula">Fee that can be charged = 0 inside the grace period, otherwise the lesser of the lease fee and the statutory cap</span>
<h3>Reading the result</h3>
<p>The first figure is the fee that can be charged for the payment you entered, after both limits. The cap uses the rent or, where the statute says so, the unpaid amount: Colorado, Maryland, Tennessee and Virginia measure against what is past due, so paying part of the rent on time lowers the cap. Texas asks how many units are in the building because its safe harbour differs. New Jersey is unusual: its five-business-day grace period protects only tenants who receive a Social Security old-age pension or certain disability or welfare benefits, and the checker shows the date for them while noting that other tenants have no statutory grace period. The remaining nine states on the list have no statewide statute that caps the fee or requires a grace period, and the checker says so rather than inventing a figure; the lease governs, subject to the general rule that a court will not enforce a fee that is a penalty rather than a reasonable estimate of the landlord’s loss, and to city ordinances such as Chicago’s.</p>
<h3>What this checker does not do</h3>
<p>It does not decide whether a fee is reasonable where the statute leaves that open, it does not apply city ordinances, and it does not handle daily accruing fees except in Texas, where the statute treats an initial fee plus daily fees as one fee against the cap. Interest on late rent, returned-payment charges and attorney fees are separate questions. Where a statute uses business days the checker excludes weekends only; a State or federal holiday inside the period adds a day. Each entry names the section it rests on and the date it was read, and nine entries rest on published state charts rather than a statute because no statewide statute could be found, which the source line says plainly.</p>`,
  faq: [
    { q: 'My lease has no late fee clause. Can the landlord charge one?', a: '<p>In Texas, Virginia, Colorado and Arizona the statute says the fee must be in the written agreement, and in practice the same is true everywhere: a fee is a contract term. Ask for the clause in writing before paying any fee the lease does not mention.</p>' },
    { q: 'Rent was due on the first and I paid on the third. Can I be charged?', a: '<p>It depends on the state. In Texas the rent must have remained unpaid two full days after the due date, so a payment on the third is still inside the window and no fee is due; the fee becomes chargeable on the fourth. In New York, North Carolina, Tennessee and Washington you are still inside the five-day grace period, though in Washington a payment after the fifth day can carry a fee counted from the first. In Maryland and Virginia the statute sets no grace period, so the lease decides.</p>' },
    { q: 'The landlord is charging a daily late fee. Is that allowed?', a: '<p>Texas treats an initial fee plus daily fees as a single fee and tests the total against the cap. Colorado allows more than one fee for a late payment only if the total stays within its cap, and bars interest on a fee. North Carolina allows one fee per late payment. Elsewhere the lease and the general rule against penalties apply.</p>' },
    { q: 'What happens if the landlord charges more than the cap?', a: '<p>Texas sets a specific penalty: $100 plus three times the improper fee plus attorney fees. Colorado charges fifty dollars per violation and more if it is not cured within seven days of notice. In New York and North Carolina the lease term is void and the excess is not collectable. Keep the receipt and the lease, and raise it in writing first.</p>' },
    { q: 'Does this cover my city?', a: '<p>No. Chicago, several California cities and other places add rules on top of state law. Where the statute line says no statewide statute was found, check your city before relying on the lease alone.</p>' },
  ],
};
