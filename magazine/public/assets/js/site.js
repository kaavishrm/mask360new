(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var base = document.documentElement.getAttribute('data-base') || '';

  // clock and date, Mumbai time, like the reference's "19:49  Tue, 3 Nov, 2026"
  var t = document.querySelector('time[data-clock]'), d = document.querySelector('[data-date]');
  function tick() {
    var now = new Date();
    try {
      if (t) t.textContent = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Asia/Kolkata' }).format(now);
      if (d) d.textContent = new Intl.DateTimeFormat('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric', timeZone: 'Asia/Kolkata' }).format(now).replace(/(\w{3}) (\d+) (\w{3}) (\d{4})/, '$1, $2 $3, $4');
    } catch (e) {}
  }
  tick(); setInterval(tick, 20000);
  var y = document.querySelector('[data-year]'); if (y) y.textContent = new Date().getFullYear();

  // hero rotation
  var hero = document.querySelector('.hero');
  if (hero) {
    var slides = hero.querySelectorAll('.slide'), thumbs = hero.querySelectorAll('.thumbs button'), copies = hero.querySelectorAll('.copy');
    var i = 0, timer;
    function show(n) {
      i = (n + slides.length) % slides.length;
      slides.forEach(function (s, k) { s.classList.toggle('on', k === i); });
      copies.forEach(function (c, k) { c.hidden = k !== i; });
      thumbs.forEach(function (b, k) { if (k === i) b.setAttribute('aria-current', 'true'); else b.removeAttribute('aria-current'); });
    }
    function start() { if (reduce || slides.length < 2) return; clearInterval(timer); timer = setInterval(function () { show(i + 1); }, 6000); }
    thumbs.forEach(function (b, k) { b.addEventListener('click', function (e) { e.preventDefault(); show(k); start(); }); });
    document.querySelectorAll('.hero-wrap .arrows button').forEach(function (b) { b.addEventListener('click', function () { show(i + (b.dataset.dir === 'next' ? 1 : -1)); start(); }); });
    show(0); start();
  }

  // load more
  var more = document.querySelector('[data-more]');
  if (more) {
    var grid = document.querySelector(more.dataset.more), section = more.dataset.section || '', shown = grid ? grid.children.length : 0, all = null;
    more.addEventListener('click', function () {
      var go = function () {
        var list = all.filter(function (s) { return !section || s.section === section; });
        var next = list.slice(shown, shown + 9);
        next.forEach(function (s) { grid.insertAdjacentHTML('beforeend', card(s)); });
        shown += next.length;
        if (shown >= list.length) more.hidden = true;
      };
      if (all) go(); else fetch(base + '/index.json').then(function (r) { return r.json(); }).then(function (j) { all = j.stories; go(); });
    });
  }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function card(s) {
    return '<a class="card" href="' + base + s.url + '"><div class="label c-' + s.section + '">' + esc(s.sectionName) + '<span class="kick' + (s.kicker === 'PAID' ? ' paid' : '') + '">' + esc(s.kicker) + '</span></div><h3>' + esc(s.title) + '</h3><p>' + esc(s.dek) + '</p><div class="pic" style="--ar:4/5"><img src="' + base + s.card + '" alt="" loading="lazy" decoding="async" width="864" height="1080"></div><div class="meta2"><span>' + esc(s.dateShort) + '</span><span>' + esc(s.read) + '</span></div></a>';
  }

  // search overlay
  var ov = document.querySelector('.overlay'), open = document.querySelectorAll('[data-search]');
  if (ov) {
    var inp = ov.querySelector('input'), res = ov.querySelector('.results'), idx = null;
    function render(q) {
      q = q.trim().toLowerCase();
      if (!idx) return;
      if (!q) { res.innerHTML = '<p class="hint">Type a brand, a person, a place or a word from a headline.</p>'; return; }
      var hits = idx.filter(function (s) { return (s.title + ' ' + s.dek + ' ' + s.tags.join(' ') + ' ' + s.sectionName).toLowerCase().indexOf(q) !== -1; }).slice(0, 30);
      res.innerHTML = hits.length ? hits.map(function (s) { return '<a class="r" href="' + base + s.url + '"><img src="' + base + s.thumb + '" alt=""><div><div class="label c-' + s.section + '">' + esc(s.sectionName) + '</div><h3>' + esc(s.title) + '</h3><p>' + esc(s.dek) + '</p></div></a>'; }).join('') : '<p class="hint">Nothing yet. The tea on that has not been spilled.</p>';
    }
    open.forEach(function (b) { b.addEventListener('click', function (e) { e.preventDefault(); ov.classList.add('on'); inp.focus(); if (!idx) fetch(base + '/search.json').then(function (r) { return r.json(); }).then(function (j) { idx = j; render(inp.value); }); }); });
    ov.querySelector('.close').addEventListener('click', function () { ov.classList.remove('on'); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') ov.classList.remove('on'); });
    inp.addEventListener('input', function () { render(inp.value); });
  }
})();
