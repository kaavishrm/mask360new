import noticeRules, { noticeMath } from './lib/notice-rules.mjs';

export default {
  slug: 'rent-increase-notice-generator',
  title: 'Rent Increase Notice Generator',
  h1: 'Rent Increase Notice Generator: the right notice period for your state, and a letter to print',
  summary: 'Enter the rent, the new rent and the date. Get the earliest effective date your state allows and a notice letter to print or save as PDF.',
  description: 'Free rent increase notice generator for landlords in 20 US states. Enter the current and new rent, the notice date and the rent due day, and the tool applies the state’s notice rule (30, 60 or 90 days, or one month, by size of increase or length of tenancy where the law says so), picks the first rent day the increase can take effect, and produces a letter citing the statute to print or save as PDF.',
  category: 'documents',
  lib: [noticeRules, noticeMath],
  related: ['notice-to-vacate-date-calculator', 'late-rent-fee-checker', 'prorated-rent-calculator'],
  intro: 'Fill in the parties, the rents and the date you will deliver the notice. The tool works out how much notice your state requires for this increase, sets the effective date to the first rent day the law allows, and writes the letter. Everything stays in your browser.',
  tool: `
<form id="f">
  <div class="grid-2">
    <label>State<select name="state" id="state"></select></label>
    <label>Landlord or manager name<input type="text" name="ll" placeholder="Jordan Lee"></label>
    <label>Landlord address<textarea name="lladdr" placeholder="12 Oak Street, Columbus, OH 43215"></textarea></label>
    <label>Tenant name(s)<input type="text" name="tn" placeholder="Sam Rivera"></label>
    <label>Rental property address<textarea name="prop" placeholder="Apt 4B, 88 Elm Avenue, Columbus, OH 43215"></textarea></label>
    <label>Current monthly rent ($)<input type="number" name="cur" value="1500" min="0" step="1"></label>
    <label>New monthly rent ($)<input type="number" name="nw" value="1600" min="0" step="1"></label>
    <label>Notice will be delivered on<input type="date" name="date" value="2026-11-27"></label>
    <label>Rent is due on the<select name="due"></select></label>
    <label>How long the tenant has lived there (months) <span class="hint">Sets the period in New York</span><input type="number" name="months" value="24" min="0" step="1"></label>
    <label>Delivery<select name="how"><option>Hand delivered</option><option>First-class mail</option><option>Certified mail</option><option>Email, as the lease allows</option></select></label>
  </div>
  <div class="result" id="out"></div>
  <div class="actions"><button type="button" class="btn" id="go">Generate notice</button><button type="button" class="btn secondary" id="pr">Print or save as PDF</button></div>
  <p class="tool-note note">Tip: in the print dialog, set destination to Save as PDF. Keep a signed copy and proof of delivery.</p>
  <div class="sheet" id="sheet" hidden></div>
</form>`,
  script: function () {
    const H = window.H, RULES = noticeRules(), M = noticeMath();
    const f = document.getElementById('f'), out = document.getElementById('out'), sheet = document.getElementById('sheet');
    f.elements.state.innerHTML = RULES.map((r) => '<option value="' + r.code + '">' + r.name + '</option>').join('');
    f.elements.state.value = 'OH';
    const ord = (n) => n + (n % 10 === 1 && n !== 11 ? 'st' : n % 10 === 2 && n !== 12 ? 'nd' : n % 10 === 3 && n !== 13 ? 'rd' : 'th');
    f.elements.due.innerHTML = Array.from({ length: 28 }, (_, i) => '<option value="' + (i + 1) + '">' + ord(i + 1) + ' of the month</option>').join('');
    let last = null;
    function compute() {
      const r = RULES.find((x) => x.code === f.elements.state.value), cur = H.val(f, 'cur'), nw = H.val(f, 'nw'), notice = H.parse(H.str(f, 'date')), due = H.val(f, 'due'), months = H.val(f, 'months');
      if (!notice || !cur) return null;
      const pct = cur ? (nw - cur) / cur * 100 : 0;
      let req, basis;
      const inc = r.increase;
      if (inc && inc.tiers && inc.pct === true) { const t = inc.tiers.find(([min]) => pct > min); req = { days: t[1] }; basis = 'the increase is ' + (pct > 10 ? 'more than' : 'not more than') + ' 10 percent and needs ' + t[1] + ' days’ notice'; }
      else if (inc && inc.tiers && inc.occupancy) {
        if (pct >= inc.pct) { req = M.pick({ tiers: inc.tiers }, months); basis = 'the increase is ' + inc.pct + ' percent or more and the tenant has been in occupancy ' + months + ' months, which needs ' + req.days + ' days’ notice'; }
        else { req = M.pick(r.landlord, months); basis = 'the increase is below ' + inc.pct + ' percent and the statute’s rent increase rule does not apply, the notice a landlord needs to end the tenancy (' + M.label(req) + ') is used'; }
      } else if (inc) { req = { days: inc.days, months: inc.months }; basis = 'the statute requires ' + M.label(req) + '’ notice' + (inc.note ? ' (' + inc.note + ')' : ''); }
      else { req = M.pick(r.landlord.cause && r.landlord.days == null && r.landlord.months == null ? r.tenant : r.landlord, months); basis = 'there is no statutory rent increase rule, the notice used to end a month-to-month tenancy (' + M.label(req) + ') is applied'; }
      const target = req.months ? M.addMonths(notice, req.months) : M.addDays(notice, req.days);
      const eff = M.nextDue(target, due);
      return { r, cur, nw, pct, notice, due, months, req, basis, target, eff };
    }
    function show() {
      const c = compute(); last = c;
      if (!c) { out.innerHTML = '<p class="note">Enter the current rent and the notice date.</p>'; return; }
      out.innerHTML = '<div class="big"><div class="stat best"><b>' + H.mdy(c.eff) + '</b><span>Earliest rent day the new rent can start</span></div>' +
        '<div class="stat"><b>' + M.label(c.req) + '</b><span>Notice required in ' + c.r.name + '</span></div>' +
        '<div class="stat"><b>' + (c.pct >= 0 ? '+' : '') + c.pct.toFixed(1) + '%</b><span>' + H.usd(c.cur) + ' to ' + H.usd(c.nw) + '</span></div></div>' +
        '<p class="note">Because ' + c.basis + ', counted from ' + H.mdy(c.notice) + ' the period runs out on ' + H.mdy(c.target) + ', and the first rent day on or after that is ' + H.mdy(c.eff) + '.' + (c.r.increase && c.r.increase.mail && f.elements.how.value.includes('mail') ? ' Service by mail adds the days in Code of Civil Procedure section 1013; deliver earlier or add them.' : '') + '</p>' +
        '<h3>The rule</h3><p>' + c.r.increaseRule + '</p>' +
        '<p class="tiny">Source: ' + c.r.cite + ', read in the ' + c.r.source + ' on ' + c.r.verified + '. <a href="' + c.r.url + '" rel="noopener">Read the section</a>. A lease may require longer notice or limit increases during its term; rent control and local ordinances (Seattle, Chicago, Baltimore City, Montgomery County among others) add rules this tool does not apply.</p>';
    }
    function gen() {
      show(); const c = last; if (!c) return;
      const ll = H.str(f, 'll') || '____________', tn = H.str(f, 'tn') || '____________', prop = H.str(f, 'prop') || '____________', lladdr = H.str(f, 'lladdr'), how = H.str(f, 'how');
      sheet.innerHTML = '<div class="row"><h2>Notice of Rent Increase</h2><div class="muted">Date: ' + H.mdy(c.notice) + '</div></div>' +
        '<p><strong>To:</strong> ' + H.esc(tn) + '<br>' + H.nl(prop) + '</p>' +
        '<p>This notice is to inform you that, effective <strong>' + H.mdy(c.eff) + '</strong>, the monthly rent for the premises at ' + H.nl(prop) + ' will increase from <strong>' + H.usd(c.cur) + '</strong> to <strong>' + H.usd(c.nw) + '</strong> per month, an increase of ' + H.usd(c.nw - c.cur) + ' (' + c.pct.toFixed(1) + '%). Rent remains due on the ' + ord(c.due) + ' of each month and is payable in the same manner as before.</p>' +
        '<p>All other terms and conditions of your tenancy remain unchanged. If you do not wish to continue the tenancy at the new rent, you may give notice to end it in accordance with your rental agreement and state law.</p>' +
        '<p class="muted">This notice is given ' + M.label(c.req) + ' or more before the effective date, as required by ' + c.r.cite + '. Delivered by: ' + H.esc(how) + '.</p>' +
        '<div class="sig"><div>' + H.esc(ll) + (lladdr ? '<br><span class="muted">' + H.nl(lladdr) + '</span>' : '') + '<br><br>Signature of landlord or agent</div><div>Date</div></div>';
      sheet.hidden = false;
    }
    H.bind(f, show);
    document.getElementById('go').addEventListener('click', gen);
    document.getElementById('pr').addEventListener('click', () => { gen(); H.print(); });
  },
  explainer: `
<h2>How much notice a rent increase needs</h2>
<p>A landlord cannot change the rent of a month-to-month tenancy overnight. In most states the increase is treated as a change of terms that takes the same notice as ending the tenancy, and a handful of states have written a specific rent increase rule on top. California requires 30 days, or 90 days when the increase, together with any others in the previous twelve months, is more than 10 percent. New York requires 30, 60 or 90 days by how long the tenant has been there whenever the increase is 5 percent or more. Washington requires 90 days under its 2025 law, which also caps most annual increases. Maryland requires written notice by mail with a certificate of mailing or by email, 60 days ahead for a tenancy of a month. Colorado requires 60 days where there is no written agreement. Virginia makes the new rent effective on the next rent due date coming 30 days after the notice. New Jersey requires a valid notice to quit with notice of the increase, one month for a monthly tenancy, and the increase must not be unconscionable. Where the state has no specific rule, this tool uses the notice the landlord would need to end the tenancy, which is the safe reading and what most leases say.</p>
<span class="formula">Effective date = the first rent due date on or after (notice date + the required notice)</span>
<h3>Why the effective date is a rent day</h3>
<p>Rent for a monthly tenancy is paid by the period, so an increase takes effect from the start of a period: the first rent due date that falls on or after the day the notice runs out. Giving notice on the 27th with rent due on the 1st and a 30-day rule therefore produces an effective date of the 1st of the month after next, not the 27th of next month. The letter the tool writes states that date, the old and new rent, the percentage, and the section of the statute the notice period comes from.</p>
<h3>What the letter does not do</h3>
<p>It does not override a lease. A fixed-term lease fixes the rent until it ends unless it says otherwise, and a month-to-month agreement may require longer notice than the statute, in which case the lease controls. It does not apply rent control or stabilization, local ordinances such as Seattle’s 180-day notice or Chicago’s, or the limits on subsidized housing, and it does not advise on whether an increase is reasonable; New Jersey courts can refuse an unconscionable one and Washington caps most increases. For a tenant who objects, the usual answer is that the tenancy may be ended on the ordinary notice instead.</p>
<h3>Delivering it</h3>
<p>Hand delivery with a signed acknowledgment or certified mail is enough everywhere in the list; Maryland specifies first-class mail with a certificate of mailing or email where the tenant has opted in, and California adds extra days for service by mail. Date the notice on the day it is actually delivered or posted, sign it, and keep a copy with the proof of delivery, because a short or unprovable notice simply pushes the increase to the next period.</p>
<h3>States covered</h3>
<p>Arizona, California, Colorado, Florida, Georgia, Illinois, Indiana, Maryland, Massachusetts, Michigan, Missouri, New Jersey, New York, North Carolina, Ohio, Pennsylvania, Tennessee, Texas, Virginia and Washington, each statute read on 27 November 2026 in the legislature’s text or a dated reproduction named in the source line.</p>`,
  faq: [
    { q: 'Can I raise the rent mid-lease?', a: '<p>Not during a fixed term unless the lease allows it. The notice periods here apply to month-to-month tenancies and to the start of a new term after a fixed term ends.</p>' },
    { q: 'How often can I raise the rent?', a: '<p>Most states set no limit on frequency for an unregulated tenancy, only notice. Washington caps the annual amount under its 2025 law, California counts all increases in a twelve-month window toward the 10 percent trigger, and rent-controlled cities set their own rules.</p>' },
    { q: 'The tenant refuses to pay the new rent. What then?', a: '<p>If the notice was valid and ran its full period, the new rent is the rent, and non-payment is treated like any other non-payment. If the notice was short, serve it again. In New Jersey the increase must also be reasonable, and the tenant can contest it in the possession case.</p>' },
    { q: 'Do I need a reason to raise the rent?', a: '<p>No state in the list requires a reason for an increase, though New Jersey requires it to be not unconscionable and Washington caps the amount. A landlord may not raise the rent in retaliation for a complaint or as discrimination, which every state forbids separately.</p>' },
  ],
};
