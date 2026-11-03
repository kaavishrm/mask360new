// The one place the newsroom talks to Claude. Research calls use the server-side web search tool and return text;
// drafting calls use structured outputs (zod) and return a validated object. The HOUSE docs ride in the cached system prompt.
import Anthropic from '@anthropic-ai/sdk';
import { zodOutputFormat } from '@anthropic-ai/sdk/helpers/zod';
import { readFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
export const MODEL = process.env.NEWSROOM_MODEL || 'claude-opus-5-5';
let client = null;
export function anthropic() { if (!client) client = new Anthropic({ maxRetries: 3, timeout: 15 * 60 * 1000 }); return client; }

export function houseDocs() {
  const dir = join(HERE, '..', 'HOUSE');
  return readdirSync(dir).filter((f) => f.endsWith('.md')).sort().map((f) => `\n\n<doc name="${f}">\n${readFileSync(join(dir, f), 'utf8')}\n</doc>`).join('');
}

export function prompt(name) { return readFileSync(join(HERE, 'prompts', `${name}.md`), 'utf8'); }

// Stable system prefix (house docs + role brief) first, so prompt caching reuses it across every call of a run.
function system(role, extra = '') {
  return [
    { type: 'text', text: `You work in the Mask360 newsroom. The house rules below are binding; a story that breaks them does not run.${houseDocs()}`, cache_control: { type: 'ephemeral' } },
    { type: 'text', text: prompt(role) + (extra ? `\n\n${extra}` : '') },
  ];
}

function textOf(msg) { return msg.content.filter((b) => b.type === 'text').map((b) => b.text).join('\n'); }

function guard(msg, what) {
  if (msg.stop_reason === 'refusal') throw new Error(`${what}: the model declined (${msg.stop_details?.category || 'no category'}): ${msg.stop_details?.explanation || ''}`);
  if (msg.stop_reason === 'max_tokens') throw new Error(`${what}: output hit max_tokens; raise it or shorten the task`);
}

/** Research with web search. Returns the model's notes as text, plus the number of searches used. */
export async function research({ role, user, maxSearches = 12, effort = 'medium', maxTokens = 24000 }) {
  const c = anthropic();
  const stream = c.beta.messages.stream({
    model: MODEL,
    max_tokens: maxTokens,
    system: system(role),
    messages: [{ role: 'user', content: user }],
    tools: [{ type: 'web_search_20260209', name: 'web_search', max_uses: maxSearches }],
    output_config: { effort },
    betas: ['server-side-fallback-2026-07-01'],
    fallbacks: 'default',
  });
  const msg = await stream.finalMessage();
  guard(msg, role);
  return { text: textOf(msg), searches: msg.usage?.server_tool_use?.web_search_requests ?? 0, usage: msg.usage };
}

/** Draft a structured object. `schema` is a zod object. No tools, so the output is always the object. */
export async function draft({ role, user, schema, effort = 'medium', maxTokens = 16000, extraSystem = '' }) {
  const c = anthropic();
  const format = zodOutputFormat(schema);
  const msg = await c.beta.messages.parse({
    model: MODEL,
    max_tokens: maxTokens,
    system: system(role, extraSystem),
    messages: [{ role: 'user', content: user }],
    output_config: { effort, format },
    betas: ['server-side-fallback-2026-07-01'],
    fallbacks: 'default',
  });
  guard(msg, role);
  if (!msg.parsed_output) throw new Error(`${role}: structured output did not parse`);
  return { data: msg.parsed_output, usage: msg.usage };
}

/** Plain text answer, no tools. */
export async function say({ role, user, effort = 'low', maxTokens = 4000 }) {
  const c = anthropic();
  const msg = await c.beta.messages.create({ model: MODEL, max_tokens: maxTokens, system: system(role), messages: [{ role: 'user', content: user }], output_config: { effort }, betas: ['server-side-fallback-2026-07-01'], fallbacks: 'default' });
  guard(msg, role);
  return textOf(msg);
}

export function cost(usages) {
  // Claude Opus 5.5 list prices, USD per million tokens: input 4, output 20, cache read 0.20, cache write 5
  let inp = 0, out = 0, cr = 0, cw = 0;
  for (const u of usages.filter(Boolean)) { inp += u.input_tokens || 0; out += u.output_tokens || 0; cr += u.cache_read_input_tokens || 0; cw += u.cache_creation_input_tokens || 0; }
  return { input: inp, output: out, cacheRead: cr, cacheWrite: cw, usd: (inp * 4 + out * 20 + cr * 0.2 + cw * 5) / 1e6 };
}
