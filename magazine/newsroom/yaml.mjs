// Minimal YAML subset parser for story front matter. No dependencies.
// Supports: key: value, key: "quoted", key: | block scalars, key: [a, b] inline arrays,
// nested maps by indentation, lists of scalars (- x) and lists of flat maps (- key: v / key: v).
// Full-line comments (# ...) are ignored. Values are strings except true/false and plain integers.

export function parseFrontMatter(src) {
  const m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(src);
  if (!m) throw new Error('missing front matter (--- block at top of file)');
  return { data: parseYaml(m[1]), body: m[2].replace(/^\r?\n/, '') };
}

export function parseYaml(text) {
  const lines = text.replace(/\r/g, '').split('\n');
  const rows = [];
  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i];
    const indent = raw.match(/^ */)[0].length;
    if (/^\s*$/.test(raw)) { rows.push({ n: i + 1, indent, text: '', blank: true, raw }); continue; }
    // a line starting with # is a comment for structure, but content inside a block scalar (hashtags in captions)
    rows.push({ n: i + 1, indent, text: raw.trim(), blank: /^\s*#/.test(raw), comment: /^\s*#/.test(raw), raw });
  }
  const out = parseMap(rows, 0, rows.length, 0);
  return out.value;
}

function scalar(v) {
  v = v.trim();
  if (v === '') return '';
  // Double-quoted scalars are written with JSON escaping (see stringifyFrontMatter), so decode them the same way.
  // The fallback keeps a lone backslash as it is (TBWA\Lintas) so a hand-written file still reads correctly.
  if (v.startsWith('"') && v.endsWith('"') && v.length >= 2) {
    try { return JSON.parse(v); } catch { return v.slice(1, -1).replace(/\\\\/g, '\\').replace(/\\"/g, '"'); }
  }
  if (v.startsWith("'") && v.endsWith("'") && v.length >= 2) return v.slice(1, -1).replace(/''/g, "'");
  if (v === 'true') return true;
  if (v === 'false') return false;
  if (v === 'null' || v === '~') return null;
  if (/^-?\d+$/.test(v)) return Number(v);
  if (/^-?\d+\.\d+$/.test(v)) return Number(v);
  if (v.startsWith('[') && v.endsWith(']')) {
    const inner = v.slice(1, -1).trim();
    if (!inner) return [];
    return inner.split(',').map((s) => scalar(s));
  }
  return v;
}

function nextNonBlank(rows, i, end) { while (i < end && rows[i].blank) i++; return i; }

// Parse a block scalar (|) whose content lines are indented more than parentIndent, starting at row i.
function blockScalar(rows, i, end, parentIndent) {
  const lines = [];
  let j = i;
  let base = null;
  while (j < end) {
    const r = rows[j];
    if (r.blank && !r.comment) { lines.push(''); j++; continue; }
    if (r.indent <= parentIndent) break;
    if (base === null) base = r.indent;
    lines.push(r.raw.slice(Math.min(base, r.indent)));
    j++;
  }
  while (lines.length && lines[lines.length - 1] === '') lines.pop();
  return { value: lines.join('\n') + (lines.length ? '\n' : ''), next: j };
}

function parseMap(rows, i, end, indent) {
  const obj = {};
  i = nextNonBlank(rows, i, end);
  while (i < end) {
    const r = rows[i];
    if (r.blank) { i++; continue; }
    if (r.indent < indent) break;
    if (r.indent > indent) throw new Error(`line ${r.n}: unexpected indent`);
    if (r.text.startsWith('- ')) break; // belongs to a parent list
    const km = /^([^:]+):(?:\s(.*))?$/.exec(r.text);
    if (!km) throw new Error(`line ${r.n}: expected "key: value", got "${r.text}"`);
    const key = km[1].trim();
    const rest = km[2] === undefined ? '' : km[2];
    if (rest.trim() === '|' || rest.trim() === '|-' || rest.trim() === '>') {
      const b = blockScalar(rows, i + 1, end, r.indent);
      obj[key] = rest.trim() === '>' ? b.value.replace(/\n(?!\n)/g, ' ').trim() : (rest.trim() === '|-' ? b.value.replace(/\n$/, '') : b.value);
      i = b.next; continue;
    }
    if (rest.trim() !== '') { obj[key] = scalar(rest); i++; continue; }
    // nested block: list or map
    const j = nextNonBlank(rows, i + 1, end);
    if (j >= end || rows[j].indent <= r.indent) { obj[key] = (j < end && rows[j].indent === r.indent && rows[j].text.startsWith('- ')) ? null : ''; if (obj[key] === null) { const l = parseList(rows, j, end, r.indent); obj[key] = l.value; i = l.next; } else i = j; continue; }
    if (rows[j].text.startsWith('- ')) { const l = parseList(rows, j, end, rows[j].indent); obj[key] = l.value; i = l.next; }
    else { const mm = parseMap(rows, j, end, rows[j].indent); obj[key] = mm.value; i = mm.next; }
  }
  return { value: obj, next: i };
}

function parseList(rows, i, end, indent) {
  const arr = [];
  i = nextNonBlank(rows, i, end);
  while (i < end) {
    const r = rows[i];
    if (r.blank) { i++; continue; }
    if (r.indent < indent) break;
    if (r.indent > indent) throw new Error(`line ${r.n}: unexpected indent in list`);
    if (!r.text.startsWith('- ')) break;
    const item = r.text.slice(2).trim();
    const km = /^([^:\s][^:]*):(?:\s(.*))?$/.exec(item);
    const looksLikeMap = km && !/^https?:/.test(item) && !(item.startsWith('"') || item.startsWith("'"));
    if (looksLikeMap) {
      // flat map item: first key on the dash line, following keys at indent + 2
      const sub = [{ n: r.n, indent: indent + 2, text: item, raw: ' '.repeat(indent + 2) + item }];
      let j = i + 1;
      while (j < end) { const q = rows[j]; if (q.blank) { sub.push(q); j++; continue; } if (q.indent < indent + 2 || (q.indent === indent && q.text.startsWith('- '))) break; sub.push(q); j++; }
      const mm = parseMap(sub, 0, sub.length, indent + 2);
      arr.push(mm.value); i = j;
    } else { arr.push(scalar(item)); i++; }
  }
  return { value: arr, next: i };
}

export function stringifyFrontMatter(data, body) {
  const lines = ['---'];
  const q = (v) => {
    if (typeof v === 'boolean' || typeof v === 'number') return String(v);
    const s = String(v ?? '');
    return /[:#\[\]{}]|^\s|\s$|^$/.test(s) && !/^https?:/.test(s) ? JSON.stringify(s) : (/^https?:/.test(s) && /\s/.test(s) ? JSON.stringify(s) : s);
  };
  const emit = (key, v, ind) => {
    const p = ' '.repeat(ind);
    if (Array.isArray(v)) {
      if (!v.length) { lines.push(`${p}${key}: []`); return; }
      lines.push(`${p}${key}:`);
      for (const it of v) {
        if (it && typeof it === 'object') {
          const ks = Object.keys(it); let first = true;
          for (const k of ks) { const val = it[k]; const s = String(val ?? ''); if (s.includes('\n')) { lines.push(`${p}${first ? '- ' : '  '}${k}: |`); for (const l of s.replace(/\n$/, '').split('\n')) lines.push(`${p}    ${l}`); } else lines.push(`${p}${first ? '- ' : '  '}${k}: ${q(val)}`); first = false; }
        } else lines.push(`${p}- ${q(it)}`);
      }
      return;
    }
    if (v && typeof v === 'object') { lines.push(`${p}${key}:`); for (const k of Object.keys(v)) emit(k, v[k], ind + 2); return; }
    const s = String(v ?? '');
    if (s.includes('\n')) { lines.push(`${p}${key}: |`); for (const l of s.replace(/\n$/, '').split('\n')) lines.push(`${p}  ${l}`); }
    else lines.push(`${p}${key}: ${q(v)}`);
  };
  for (const k of Object.keys(data)) emit(k, data[k], 0);
  lines.push('---', '');
  return lines.join('\n') + (body || '');
}
