// Small Markdown renderer for story bodies: headings, paragraphs, lists, quotes, rules, links, images, bold, italic, raw HTML blocks.
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function inline(s) {
  let t = esc(s);
  t = t.replace(/!\[([^\]]*)\]\(([^)\s]+)(?:\s"([^"]*)")?\)/g, (m, alt, src) => `<img src="${src}" alt="${alt}" loading="lazy">`);
  t = t.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (m, txt, href) => `<a href="${href}"${/^https?:/.test(href) ? ' rel="noopener" target="_blank"' : ''}>${txt}</a>`);
  t = t.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  t = t.replace(/(^|[^*\w])\*([^*\n]+)\*(?=[^*\w]|$)/g, '$1<em>$2</em>');
  t = t.replace(/`([^`]+)`/g, '<code>$1</code>');
  return t;
}

export function render(md) {
  const lines = String(md).replace(/\r/g, '').split('\n');
  const out = [];
  let i = 0;
  const flushPara = (buf) => { if (buf.length) out.push(`<p>${inline(buf.join(' '))}</p>`); };
  let para = [];
  while (i < lines.length) {
    const l = lines[i];
    if (/^\s*$/.test(l)) { flushPara(para); para = []; i++; continue; }
    if (/^<[a-zA-Z!/]/.test(l.trim())) { flushPara(para); para = []; const raw = []; while (i < lines.length && !/^\s*$/.test(lines[i])) raw.push(lines[i++]); out.push(raw.join('\n')); continue; }
    const h = /^(#{2,4})\s+(.*)$/.exec(l);
    if (h) { flushPara(para); para = []; const n = h[1].length; out.push(`<h${n}>${inline(h[2])}</h${n}>`); i++; continue; }
    if (/^---+\s*$/.test(l) || /^\*\*\*+\s*$/.test(l)) { flushPara(para); para = []; out.push('<hr>'); i++; continue; }
    if (/^>\s?/.test(l)) { flushPara(para); para = []; const q = []; while (i < lines.length && /^>\s?/.test(lines[i])) q.push(lines[i++].replace(/^>\s?/, '')); out.push(`<blockquote>${inline(q.join(' '))}</blockquote>`); continue; }
    if (/^\s*[-*•]\s+/.test(l)) { flushPara(para); para = []; const items = []; while (i < lines.length && /^\s*[-*•]\s+/.test(lines[i])) items.push(lines[i++].replace(/^\s*[-*•]\s+/, '')); out.push(`<ul>${items.map((x) => `<li>${inline(x)}</li>`).join('')}</ul>`); continue; }
    if (/^\s*\d+[.)]\s+/.test(l)) { flushPara(para); para = []; const items = []; while (i < lines.length && /^\s*\d+[.)]\s+/.test(lines[i])) items.push(lines[i++].replace(/^\s*\d+[.)]\s+/, '')); out.push(`<ol>${items.map((x) => `<li>${inline(x)}</li>`).join('')}</ol>`); continue; }
    para.push(l.trim()); i++;
  }
  flushPara(para);
  return out.join('\n');
}

export function plain(md) {
  return String(md).replace(/!\[[^\]]*\]\([^)]*\)/g, '').replace(/\[([^\]]+)\]\([^)]*\)/g, '$1').replace(/[#*>`]/g, '').replace(/\s+/g, ' ').trim();
}
