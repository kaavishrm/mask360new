// Static build for the tool site. No dependencies. Run: node build.mjs
import { readdir, readFile, writeFile, mkdir, rm, cp } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import site from './site.config.mjs';

const root = path.dirname(fileURLToPath(import.meta.url));
const out = path.join(root, 'public');
const tplDir = path.join(root, 'templates');

const EM_DASH = String.fromCharCode(8212);
function lint(name, html) {
  // Strip script blocks before linting prose; code may legitimately use "!".
  const prose = html.replace(/<script[\s\S]*?<\/script>/g, '');
  if (prose.includes(EM_DASH)) throw new Error(`Em dash found in ${name}`);
  return html;
}

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

async function loadShots() {
  const dir = path.join(root, '..', 'shots');
  if (!existsSync(dir)) return [];
  const shots = [];
  for (const entry of (await readdir(dir, { withFileTypes: true })).filter((d) => d.isDirectory()).sort((a, b) => a.name.localeCompare(b.name))) {
    const file = path.join(dir, entry.name, 'shot.mjs');
    if (existsSync(file)) shots.push((await import(file)).default);
  }
  return shots.reverse();
}

async function loadTools() {
  const files = (await readdir(path.join(root, 'tools'))).filter((f) => f.endsWith('.mjs')).sort();
  const tools = [];
  for (const f of files) {
    const mod = await import(path.join(root, 'tools', f));
    tools.push(mod.default);
  }
  return tools;
}

function layout(tpl, vars) {
  return tpl.replace(/\{\{(\w+)\}\}/g, (_, k) => (k in vars ? vars[k] : ''));
}

function jsonld(obj) {
  return `<script type="application/ld+json">${JSON.stringify(obj)}</script>`;
}

function toolCard(t) {
  return `<a class="card" href="/${t.slug}/"><span class="card-cat">${esc(site.categories[t.category])}</span><strong>${esc(t.title)}</strong><span>${esc(t.summary)}</span></a>`;
}

async function build() {
  const base = await readFile(path.join(tplDir, 'base.html'), 'utf8');
  const tools = await loadTools();
  const byCat = {};
  for (const t of tools) (byCat[t.category] ||= []).push(t);

  // Clean generated pages, keep assets.
  for (const entry of await readdir(out)) {
    if (entry === 'assets') continue;
    await rm(path.join(out, entry), { recursive: true, force: true });
  }

  const nav = `<nav class="nav"><a class="brand" href="/">${esc(site.name)}</a><div class="nav-links">${Object.entries(site.categories)
    .map(([k, v]) => `<a href="/#${k}">${esc(v)}</a>`)
    .join('')}</div></nav>`;

  const footer = `<footer class="footer"><div><strong>${esc(site.name)}</strong> is a set of free calculators and document generators for India. Everything runs in your browser. Nothing you type is sent to a server.</div><div class="footer-links"><a href="/shots/">Shots</a><a href="/about/">About</a><a href="/privacy/">Privacy</a><a href="/terms/">Terms</a><a href="/sitemap.xml">Sitemap</a></div><div class="footer-note">Figures are for guidance. Confirm anything that matters with a chartered accountant. Updated ${site.updated}.</div></footer>`;

  // Tool pages
  for (const t of tools) {
    const related = (t.related || []).map((s) => tools.find((x) => x.slug === s)).filter(Boolean);
    const faqHtml = (t.faq || []).map((f) => `<details class="faq"><summary>${esc(f.q)}</summary><div>${f.a}</div></details>`).join('');
    const ld = [
      jsonld({ '@context': 'https://schema.org', '@type': 'WebApplication', name: t.title, url: `${site.url}/${t.slug}/`, applicationCategory: 'FinanceApplication', operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' }, description: t.description }),
      jsonld({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: site.url + '/' }, { '@type': 'ListItem', position: 2, name: t.title, item: `${site.url}/${t.slug}/` }] }),
    ];
    if (t.faq?.length) ld.push(jsonld({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: t.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/<[^>]+>/g, '') } })) }));

    const body = `
<main class="page tool-page${t.print ? ' has-sheet' : ''}">
  <p class="crumbs"><a href="/">Home</a> / <a href="/#${t.category}">${esc(site.categories[t.category])}</a></p>
  <h1>${esc(t.h1 || t.title)}</h1>
  <p class="lede">${t.intro}</p>
  <div class="ad-slot" data-slot="top"></div>
  <section class="tool" id="tool">${t.tool}</section>
  <div class="ad-slot" data-slot="mid"></div>
  <article class="explainer">${t.explainer}</article>
  ${faqHtml ? `<section class="faqs"><h2>Questions people ask</h2>${faqHtml}</section>` : ''}
  ${related.length ? `<section class="related"><h2>Related tools</h2><div class="cards">${related.map(toolCard).join('')}</div></section>` : ''}
  <div class="ad-slot" data-slot="bottom"></div>
</main>`;

    const html = layout(base, {
      lang: 'en-IN',
      title: `${t.title} | ${site.name}`,
      description: t.description,
      canonical: `${site.url}/${t.slug}/`,
      site: esc(site.name),
      nav, footer, body,
      head: ld.join('\n'),
      scripts: `<script src="/assets/js/common.js"></script>${(t.lib || []).map((fn) => `<script>${fn.toString()}</script>`).join('')}<script>(${t.script.toString()})();</script>`,
    });
    await mkdir(path.join(out, t.slug), { recursive: true });
    await writeFile(path.join(out, t.slug, 'index.html'), lint(t.slug, html));
  }

  // Home
  const homeBody = `
<main class="page home">
  <section class="hero"><h1>${esc(site.tagline)}</h1><p class="lede">${esc(site.heroText)}</p></section>
  <div class="ad-slot" data-slot="top"></div>
  ${Object.entries(site.categories)
    .filter(([k]) => byCat[k])
    .map(([k, v]) => `<section id="${k}" class="cat"><h2>${esc(v)}</h2><div class="cards">${byCat[k].map(toolCard).join('')}</div></section>`)
    .join('')}
  <section class="why"><h2>Why these tools exist</h2>${site.whyHtml}</section>
</main>`;
  await writeFile(path.join(out, 'index.html'), lint('home', layout(base, {
    lang: 'en-IN', title: `${site.name}: ${site.tagline}`, description: site.description, canonical: site.url + '/', site: esc(site.name), nav, footer, body: homeBody,
    head: jsonld({ '@context': 'https://schema.org', '@type': 'WebSite', name: site.name, url: site.url + '/' }), scripts: '',
  })));

  // Static pages
  for (const p of site.pages) {
    const body = `<main class="page prose"><h1>${esc(p.title)}</h1>${p.html}</main>`;
    await mkdir(path.join(out, p.slug), { recursive: true });
    await writeFile(path.join(out, p.slug, 'index.html'), lint(p.slug, layout(base, { lang: 'en-IN', title: `${p.title} | ${site.name}`, description: p.description, canonical: `${site.url}/${p.slug}/`, site: esc(site.name), nav, footer, body, head: '', scripts: '' })));
  }

  // Weekly shots: authored in ../shots, published under /shots/<slug>/ with the site chrome
  const shots = await loadShots();
  const shotCard = (sh) => `<a class="card" href="/shots/${sh.slug}/"><span class="card-cat">Shot, ${esc(sh.published)}</span><strong>${esc(sh.title)}</strong><span>${esc(sh.summary)}</span></a>`;
  for (const sh of shots) {
    const body = `
<main class="page tool-page shot-page">
  <p class="crumbs"><a href="/">Home</a> / <a href="/shots/">Shots</a></p>
  <h1>${esc(sh.title)}</h1>
  <p class="lede">${sh.intro}</p>
  ${sh.body}
  <div class="ad-slot" data-slot="bottom"></div>
  <p class="tiny">Published ${esc(sh.published)}. <a href="/shots/">All shots</a>.</p>
</main>`;
    await mkdir(path.join(out, 'shots', sh.slug), { recursive: true });
    await writeFile(path.join(out, 'shots', sh.slug, 'index.html'), lint('shot ' + sh.slug, layout(base, {
      lang: 'en-IN', title: `${sh.title} | ${site.name}`, description: sh.description, canonical: `${site.url}/shots/${sh.slug}/`, site: esc(site.name), nav, footer, body,
      head: jsonld({ '@context': 'https://schema.org', '@type': 'WebPage', name: sh.title, url: `${site.url}/shots/${sh.slug}/`, description: sh.description, datePublished: sh.published }),
      scripts: `<script src="/assets/js/common.js"></script>${(sh.lib || []).map((fn) => `<script>${fn.toString()}</script>`).join('')}<script>(${sh.script.toString()})();</script>`,
    })));
  }
  if (shots.length) {
    await mkdir(path.join(out, 'shots'), { recursive: true });
    await writeFile(path.join(out, 'shots', 'index.html'), lint('shots index', layout(base, {
      lang: 'en-IN', title: `Shots | ${site.name}`, description: 'One small shareable page a week from Hisaab Tools: quizzes and score cards on the money rules in force in India.', canonical: `${site.url}/shots/`, site: esc(site.name), nav, footer,
      body: `<main class="page home"><section class="hero"><h1>Shots</h1><p class="lede">One small shareable page a week. A quiz, a score, a card worth sending to a friend who still thinks the old regime is the default.</p></section><div class="cards">${shots.map(shotCard).join('')}</div></main>`, head: '', scripts: '',
    })));
  }

  // 404
  await writeFile(path.join(out, '404.html'), layout(base, { lang: 'en-IN', title: `Not found | ${site.name}`, description: '', canonical: site.url + '/', site: esc(site.name), nav, footer, body: `<main class="page prose"><h1>That page is not here</h1><p><a href="/">Back to all tools</a></p></main>`, head: '<meta name="robots" content="noindex">', scripts: '' }));

  // Sitemap and robots
  const urls = ['/', ...tools.map((t) => `/${t.slug}/`), ...site.pages.map((p) => `/${p.slug}/`), ...(shots.length ? ['/shots/', ...shots.map((sh) => `/shots/${sh.slug}/`)] : [])];
  await writeFile(path.join(out, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${site.url}${u}</loc><lastmod>${site.updated}</lastmod></url>`).join('\n')}\n</urlset>\n`);
  await writeFile(path.join(out, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${site.url}/sitemap.xml\n`);

  console.log(`Built ${tools.length} tools, ${site.pages.length} pages, ${shots.length} shot(s) -> ${path.relative(root, out)}`);
}

build().catch((e) => { console.error(e); process.exit(1); });
