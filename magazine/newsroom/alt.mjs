// Alt text per slide, generated from the slide content when the writer's alt is missing or out of step.
// Usage: node newsroom/alt.mjs <story.md> ... (rewrites alt when the line count does not match the slides)
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseFrontMatter, stringifyFrontMatter } from './yaml.mjs';
import { SECTIONS } from './lint.mjs';

const first = (s, n) => String(s || '').split(/\s+/).filter(Boolean).slice(0, n).join(' ');
const clean = (s) => String(s || '').replace(/\p{Extended_Pictographic}/gu, '').replace(/[–—]/g, ',').replace(/!/g, '.').replace(/\s+/g, ' ').trim();

export function altFor(slide, data) {
  const sec = SECTIONS[data.section] || { name: data.section };
  switch (slide.type) {
    case 'cover': return `Cover slide on ${sec.name.toLowerCase()} ${data.section === 'hospitality' ? 'yellow' : data.section === 'people' ? 'green' : data.section === 'campaigns' ? 'red' : data.section === 'events' ? 'pink' : data.section === 'fashion' ? 'violet' : 'blue'} with the ${data.kicker} pill, the headline ${slide.title || data.title}${data.coverText ? `, the words ${data.coverText} set huge` : ''}, and the Mask360 masthead.`;
    case 'tea': return `Tea slide${slide.pull ? ` with the pull line ${slide.pull}` : ''}: ${first(slide.text, 16)}.`;
    case 'receipt':
      if (slide.kind === 'image') return `Receipt slide, ${slide.caption || 'the evidence as published'}${slide.credit ? ` (${slide.credit})` : ''}.`;
      if (slide.kind === 'number') return `Receipt slide with the number ${slide.number} set huge: ${slide.caption}.`;
      if (slide.kind === 'quote') return `Receipt slide quoting ${first(slide.quote, 14)}, ${slide.source}.`;
      return `Receipt slide comparing ${slide.leftLabel} (${first(slide.leftText, 8)}) with ${slide.rightLabel} (${first(slide.rightText, 8)}).`;
    case 'item': return `Item slide for ${slide.name}: ${first(slide.why, 12)}. The catch: ${first(slide.catch, 10)}.`;
    case 'verdict': return `Verdict slide headed The read: ${first(String(slide.text || '').replace(/^\s*the read:\s*/i, ''), 16)}.`;
    case 'close': return `Black close slide reading Steeped by Mask360, Three. Six. Tea., the handle${data.sponsor ? `, presented by ${data.sponsor}` : ''} and the spine stripe.`;
    default: return `${slide.type} slide.`;
  }
}

export function fixAlt(path, { always = false } = {}) {
  const { data, body } = parseFrontMatter(readFileSync(path, 'utf8'));
  const lines = String(data.alt || '').split('\n').map((l) => l.trim()).filter(Boolean);
  if (lines.length === data.slides.length && !always) return { changed: false };
  // keep the writer's lines where they still line up by type order, regenerate the rest
  const out = data.slides.map((s, i) => (lines.length === data.slides.length ? lines[i] : clean(altFor(s, data))));
  data.alt = out.join('\n') + '\n';
  writeFileSync(path, stringifyFrontMatter(data, body));
  return { changed: true, lines: out.length };
}

if (process.argv[1] && resolve(process.argv[1]) === resolve(fileURLToPath(import.meta.url))) {
  for (const f of process.argv.slice(2).filter((a) => !a.startsWith('--'))) console.log(f, JSON.stringify(fixAlt(resolve(f), { always: process.argv.includes('--always') })));
}
