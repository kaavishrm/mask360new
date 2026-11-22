/* Mask360 reel: "Taste does not scale. Structure does."
   One deterministic timeline. Nothing here uses CSS transitions or timers: every style is a
   function of the frame number, so render.mjs can ask for any frame (or part of one) and get
   the same picture every time.
   24 fps, 120 BPM, 12 frames to a beat, 48 to a bar, 15 bars, 30 seconds. */
'use strict';

const FPS = 24, BEAT = 12, BAR = 48, TOTAL = 720;
const ASSETS = '/website/public/assets';
const SEQ = new URLSearchParams(location.search).get('seq') || '/social/reel-taste-does-not-scale/.cache/seq';

// Scene starts, in frames. Every scene begins on a bar line except the end card (half bar).
const T = { hook: 0, anantara: 48, zorae: 96, ajio: 144, ef: 192, chivas: 240, film: 288, wall: 336, numbers: 384, index: 480, payoff: 576, end: 648, total: TOTAL };

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
// small seeded generator so the "random" parts never change between renders
function rng(seed) { let s = seed >>> 0; return () => { s = (s + 0x6D2B79F5) >>> 0; let x = Math.imul(s ^ (s >>> 15), 1 | s); x = (x + Math.imul(x ^ (x >>> 7), 61 | x)) ^ x; return ((x ^ (x >>> 14)) >>> 0) / 4294967296; }; }

let MAN = null;                       // assets-manifest.json
const src = (path, want) => {         // `folder/name` -> the largest rendition (or the smallest one at least `want` wide)
  const [folder, name] = path.split('/');
  const sizes = [...MAN[folder][name].sizes].sort((a, b) => a - b);
  const pick = want ? (sizes.find(s => s >= want) || sizes[sizes.length - 1]) : sizes[sizes.length - 1];
  return `${ASSETS}/img/${folder}/${name}-${pick}.webp`;
};

const stage = document.getElementById('stage');
const scenes = [];
const SHOTS = [];                     // every still, so boot can measure what sits under the header strip
let TONE = { ink: false, scrim: 0 };  // set by the scene on screen, read by the header strip
const pending = [];                   // decode promises for this frame
function scene(name, t0, t1, cls) { const el = $('div', 'scene ' + (cls || ''), stage); const s = { name, t0, t1, el, update() {} }; scenes.push(s); return s; }

// film frames come from JPEG sequences cut by build.sh
function seq(im, name, idx) {
  const url = `${SEQ}/${name}/${String(idx).padStart(4, '0')}.jpg`;
  if (im.dataset.u !== url) { im.dataset.u = url; im.src = url; pending.push(im.decode().catch(() => {})); }
}

// a headline line that rises out of its own mask
function lines(parent, arr) { return arr.map(h => { const l = $('span', 'line', parent); return $('span', 'in', l, h); }); }
function rise(ins, t, t0, o = {}) {
  const { stagger = 3, dur = 11, dist = 112 } = o;
  ins.forEach((el, i) => { const k = E.outExpo(prog(t, t0 + i * stagger, t0 + i * stagger + dur)); el.style.transform = `translateY(${(1 - k) * dist}%)`; });
}

// full-bleed still: lands a touch tight on the cut, settles, then keeps a slow push
function full(sc, path, o = {}) {
  const el = $('div', 'shot', sc.el); const im = $('img', '', el); im.src = src(path, o.want);
  im.style.objectPosition = `${o.px ?? 50}% ${o.py ?? 50}%`;
  im.style.transformOrigin = `${o.ox ?? 50}% ${o.oy ?? 50}%`;
  const s = { el, im, o, kind: 'full', tone: { ink: false, scrim: 0.5 } }; SHOTS.push(s); return s;
}
function split(sc, top, bot, o = {}) {
  const el = $('div', 'shot', sc.el);
  const a = $('div', 'half top', el), b = $('div', 'half bot', el);
  const ia = $('img', '', a), ib = $('img', '', b); ia.src = src(top); ib.src = src(bot);
  ia.style.objectPosition = `${o.tpx ?? 50}% ${o.tpy ?? 50}%`; ib.style.objectPosition = `${o.bpx ?? 50}% ${o.bpy ?? 50}%`;
  const s = { el, ia, ib, o, kind: 'split', tone: { ink: false, scrim: 0.5 } }; SHOTS.push(s); return s;
}
// Mean brightness of the band behind the header strip, as this shot frames it.
function bandLuma(im, W, H, px, py, scale, ox, oy) {
  const iw = im.naturalWidth, ih = im.naturalHeight; if (!iw) return 0.3;
  const k = Math.max(W / iw, H / ih), dx = (W - iw * k) * (px / 100), dy = (H - ih * k) * (py / 100);
  const cx = W * ox / 100, cy = H * oy / 100, x0 = 60, x1 = 1020, y0 = 306, y1 = 378;
  const sx = ((x0 - cx) / scale + cx - dx) / k, sy = ((y0 - cy) / scale + cy - dy) / k, sw = (x1 - x0) / scale / k, sh = (y1 - y0) / scale / k;
  const c = document.createElement('canvas'); c.width = 96; c.height = 8; const g = c.getContext('2d', { willReadFrequently: true });
  g.drawImage(im, sx, sy, sw, sh, 0, 0, 96, 8); const d = g.getImageData(0, 0, 96, 8).data; let sum = 0;
  for (let i = 0; i < d.length; i += 4) sum += (0.2126 * d[i] + 0.7152 * d[i + 1] + 0.0722 * d[i + 2]) / 255;
  return sum / (d.length / 4);
}
function measureShots() {
  for (const s of SHOTS) {
    const o = s.o;
    const l = s.kind === 'full' ? bandLuma(s.im, 1080, 1920, o.px ?? 50, o.py ?? 50, (o.base ?? 1) * 1.04, o.ox ?? 50, o.oy ?? 50)
                                : bandLuma(s.ia, 1080, 956, o.tpx ?? 50, o.tpy ?? 50, 1.06, 50, 50);
    const ink = o.ink ?? l > 0.6;
    s.luma = l; s.tone = { ink, scrim: ink ? 0 : clamp((l - 0.14) / 0.36) };
  }
}
function driveShot(s, t, a, b) {
  const on = t >= a && t < b; s.el.style.display = on ? 'block' : 'none'; if (!on) return;
  TONE = s.tone;
  const len = b - a, u = (t - a) / len;
  const settle = 1 - E.outExpo(prog(t, a, a + Math.min(10, len)));
  const amp = len <= 6 ? 0.022 : 0.05;
  if (s.kind === 'full') {
    const sc = (s.o.base ?? 1) * (1.03 + amp * settle + 0.022 * (len / 24) * u);
    s.im.style.transform = `scale(${sc})`;
  } else {
    const sc = 1.05 + amp * settle, dx = 16 * (len / 24) * (u - 0.5);
    s.ia.style.transform = `translateX(${-dx}px) scale(${sc})`;
    s.ib.style.transform = `translateX(${dx}px) scale(${sc})`;
  }
}

// ---------- header strip ----------
const chrome = $('div', '', stage); chrome.id = 'chrome';
chrome.innerHTML = `<div class="l"><span><i>Mumbai</i><b id="ck1"></b></span><span><i>Dubai</i><b id="ck2"></b></span></div><div class="c" id="mark"></div><div class="r" id="lab"></div>`;
const ck1 = chrome.querySelector('#ck1'), ck2 = chrome.querySelector('#ck2'), lab = chrome.querySelector('#lab'), markEl = chrome.querySelector('#mark');
const CLOCK0 = 19 * 3600 + 41 * 60 + 40;      // Mumbai 19:41:40 at frame 0, so the minute turns over on the bar at 20 s
function clock(sec, blink) { const h = Math.floor(sec / 3600) % 24, m = Math.floor(sec / 60) % 60; return `${pad2(h)}<span style="opacity:${blink ? 1 : 0.28}">:</span>${pad2(m)}`; }
function clocks(t) { const s = CLOCK0 + t / FPS, blink = Math.floor(t / BEAT) % 2 === 0; return [clock(s, blink), clock(s - 5400, blink)]; }
const LABELS = [
  [T.hook, 'Mask360'], [T.anantara, '<i>Work</i>01/07'], [T.zorae, '<i>Work</i>02/07'], [T.ajio, '<i>Work</i>03/07'], [T.ef, '<i>Work</i>04/07'],
  [T.chivas, '<i>Work</i>05/07'], [T.film, '<i>Work</i>06/07'], [T.film + 24, '<i>Work</i>07/07'], [T.wall, 'All work'],
  [T.numbers, '<i>In numbers</i>1/4'], [T.numbers + 24, '<i>In numbers</i>2/4'], [T.numbers + 48, '<i>In numbers</i>3/4'], [T.numbers + 72, '<i>In numbers</i>4/4'],
  [T.index, 'Index'], [T.payoff, 'Mask360'], [T.end, '2026'],
];
function updateChrome(t) {
  const [a, b] = clocks(t); ck1.innerHTML = a; ck2.innerHTML = b;
  let l = ''; for (const [f, s] of LABELS) if (t >= f) l = s; if (lab.dataset.h !== l) { lab.dataset.h = l; lab.innerHTML = l; }
  chrome.style.color = TONE.ink ? '#0a0a0a' : '#fff';
  markEl.style.opacity = t >= T.end ? 0 : 1;        // the end card has the mark large already
}

// =====================================================================================
// 1. Hook: "Taste does not scale."
// =====================================================================================
const LP = 176 * 0.94;                 // display line pitch
const STACK_TOP = Math.round(1462 - 2 * LP);   // two lines resting on y = 1462
function buildHook() {
  const sc = scene('hook', T.hook, T.anantara);
  const cuts = [
    ['zorae/chiaroscuro', 0, 24, { px: 26 }],
    ['zorae/necklace-skin', 24, 30, {}],
    ['ajio-luxe-weekend/ferrari-canopy', 30, 36, {}],
    ['anantara/wardrobe', 36, 39, { px: 38 }],
    ['ef-athletic/tennis-balls', 39, 42, {}],
    ['anantara/chef', 42, 45, {}],
    ['zorae/eyes-closed', 45, 48, { px: 30 }],
  ].map(([p, a, b, o]) => [full(sc, p, o), a, b]);
  $('div', 'scrim', sc.el); const topScrim = $('div', 'scrim-t', sc.el);
  const micro = $('div', 'micro hook-micro', sc.el, 'The luxury creative house of India and the Gulf');
  const st = $('div', 'stack display', sc.el); st.style.top = STACK_TOP + 'px';
  const ins = lines(st, ['Taste does', 'not scale.']);
  sc.update = t => {
    for (const [s, a, b] of cuts) driveShot(s, t, a, b);
    topScrim.style.opacity = TONE.scrim;
    rise(ins, t, 1, { stagger: 3, dur: 12 });
    micro.style.opacity = prog(t, 6, 12);
  };
}

// =====================================================================================
// 2 to 5. The work, shown large and explained briefly
// =====================================================================================
function caption(sc, micro, ones) {
  const el = $('div', 'cap', sc.el);
  const rule = $('div', 'rule', el), mi = $('div', 'micro', el, micro), one = $('div', 'one', el);
  const ins = ones.map(([txt]) => lines(one, [txt])[0]);
  return (t, t0) => {
    rule.style.transform = `scaleX(${E.outExpo(prog(t, t0, t0 + 14))})`;
    mi.style.opacity = prog(t, t0 + 1, t0 + 5);
    ones.forEach(([, a, b], i) => {
      const s = t0 + a, e = b == null ? Infinity : t0 + b, el2 = ins[i];
      if (t < s || t >= e) { el2.style.transform = 'translateY(125%)'; return; }
      el2.style.transform = `translateY(${(1 - E.outExpo(prog(t, s + 1, s + 11))) * 112}%)`;
    });
  };
}
function buildWork(name, t0, shots, micro, ones) {
  const sc = scene(name, t0, t0 + BAR);
  const list = shots.map(s => [s.split ? split(sc, s.split[0], s.split[1], s) : full(sc, s.p, s), t0 + s.a, t0 + s.b]);
  $('div', 'scrim', sc.el); const topScrim = $('div', 'scrim-t', sc.el);
  const cap = caption(sc, micro, ones);
  sc.update = t => { for (const [s, a, b] of list) driveShot(s, t, a, b); topScrim.style.opacity = TONE.scrim; cap(t, t0); };
}

// =====================================================================================
// 6. Chivas, in a card on night
// =====================================================================================
const CARD = { x: 72, y: 384, w: 936, h: 1170 };
function buildChivas() {
  const sc = scene('chivas', T.chivas, T.film, 'night');
  const card = $('div', 'card', sc.el);
  Object.assign(card.style, { left: CARD.x + 'px', top: CARD.y + 'px', width: CARD.w + 'px', height: CARD.h + 'px' });
  const im = $('img', '', card); $('div', 'inscrim', card);
  const cap = $('div', 'incap', card); cap.style.bottom = '74px';
  const mi = $('div', 'micro', cap, 'Chivas Regal Ultis XX · CGI');
  const one = $('div', 'one', cap); const ins = lines(one, ['Rendered in the dark.']);
  const cuts = [[0, 12, 4], [12, 24, 108], [24, 48, 216]];   // [from, to, first source frame]
  sc.update = t => {
    TONE = { ink: false, scrim: 0 };
    const lt = t - T.chivas; let c = cuts[0]; for (const x of cuts) if (lt >= x[0]) c = x;
    seq(im, 'chivas', c[2] + Math.floor(lt - c[0]) + 1);
    const settle = 1 - E.outExpo(prog(lt, c[0], c[0] + 10));
    im.style.transform = `scale(${1.0 + 0.045 * settle})`;
    card.style.transform = `scale(${1 + 0.035 * (1 - E.outExpo(prog(lt, 0, 12)))})`;
    mi.style.opacity = prog(lt, 1, 5); rise(ins, t, T.chivas + 1, { dur: 11 });
  };
}

// =====================================================================================
// 7. Two films, two cards
// =====================================================================================
function tcode(f) { const s = Math.floor(f / 24); return `00:${pad2(Math.floor(s / 60))}:${pad2(s % 60)}:${pad2(Math.floor(f) % 24)}`; }
function buildFilm() {
  const sc = scene('film', T.film, T.wall, 'night');
  const mk = (y, micro, line) => {
    const card = $('div', 'card', sc.el);
    Object.assign(card.style, { left: CARD.x + 'px', top: y + 'px', width: CARD.w + 'px', height: '560px' });
    const im = $('img', '', card); $('div', 'inscrim', card);
    const tc = $('div', 'tc', card);
    const cap = $('div', 'incap', card); cap.style.bottom = '40px';
    const mi = $('div', 'micro', cap, micro); const one = $('div', 'one', cap); const ins = lines(one, [line]);
    return { card, im, tc, mi, ins };
  };
  const A = mk(384, 'The St. Regis Mumbai', 'The penthouse, on film.');
  const B = mk(958, 'Fire-Boltt Fire Lens', 'Launched in 3D.');
  const cutsA = [[0, 12, 60], [12, 24, 150], [24, 36, 186], [36, 48, 228]];
  sc.update = t => {
    TONE = { ink: false, scrim: 0 };
    const lt = t - T.film;
    let c = cutsA[0]; for (const x of cutsA) if (lt >= x[0]) c = x;
    const fa = c[2] + Math.floor(lt - c[0]); seq(A.im, 'stregis', fa + 1); A.tc.textContent = tcode(fa);
    A.im.style.transform = `scale(${1.0 + 0.04 * (1 - E.outExpo(prog(lt, c[0], c[0] + 10)))})`;
    A.card.style.transform = `scale(${1 + 0.035 * (1 - E.outExpo(prog(lt, 0, 12)))})`;
    A.mi.style.opacity = prog(lt, 1, 5); rise(A.ins, t, T.film + 1);
    // second card is there from the start; its line lands on the half bar
    const fb = Math.floor(lt * 0.86); seq(B.im, 'fireboltt', fb + 1); B.tc.textContent = tcode(fb);   // the loop cuts to black after frame 42, so it runs a touch slow
    B.card.style.transform = `scale(${1 + 0.035 * (1 - E.outExpo(prog(lt, 3, 15)))})`;
    B.card.style.opacity = prog(lt, 2, 4);
    B.mi.style.opacity = prog(lt, 5, 9); rise(B.ins, t, T.film + 24);
  };
}

// =====================================================================================
// 8. Scale: one card becomes a wall of them
// =====================================================================================
const WALL = [
  'anantara/pavilion-dusk', 'zorae/necklace-skin', 'ef-athletic/tennis-balls', 'ajio-luxe-weekend/ferrari-canopy', 'chivas/chivas-bottle', 'anantara/peacock-bar', 'zorae/chiaroscuro',
  'ef-athletic/palms', 'ajio-luxe-weekend/mural', 'zorae/earrings-water', 'anantara/facade-night', 'stregis/stregis-skyline', 'zorae/wet-hair', 'ajio-luxe-weekend/gallery',
  'zorae/pear-ring', 'anantara/chef', 'ajio-luxe-weekend/chivas-pavilion', 'ef-athletic/group-padel', 'zorae/eyes-closed', 'fireboltt/fireboltt-glasses', 'anantara/mosaic-hall',
  'ajio-luxe-weekend/maybach', 'zorae/choker', 'anantara/wardrobe', 'ef-athletic/beach', 'dior/frame-1', 'zorae/necklace-fabric', 'anantara/colonnade',
  'ef-athletic/drinks', 'anantara/courtyard-dusk', 'zorae/hand-face', 'anantara/blue-alcove', 'ajio-luxe-weekend/ferrari-rear', 'ef-athletic/trio-doorway', 'zorae/ring-sand',
  'chivas/chivas-crest', 'ef-athletic/pink-drink', 'anantara/table-service', 'zorae/bob', 'ajio-luxe-weekend/tea', 'anantara/bedroom', 'lollapalooza/stage-render',
  'zorae/choker-product', 'ajio-luxe-weekend/pastries', 'anantara/gilded-lounge', 'ef-athletic/green-court', 'stregis/stregis-dining', 'zorae/rings-colour', 'ajio-luxe-weekend/lawn',
  'anantara/indoor-pool', 'zorae/organic-silhouettes', 'ef-athletic/two-men', 'ajio-luxe-weekend/chocolate', 'dior/frame-3', 'anantara/garden-axis', 'zorae/profile',
  'ajio-luxe-weekend/coffee', 'anantara/dining-room', 'ef-athletic/athlete', 'zorae/earrings-product', 'fireboltt/fireboltt-face', 'anantara/lounge', 'ajio-luxe-weekend/audience',
  'zorae/hand-cheek', 'anantara/facade-day', 'ef-athletic/jump', 'ajio-luxe-weekend/chivas-stage', 'zorae/portrait-motion', 'stregis/stregis-pool', 'ajio-luxe-weekend/gallery-2',
];
function buildWall() {
  const sc = scene('wall', T.wall, T.numbers, 'night');
  const wall = $('div', 'wall', sc.el);
  const COLS = 7, ROWS = 10, FC = 3, FR = 4, cells = [];
  for (let r = 0; r < ROWS; r++) for (let c = 0; c < COLS; c++) {
    const i = r * COLS + c, focus = c === FC && r === FR;
    const cell = $('div', 'cell', wall);
    cell.style.left = (436 + (c - FC) * 218) + 'px'; cell.style.top = (695 + (r - FR) * 270) + 'px';
    const a = $('img', '', cell), b = $('img', '', cell);
    a.src = focus ? src('anantara/blue-alcove') : src(WALL[i % WALL.length], 1000);
    b.src = src(WALL[(i + 31) % WALL.length], 1000); b.style.display = 'none';
    cells.push({ cell, a, b, focus, c, r });
  }
  $('div', 'wallscrim', sc.el);
  const pct = $('div', 'pct', sc.el);
  // which cells show their second picture, decided once per 3-frame tick
  const flips = []; const rnd = rng(360);
  for (let k = 0; k < 16; k++) { const set = new Set(flips[k - 1] || []); for (let j = 0; j < 5; j++) { const i = Math.floor(rnd() * cells.length); if (cells[i].focus) continue; set.has(i) ? set.delete(i) : set.add(i); } flips.push(set); }
  sc.update = t => {
    TONE = { ink: false, scrim: 0 };
    const lt = t - T.wall;
    const k = E.inOutCubic(prog(lt, 1, 37));
    const s = Math.pow(4.5, 1 - k), dy = 144 * (1 - k);
    wall.style.transform = `translate(0px,${dy}px) scale(${s})`;
    const lit = E.outCubic(prog(lt, 4, 30));
    const tick = clamp(Math.floor((lt - 26) / 3), -1, flips.length - 1), set = tick >= 0 ? flips[tick] : null;
    cells.forEach((c, i) => {
      if (!c.focus) c.cell.style.opacity = lerp(0.22, 1, lit);
      c.b.style.display = set && set.has(i) ? 'block' : 'none';
    });
    const v = Math.round(100 * E.inOutCubic(prog(Math.floor(lt), 0, 45)));
    pct.innerHTML = `${v}<small>%</small>`;
  };
}

// =====================================================================================
// 9. In numbers
// =====================================================================================
const comma = n => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
const NUMS = [
  { fmt: k => `₹${Math.round(27 * k)} Cr`, cap: 'GMV driven by our retail activations', img: 'ajio-luxe-weekend/maybach', px: 50, py: 60 },
  { fmt: k => `${Math.round(500 * k)}M+`, cap: 'Impressions across campaigns', img: 'ajio-luxe-weekend/mural', px: 35, py: 50 },
  { fmt: k => `${comma(Math.round(21000 * k / 100) * 100)}+`, cap: 'Guests at a single retail weekend', img: 'ajio-luxe-weekend/lawn', px: 45, py: 50 },
  { fmt: k => `${Math.max(1, Math.round(5 * k))}`, cap: 'Cities across two markets', cities: true },
];
const CITIES = [['Mumbai', 0], ['Delhi', 0], ['Bangalore', 0], ['Dubai', -5400], ['Abu Dhabi', -5400]];
function buildNumbers() {
  const sc = scene('numbers', T.numbers, T.index, 'paper');
  const num = $('div', 'num', sc.el); const vs = NUMS.map(() => $('div', 'v', num));
  const rule = $('div', 'num-rule', sc.el);
  const capw = $('div', 'num-cap', sc.el); const caps = NUMS.map(n => $('div', 'micro', capw, n.cap));
  const card = $('div', 'card num-card', sc.el);
  const pics = NUMS.map(n => {
    if (n.cities) {
      const p = $('div', 'pic cities', card);
      const rows = CITIES.map(([c]) => { const r = $('div', 'row', p, `<span>${c}</span><b></b>`); return r.querySelector('b'); });
      return { el: p, rows };
    }
    const p = $('div', 'pic', card); const im = $('img', '', p); im.src = src(n.img); im.style.objectPosition = `${n.px}% ${n.py}%`;
    return { el: p, im };
  });
  sc.update = t => {
    TONE = { ink: true, scrim: 0 };
    const lt = t - T.numbers, i = clamp(Math.floor(lt / 24), 0, NUMS.length - 1), st = i * 24;
    rule.style.transform = `scaleX(${E.outExpo(prog(lt, 0, 16))})`;
    const k = E.outExpo(prog(lt, st, st + 10));           // roll progress for this number
    NUMS.forEach((n, j) => {
      const v = vs[j], c = caps[j], p = pics[j];
      let y = 110, on = false;                             // percent of own height: 110 waits below, -110 has left above
      if (j === i) { y = (1 - k) * 110; on = true; }
      else if (j === i - 1) { y = -k * 110; on = k < 1; }
      v.style.display = on ? 'block' : 'none'; c.style.display = on ? 'block' : 'none';
      v.style.transform = `translateY(${y}%)`; c.style.transform = `translateY(${y * 1.2}%)`;
      if (j === i) v.textContent = n.fmt(E.outCubic(prog(Math.floor(lt), st, st + 11)));
      p.el.style.display = j === i ? 'block' : 'none';
      if (j === i && p.im) p.im.style.transform = `scale(${1.02 + 0.05 * (1 - E.outExpo(prog(lt, st, st + 10))) + 0.02 * prog(lt, st, st + 24)})`;
      if (j === i && p.rows) {
        const [m, d] = clocks(t);
        p.rows.forEach((b, r) => { b.innerHTML = CITIES[r][1] ? d : m; b.parentNode.style.transform = `translateY(${(1 - E.outExpo(prog(lt, st + r * 1.5, st + r * 1.5 + 10))) * 60}px)`; b.parentNode.style.opacity = prog(lt, st + r * 1.5, st + r * 1.5 + 4); });
      }
    });
    card.style.transform = `scale(${1 + 0.03 * (1 - E.outExpo(prog(lt, 0, 12)))})`;
  };
}

// =====================================================================================
// 10. The index of houses
// =====================================================================================
const HOUSES = ['Dior', 'Ferrari', 'L’Oréal Professionnel', 'Dyson', 'St. Regis', 'Anantara', 'Lollapalooza India', 'Ajio Luxe', 'Chivas Regal', 'Swisse', 'ZORÁE', 'BookMyShow', 'Fire-Boltt', 'Istituto Marangoni', 'Warner Music India', 'Saregama Carvaan', 'Sonata', 'EliteFit', 'Dubai Dates Nutrition', 'Nexa', 'Airbnb', 'Lodha Luxury', 'La Mercie', 'Verona by SkyHigh', 'D’Monde Polo Club', 'Sarah & Sandeep', 'Amit Sadh'];
function buildIndex() {
  const sc = scene('index', T.index, T.payoff, 'night');
  $('div', 'micro idx-micro', sc.el, 'Houses we have worked with');
  $('div', 'idx-rule', sc.el);
  const win = $('div', 'idx-win', sc.el), list = $('div', 'idx-list', win);
  const PITCH = 110, SLOT = 3, N = HOUSES.length, rows = [];
  for (let j = -5; j <= 26; j++) {
    const h = ((j % N) + N) % N;
    const row = $('div', 'idx-row', list, `<span class="n">${pad2(h + 1)}</span><span>${HOUSES[h]}</span>`);
    rows.push({ row, j, n: row.querySelector('.n') });
  }
  const f1 = $('div', 'idx-fade', sc.el); Object.assign(f1.style, { top: '454px', height: '250px', background: 'linear-gradient(to bottom,#0a0a0a 0,rgba(10,10,10,0) 100%)' });
  const f2 = $('div', 'idx-fade', sc.el); Object.assign(f2.style, { top: '1254px', height: '300px', background: 'linear-gradient(to top,#0a0a0a 0,rgba(10,10,10,0) 100%)' });
  sc.update = t => {
    TONE = { ink: false, scrim: 0 };
    const lt = t - T.index, step = Math.floor(lt / 6), fr = lt - step * 6;
    const off = step === 0 ? 0 : step - 1 + E.outQuart(clamp(fr / 4));
    rows.forEach(r => {
      const d = Math.abs(r.j - off);
      r.row.style.top = ((r.j - off + SLOT) * PITCH) + 'px';
      r.row.style.opacity = lerp(1, 0.26, clamp(d * 1.6));
      r.n.style.color = d < 0.5 ? '#f53901' : 'inherit';
    });
  };
}

// =====================================================================================
// 11. Payoff: "Structure does."
// =====================================================================================
function buildPayoff() {
  const sc = scene('payoff', T.payoff, T.end, 'night');
  const cols = $('div', 'cols', sc.el); const cl = [];
  for (let i = 0; i <= 12; i++) { const c = $('i', '', cols); c.style.left = (72 + i * 78 - 1) + 'px'; cl.push(c); }
  const win = $('div', 'pay-win', sc.el);
  const st = $('div', 'stack display', win); st.style.top = (STACK_TOP - 700) + 'px';
  const a = lines(st, ['Taste does', 'not scale.']);
  const b = lines(st, ['<em>Structure</em>', '<em>does.</em>']);
  sc.update = t => {
    TONE = { ink: false, scrim: 0 };
    const lt = t - T.payoff;
    rise(a, t, T.payoff + 2, { stagger: 3, dur: 12 });
    const k = E.outExpo(prog(lt, 24, 39));
    st.style.transform = `translateY(${-2 * LP * k}px)`;
    const dim = lerp(1, 0.44, prog(lt, 24, 34));
    a.forEach(el => { el.style.opacity = dim; });
    cl.forEach((c, i) => { c.style.transform = `scaleY(${E.outQuart(prog(lt, 24 + i * 1.2, 46 + i * 1.2))})`; });
  };
}

// =====================================================================================
// 12. End card
// =====================================================================================
function buildEnd(markSvg) {
  const sc = scene('end', T.end, T.total, 'white');
  const mark = $('div', 'end-mark', sc.el, markSvg);
  const line = $('div', 'end-line', sc.el);
  const ins = lines(line, ['The luxury creative house', 'of India <em>and the Gulf.</em>']);
  const url = $('div', 'end-url', sc.el, 'mask360.agency');
  Object.assign(url.style, { position: 'absolute', left: '0', width: '1080px', top: '1196px', textAlign: 'center', fontWeight: '500', fontSize: '38px', letterSpacing: '-0.01em' });
  url.innerHTML = '<span style="border-bottom:2px solid currentColor;padding-bottom:4px">mask360.agency</span>';
  sc.update = t => {
    TONE = { ink: true, scrim: 0 };
    const lt = t - T.end;
    const p = lerp(4, 124, E.outCubic(prog(lt, 0, 20)));
    const m = `linear-gradient(100deg,#000 ${p - 14}%,rgba(0,0,0,0) ${p}%)`;
    mark.style.webkitMaskImage = m; mark.style.maskImage = m;
    rise(ins, t, T.end + 9, { stagger: 3, dur: 13 });
    url.style.opacity = prog(lt, 20, 28);
    url.style.transform = `translateY(${(1 - E.outExpo(prog(lt, 20, 32))) * 18}px)`;
  };
}

// ---------- boot ----------
async function boot() {
  const [man, markSvg] = await Promise.all([
    fetch('/website/assets-manifest.json').then(r => r.json()),
    fetch(`${ASSETS}/brand/m360.svg`).then(r => r.text()),
  ]);
  MAN = man;
  chrome.querySelector('#mark').innerHTML = markSvg;

  buildHook();
  buildWork('anantara', T.anantara, [
    { split: ['anantara/facade-night', 'anantara/pavilion-dusk'], a: 0, b: 24, tpx: 50, bpx: 52 },
    { p: 'anantara/wardrobe', a: 24, b: 36, px: 38 },
    { p: 'anantara/chef', a: 36, b: 48, base: 1.19, ox: 0, oy: 0 },
  ], 'Anantara Jewel Bagh · Jaipur', [['Two days. One palace.', 0]]);
  buildWork('zorae', T.zorae, [
    { p: 'zorae/necklace-skin', a: 0, b: 12 },
    { p: 'zorae/eyes-closed', a: 12, b: 24, px: 30 },
    { p: 'zorae/choker', a: 24, b: 30 },
    { p: 'zorae/wet-hair', a: 30, b: 36, base: 1.1 },
    { p: 'zorae/necklace-fabric', a: 36, b: 42 },
    { p: 'zorae/rings-colour', a: 42, b: 48 },
  ], 'ZORÁE · Dubai', [['Never repeats itself.', 0]]);
  buildWork('ajio', T.ajio, [
    { p: 'ajio-luxe-weekend/ferrari-canopy', a: 0, b: 24, py: 58 },
    { split: ['ajio-luxe-weekend/chivas-pavilion', 'ajio-luxe-weekend/gallery'], a: 24, b: 36 },
    { p: 'ajio-luxe-weekend/ferrari-rear', a: 36, b: 48 },
  ], 'Ajio Luxe Wkend · Mumbai', [['Nine categories. One roof.', 0]]);
  buildWork('ef', T.ef, [
    { p: 'ef-athletic/tennis-balls', a: 0, b: 12 },
    { p: 'ef-athletic/palms', a: 12, b: 24 },
    { p: 'ef-athletic/group-padel', a: 24, b: 30 },
    { p: 'ef-athletic/drinks', a: 30, b: 36 },
    { p: 'ef-athletic/beach', a: 36, b: 48 },
  ], 'EF Athletic · UAE and India', [['Born in Mumbai.', 0, 24], ['Shot in Dubai.', 24]]);
  buildChivas();
  buildFilm();
  buildWall();
  buildNumbers();
  buildIndex();
  buildPayoff();
  buildEnd(markSvg);

  if (new URLSearchParams(location.search).get('guides')) {
    const g = $('div', '', stage); g.id = 'guides'; g.style.display = 'block';
    [[0, 285, 1080, 1350], [0, 0, 1080, 220], [0, 1500, 1080, 420], [950, 1040, 130, 660]].forEach(([x, y, w, h]) => { const i = $('i', '', g); Object.assign(i.style, { left: x + 'px', top: y + 'px', width: w + 'px', height: h + 'px' }); });
  }

  await document.fonts.load('700 100px "Space Grotesk"'); await document.fonts.load('300 100px "Space Grotesk"');
  await document.fonts.load('italic 700 100px "Space Grotesk"'); await document.fonts.load('700 100px "Space Grotesk"', '₹');
  await document.fonts.ready;
  await Promise.all([...document.images].filter(i => i.src).map(i => i.decode().catch(() => {})));
  measureShots();
}

// Draw frame t (fractions allowed, for motion blur). Resolves once every picture it needs is decoded.
window.seek = async t => {
  for (const s of scenes) { const on = t >= s.t0 && t < s.t1; s.el.style.display = on ? 'block' : 'none'; if (on) s.update(t); }
  updateChrome(t);
  if (pending.length) await Promise.all(pending.splice(0));
};
// How many samples to average for frame f. Only the frames with real travel get more than one.
window.samples = f => {
  if (f >= T.wall && f < T.wall + 40) return 12;
  if (f >= T.numbers && f < T.index && (f - T.numbers) % 24 < 10) return 12;
  if (f >= T.index + 6 && f < T.payoff && (f - T.index) % 6 < 4) return 12;
  if (f >= T.payoff + 24 && f < T.payoff + 38) return 16;
  if (f >= T.end && f < T.end + 22) return 6;
  for (const s of [T.hook, T.anantara, T.zorae, T.ajio, T.ef, T.ef + 24, T.chivas, T.film, T.film + 24, T.payoff]) if (f >= s && f < s + 12) return 6;
  return 1;
};
window.META = { FPS, TOTAL, T };
window.ready = boot().then(() => window.seek(0));
