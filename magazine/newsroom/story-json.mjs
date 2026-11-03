// Emit one story as the JSON payload render.py expects. Usage: node newsroom/story-json.mjs <story.md> [outDir]
import { readFileSync } from 'node:fs';
import { basename, join, resolve } from 'node:path';
import { parseFrontMatter } from './yaml.mjs';
import { SECTIONS, ROOT } from './lint.mjs';
import { site } from '../config.mjs';

export function storyPayload(file, outDir) {
  const { data } = parseFrontMatter(readFileSync(file, 'utf8'));
  const slug = basename(file).replace(/\.md$/, '');
  const sec = SECTIONS[data.section];
  if (!sec) throw new Error(`unknown section ${data.section} in ${file}`);
  return {
    slug,
    title: data.title,
    dek: data.dek,
    section: { slug: data.section, name: sec.name, color: sec.color, ink: sec.ink },
    kicker: data.kicker,
    date: String(data.date),
    desk: data.desk,
    paid: data.paid === true,
    partner: data.partner || '',
    sponsor: data.sponsor || '',
    coverText: data.coverText === undefined || data.coverText === null ? '' : String(data.coverText),
    cover: data.cover || 'generated',
    credit: data.credit || '',
    score: data.score === undefined || data.score === null ? '' : String(data.score),
    slides: data.slides,
    handle: site.handle,
    site: site.short,
    root: ROOT,
    outDir: outDir || join(ROOT, 'public', 'carousels', slug),
  };
}

if (process.argv[1] && resolve(process.argv[1]) === resolve(new URL(import.meta.url).pathname)) {
  const [file, outDir] = process.argv.slice(2);
  if (!file) { console.error('usage: node newsroom/story-json.mjs <story.md> [outDir]'); process.exit(2); }
  process.stdout.write(JSON.stringify(storyPayload(resolve(file), outDir)));
}
