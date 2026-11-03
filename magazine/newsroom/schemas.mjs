// Structured output schemas for every desk. All fields present (null when unused) so strict JSON schema mode is happy.
import { z } from 'zod/v4';

const S = z.string();
const N = z.string().nullable();

export const Candidate = z.object({
  headline: S, section: z.enum(['campaigns', 'events', 'hospitality', 'fashion', 'people', 'culture']),
  format: z.enum(['tea', 'scorecard', 'guestlist', 'moves', 'edit', 'spotted', 'deeppour', 'hottake', 'receipts']),
  kicker: z.enum(['SPILLED', 'BREWING', 'SWEET', 'BITTER']),
  receipt: S, sources: z.array(S), why: S, monetization: z.enum(['yes', 'no', 'never']),
  score: z.object({ fresh: z.number(), relevant: z.number(), forwardable: z.number(), receipted: z.number(), safe: z.number() }),
});
export const ScoutOut = z.object({ candidates: z.array(Candidate) });

export const Pick = z.object({ index: z.number(), headline: S, section: S, format: S, kicker: S, brief: S, coverText: S });
export const EditorOut = z.object({ picks: z.array(Pick), rejected: z.array(z.object({ index: z.number(), reason: S })), note: S });

export const Slide = z.object({
  type: z.enum(['cover', 'tea', 'receipt', 'verdict', 'item', 'close']),
  title: N, pull: N, text: N,
  kind: z.enum(['quote', 'number', 'compare']).nullable(), quote: N, source: N, number: N, caption: N,
  leftLabel: N, leftText: N, rightLabel: N, rightText: N,
  name: N, why: N, catch: N, paid: z.boolean().nullable(),
});
export const Story = z.object({
  slug: S, title: S, dek: S,
  section: z.enum(['campaigns', 'events', 'hospitality', 'fashion', 'people', 'culture']),
  format: z.enum(['tea', 'scorecard', 'guestlist', 'moves', 'edit', 'spotted', 'branddrop', 'deeppour', 'hottake', 'receipts']),
  kicker: z.enum(['SPILLED', 'BREWING', 'SWEET', 'BITTER', 'PAID']),
  desk: S, coverText: S, score: N, sources: z.array(S), tags: z.array(S),
  paid: z.boolean(), partner: N, sponsor: N, slides: z.array(Slide), caption: S, linkedin: S, alt: z.array(S), body: S,
  askedForComment: N,
});

export const FactsOut = z.object({
  checks: z.array(z.object({ claim: S, source: N, verdict: z.enum(['supported', 'partly', 'unsupported', 'contradicted']), note: N })),
  hold: z.boolean(), holdReason: N, story: Story,
});
export const CopyOut = z.object({ story: Story, changes: z.array(S) });
export const LegalOut = z.object({ verdict: z.enum(['CLEAR', 'HOLD']), checklist: z.array(z.object({ point: z.number(), ok: z.boolean(), evidence: S })), legalNote: S, fixRequired: N, story: Story });
export const SocialOut = z.object({ caption: S, tags: z.array(S), linkedin: S, time: z.enum(['08:00', '12:30', '19:30']), reason: S });
export const NewsletterOut = z.object({ subject: S, opener: S, items: z.array(z.object({ title: S, line: S, url: S })), watchlist: z.array(S), signoff: S, seo: z.array(z.object({ slug: S, title: S, description: S })) });
export const SalesOut = z.object({ prospects: z.array(z.object({ brand: S, story: S, product: S, price: S, note: S, top: z.boolean() })) });
