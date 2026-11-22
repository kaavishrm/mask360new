/* Mask360 reel: "People decide fast and explain it later."
   Built in the look of mask360.agency, from its copy and the work it shows in public.
   One deterministic timeline: every style is a function of the frame number, so render.mjs
   can ask for any frame (or part of one) and get the same picture every time.
   24 fps, 120 BPM, 12 frames to a beat, 48 to a bar, 15 bars, 30 seconds. */
'use strict';

const FPS = 24, BEAT = 12, BAR = 48, TOTAL = 720;
const HERE = '/social/reel-people-decide-fast';
const SEQ = HERE + '/.cache/seq';

// Scene starts, in frames.
const T = { hook: 0, work: 96, jewel: 144, athl: 192, fire: 240, nexa: 288, more: 336, nda: 384, numbers: 480, payoff: 576, end: 648, total: TOTAL };

// ---------- helpers ----------
const $ = (tag, cls, parent, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; if (parent) parent.appendChild(e); return e; };
const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
const lerp = (a, b, k) => a + (b - a) * k;
const prog = (t, a, b) => clamp((t - a) / (b - a));
const E = {
  outExpo: k => (k >= 1 ? 1 : 1 - Math.pow(2, -10 * k)),
  outCubic: k => 1 - Math.pow(1 - k, 3),
  outQuart: k => 1 - Math.pow(1 - k, 4),
  inOutCubic: k => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2),
};
const pad2 = n => String(n).padStart(2, '0');
const comma = n => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
const digits = s => String(s).replace(/\d/g, d => `<i class="d">${d}</i>`);     // fixed cell per digit

let SHOTS = null, MARK = '';

const stage = document.getElementById('stage');
const scenes = [];
const pending = [];                   // decode promises for this frame
function scene(name, t0, t1) { const el = $('div', 'scene', stage); const s = { name, t0, t1, el, update() {} }; scenes.push(s); return s; }

// footage comes from JPEG sequences cut by cut.py; frame k of a shot is file k+1
function seq(im, name, k) {
  const n = SHOTS[name].count, i = clamp(Math.floor(k), 0, n - 1) + 1;
  const url = `${SEQ}/${name}/${String(i).padStart(4, '0')}.jpg`;
  if (im.dataset.u !== url) { im.dataset.u = url; im.src = url; pending.push(im.decode().catch(() => {})); }
}

// a headline line that rises out of its own mask
function lines(parent, arr) { return arr.map(h => { const l = $('span', 'line', parent); return $('span', 'in', l, h); }); }
function rise(ins, t, t0, o = {}) {
  const { stagger = 3, dur = 11, dist = 112 } = o;
  ins.forEach((el, i) => { const k = E.outExpo(prog(t, t0 + i * stagger, t0 + i * stagger + dur)); el.style.transform = `translateY(${(1 - k) * dist}%)`; });
}
const fadeUp = (el, t, t0, dur = 9, dy = 22) => { el.style.opacity = prog(t, t0, t0 + Math.min(dur, 6)); el.style.transform = `translateY(${(1 - E.outExpo(prog(t, t0, t0 + dur))) * dy}px)`; };

// one full-bleed shot, named in shots.json: a film sequence or a photograph.
// A film lands a touch tight on the cut and settles. A photograph also keeps a slow push.
function shot(sc, name) { const el = $('div', 'shot', sc.el), im = $('img', '', el); return { el, im, name, film: SHOTS[name].fit === 'full' }; }
function driveShot(s, t, a, b) {
  const on = t >= a && t < b; s.el.style.display = on ? 'block' : 'none'; if (!on) return;
  const len = b - a, settle = 1 - E.outExpo(prog(t, a, a + Math.min(10, len)));
  seq(s.im, s.name, t - a);
  s.im.style.transform = s.film ? `scale(${1 + 0.035 * settle})` : `scale(${1.015 + 0.04 * settle + 0.03 * (len / 24) * ((t - a) / len)})`;
}

// ---------- header: the mark and the site's player bar ----------
const chrome = $('div', '', stage); chrome.id = 'chrome';
const cMark = $('div', 'mark', chrome), cTime = $('div', 'time', chrome);
$('div', 'bar', chrome); const cPlayed = $('div', 'played', chrome), cDot = $('div', 'dot', chrome);
const ticks = []; for (let s = 0; s < 30; s += 4) { const k = $('div', 'tick', chrome, `0:${pad2(s)}`); k.style.left = (72 + (s / 30) * 936) + 'px'; ticks.push([s, k]); }
function updateChrome(t) {
  const sec = Math.floor(t / FPS), x = (t / TOTAL) * 936;
  const html = `${digits('0:' + pad2(sec))} <span>/ ${digits('0:30')}</span>`;
  if (cTime.dataset.h !== html) { cTime.dataset.h = html; cTime.innerHTML = html; }
  cPlayed.style.width = x + 'px'; cDot.style.left = (72 + x) + 'px';
  for (const [s, k] of ticks) k.className = 'tick' + (sec >= s && sec < s + 4 ? ' on' : '');
}

// =====================================================================================
// 1. Hook: "People decide fast and explain it later." The palace goes from day to night under it,
//    in one take from the site's own hero film.
// =====================================================================================
function buildHook() {
  const sc = scene('hook', T.hook, T.work);
  const pal = shot(sc, 'hook');
  $('div', 'scrim hook-scrim', sc.el); $('div', 'scrim-t', sc.el);
  const micro = $('div', 'micro', sc.el, '360 marketing agency, India &amp; UAE'); Object.assign(micro.style, { position: 'absolute', left: '72px', top: '852px' });
  const st = $('div', 'stack disp', sc.el); st.style.top = '900px'; st.style.fontSize = '124px';
  const l1 = lines(st, ['People', 'decide fast']), l2 = lines(st, ['and explain', 'it later.']);
  const starts = $('div', 'body', sc.el, `<span class="inl">${MARK}</span> starts there.`);
  Object.assign(starts.style, { position: 'absolute', left: '72px', top: '1398px', fontSize: '46px', color: '#fff', display: 'flex', alignItems: 'center', gap: '16px' });
  starts.querySelector('svg').style.cssText = 'height:44px;width:auto;display:block;transform:translateY(-3px)';
  sc.update = t => {
    driveShot(pal, t, 0, 96);                         // one take: day for a second, dusk, night by 2.5 s
    micro.style.opacity = prog(t, 4, 10);
    rise(l1, t, 1, { stagger: 3, dur: 12 }); rise(l2, t, 24, { stagger: 3, dur: 12 });
    fadeUp(starts, t, 72, 12, 26);
  };
}

// =====================================================================================
// The curved carousel from the site's work section: tiles on the inside of a cylinder
// =====================================================================================
function carousel(sc, names, o) {
  const { cy, tw = 560, th = 700, R = 1250, persp = 1500, pitch = 612 } = o;
  const wrap = $('div', 'car', sc.el); Object.assign(wrap.style, { top: (cy - th / 2) + 'px', height: th + 'px', perspective: persp + 'px' });
  const tiles = names.map(n => { const el = $('div', 'tile', wrap); Object.assign(el.style, { left: ((1080 - tw) / 2) + 'px', top: '0px', width: tw + 'px', height: th + 'px' }); const im = $('img', '', el); return { el, im, n }; });
  const step = pitch / R;
  return (offset, t) => tiles.forEach((tile, i) => {
    const th2 = (i - offset) * step, a = Math.abs(th2);
    if (a > 1.25) { tile.el.style.display = 'none'; return; }
    tile.el.style.display = 'block';
    tile.el.style.transform = `translateZ(${R}px) rotateY(${-th2}rad) translateZ(${-R}px)`;
    tile.el.style.zIndex = String(100 - Math.round(a * 40));
    tile.im.style.opacity = lerp(1, 0.5, clamp(a / 0.9));
    seq(tile.im, tile.n, Math.floor(t) % SHOTS[tile.n].count);
  });
}

// =====================================================================================
// 2. Work: "NDAs keep most of our work private. This is the part we can show."
// =====================================================================================
function buildWork() {
  const sc = scene('work', T.work, T.jewel);
  const h = $('div', 'h1 disp', sc.el); h.style.top = '452px'; const hl = lines(h, ['Work']);
  const body = $('div', 'body intro-body', sc.el, '<span>NDAs keep most of our work private.</span> <b>This is the part we can show.</b>'); body.style.top = '650px';
  const car = carousel(sc, ['t_praana', 't_lamercie', 't_athl', 't_jewel', 't_fire', 't_nexa', 't_loreal'], { cy: 1150 });
  sc.update = t => {
    const lt = t - T.work;
    rise(hl, t, T.work + 1, { dur: 12 }); fadeUp(body, t, T.work + 5, 12, 26);
    car(lerp(1.15, 3, E.outQuart(prog(lt, 0, 40))), t);       // glides in and comes to rest on Jewel Bagh
  };
}

// =====================================================================================
// 3. Four cases, full bleed, captioned the way the site captions them. Each gets a bar, four shots.
// =====================================================================================
function buildCase(name, t0, shots, micro, title, desc) {
  const sc = scene(name, t0, t0 + BAR);
  const list = shots.map((name, i) => [shot(sc, name), t0 + i * BAR / shots.length, t0 + (i + 1) * BAR / shots.length]);
  $('div', 'scrim', sc.el); $('div', 'scrim-t', sc.el);
  const cap = $('div', 'cap', sc.el);
  const mi = $('div', 'micro', cap, micro);
  const ti = $('div', 'title disp', cap); const tl = lines(ti, title);
  const de = $('div', 'body desc', cap, desc);
  sc.update = t => {
    for (const [s, a, b] of list) driveShot(s, t, a, b);
    mi.style.opacity = prog(t, t0 + 1, t0 + 5);
    rise(tl, t, t0 + 1, { stagger: 2, dur: 11 });
    fadeUp(de, t, t0 + 7, 11, 20);
  };
}

// =====================================================================================
// 4. The rest of the public work, on the carousel
// =====================================================================================
const MORE = [
  ['t_loreal', 'UGC + influencer', 'L’Oréal Pro'],
  ['t_dior', 'Experiential', 'Dior x Marangoni'],
  ['t_verona', 'Real estate', 'Verona'],
  ['t_bms', 'Live entertainment', 'BookMyShow'],
];
const STEPS = [0, 12, 24, 36];               // one case per beat
function buildMore() {
  const sc = scene('more', T.more, T.nda);
  const car = carousel(sc, ['t_smugglerz', 't_praana', ...MORE.map(m => m[0]), 't_lamercie', 't_facets'], { cy: 890, tw: 600, th: 750, pitch: 652 });
  const lab = $('div', 'car-label', sc.el); lab.style.top = '1304px';
  const rows = MORE.map(([, cat, title]) => { const r = $('div', '', lab); r.style.position = 'absolute'; r.style.left = '0'; r.style.top = '0'; const mi = $('div', 'micro', r, cat); const ti = $('div', 't disp', r); const tl = lines(ti, [title]); return { r, mi, tl }; });
  sc.update = t => {
    const lt = t - T.more; let i = 0; for (let k = 0; k < STEPS.length; k++) if (lt >= STEPS[k]) i = k;
    const s0 = STEPS[i], off = 2 + (i === 0 ? 0 : i - 1 + E.outQuart(clamp((lt - s0) / 5)));
    car(off, t);
    rows.forEach((row, j) => { const on = j === i; row.r.style.display = on ? 'block' : 'none'; if (on) { row.mi.style.opacity = prog(lt, s0 + 1, s0 + 4); rise(row.tl, lt, s0, { dur: 8, dist: 108 }); } });
  };
}

// =====================================================================================
// 5. Under NDA: the brands are named, the work is not shown
// =====================================================================================
const LOCK = '<svg class="lock" viewBox="0 0 20 24" width="20" height="24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="2" y="10" width="16" height="12" rx="1.5"/><path d="M5.5 10V7a4.5 4.5 0 0 1 9 0v3"/></svg>';
const NDA = [['Ferrari', 'Launch'], ['Rolls-Royce', 'Experiential'], ['St. Regis Mumbai', 'Hospitality'], ['Atlantis The Royal', 'Content'], ['Ajio Luxe Wkend', 'Experiential'], ['Lodha Luxury', 'Real estate'], ['Kotak Private', 'Experiential'], ['ZORÁE', 'Jewellery']];
function buildNda() {
  const sc = scene('nda', T.nda, T.numbers);
  const mi = $('div', 'micro', sc.el, 'Shown in private'); Object.assign(mi.style, { position: 'absolute', left: '72px', top: '470px' });
  const h = $('div', 'h1 disp', sc.el); h.style.top = '510px'; h.style.fontSize = '150px'; const hl = lines(h, ['Under NDA']);
  const body = $('div', 'body nda-body', sc.el, 'The brands are named here. Each case opens with an access code.');
  const wrap = $('div', 'rows', sc.el);
  const rows = NDA.map(([n, c]) => { const r = $('div', 'row', wrap, `<span class="n">${n}<i></i></span><span class="c">${c}${LOCK}</span>`); return { r, bar: r.querySelector('i'), c: r.querySelector('.c') }; });
  sc.update = t => {
    const lt = t - T.nda;
    mi.style.opacity = prog(lt, 1, 5); rise(hl, lt, 1, { dur: 12 }); fadeUp(body, lt, 6, 12, 24);
    rows.forEach((row, i) => {
      const s = 12 + i * 6;                                  // one row per half beat, from the second beat
      row.r.style.opacity = lt >= s ? 1 : 0;
      row.bar.style.transform = `scaleX(${1 - E.outQuart(prog(lt, s + 2, s + 8))})`;   // the redaction bar slides off the name
      row.c.style.opacity = prog(lt, s + 4, s + 8);
    });
  };
}

// =====================================================================================
// 6. Numbers, counting up as they do on the site
// =====================================================================================
const STATS = [
  [k => `₹${digits(Math.round(27 * k))} CR`, 'GMV from retail activations'],
  [k => `${digits(Math.round(500 * k))}M+`, 'Impressions, AJIO Luxe Wkend'],
  [k => `${digits(comma(Math.round(21000 * k / 100) * 100))}+`, 'Guests hosted'],
  [k => `${digits(comma(Math.round(6000 * k / 100) * 100))}+`, 'Deliverables delivered'],
];
function buildNumbers() {
  const sc = scene('numbers', T.numbers, T.payoff);
  const mi = $('div', 'micro', sc.el, 'The number that has to move'); Object.assign(mi.style, { position: 'absolute', left: '72px', top: '470px' });
  const h = $('div', 'h1 disp', sc.el); h.style.top = '506px'; h.style.fontSize = '138px'; h.style.display = 'flex'; h.style.flexDirection = 'column'; const hl = lines(h, ['We report', 'on revenue']);
  h.querySelectorAll('.line').forEach(l => { l.style.height = 'calc(.95em + .16em)'; });
  const rule = $('div', 'rule', sc.el); rule.style.top = '822px';
  const grid = $('div', 'stats', sc.el);
  const cells = STATS.map(([fmt, label]) => { const c = $('div', 'stat', grid); return { c, v: $('div', 'v', c), fmt, l: $('div', 'l', c, label) }; });
  sc.update = t => {
    const lt = t - T.numbers;
    mi.style.opacity = prog(lt, 1, 5); rise(hl, lt, 1, { stagger: 3, dur: 12 });
    rule.style.transform = `scaleX(${E.outExpo(prog(lt, 8, 24))})`;
    cells.forEach((c, i) => {
      const s = 12 + i * 12;                                 // one stat per beat
      c.c.style.opacity = prog(lt, s, s + 4);
      c.c.style.transform = `translateY(${(1 - E.outExpo(prog(lt, s, s + 12))) * 30}px)`;
      const html = c.fmt(E.outCubic(prog(Math.floor(lt), s, s + 22)));
      if (c.v.dataset.h !== html) { c.v.dataset.h = html; c.v.innerHTML = html; }
    });
  };
}

// =====================================================================================
// 7. Payoff: "Your buyer is already deciding. Let's make sure they choose you."
// =====================================================================================
function buildPayoff() {
  const sc = scene('payoff', T.payoff, T.end);
  const SIZE = 128, LP = SIZE * 0.95, REST = 1440 - 3 * LP;          // three lines resting on y = 1440
  const win = $('div', 'win', sc.el); Object.assign(win.style, { top: '560px', height: (1440 - 560 + 4) + 'px' });
  const st = $('div', 'stack disp', win); st.style.top = (REST - 560) + 'px'; st.style.fontSize = SIZE + 'px';
  const a = lines(st, ['Your buyer', 'is already', 'deciding.']), b = lines(st, ['Let’s make', 'sure they', 'choose you.']);
  sc.update = t => {
    const lt = t - T.payoff;
    rise(a, lt, 2, { stagger: 3, dur: 12 });
    const k = E.outExpo(prog(lt, 36, 52));                             // the second sentence pushes the first one up
    st.style.transform = `translateY(${-3 * LP * k}px)`;
    const dim = lerp(1, 0.42, prog(lt, 36, 46)); a.forEach(el => { el.style.opacity = dim; });
  };
}

// =====================================================================================
// 8. End card: the lockup, the button, the two clocks
// =====================================================================================
const CLOCK0 = 19 * 3600 + 41 * 60 + 31;          // Mumbai 19:41:31 at frame 0, so the minute turns over on the reel's last second
function buildEnd() {
  const sc = scene('end', T.end, T.total);
  const lock = $('div', 'lockup', sc.el, `${MARK}<span class="a">Agency</span>`);
  const mi = $('div', 'micro end-micro', sc.el, '360 marketing agency, India and UAE');
  const btn = $('div', 'btn', sc.el, 'Start a project');
  const url = $('div', 'end-url', sc.el, 'mask360.agency');
  const zones = $('div', 'zones', sc.el, ['India, Mumbai', 'UAE, Dubai'].map(z => `<div class="zone"><div class="z micro"><i></i>${z}</div><div class="tm"></div></div>`).join(''));
  const tms = [...zones.querySelectorAll('.tm')];
  const note = $('div', 'zones-note', sc.el, '<b>Two time zones, 90 minutes apart.</b>');
  const clock = s => { const h = Math.floor(s / 3600) % 24, m = Math.floor(s / 60) % 60, x = Math.floor(s) % 60; return `${digits(pad2(h))}:${digits(pad2(m))}<small>:${digits(pad2(x))}</small>`; };
  sc.update = t => {
    const lt = t - T.end, now = CLOCK0 + Math.floor(t / FPS);
    const p = lerp(4, 124, E.outCubic(prog(lt, 0, 18)));
    const m = `linear-gradient(100deg,#000 ${p - 14}%,rgba(0,0,0,0) ${p}%)`;
    lock.style.webkitMaskImage = m; lock.style.maskImage = m;
    mi.style.opacity = prog(lt, 10, 16);
    btn.style.opacity = prog(lt, 14, 18); btn.style.transform = `translateY(${(1 - E.outExpo(prog(lt, 14, 28))) * 26}px)`;
    fadeUp(url, lt, 20, 12, 18);
    zones.style.opacity = prog(lt, 16, 24); note.style.opacity = prog(lt, 22, 30);
    const h0 = clock(now), h1 = clock(now - 5400);
    if (tms[0].dataset.h !== h0) { tms[0].dataset.h = h0; tms[0].innerHTML = h0; tms[1].innerHTML = h1; }
  };
}

// ---------- boot ----------
async function boot() {
  [SHOTS, MARK] = await Promise.all([
    fetch(HERE + '/shots.json').then(r => r.json()),
    fetch(HERE + '/src/m360.svg').then(r => r.text()),
  ]);
  for (const sh of Object.values(SHOTS)) if (typeof sh === 'object') sh.count = sh.segments ? sh.segments.reduce((n, [c]) => n + c, 0) : (sh.count || 1);
  cMark.innerHTML = MARK;

  buildHook();
  buildWork();
  buildCase('jewel', T.jewel, ['jb_colonnade', 'jb_suite', 'jb_kitchen', 'jb_pool'],
    'Hospitality, 2026', ['Jewel Bagh'], 'Two days, one palace, 42 deliverables.');
  buildCase('athl', T.athl, ['at_pink', 'at_court', 'at_stretch', 'at_cast'],
    'Campaign, 2025', ['Athleisure', 'launch'], 'A new label, launched in two markets.');
  buildCase('fire', T.fire, ['fb_watch', 'fb_dark', 'fb_statue', 'fb_wrist'],
    '360 campaign', ['Fire-Boltt'], 'For one of India’s leading wearable brands.');
  buildCase('nexa', T.nexa, ['nx_gate', 'nx_arch', 'nx_crowd', 'nx_stage'],
    'Experiential', ['Nexa lounge'], 'Priced at three times the festival’s VVIP pass.');
  buildMore();
  buildNda();
  buildNumbers();
  buildPayoff();
  buildEnd();

  if (new URLSearchParams(location.search).get('guides')) {
    const g = $('div', '', stage); g.id = 'guides'; g.style.display = 'block';
    [[0, 285, 1080, 1350], [0, 0, 1080, 220], [0, 1500, 1080, 420], [950, 1040, 130, 660]].forEach(([x, y, w, h]) => { const i = $('i', '', g); Object.assign(i.style, { left: x + 'px', top: y + 'px', width: w + 'px', height: h + 'px' }); });
  }

  for (const w of [400, 500, 600, 700]) await document.fonts.load(`${w} 60px "Switzer"`);
  await document.fonts.load('600 60px "Inter"', '₹');
  await document.fonts.ready;
  await Promise.all([...document.images].filter(i => i.src).map(i => i.decode().catch(() => {})));
}

// Draw frame t (fractions allowed, for motion blur). Resolves once every picture it needs is decoded.
window.seek = async t => {
  for (const s of scenes) { const on = t >= s.t0 && t < s.t1; s.el.style.display = on ? 'block' : 'none'; if (on) s.update(t); }
  updateChrome(t);
  if (pending.length) await Promise.all(pending.splice(0));
};
// How far, in pixels, the fastest thing on screen travels while the shutter is open on frame f.
// render.mjs uses it to decide how many samples that frame needs for a smooth blur.
window.motion = async (f, shutter) => {
  await window.seek(f + shutter);
  const els = scenes.filter(s => f >= s.t0 && f < s.t1).flatMap(s => [...s.el.querySelectorAll('*')]).filter(e => e.style.transform && e.offsetParent !== null);
  const after = els.map(e => e.getBoundingClientRect());
  await window.seek(f);
  let far = 0;
  els.forEach((e, i) => {
    const a = e.getBoundingClientRect(), b = after[i];
    if (!a.width || !b.width) return;
    const cx = v => clamp(v, 0, 1080), cy = v => clamp(v, 0, 1920);        // travel off the edge of the frame does not count
    far = Math.max(far, Math.abs(cx(a.left) - cx(b.left)), Math.abs(cy(a.top) - cy(b.top)), Math.abs(cx(a.right) - cx(b.right)), Math.abs(cy(a.bottom) - cy(b.bottom)));
  });
  return far;
};
window.META = { FPS, TOTAL, T };
window.ready = boot().then(() => window.seek(0));
