// Static site generator for the Mask360 magazine. No dependencies. Run: node build.mjs
// Lints every story (refuses to build on a failure), renders any carousel that is missing or stale, then writes public/.
import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync, rmSync, readdirSync } from 'node:fs';
import { join, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { site, promo, watch } from './config.mjs';
import { SECTIONS, FORMATS, lintStory, allStoryFiles } from './newsroom/lint.mjs';
import { parseFrontMatter } from './newsroom/yaml.mjs';
import { storyPayload } from './newsroom/story-json.mjs';
import { render as md, plain } from './newsroom/md.mjs';

const ROOT = dirname(fileURLToPath(import.meta.url));
const OUT = join(ROOT, 'public');
const BASE = (process.env.SITE_BASE || '').replace(/\/$/, '');
const B = (p) => BASE + p;
const URL_ROOT = site.url.replace(/\/$/, '');
const ABS = (p) => URL_ROOT + p;
const VER = String(Date.now()).slice(-6);
const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const fmtShort = (d) => { const [y, m, dd] = d.split('-').map(Number); return `${dd} ${MONTHS[m - 1]}`; };
const fmtLong = (d) => { const [y, m, dd] = d.split('-').map(Number); return `${dd} ${MONTHS[m - 1].slice(0, 3)} ${y}`; };
const words = (s) => String(s || '').trim().split(/\s+/).filter(Boolean).length;
const titleCase = (s) => String(s).split(/[\s-]+/).map((w) => w ? w[0].toUpperCase() + w.slice(1) : w).join(' ');

// ---------- stories ----------
function loadStories() {
  const files = allStoryFiles(ROOT);
  const stories = [];
  const failures = [];
  for (const f of files) {
    const r = lintStory(f);
    if (r.errors.length) { failures.push({ f, errors: r.errors }); continue; }
    const { data, body, slug } = r;
    const sec = SECTIONS[data.section];
    const bodyWords = words(plain(body));
    const read = `${Math.max(1, Math.round(bodyWords / 200))} min read`;
    const url = `/${data.section}/${slug}/`;
    stories.push({
      file: f, slug, data, body, url, section: data.section, sectionName: sec.name, color: sec.color, desk: data.desk,
      title: data.title, dek: data.dek, kicker: data.kicker, format: data.format, formatName: FORMATS[data.format].name,
      date: String(data.date), time: data.time ? String(data.time) : '09:00', dateShort: fmtShort(String(data.date)), dateLong: fmtLong(String(data.date)),
      read, bodyWords, tags: Array.isArray(data.tags) ? data.tags.map(String) : [], paid: data.paid === true, partner: data.partner || '',
      card: `/carousels/${slug}/card.webp`, thumb: `/carousels/${slug}/thumb.webp`, cover: `/carousels/${slug}/cover.webp`, hero: `/carousels/${slug}/hero.webp`, og: `/carousels/${slug}/og.jpg`,
      slides: data.slides, sources: Array.isArray(data.sources) ? data.sources.map(String) : [], credit: data.credit || '', post: data.post || null, corrections: data.corrections || null, sponsor: data.sponsor || '',
    });
  }
  if (failures.length) {
    for (const x of failures) { console.error(`LINT FAIL ${x.f.replace(ROOT + '/', '')}`); x.errors.forEach((e) => console.error(`  ${e}`)); }
    throw new Error(`${failures.length} story file(s) fail lint; the build refuses to run`);
  }
  stories.sort((a, b) => (b.date + b.time).localeCompare(a.date + a.time) || a.title.localeCompare(b.title));
  return stories;
}

function renderCarousels(stories) {
  let n = 0;
  for (const s of stories) {
    const dir = join(OUT, 'carousels', s.slug);
    const stamp = join(dir, 'hero.webp');
    // RENDER=force re-renders everything, RENDER=stale re-renders when the story or render.py is newer; default renders only what is missing
    const mode = process.env.RENDER || 'missing';
    const exists = existsSync(stamp);
    const stale = exists && (statSync(stamp).mtimeMs < statSync(s.file).mtimeMs || statSync(stamp).mtimeMs < statSync(join(ROOT, 'newsroom', 'render.py')).mtimeMs);
    if (mode === 'missing' && exists) continue;
    if (mode === 'stale' && exists && !stale) continue;
    const payload = JSON.stringify(storyPayload(s.file, dir));
    execFileSync('python3', ['-I', join(ROOT, 'newsroom', 'render.py')], { input: payload, stdio: ['pipe', 'pipe', 'inherit'] });
    n++;
  }
  if (n) console.log(`rendered ${n} carousel${n > 1 ? 's' : ''}`);
}

// ---------- chrome ----------
const ICON_IG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>';
const ICON_LI = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 3.5A1.5 1.5 0 1 1 4 6.5a1.5 1.5 0 0 1 0-3zM3 8h2v12H3zM9 8h2v1.7c.6-1 1.8-1.9 3.6-1.9 3.4 0 4.4 2.2 4.4 5.2V20h-2v-6.4c0-1.8-.4-3-2.1-3-1.9 0-2.9 1.3-2.9 3.3V20H9z"/></svg>';
const ICON_SEARCH = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="10.5" cy="10.5" r="7"/><path d="M16 16l5 5"/></svg>';
const ICON_ARROW = (dir) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="${dir === 'next' ? 'M9 5l7 7-7 7' : 'M15 5l-7 7 7 7'}"/></svg>`;

const spine = `<div class="spine" aria-hidden="true">${site.sections.map((s) => `<i class="bg-${s}"></i>`).join('')}</div>`;

function header({ mast = site.name, active = '', tagline = site.tagline }) {
  return `${spine}
<header class="mast"><${mast === site.name ? 'h1' : 'div'} class="h1"><a href="${B('/')}">${esc(mast)}</a></${mast === site.name ? 'h1' : 'div'}><div class="tag">${esc(tagline)}</div></header>
<div class="meta">
  <div class="socials"><a href="${site.instagram}" aria-label="Instagram" rel="noopener">${ICON_IG}</a><a href="${site.linkedin}" aria-label="LinkedIn" rel="noopener">${ICON_LI}</a></div>
  <div class="right"><span class="pub">Published from ${esc(site.city)}.</span><time data-clock>00:00</time><span data-date></span></div>
</div>
<nav class="nav" aria-label="Sections"><a href="${B('/')}"${active === 'home' ? ' aria-current="page"' : ''}>Home</a>${site.sections.map((s) => `<a href="${B('/' + s + '/')}"${active === s ? ' aria-current="page"' : ''}>${esc(SECTIONS[s].name)}</a>`).join('')}<button class="search" type="button" aria-label="Search" data-search>${ICON_SEARCH}</button></nav>`;
}

const overlay = `<div class="overlay" role="dialog" aria-label="Search"><div class="top"><input type="search" placeholder="Search the tea" aria-label="Search"><button class="close" type="button">Close</button></div><div class="results"><p class="hint">Type a brand, a person, a place or a word from a headline.</p></div></div>`;

const newsletter = `<section class="news" id="newsletter">
  <h2>${esc(site.newsletter.name)}</h2>
  <p class="sub">${esc(site.newsletter.blurb)}</p>
  <form action="${site.newsletter.action}" method="POST">
    <input type="hidden" name="_subject" value="Sunday Steep signup"><input type="hidden" name="_captcha" value="false"><input type="hidden" name="_next" value="${ABS('/newsletter/thanks/')}">
    <input type="email" name="email" placeholder="Enter your email" required aria-label="Email"><button type="submit">SUBMIT</button>
  </form>
  <p class="legal">By signing up you agree to get one email a week and nothing else. Unsubscribe in one click.</p>
</section>`;

const footer = `<footer class="foot">
  <div class="big">${esc(site.name)}</div>
  <p>${esc(site.description)}</p>
  <div class="links"><a href="${B('/about/')}">About</a><a href="${B('/advertise/')}">Advertise</a><a href="${B('/newsletter/')}">Newsletter</a><a href="${site.instagram}" rel="noopener">Instagram</a><a href="${site.linkedin}" rel="noopener">LinkedIn</a><a href="mailto:${site.email}">Corrections</a><a href="${site.agency}" rel="noopener">Mask360 Studio</a><a href="${B('/feed.xml')}">RSS</a></div>
  <div class="micro">All rights reserved <span data-year>2026</span>. ${esc(site.legal)}</div>
</footer>`;

function page({ path, title, description, image, body, mast, active, jsonld, tagline, noindex = false }) {
  const url = ABS(path);
  const analytics = site.plausible ? `<script defer data-domain="${site.plausible}" src="https://plausible.io/js/script.js"></script>` : site.ga4 ? `<script async src="https://www.googletagmanager.com/gtag/js?id=${site.ga4}"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${site.ga4}')</script>` : '';
  const html = `<!doctype html>
<html lang="en-IN" data-base="${BASE}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${url}">
${noindex ? '<meta name="robots" content="noindex">' : ''}
<meta property="og:type" content="${path.split('/').length > 3 ? 'article' : 'website'}"><meta property="og:site_name" content="${esc(site.name)}"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(description)}"><meta property="og:url" content="${url}"><meta property="og:image" content="${ABS(image || '/assets/brand/og.jpg')}"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="${B('/assets/brand/favicon.svg')}" type="image/svg+xml"><link rel="alternate" type="application/rss+xml" title="${esc(site.name)}" href="${B('/feed.xml')}">
<link rel="preload" href="${B('/assets/fonts/instrument-serif-normal-latin.woff2')}" as="font" type="font/woff2" crossorigin><link rel="preload" href="${B('/assets/fonts/amulya-400.woff2')}" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="${B('/assets/css/site.css?v=' + VER)}">
${jsonld ? `<script type="application/ld+json">${JSON.stringify(jsonld)}</script>` : ''}
${analytics}
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<div class="page">
${header({ mast, active, tagline })}
<main id="main">
${body}
</main>
${newsletter}
</div>
${footer}
${overlay}
<script src="${B('/assets/js/site.js?v=' + VER)}" defer></script>
</body>
</html>`;
  const file = join(OUT, path.replace(/\/$/, ''), path.endsWith('/') ? 'index.html' : '');
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
}

// ---------- components ----------
const kick = (s) => `<span class="kick${s.kicker === 'PAID' ? ' paid' : ''}">${s.kicker === 'PAID' ? 'Paid partnership' : esc(s.kicker)}</span>`;
function card(s, { eager = false } = {}) {
  return `<a class="card" href="${B(s.url)}"><div class="label c-${s.section}">${esc(s.sectionName)}${kick(s)}</div><h3>${esc(s.title)}</h3><p>${esc(s.dek)}</p><div class="pic" style="--ar:4/5"><img src="${B(s.card)}" alt="" width="864" height="1080" loading="${eager ? 'eager' : 'lazy'}" decoding="async"></div><div class="meta2"><span>${esc(s.dateShort)}</span><span>${esc(s.read)}</span></div></a>`;
}
function rowHead(h, link, cls = '') { return `<div class="row ${cls}"><h2>${esc(h)}</h2>${link ? `<a class="all" href="${B(link.href)}">${esc(link.label)}</a>` : ''}</div>`; }
function grid(list, { more = null, eager = 0 } = {}) {
  return `<div class="grid" id="${more ? more.id : 'grid'}">${list.map((s, i) => card(s, { eager: i < eager })).join('')}</div>${more && more.total > list.length ? `<div class="more-wrap"><button type="button" data-more="#${more.id}" data-section="${more.section || ''}">Load more</button></div>` : ''}`;
}
function hero(list) {
  return `<div class="hero-wrap"><div class="hero">${list.map((s, i) => `<div class="slide${i === 0 ? ' on' : ''}"><img src="${B(s.hero)}" alt="" width="1920" height="1080" loading="${i === 0 ? 'eager' : 'lazy'}" decoding="async"${i === 0 ? ' fetchpriority="high"' : ''}></div>`).join('')}
${list.map((s, i) => `<div class="copy"${i ? ' hidden' : ''}><div><div class="label">${esc(s.sectionName)} <span class="kicker">${s.kicker === 'PAID' ? 'Paid partnership' : esc(s.kicker)}</span></div><h3><a href="${B(s.url)}">${esc(s.title)}</a></h3></div><a class="more" href="${B(s.url)}">Read more</a></div>`).join('')}
<div class="thumbs">${list.map((s, i) => `<button type="button"${i === 0 ? ' aria-current="true"' : ''} aria-label="Show ${esc(s.title)}"><img src="${B(s.thumb)}" alt="" loading="lazy" width="216" height="270"></button>`).join('')}</div>
</div><div class="arrows"><button type="button" data-dir="prev" aria-label="Previous">${ICON_ARROW('prev')}</button><button type="button" data-dir="next" aria-label="Next">${ICON_ARROW('next')}</button></div></div>`;
}
function promoBand() {
  return `<section class="promo-wrap">${rowHead(promo.kind === 'house' ? 'This space is for sale' : 'Presented by', null)}<a class="promo" href="${/^https?:/.test(promo.href) ? promo.href : B(promo.href)}"><div class="big">${esc(promo.headline)}</div><div class="copy"><div class="eyebrow">${esc(promo.eyebrow)}</div>${promo.lines.map((l) => `<div>${esc(l)}</div>`).join('')}<span class="cta">${esc(promo.cta)}</span></div><div class="tag">${esc(promo.tag)}</div><div class="bar" aria-hidden="true"></div></a></section>`;
}
function watchBand() {
  if (!watch.items.length) return '';
  return `<section class="watch">${rowHead(watch.title, { href: '/watch/', label: 'Explore all' })}<div class="grid">${watch.items.map((w) => `<a class="card" href="${w.href}"><h3>${esc(w.title)}</h3><p>${esc(w.blurb)}</p><div class="pic" style="--ar:1"><img src="${B(w.cover)}" alt="" loading="lazy"></div><div class="meta2"><span>${esc(w.length)} WATCH</span></div></a>`).join('')}</div></section>`;
}
function watchlistBand(stories) {
  const cutoff = new Date(Date.now() - 30 * 86400000).toISOString().slice(0, 10);
  const counts = {}, names = {};
  const skip = new Set(['mumbai', 'delhi', 'bangalore', 'bengaluru', 'goa', 'dubai', 'india', 'gurgaon', 'bandra', 'advertising', 'marketing', 'diwali', 'ipl']);
  for (const s of stories) if (s.date >= cutoff) for (const t of s.tags) { const raw = String(t).trim(); const k = raw.toLowerCase(); if (!skip.has(k) && k.length > 2) { counts[k] = (counts[k] || 0) + 1; if (!names[k] || (/[A-Z]/.test(raw.slice(1)) && !/[A-Z]/.test(names[k].slice(1)))) names[k] = raw; } }
  const top = Object.entries(counts).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).slice(0, 9);
  if (top.length < 3) return '';
  const display = (k) => { const raw = names[k] || k; const acr = new Set(['fdci', 'wpp', 'asci', 'ihcl', 'nexa', 'vml', 'lfw', 'aaai', 'orra', 'tbwa', 'bbdo', 'ddb', 'ipg', 'hul', 'itc', 'nmacc', 'ccpa', 'rupay']); if (acr.has(k)) return k === 'rupay' ? 'RuPay' : k.toUpperCase(); return /[A-Z]/.test(raw.slice(1)) ? raw : titleCase(raw); };
  const who = (k, n) => { const label = display(k); const ini = label.split(/[\s\\]+/).map((w) => w[0]).slice(0, 2).join('').toUpperCase(); return `<span class="who"><span class="mono">${esc(ini)}</span>${esc(label)}<span class="n">${n}</span></span>`; };
  const rows = [top.slice(0, 3), top.slice(3, 6), top.slice(6, 9)].filter((r) => r.length);
  return `<section>${rowHead('On the watchlist', { href: '/search/', label: 'Explore all' })}<div class="watchlist">${rows.map((r) => `<div class="line">${r.map(([t, n]) => who(t, n)).join('')}${r.map(([t, n]) => who(t, n)).join('')}</div>`).join('')}</div></section>`;
}

// ---------- pages ----------
function buildHome(stories) {
  const top = stories.filter((s) => !s.paid).slice(0, 5);
  const latest = stories.slice(0, 9);
  const body = `${rowHead('Fresh pour', null)}${top.length ? hero(top) : ''}
${rowHead('The latest', null)}${grid(latest, { more: { id: 'latest', total: stories.length }, eager: 3 })}
${promoBand()}
${watchBand()}
${watchlistBand(stories)}`;
  page({ path: '/', title: `${site.name}. ${site.tagline}`, description: site.description, body, active: 'home', jsonld: { '@context': 'https://schema.org', '@type': 'NewsMediaOrganization', name: site.name, url: ABS('/'), logo: ABS('/assets/brand/og.jpg'), sameAs: [site.instagram, site.linkedin], publishingPrinciples: ABS('/about/'), correctionsPolicy: ABS('/about/') } });
}

function buildSections(stories) {
  site.sections.forEach((slug, i) => {
    const sec = SECTIONS[slug];
    const list = stories.filter((s) => s.section === slug);
    const nextSlug = site.sections[(i + 1) % site.sections.length];
    const nextList = stories.filter((s) => s.section === nextSlug).slice(0, 3);
    const body = `<div style="height:72px"></div>${list.length ? grid(list.slice(0, 9), { more: { id: 'section', total: list.length, section: slug }, eager: 3 }) : '<p style="padding:40px 0">Nothing has been poured here yet. Check back after the next run.</p>'}
<section class="next">${rowHead(`Next: ${SECTIONS[nextSlug].name}`, { href: `/${nextSlug}/`, label: 'Explore all' }, 'tight')}${grid(nextList)}</section>`;
    page({ path: `/${slug}/`, title: `${sec.name}: ${site.name}`, description: `${sec.name} on ${site.name}: ${site.description}`, body, mast: sec.name, active: slug });
  });
}

function buildStories(stories) {
  stories.forEach((s, i) => {
    const sec = SECTIONS[s.section];
    const latest = stories.filter((x) => x.slug !== s.slug).slice(0, 5);
    const slidesHtml = s.slides.map((sl, k) => `<img src="${B(`/carousels/${s.slug}/${String(k + 1).padStart(2, '0')}.jpg`)}" alt="${esc(String(s.data.alt || '').split('\n').filter(Boolean)[k] || '')}" width="1080" height="1350" loading="lazy" decoding="async">`).join('');
    const paidBox = s.paid ? `<div class="paidbox">Paid partnership with ${esc(s.partner)}. This story is sponsored. It is labelled on every slide and in the caption, per ASCI guidelines. The kicker and the format are not for sale.</div>` : s.sponsor ? `<div class="paidbox">Presented by ${esc(s.sponsor)}. The sponsor bought the position on the cover and the close slide, labelled per ASCI guidelines. The ${esc(s.formatName)} itself, its content and its verdict are editorial and were not shown to the sponsor before publication.</div>` : '';
    const corr = s.corrections ? `<p class="corr">Correction: ${esc(s.corrections)}</p>` : '';
    const ig = s.post && s.post.ig ? `<a href="${esc(s.post.ig)}" rel="noopener">Open on Instagram</a>` : '';
    const body = `<article class="story">
<div class="main">
  <div class="kline"><span class="c-${s.section}">${esc(s.sectionName)}</span>${kick(s)}<span>${esc(s.formatName)}</span>${s.sponsor ? `<span class="kick paid">Presented by ${esc(s.sponsor)}</span>` : ''}</div>
  <h1>${esc(s.title)}</h1>
  <p class="dek">${esc(s.dek)}</p>
  <div class="date"><span>${esc(s.dateLong)}</span><span>${esc(s.desk)}</span><span>${esc(s.read)}</span></div>
  <figure><div class="cover"><img src="${B(s.cover)}" alt="${esc(String(s.data.alt || '').split('\n')[0] || s.title)}" width="1080" height="1350" fetchpriority="high"></div>${s.credit ? `<figcaption class="credit">${esc(s.credit)}</figcaption>` : ''}</figure>
  ${paidBox}
  <div class="body">${md(s.body)}</div>
  ${corr}
  <section class="swipe"><div class="head"><h2>The carousel</h2>${ig}</div><div class="track">${slidesHtml}</div></section>
  ${s.sources.length ? `<section class="sources"><h2>Sources</h2><ul>${s.sources.map((src) => { const m = /^(\S+)\s*(.*)$/.exec(src); return m && /^https?:/.test(m[1]) ? `<li><a href="${esc(m[1])}" rel="noopener nofollow" target="_blank">${esc(m[1].replace(/^https?:\/\/(www\.)?/, '').slice(0, 70))}</a> ${esc(m[2].replace(/^\(|\)$/g, ''))}</li>` : `<li>${esc(src)}</li>`; }).join('')}</ul></section>` : ''}
</div>
<aside class="rail"><h2>Latest</h2>${latest.map((x) => `<a class="item" href="${B(x.url)}"><div class="pic"><img src="${B(x.thumb)}" alt="" loading="lazy" width="216" height="270"></div><div><div class="label c-${x.section}">${esc(x.sectionName)}</div><h3>${esc(x.title)}</h3><p>${esc(x.dek)}</p></div></a>`).join('')}</aside>
</article>`;
    const jsonld = { '@context': 'https://schema.org', '@type': 'NewsArticle', headline: s.title, description: s.dek, image: [ABS(s.og), ABS(s.cover)], datePublished: `${s.date}T${s.time}:00+05:30`, dateModified: `${s.date}T${s.time}:00+05:30`, author: { '@type': 'Organization', name: `${site.name} ${s.desk}` }, publisher: { '@type': 'Organization', name: site.name, logo: { '@type': 'ImageObject', url: ABS('/assets/brand/og.jpg') } }, mainEntityOfPage: ABS(s.url), articleSection: s.sectionName, keywords: s.tags.join(', '), isAccessibleForFree: true, ...(s.paid ? { sponsor: { '@type': 'Organization', name: s.partner } } : {}) };
    page({ path: s.url, title: `${s.title}: ${site.name}`, description: s.dek, image: s.og, body, mast: s.sectionName, active: s.section, jsonld });
  });
}

function buildPlainPages() {
  const dir = join(ROOT, 'content', 'pages');
  for (const f of readdirSync(dir).filter((x) => x.endsWith('.md'))) {
    const { data, body } = parseFrontMatter(readFileSync(join(dir, f), 'utf8'));
    const slug = basename(f, '.md');
    page({ path: `/${slug}/`, title: `${data.title}: ${site.name}`, description: data.description || site.description, body: `<div class="plain"><h1>${esc(data.title)}</h1><div class="body">${md(body)}</div></div>`, active: '' });
  }
  page({ path: '/newsletter/', title: `${site.newsletter.name}: ${site.name}`, description: site.newsletter.blurb, body: `<div class="plain"><h1>${esc(site.newsletter.name)}</h1><div class="body"><p>${esc(site.newsletter.blurb)} The week's five stories, one long read and the Watchlist. The form is at the bottom of this page.</p></div></div>`, active: '' });
  page({ path: '/newsletter/thanks/', title: `You are in: ${site.name}`, description: 'Signed up.', body: `<div class="plain"><h1>You are in.</h1><div class="body"><p>The first Sunday Steep lands at nine. Until then, the tea is on the <a href="${B('/')}">home page</a>.</p></div></div>`, active: '', noindex: true });
  page({ path: '/search/', title: `Search: ${site.name}`, description: 'Search every story.', body: `<div class="plain"><h1>Search</h1><div class="body"><p>Use the search icon in the navigation, or browse by section.</p></div></div>`, active: '', noindex: true });
  page({ path: '/404.html', title: `Not found: ${site.name}`, description: 'Nothing here.', body: `<div class="plain"><h1>That tea got cold.</h1><div class="body"><p>The page is not here. Try the <a href="${B('/')}">home page</a> or the search.</p></div></div>`, active: '', noindex: true });
}

function buildFeeds(stories) {
  const idx = { generated: new Date().toISOString(), stories: stories.map((s) => ({ slug: s.slug, title: s.title, dek: s.dek, section: s.section, sectionName: s.sectionName, kicker: s.kicker, format: s.format, date: s.date, dateShort: s.dateShort, read: s.read, url: s.url, card: s.card, thumb: s.thumb, og: s.og, tags: s.tags, paid: s.paid })) };
  writeFileSync(join(OUT, 'index.json'), JSON.stringify(idx));
  writeFileSync(join(OUT, 'search.json'), JSON.stringify(idx.stories.map((s) => ({ title: s.title, dek: s.dek, section: s.section, sectionName: s.sectionName, url: s.url, thumb: s.thumb, tags: s.tags }))));
  const items = stories.slice(0, 50).map((s) => `<item><title>${esc(s.title)}</title><link>${ABS(s.url)}</link><guid>${ABS(s.url)}</guid><pubDate>${new Date(`${s.date}T${s.time}:00+05:30`).toUTCString()}</pubDate><category>${esc(s.sectionName)}</category><description>${esc(s.dek)}</description><enclosure url="${ABS(s.og)}" type="image/jpeg" length="0"/></item>`).join('\n');
  writeFileSync(join(OUT, 'feed.xml'), `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${esc(site.name)}</title><link>${ABS('/')}</link><description>${esc(site.description)}</description><language>en-in</language>\n${items}\n</channel></rss>`);
  const urls = ['/', ...site.sections.map((s) => `/${s}/`), '/about/', '/advertise/', '/newsletter/', ...stories.map((s) => s.url)];
  writeFileSync(join(OUT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map((u) => `<url><loc>${ABS(u)}</loc></url>`).join('')}</urlset>`);
  writeFileSync(join(OUT, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${ABS('/sitemap.xml')}\n`);
  writeFileSync(join(OUT, 'site.webmanifest'), JSON.stringify({ name: site.name, short_name: site.name, start_url: B('/'), display: 'standalone', background_color: '#ffffff', theme_color: '#000000', icons: [{ src: B('/assets/brand/favicon.svg'), sizes: 'any', type: 'image/svg+xml' }] }));
}

function brandAssets() {
  const dir = join(OUT, 'assets', 'brand');
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'favicon.svg'), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" fill="#000"/><text x="32" y="46" text-anchor="middle" font-family="Instrument Serif, Georgia, serif" font-size="44" fill="#fff" letter-spacing="-2">M</text></svg>`);
  if (!existsSync(join(dir, 'og.jpg'))) {
    try { execFileSync('python3', ['-I', '-c', `
from PIL import Image, ImageDraw, ImageFont
im=Image.new('RGB',(1200,630),(255,51,50)); d=ImageDraw.Draw(im)
f=ImageFont.truetype('${join(ROOT, 'newsroom', 'fonts', 'InstrumentSerif-Regular.ttf')}',300); d.text((80,120),'Mask360',font=f,fill=(255,255,255))
f2=ImageFont.truetype('${join(ROOT, 'newsroom', 'fonts', 'InstrumentSerif-Regular.ttf')}',56); d.text((88,470),'Three. Six. Tea.',font=f2,fill=(255,255,255))
im.save('${join(dir, 'og.jpg')}','JPEG',quality=88)`]); } catch (e) { console.warn('og.jpg not generated:', e.message); }
  }
}

// ---------- run ----------
function clean() {
  for (const d of ['stories', 'about', 'advertise', 'newsletter', 'search', ...site.sections]) rmSync(join(OUT, d), { recursive: true, force: true });
  for (const f of ['index.html', '404.html']) rmSync(join(OUT, f), { force: true });
}

const stories = loadStories();
renderCarousels(stories);
clean();
brandAssets();
buildHome(stories);
buildSections(stories);
buildStories(stories);
buildPlainPages();
buildFeeds(stories);
console.log(`built ${stories.length} stories, ${site.sections.length} sections, home, pages, feeds (base "${BASE || '/'}")`);
