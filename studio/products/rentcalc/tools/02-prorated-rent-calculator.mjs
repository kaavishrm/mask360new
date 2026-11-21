export default {
  slug: 'prorated-rent-calculator',
  title: 'Prorated Rent Calculator',
  h1: 'Prorated Rent Calculator: move-in and move-out rent by three methods',
  summary: 'Daily rate by actual days, a 30-day month or a 365-day year, side by side.',
  description: 'Free prorated rent calculator for a mid-month move-in or move-out. Shows the partial month rent by the actual days in the month, by a 30-day month and by a 365-day year, so you can see which method your lease uses and what the difference is.',
  category: 'rent',
  related: ['security-deposit-return-deadline-calculator'],
  intro: 'Enter the monthly rent and the date you move in or out. The calculator shows the partial month by the three methods landlords use, because the lease decides which one applies and the answers differ.',
  tool: `
<form id="f">
  <div class="grid">
    <label>Monthly rent ($)<input type="number" name="rent" value="1500" min="0" step="1"></label>
    <div class="field"><span>Partial month is for</span><div class="seg"><input type="radio" name="kind" id="k1" value="in" checked><label for="k1">Move-in</label><input type="radio" name="kind" id="k2" value="out"><label for="k2">Move-out</label></div></div>
    <label>Date<input type="date" name="date" value="2026-12-17"></label>
    <label>Rent is due on the<select name="due"><option value="1">1st of the month</option><option value="15">15th of the month</option></select></label>
  </div>
  <div class="result" id="out"></div>
</form>`,
  script: function () {
    const H = window.H;
    H.bind('f', (f) => {
      const rent = H.val(f, 'rent'), d = H.parse(H.str(f, 'date')), due = H.val(f, 'due'), moveIn = f.elements.kind.value === 'in';
      const out = document.getElementById('out');
      if (!d) { out.innerHTML = '<p class="note">Enter a date.</p>'; return; }
      // The rental period runs from the due date to the day before the next due date.
      let start = new Date(d.getFullYear(), d.getMonth(), due);
      if (d < start) start = new Date(d.getFullYear(), d.getMonth() - 1, due);
      const next = new Date(start.getFullYear(), start.getMonth() + 1, due);
      const periodDays = Math.round((next - start) / 86400000);
      // Move-in: the move-in day through the day before the next due date. Move-out: the first day of the period through the move-out day.
      const days = moveIn ? Math.round((next - d) / 86400000) : Math.round((d - start) / 86400000) + 1;
      const dim = H.daysInMonth(d.getFullYear(), d.getMonth());
      const byActual = rent / periodDays * days, by30 = rent / 30 * days, by365 = rent * 12 / 365 * days;
      const row = (k, rate, amt) => '<tr><td>' + k + '</td><td>' + H.usd(rate) + '</td><td>' + H.usd(amt) + '</td></tr>';
      out.innerHTML = '<div class="big"><div class="stat best"><b>' + H.usd(byActual) + '</b><span>Actual days in the period (' + periodDays + ')</span></div><div class="stat"><b>' + H.usd(by30) + '</b><span>30-day month</span></div><div class="stat"><b>' + H.usd(by365) + '</b><span>365-day year</span></div></div>' +
        '<div class="tbl-wrap"><table><thead><tr><th>Method</th><th>Daily rate</th><th>' + days + ' day' + (days === 1 ? '' : 's') + '</th></tr></thead><tbody>' +
        row('Monthly rent ÷ ' + periodDays + ' days in this rental period', rent / periodDays, byActual) + row('Monthly rent ÷ 30', rent / 30, by30) + row('Monthly rent × 12 ÷ 365', rent * 12 / 365, by365) + '</tbody></table></div>' +
        '<p class="note">' + (moveIn ? 'Moving in on ' + H.mdy(d) + ' means paying for ' + days + ' days, ' + H.mdy(d) + ' through ' + H.mdy(H.addDays(next, -1)) + ', before the full rent due on ' + H.mdy(next) + '.' : 'Moving out on ' + H.mdy(d) + ' means paying for ' + days + ' days, ' + H.mdy(start) + ' through ' + H.mdy(d) + '.') + (dim !== periodDays ? ' The rental period spans two calendar months, so the actual-days method uses the ' + periodDays + ' days in the period rather than the ' + dim + ' days in ' + H.monthName(d.getMonth()) + '.' : '') + ' Your lease decides the method; if it is silent, landlords most often use the actual days in the month.</p>';
    });
  },
  explainer: `
<h2>Why three answers</h2>
<p>There is no federal rule for prorating rent and almost no state tells landlords how to do it, so the lease governs and three conventions are in use. The most common divides the monthly rent by the number of days in that month and multiplies by the days you occupy. A second divides by a flat 30 regardless of the month, which favors the tenant in February and the landlord in a 31-day month. A third converts rent to a daily rate over the year, monthly rent times twelve divided by 365, which is what some property management software does by default. For a $1,500 rent and a move-in on the 17th of a 31-day month, the three methods give $725.81, $750.00 and $739.73. On a one-time charge the gap is small; across a portfolio it is not, which is why the method belongs in the lease.</p>
<span class="formula">Actual days:   rent ÷ days in the rental period × days occupied
30-day month:  rent ÷ 30 × days occupied
365-day year:  rent × 12 ÷ 365 × days occupied</span>
<h3>Counting the days</h3>
<p>Count the move-in day and every day up to the day before the next rent due date. Count the move-out day too if you have the keys that day. A move-in on the 17th of a 31-day month with rent due on the 1st is 15 days. If rent is due on the 15th rather than the 1st, the rental period runs from the 15th to the 14th of the next month, and the calculator counts within that period, which is what the due-date field is for.</p>
<h3>Move-out</h3>
<p>The same arithmetic applies in reverse: you pay from the first day of the final rental period through the day you hand back possession. Whether you owe the prorated amount at all depends on the notice you gave and what the lease says about the final month; many fixed-term leases run to the last day of a month and have nothing to prorate.</p>
<h3>What this calculator does not do</h3>
<p>It does not apply late fees, utilities, pet rent or parking, each of which may be prorated differently or not at all. It does not know your lease. If the lease names a method, use that one; if it names a daily rate, use the rate. If the lease is silent and the two of you disagree, the actual-days method is the one most courts and housing agencies describe as reasonable.</p>`,
  faq: [
    { q: 'Does the move-in day count?', a: '<p>Yes. You have possession from the day you receive the keys, so that day is charged. The calculator counts it.</p>' },
    { q: 'Which method is correct?', a: '<p>Whichever the lease names. If the lease is silent, the actual-days method is the usual default and the one the calculator highlights. The other two are shown so you can see what your landlord or software may have used.</p>' },
    { q: 'Can a landlord refuse to prorate?', a: '<p>Usually yes. Outside a few local rules, nothing forces a landlord to prorate; many simply set the move-in date to the first of the month or charge a full month and start the lease later. Agree the prorated amount in writing before you move in.</p>' },
    { q: 'What about February?', a: '<p>Under the actual-days method the daily rate is higher in February (rent divided by 28 or 29) and lower in a 31-day month. The 30-day method ignores that. Both are fine if the lease says which applies.</p>' },
  ],
};
