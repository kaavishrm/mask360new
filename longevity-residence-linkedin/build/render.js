// Renders every slide in slides.json to 1080x1350 PNGs with Playwright (Chromium).
// Format follows Kaavish's personal carousel system: photo cover with a bold white caps headline
// and his name small at the bottom, light grey slides with bold blue text, a B&W photo closing slide.
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const ROOT = __dirname;
const OUT = path.join(ROOT, '..', 'carousels', 'png');
const data = JSON.parse(fs.readFileSync(path.join(ROOT, 'slides.json'), 'utf8'));
const photo = 'data:image/png;base64,' + fs.readFileSync(path.join(ROOT, 'kaavish-cover.png')).toString('base64');

const BLUE = '#1A3CFF';
const GREY = '#ECEBE7';
const INK = '#6F6F6A';

function esc(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function html(slide, idx, total) {
  const num = String(idx + 1).padStart(2, '0') + ' / ' + String(total).padStart(2, '0');
  const base = `<!doctype html><html><head><meta charset="utf-8"><style>
    html,body{margin:0;padding:0;width:1080px;height:1350px;overflow:hidden;}
    body{font-family:"Inter Display","Inter",system-ui,sans-serif;-webkit-font-smoothing:antialiased;}
    .page{position:relative;width:1080px;height:1350px;}
    .photo{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:50% 12%;}
    .bw{filter:grayscale(1) contrast(1.08) brightness(.92);}
    .shade{position:absolute;inset:0;background:linear-gradient(to top, rgba(0,0,0,.86) 0%, rgba(0,0,0,.55) 38%, rgba(0,0,0,.12) 70%, rgba(0,0,0,.05) 100%);}
    .cover-text{position:absolute;left:72px;right:72px;bottom:150px;color:#fff;font-weight:800;text-transform:uppercase;letter-spacing:-.015em;line-height:.98;font-size:96px;}
    .name{position:absolute;left:72px;bottom:72px;color:rgba(255,255,255,.82);font-size:24px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;}
    .counter{position:absolute;right:72px;bottom:72px;color:rgba(255,255,255,.6);font-size:22px;font-weight:600;letter-spacing:.08em;}
    .grey{background:${GREY};}
    .label{position:absolute;left:84px;right:84px;top:110px;color:${BLUE};opacity:.72;font-size:30px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;}
    .body{position:absolute;left:84px;right:84px;top:110px;bottom:230px;}
    .body.with-label{top:190px;}
    .text{color:${BLUE};font-weight:700;letter-spacing:-.02em;line-height:1.12;font-size:74px;white-space:pre-line;}
    .source{position:absolute;left:84px;right:84px;bottom:150px;color:${INK};font-size:24px;font-weight:500;line-height:1.3;}
    .foot{position:absolute;left:84px;right:84px;bottom:72px;display:flex;justify-content:space-between;color:${INK};font-size:22px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;}
    .rule{position:absolute;left:84px;right:84px;bottom:124px;height:2px;background:rgba(26,60,255,.18);}
  </style></head><body>`;
  let inner = '';
  if (slide.type === 'cover') {
    inner = `<div class="page"><img class="photo" src="${photo}"><div class="shade"></div>
      <div class="cover-text fit" data-min="60">${esc(slide.text)}</div>
      <div class="name">Kaavish Ramchandani</div><div class="counter">${num}</div></div>`;
  } else if (slide.type === 'closing') {
    inner = `<div class="page"><img class="photo bw" src="${photo}"><div class="shade"></div>
      <div class="cover-text fit" data-min="52" style="font-size:78px">${esc(slide.text)}</div>
      <div class="name">Kaavish Ramchandani</div><div class="counter">${num}</div></div>`;
  } else {
    const label = slide.label ? `<div class="label">${esc(slide.label)}</div>` : '';
    const src = slide.source ? `<div class="source">${esc(slide.source)}</div>` : '';
    const len = slide.text.length;
    const max = slide.text.includes('\n') ? 60 : (len < 70 ? 108 : (len < 140 ? 92 : 74));
    inner = `<div class="page grey">${label}
      <div class="body ${slide.label ? 'with-label' : ''}"><div class="text fit" data-min="40" style="font-size:${max}px">${esc(slide.text)}</div></div>
      ${src}<div class="rule"></div>
      <div class="foot"><span>${num}</span><span>Kaavish Ramchandani</span></div></div>`;
  }
  return base + inner + '</body></html>';
}

// Shrinks the main text until it fits its container.
const fitScript = `
  (() => {
    const el = document.querySelector('.fit');
    if (!el) return;
    const label = document.querySelector('.label');
    const body = document.querySelector('.body');
    if (label && body) { body.style.top = (label.getBoundingClientRect().bottom + 34) + 'px'; }
    const min = parseInt(el.dataset.min || '40', 10);
    const box = el.parentElement.classList.contains('body') ? el.parentElement : null;
    const limit = () => box ? box.clientHeight : (el.getBoundingClientRect().bottom <= 1350 - 150 ? Infinity : 0);
    let size = parseFloat(getComputedStyle(el).fontSize);
    const overflows = () => {
      if (box) return el.scrollHeight > box.clientHeight;
      // cover text: keep its top below 140px so it never crowds the face
      return el.getBoundingClientRect().top < 560;
    };
    while (overflows() && size > min) { size -= 2; el.style.fontSize = size + 'px'; }
    return size;
  })();
`;

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1350 }, deviceScaleFactor: 1 });
  const report = [];
  for (const c of data.carousels) {
    const dir = path.join(OUT, c.id);
    fs.mkdirSync(dir, { recursive: true });
    for (let i = 0; i < c.slides.length; i++) {
      const s = c.slides[i];
      await page.setContent(html(s, i, c.slides.length), { waitUntil: 'load' });
      await page.evaluate(() => document.fonts.ready);
      const size = await page.evaluate(fitScript);
      const file = path.join(dir, `slide-${String(i + 1).padStart(2, '0')}.png`);
      await page.screenshot({ path: file, type: 'png' });
      report.push(`${c.id}/slide-${String(i + 1).padStart(2, '0')}  ${s.type}  font ${size}px`);
    }
  }
  await browser.close();
  fs.writeFileSync(path.join(ROOT, 'render-report.txt'), report.join('\n'));
  console.log(report.join('\n'));
})();
