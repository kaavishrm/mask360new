// Static site generator for mask360.agency. No dependencies. Run: node build.mjs
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { site, nav, home, contactPage, cases, featured, otherWork } from './content.mjs';

const ROOT = dirname(fileURLToPath(import.meta.url));
const OUT = join(ROOT, 'public');
const manifest = JSON.parse(readFileSync(join(ROOT, 'assets-manifest.json'), 'utf8'));
const MARK = readFileSync(join(OUT, 'assets/brand/m360.svg'), 'utf8')
  .replace(/ width="[\d.]+" height="[\d.]+"/, '')
  .replace('<svg', '<svg aria-hidden="true" focusable="false"');
const VER = String(Date.now()).slice(-6);

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const strip = (s) => String(s).replace(/<[^>]+>/g, '');
const sizesFor = (span) => (span >= 12 ? '100vw' : span >= 8 ? '(max-width: 720px) 100vw, 66vw' : span >= 6 ? '(max-width: 720px) 100vw, 50vw' : '(max-width: 720px) 100vw, (max-width: 1000px) 50vw, 33vw');

function img(ref, { alt = '', span = 12, ar, eager = false, cls = '' } = {}) {
  const [slug, name] = ref.split('/');
  const e = manifest[slug] && manifest[slug][name];
  if (!e) throw new Error('unknown image ' + ref);
  const base = `/assets/img/${slug}/${name}`;
  const srcset = e.sizes.map((w) => `${base}-${w}.webp ${w}w`).join(', ');
  const src = `${base}-${e.sizes[Math.min(1, e.sizes.length - 1)]}.webp`;
  const ratio = ar || `${e.w}/${e.h}`;
  return `<div class="pic ${cls}" style="--ar:${ratio}"><img src="${src}" srcset="${srcset}" sizes="${sizesFor(span)}" width="${e.w}" height="${e.h}" alt="${esc(alt)}" loading="${eager ? 'eager' : 'lazy'}" decoding="async"${eager ? ' fetchpriority="high"' : ''}></div>`;
}

function video(name, { alt = '', ar = '16/9', cls = '', mobile } = {}) {
  const v = `/assets/video/${name}`;
  const m = mobile ? ` data-mobile="/assets/video/${mobile}"` : '';
  return `<div class="pic ${cls}" style="--ar:${ar}"><video class="loop" autoplay muted loop playsinline preload="metadata" poster="${v}-poster.webp" aria-label="${esc(alt)}" data-loop${m}><source src="${v}.webm" type="video/webm"><source src="${v}.mp4" type="video/mp4"></video></div>`;
}

function media(item, opts = {}) {
  if (item.video) return video(item.video, { alt: item.alt, ar: item.ar || opts.ar, mobile: item.videoMobile });
  return img(item.img, { alt: item.alt, span: item.span || opts.span || 12, ar: item.ar || opts.ar, eager: opts.eager });
}

const header = `<header class="top"><a class="mark" href="/" aria-label="Mask360, home">${MARK}</a><nav aria-label="Primary">${nav.map((n) => `<a href="${n.href}">${n.label}</a>`).join('')}</nav></header>`;

const footer = `<footer class="foot night" id="footer">
  <div class="fcol s4"><a class="mark" href="/" aria-label="Mask360, home">${MARK}</a><p class="mt">${esc(site.legal)}</p></div>
  <div class="fcol s3"><p class="micro">Offices</p>${site.offices.map((o) => `<p class="mt-s"><b>${o.city}</b><br>${o.lines.join('<br>')}</p>`).join('')}<p class="mt-s">${site.cities.join(', ')}</p></div>
  <div class="fcol s3"><p class="micro">Write</p><p class="mt-s"><a class="link" href="mailto:${site.email}">${site.email}</a></p><p class="mt-s"><a class="link" href="mailto:${site.founderEmail}">${site.founderEmail}</a></p></div>
  <div class="fcol s2"><p class="micro">Index</p><p class="mt-s"><a href="/work/">Work</a><br><a href="/#studio">Studio</a><br><a href="/contact/">Contact</a><br><a href="${site.credentials}" rel="noopener">Credentials</a></p></div>
  <div class="end"><span>${esc(home.footer.end)}</span><span>© <span data-year>2026</span> ${site.name}</span></div>
</footer>`;

function page({ path, title, description, image, body, cls = '', jsonld }) {
  const url = site.url + path;
  const ogImage = site.url + (image || '/assets/brand/og.jpg');
  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${url}">
<meta property="og:type" content="website"><meta property="og:site_name" content="${site.name}"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(description)}"><meta property="og:url" content="${url}"><meta property="og:image" content="${ogImage}">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(title)}"><meta name="twitter:description" content="${esc(description)}"><meta name="twitter:image" content="${ogImage}">
<meta name="theme-color" content="#0a0a0a">
<link rel="icon" href="/assets/brand/favicon.svg" type="image/svg+xml"><link rel="icon" href="/assets/brand/favicon-32.png" sizes="32x32" type="image/png"><link rel="apple-touch-icon" href="/assets/brand/apple-touch-icon.png"><link rel="manifest" href="/site.webmanifest">
<link rel="preload" href="/assets/fonts/space-grotesk-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/assets/css/site.css?v=${VER}">
${jsonld ? `<script type="application/ld+json">${JSON.stringify(jsonld)}</script>` : ''}
</head>
<body class="${cls}">
<a class="skip" href="#main">Skip to content</a>
${header}
<main id="main">
${body}
</main>
${footer}
<script src="/assets/js/site.js?v=${VER}" defer></script>
</body>
</html>`;
  const file = join(OUT, path.endsWith('/') ? path + 'index.html' : path);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
  return url;
}

const org = {
  '@context': 'https://schema.org', '@type': 'Organization', name: site.name, url: site.url, email: site.email, logo: site.url + '/assets/brand/icon-512.png',
  description: site.description, founder: { '@type': 'Person', name: home.founder.name, jobTitle: home.founder.role },
  address: [{ '@type': 'PostalAddress', streetAddress: '6th Floor, Platinum Prive, Upper Juhu', addressLocality: 'Mumbai', postalCode: '400053', addressCountry: 'IN' }, { '@type': 'PostalAddress', addressLocality: 'Dubai', addressCountry: 'AE' }],
  areaServed: ['IN', 'AE', 'SA', 'QA', 'KW', 'BH', 'OM'],
};

const bySlug = Object.fromEntries(cases.map((c) => [c.slug, c]));
const caseCard = (c, span, ar, eager = false) => `<a class="item s${span}" href="/work/${c.slug}/">${img(c.featured.img, { alt: c.featured.alt, span, ar, eager })}<div class="cap"><b>${esc(c.short)}</b><span>${esc(c.kicker)}, ${c.year}</span></div></a>`;

// ---------- Home ----------
const H = home;
const homeBody = `
<section class="hero" aria-label="Introduction">
  ${video(H.hero.video, { alt: H.hero.caption, ar: '16/9', cls: 'fill', mobile: H.hero.videoMobile })}
  <div class="in">
    <div><p class="micro">${esc(H.hero.micro)}</p><h1 class="display">${H.hero.h1}</h1></div>
    <div class="side"><p class="lede">${esc(H.hero.lede)}</p><p class="micro mt">${esc(H.hero.caption)}</p></div>
  </div>
</section>

<section class="sec work" id="work">
  <div class="head"><div><p class="micro">${esc(H.work.micro)}</p><h2 class="h2">${H.work.h2}</h2></div><a class="btn" href="/work/">${esc(H.work.link)}</a></div>
  <div class="grid">${featured.map(([s, span, ar], i) => caseCard(bySlug[s], span, ar)).join('')}</div>
</section>

<section class="sec night" id="what">
  <div class="head"><div><p class="micro">${esc(H.pillars.micro)}</p><h2 class="h2">${H.pillars.h2}</h2></div></div>
  <div class="cards">${H.pillars.items.map((p) => `<div class="card"><p class="micro">${esc(p.label)}</p><div><h3 class="h3">${esc(p.title)}</h3><p>${esc(p.text)}</p><ul>${p.list.map((l) => `<li>${esc(l)}</li>`).join('')}</ul></div></div>`).join('')}</div>
</section>

<section class="sec paper" id="how">
  <div class="head"><div><p class="micro">${esc(H.process.micro)}</p><h2 class="h2">${H.process.h2}</h2></div></div>
  <div class="cards four">${H.process.steps.map((s) => `<div class="card"><p class="n">${s.n}</p><div><h3 class="h3">${esc(s.title)}</h3><p>${esc(s.text)}</p></div></div>`).join('')}</div>
</section>

<section class="sec" id="numbers">
  <p class="micro">${esc(H.numbers.micro)}</p>
  <div class="numbers mt">${H.numbers.items.map((n) => `<div><p class="num">${esc(n.n)}</p><p class="micro">${esc(n.t)}</p></div>`).join('')}</div>
</section>

<section class="sec paper" id="founder">
  <div class="split">
    <div class="s7"><p class="micro">${esc(H.founder.micro)}</p><blockquote class="quote mt">${H.founder.quote}</blockquote></div>
    <div class="s5"><p class="note">${esc(H.founder.note)}</p><p class="sig"><b>${esc(H.founder.name)}</b><br>${esc(H.founder.role)}</p><p class="mt-s muted">${esc(H.founder.bio)}</p></div>
  </div>
</section>

<section class="sec night" id="studio">
  <div class="split">
    <div class="s5"><p class="micro">${esc(H.studio.micro)}</p><h2 class="h2 mt">${H.studio.h2}</h2><p class="lede mt">${esc(H.studio.text)}</p><a class="btn mt" href="/contact/">Book the studio</a></div>
    <div class="s7">${video(H.studio.video, { alt: H.studio.caption, ar: '16/9' })}<p class="micro mt-s">${esc(H.studio.caption)}</p></div>
  </div>
</section>

<section class="sec paper" id="clients">
  <div class="head"><div><p class="micro">${esc(H.clients.micro)}</p></div></div>
  <ul class="index">${H.clients.list.map((c) => `<li>${esc(c)}</li>`).join('')}</ul>
  <p class="muted mt">${esc(H.clients.sectors)}</p>
</section>

<section class="sec" id="contact">
  <div class="split">
    <div class="s6"><p class="micro">${esc(H.contact.micro)}</p><h2 class="h2 mt">${H.contact.h2}</h2><p class="lede mt">${esc(H.contact.text)}</p></div>
    <div class="s6 contact-links"><p><a class="link big" href="mailto:${site.email}">${site.email}</a></p><p class="mt-s"><a class="link big" href="mailto:${site.founderEmail}">${site.founderEmail}</a></p><p class="mt"><a class="btn" href="/contact/">Write to us</a></p></div>
  </div>
</section>`;

page({ path: '/', title: site.title, description: site.description, body: homeBody, cls: 'home', jsonld: org });

// ---------- Work index ----------
const indexSpans = { 'anantara-jewel-bagh': 8, 'zorae': 4, 'ajio-luxe-weekend': 4, 'lollapalooza-nexa': 4, 'ef-athletic': 4, 'st-regis-mumbai': 6, 'dior-istituto-marangoni': 6, 'fire-boltt': 8, 'chivas-regal': 4 };
const workBody = `
<section class="sec title">
  <p class="micro">Work</p>
  <h1 class="display">Recent work, <em>shown large.</em></h1>
  <p class="lede mt">Client agreements and category restrictions keep part of the record off the public site. What is here is a selected view. The credentials deck fills in the rest.</p>
</section>
<section class="sec work pt0">
  <div class="grid">${cases.map((c, i) => { const span = indexSpans[c.slug] || 4; return caseCard(c, span, span >= 6 ? '16/10' : '4/5', i === 0); }).join('')}</div>
</section>
<section class="sec paper">
  <div class="split start">
    <div class="s4"><p class="micro">Also</p><h2 class="h3 mt">Work we can list and not show</h2></div>
    <ul class="plain s8">${otherWork.map((w) => `<li>${esc(w)}</li>`).join('')}</ul>
  </div>
  <p class="mt"><a class="btn" href="${site.credentials}" rel="noopener">Open the credentials deck</a></p>
</section>`;
page({ path: '/work/', title: 'Work, Mask360', description: 'Selected work by Mask360 for Anantara, ZORÁE, Ajio Luxe, Lollapalooza India, Dior, St. Regis, EF Athletic, Fire-Boltt and Chivas Regal.', body: workBody });

// ---------- Case pages ----------
cases.forEach((c, i) => {
  const next = cases[(i + 1) % cases.length];
  const heroAr = c.hero.portrait ? '4/5' : '16/9';
  const body = `
<article>
<section class="sec title">
  <p class="micro">${esc(c.client)} · ${esc(c.kicker)} · ${esc(c.year)} · ${esc(c.market)}</p>
  <h1 class="display">${c.title}</h1>
  <p class="lede mt">${esc(c.lede)}</p>
</section>
<section class="sec pt0 ${c.hero.portrait ? 'narrow' : ''}">${media(c.hero, { ar: heroAr, span: 12, eager: true })}</section>
<section class="sec pt0">
  <div class="facts">${c.facts.map(([k, v]) => `<div><p class="micro">${esc(k)}</p><p>${esc(v)}</p></div>`).join('')}</div>
</section>
<section class="sec pt0"><div class="prose">${c.body.map((p) => `<p>${esc(p)}</p>`).join('')}</div></section>
<section class="sec pt0 work"><div class="grid">${c.gallery.map((g) => `<div class="item s${g.span || 12}">${media(g, { span: g.span || 12 })}${g.caption ? `<p class="micro mt-s">${esc(g.caption)}</p>` : ''}</div>`).join('')}</div></section>
</article>
<section class="sec paper next">
  <a href="/work/${next.slug}/"><p class="micro">Next</p><h2 class="h2">${esc(next.short)}</h2><p class="muted mt-s">${esc(next.kicker)}, ${next.year}</p></a>
</section>`;
  const [slug, name] = c.featured.img.split('/');
  const e = manifest[slug][name];
  const og = `/assets/img/${slug}/${name}-${e.sizes.find((w) => w <= 1440) || e.sizes[0]}.webp`;
  page({ path: `/work/${c.slug}/`, title: `${strip(c.short)}, ${site.name}`, description: c.lede, image: og, body, cls: 'case' });
});

// ---------- Contact ----------
const C = contactPage;
const contactBody = `
<section class="sec title">
  <p class="micro">Contact</p>
  <h1 class="display">${C.h1}</h1>
  <p class="lede mt">${esc(C.lede)}</p>
</section>
<section class="sec pt0">
  <div class="split start">
    <form class="form s7" action="${C.form.action}" method="POST" accept-charset="UTF-8">
      <input type="hidden" name="_subject" value="${esc(C.form.subject)}">
      <input type="hidden" name="_next" value="${site.url}/contact/thanks/">
      <input type="hidden" name="_template" value="table">
      <input type="text" name="_honey" style="display:none" tabindex="-1" autocomplete="off">
      <div class="field"><label class="micro" for="f-name">Name</label><input id="f-name" name="name" type="text" required autocomplete="name"></div>
      <div class="field"><label class="micro" for="f-email">Email</label><input id="f-email" name="email" type="email" required autocomplete="email"></div>
      <div class="field"><label class="micro" for="f-brand">Brand</label><input id="f-brand" name="brand" type="text"></div>
      <div class="field"><label class="micro" for="f-market">Market</label><input id="f-market" name="market" type="text" placeholder="India, UAE, GCC"></div>
      <div class="field full"><label class="micro" for="f-msg">What needs to move</label><textarea id="f-msg" name="message" required></textarea></div>
      <div class="full"><button class="btn" type="submit">Send</button></div>
    </form>
    <div class="s5 contact-side">
      <p class="micro">Write</p>
      <p class="mt-s"><a class="link big" href="mailto:${site.email}">${site.email}</a></p>
      <p class="mt-s"><a class="link big" href="mailto:${site.founderEmail}">${site.founderEmail}</a></p>
      <p class="micro mt">Offices</p>
      ${site.offices.map((o) => `<p class="mt-s"><b>${o.city}</b><br>${o.lines.join('<br>')}</p>`).join('')}
      <p class="mt-s muted">${site.cities.join(', ')}</p>
    </div>
  </div>
</section>`;
page({ path: '/contact/', title: C.title, description: C.description, body: contactBody });
page({ path: '/contact/thanks/', title: 'Received, Mask360', description: 'Your message reached Mask360.', body: `<section class="sec title"><p class="micro">Contact</p><h1 class="display">Received.</h1><p class="lede mt">We reply within two working days. Until then, the work is <a class="link" href="/work/">this way</a>.</p></section>` });
page({ path: '/404.html', title: 'Nothing here, Mask360', description: 'Page not found.', body: `<section class="sec title"><p class="micro">404</p><h1 class="display">Nothing here.</h1><p class="lede mt">The work is <a class="link" href="/work/">this way</a>.</p></section>` });

// ---------- sitemap, robots, manifest ----------
const urls = ['/', '/work/', '/contact/', ...cases.map((c) => `/work/${c.slug}/`)];
writeFileSync(join(OUT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${site.url}${u}</loc></url>`).join('\n')}\n</urlset>\n`);
writeFileSync(join(OUT, 'robots.txt'), `User-agent: *\nAllow: /\nDisallow: /contact/thanks/\nSitemap: ${site.url}/sitemap.xml\n`);
writeFileSync(join(OUT, 'site.webmanifest'), JSON.stringify({ name: site.name, short_name: site.name, start_url: '/', display: 'browser', background_color: '#0a0a0a', theme_color: '#0a0a0a', icons: [{ src: '/assets/brand/icon-192.png', sizes: '192x192', type: 'image/png' }, { src: '/assets/brand/icon-512.png', sizes: '512x512', type: 'image/png' }] }, null, 1));

// ---------- copy checks ----------
const banned = /[—–]|!|elevate|seamless|journey|unlock|world-class|thrilled|template/i;
const all = JSON.stringify({ home, contactPage, cases, otherWork, site });
const hit = all.match(banned);
if (hit) throw new Error('Copy rule broken near: ' + all.slice(Math.max(0, hit.index - 60), hit.index + 60));
console.log('built', urls.length + 2, 'pages');
