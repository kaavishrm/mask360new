import noticeRules, { noticeMath } from './lib/notice-rules.mjs';

export default {
  slug: 'notice-to-vacate-date-calculator',
  title: 'Notice to Vacate Date Calculator',
  h1: 'Notice to Vacate Date Calculator: how much notice a month-to-month tenancy needs in your state, and the last day',
  summary: 'Pick the state, who is giving notice and the date. See the notice the statute requires and the day the tenancy ends.',
  description: 'Free notice to vacate calculator for month-to-month tenancies in 20 US states. Choose the state, whether the tenant or landlord is giving notice, the notice date and the rent due day, and see the statutory notice period, whether it must run to the end of a rental period, and the last day of the tenancy, with the statute section cited and the date it was verified.',
  category: 'notices',
  lib: [noticeRules, noticeMath],
  related: ['rent-increase-notice-generator', 'security-deposit-return-deadline-calculator', 'prorated-rent-calculator'],
  intro: 'A month-to-month tenancy ends by notice, and each state sets the notice differently: a number of days, a month, or a period that has to end on a rent day. Choose the state and the calculator applies the statute, names the section, and shows the last day of the tenancy.',
  tool: `
<form id="f">
  <div class="grid">
    <label>State<select name="state" id="state"></select></label>
    <label>Who is giving notice<select name="who"><option value="tenant">Tenant (moving out)</option><option value="landlord">Landlord (ending the tenancy)</option></select></label>
    <label>Notice given on<input type="date" name="date" value="2026-11-27"></label>
    <label>Rent is due on the<select name="due"></select></label>
    <label>How long the tenant has lived there (months) <span class="hint">Matters in California, New York and for some tiers</span><input type="number" name="months" value="18" min="0" step="1"></label>
  </div>
  <div class="result" id="out"></div>
</form>`,
  script: function () {
    const H = window.H, RULES = noticeRules(), M = noticeMath();
    const f = document.getElementById('f');
    f.elements.state.innerHTML = RULES.map((r) => '<option value="' + r.code + '">' + r.name + '</option>').join('');
    f.elements.state.value = 'NY';
    const ord = (n) => n + (n % 10 === 1 && n !== 11 ? 'st' : n % 10 === 2 && n !== 12 ? 'nd' : n % 10 === 3 && n !== 13 ? 'rd' : 'th');
    f.elements.due.innerHTML = Array.from({ length: 28 }, (_, i) => '<option value="' + (i + 1) + '">' + ord(i + 1) + ' of the month</option>').join('');
    H.bind(f, () => {
      const r = RULES.find((x) => x.code === f.elements.state.value), who = H.str(f, 'who'), notice = H.parse(H.str(f, 'date')), due = H.val(f, 'due'), months = H.val(f, 'months');
      const el = document.getElementById('out');
      if (!notice) { el.innerHTML = '<p class="note">Enter the date the notice is given.</p>'; return; }
      const spec = who === 'tenant' ? r.tenant : r.landlord, req = M.pick(spec, months);
      const align = who === 'landlord' && r.landlordAlign ? r.landlordAlign : r.align;
      let main, sub, rows = '';
      if (req.cause && req.days == null && req.months == null) {
        main = '<div class="stat best"><b>Cause required</b><span>In ' + r.name + ' a landlord cannot end a month-to-month tenancy by notice alone</span></div>';
        sub = '<p class="note">' + (req.note ? req.note.charAt(0).toUpperCase() + req.note.slice(1) + '.' : '') + '</p>';
      } else {
        const e = M.endDate(notice, req, align, due);
        main = '<div class="stat best"><b>' + H.mdy(e.ends) + '</b><span>Last day of the tenancy' + (e.due ? ' (the notice runs to the rent day of ' + H.mdy(e.due) + ')' : '') + '</span></div>';
        rows = '<tr><td>Notice given</td><td>' + H.mdy(notice) + '</td></tr><tr><td>Notice required</td><td>' + M.label(req) + (req.tier !== undefined ? ' (tenant in occupancy ' + (req.tier ? req.tier + ' months or more' : 'less than ' + spec.tiers[spec.tiers.length - 2][0] + ' months') + ')' : '') + '</td></tr>' +
          '<tr><td>Notice period runs out</td><td>' + H.mdy(e.target) + '</td></tr>' +
          (e.due ? '<tr><td>First rent day on or after that</td><td>' + H.mdy(e.due) + '</td></tr>' : '') + '<tr><td>Last day of the tenancy</td><td>' + H.mdy(e.ends) + '</td></tr>' +
          (r.week ? '<tr><td>Week-to-week tenancy instead</td><td>' + r.week + ' days</td></tr>' : '');
        sub = (req.cause ? '<p class="note">' + req.note.charAt(0).toUpperCase() + req.note.slice(1) + '.</p>' : '') + (req.note && !req.cause ? '<p class="note">Note: ' + req.note + '.</p>' : '');
      }
      el.innerHTML = '<div class="big">' + main + '<div class="stat"><b>' + (M.label(req) || 'None by notice') + '</b><span>Notice the statute requires from the ' + who + '</span></div>' +
        '<div class="stat"><b>' + (align === 'period' ? 'Rent day' : 'Any day') + '</b><span>' + (align === 'period' ? 'The notice must run to the end of a rental period' : 'The days run from the notice; it need not end on a rent day') + '</span></div></div>' +
        (rows ? '<div class="tbl-wrap"><table class="wrap"><thead><tr><th>Step</th><th>Date</th></tr></thead><tbody>' + rows + '</tbody></table></div>' : '') +
        '<h3>The rule</h3><p>' + r.rule + '</p>' + sub +
        '<p class="tiny">Source: ' + r.cite + ', read in the ' + r.source + ' on ' + r.verified + '. <a href="' + r.url + '" rel="noopener">Read the section</a>. Give notice in writing and keep proof of delivery; a lease may set a longer period, and a longer period in the lease controls. Days are calendar days from the notice date; where a statute counts from receipt, allow for delivery time.</p>';
    });
  },
  explainer: `
<h2>How notice periods work</h2>
<p>A month-to-month tenancy has no end date, so it ends when one side gives the other notice. Every state in this calculator sets a minimum: most say 30 days or one month, Pennsylvania says 15 days, North Carolina only 7, and several states give the landlord longer than the tenant (Georgia 60 against 30, California 60 for a tenant of a year or more, New York 30, 60 or 90 days by length of occupancy, Maryland 60 against 30). The lease can lengthen these periods and in a few states shorten them, so read it first; the statute is the floor when the lease is silent.</p>
<span class="formula">Last day = notice date + the statutory period, then (in a rent-day state) the day before the next rent due date</span>
<h3>Days from notice, or to the end of a period</h3>
<p>The number is only half the rule. In Arizona, Florida, Michigan, Missouri, North Carolina, Ohio, Tennessee, Virginia and Washington, and for a tenant in Colorado, Maryland and New York, the notice has to run to a rental date: it must be given at least so many days before the periodic rent day, or must expire at the end of a monthly period. Give notice on the 27th in one of those states with rent due on the 1st and the 30 days do not end on the 27th of next month; the tenancy runs to the end of the following full month, because the first rent day that is 30 days away is the one after that. The calculator shows that step. In California, Georgia, Illinois, Indiana, Pennsylvania and Texas the days simply run from the notice, and in California the rent is due through the termination date, prorated.</p>
<h3>Where the landlord needs a reason</h3>
<p>Washington, New Jersey (for tenants covered by the Anti-Eviction Act) and Colorado for most residential tenancies do not let a landlord end a periodic tenancy by notice alone; a listed cause is needed, each with its own notice period, and the calculator says so rather than showing a date. The tenant in those states can still leave on the ordinary notice.</p>
<h3>Giving the notice</h3>
<p>Put it in writing, date it, name the property and the date the tenancy ends, and deliver it the way the lease or statute says, keeping proof. Several statutes count from receipt rather than from sending, so allow for the post. A tenant who leaves earlier than the notice allows still owes rent to the end of the notice period; a landlord whose notice is short usually has to start again. Local law adds to state law in some cities: Seattle, Chicago, Baltimore City and Montgomery County among those relevant here.</p>
<h3>States covered</h3>
<p>Arizona, California, Colorado, Florida, Georgia, Illinois, Indiana, Maryland, Massachusetts, Michigan, Missouri, New Jersey, New York, North Carolina, Ohio, Pennsylvania, Tennessee, Texas, Virginia and Washington, each read on 27 November 2026 in the legislature’s text or a dated reproduction named in the source line. Week-to-week periods are shown where the statute has them. The calculator does not cover fixed-term leases, notices for non-payment or breach, mobile home lots, or subsidized housing.</p>`,
  faq: [
    { q: 'I gave 30 days’ notice on the 10th. Can I leave on the 10th of next month?', a: '<p>In California, Georgia, Texas and the other "any day" states, yes, and you owe rent only through that day. In the rent-day states the tenancy runs to the end of the rental period, so you owe the full month and can stay through it. Pick your state above and the calculator shows which applies.</p>' },
    { q: 'Does the landlord have to accept my notice by text or email?', a: '<p>The statutes mostly say "written notice" and some name the method; a lease often does too. A letter delivered by hand or certified mail, with a copy kept, satisfies every state in the list. Email counts only where the lease or statute allows it.</p>' },
    { q: 'My lease says 60 days but the statute says 30. Which wins?', a: '<p>The longer period in the lease, in every state here except where the statute forbids waiver. Pennsylvania goes the other way and lets a lease shorten or waive the notice.</p>' },
    { q: 'What if the landlord gave less notice than required?', a: '<p>The notice is usually ineffective and the tenancy continues until a proper notice runs out. A landlord cannot file for possession on a short notice. Write back, cite the section shown, and keep paying rent.</p>' },
  ],
};
