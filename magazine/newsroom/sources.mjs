// Feeds the scout reads before it searches. Failures are skipped: the model's web search is the primary research path.
export const FEEDS = [
  { name: 'afaqs', url: 'https://www.afaqs.com/rss', sections: ['campaigns', 'people', 'culture'] },
  { name: 'ET BrandEquity', url: 'https://brandequity.economictimes.indiatimes.com/rss/topstories', sections: ['campaigns', 'people', 'culture'] },
  { name: 'ET BrandEquity marketing', url: 'https://brandequity.economictimes.indiatimes.com/rss/marketing', sections: ['campaigns'] },
  { name: 'ET BrandEquity advertising', url: 'https://brandequity.economictimes.indiatimes.com/rss/advertising', sections: ['campaigns', 'people'] },
  { name: 'Inc42', url: 'https://inc42.com/feed/', sections: ['fashion', 'hospitality', 'people'] },
  { name: 'Medianama', url: 'https://www.medianama.com/feed/', sections: ['campaigns', 'culture'] },
  { name: 'Campaign India', url: 'https://www.campaignindia.in/rss', sections: ['campaigns', 'people'] },
  { name: 'Storyboard18', url: 'https://www.storyboard18.com/rss', sections: ['campaigns', 'people', 'culture'] },
  { name: 'Homegrown', url: 'https://homegrown.co.in/feed', sections: ['culture', 'fashion'] },
  { name: 'Film Companion', url: 'https://www.filmcompanion.in/feed', sections: ['culture'] },
  { name: 'Adgully', url: 'https://www.adgully.com/rss', sections: ['campaigns', 'people'] },
];

const strip = (s) => String(s || '').replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1').replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/\s+/g, ' ').trim();

export function parseRss(xml) {
  const items = [];
  const re = /<(item|entry)\b[\s\S]*?<\/\1>/g;
  let m;
  while ((m = re.exec(xml))) {
    const x = m[0];
    const get = (tag) => { const r = new RegExp(`<${tag}\\b[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i').exec(x); return r ? strip(r[1]) : ''; };
    const linkAttr = /<link\b[^>]*href="([^"]+)"/i.exec(x);
    items.push({ title: get('title'), link: get('link') || (linkAttr ? linkAttr[1] : ''), date: get('pubDate') || get('published') || get('updated') || get('dc:date'), summary: get('description') || get('summary') || get('content:encoded') });
  }
  return items.filter((i) => i.title && i.link);
}

export async function fetchFeeds({ sections = null, maxAgeHours = 72, timeoutMs = 12000 } = {}) {
  const out = [];
  const cutoff = Date.now() - maxAgeHours * 3600 * 1000;
  await Promise.all(FEEDS.filter((f) => !sections || f.sections.some((s) => sections.includes(s))).map(async (f) => {
    try {
      const ctrl = new AbortController();
      const t = setTimeout(() => ctrl.abort(), timeoutMs);
      const r = await fetch(f.url, { headers: { 'user-agent': 'Mozilla/5.0 (compatible; Mask360Newsroom/1.0; +https://mask360.agency)' }, signal: ctrl.signal, redirect: 'follow' });
      clearTimeout(t);
      if (!r.ok) return;
      const items = parseRss(await r.text());
      for (const it of items) {
        const ts = Date.parse(it.date);
        if (!isNaN(ts) && ts < cutoff) continue;
        out.push({ feed: f.name, sections: f.sections, ...it, summary: it.summary.slice(0, 400) });
      }
    } catch { /* skipped */ }
  }));
  return out;
}
