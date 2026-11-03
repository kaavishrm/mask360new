#!/usr/bin/env python3
"""Carousel renderer. Reads one story as JSON on stdin, writes slides, cover, card, OG image and a PDF.

Usage: node newsroom/story-json.mjs content/stories/2026/11/slug.md | python3 -I newsroom/render.py
Input JSON: {slug, title, dek, section:{slug,name,color,ink}, kicker, date, desk, paid, partner, coverText,
             cover ("generated" | "photo:<path relative to magazine/public>"), credit, slides:[...], handle, outDir, root}
Tokens come from HOUSE/02-design-system.md. Only Pillow is required.
"""
import json, os, sys, math, re
from PIL import Image, ImageDraw, ImageFont, ImageFilter

HERE = os.path.dirname(os.path.abspath(__file__))
FONTS = os.path.join(HERE, 'fonts')
W, H = 1080, 1350
SAFE = 72
BLACK, WHITE, GREY, FIELD = (0, 0, 0), (255, 255, 255), (128, 128, 128), (234, 234, 234)
SPINE = ['#FF3332', '#FF00B7', '#F9C728', '#6E2CF4', '#3FAD57', '#0000EE']

_fonts = {}
def font(kind, size):
    key = (kind, int(size))
    if key not in _fonts:
        name = {'serif': 'InstrumentSerif-Regular.ttf', 'italic': 'InstrumentSerif-Italic.ttf', 'sans': 'Amulya-Regular.ttf', 'sansm': 'Amulya-Medium.ttf'}[kind]
        _fonts[key] = ImageFont.truetype(os.path.join(FONTS, name), int(size))
    return _fonts[key]

def hexrgb(h):
    h = h.lstrip('#'); return tuple(int(h[i:i + 2], 16) for i in (0, 2, 4))

def text_width(draw, s, f, tracking=0):
    if not s: return 0
    return draw.textlength(s, font=f) + tracking * (len(s) - 1)

def draw_text(draw, xy, s, f, fill, tracking=0):
    x, y = xy
    if tracking == 0:
        draw.text((x, y), s, font=f, fill=fill); return
    for ch in s:
        draw.text((x, y), ch, font=f, fill=fill)
        x += draw.textlength(ch, font=f) + tracking

def wrap(draw, s, f, maxw, tracking=0):
    words = str(s).split()
    lines, cur = [], ''
    for w in words:
        t = (cur + ' ' + w).strip()
        if text_width(draw, t, f, tracking) <= maxw or not cur: cur = t
        else: lines.append(cur); cur = w
    if cur: lines.append(cur)
    # a single word wider than maxw gets hard-broken; fit_text treats that as not fitting and shrinks first
    out = []
    global _broke
    _broke = False
    for ln in lines:
        while text_width(draw, ln, f, tracking) > maxw and len(ln) > 1:
            cut = len(ln) - 1
            while cut > 1 and text_width(draw, ln[:cut], f, tracking) > maxw: cut -= 1
            out.append(ln[:cut]); ln = ln[cut:]; _broke = True
        out.append(ln)
    return out
_broke = False

def fit_text(draw, s, kind, size, minsize, maxw, maxlines, leading=1.0, tracking_em=0.0):
    """Shrink the size until the wrapped text fits in maxlines. Returns (font, lines, line_height, tracking)."""
    size = int(size)
    while True:
        f = font(kind, size)
        tr = tracking_em * size
        lines = wrap(draw, s, f, maxw, tr)
        fits = len(lines) <= maxlines and not _broke
        if fits or size <= minsize:
            return f, lines, int(size * leading), tr
        size = max(minsize, int(size * 0.92))

def block(draw, xy, s, kind, size, minsize, maxw, maxlines, fill, leading=1.0, tracking_em=0.0, align='left'):
    f, lines, lh, tr = fit_text(draw, s, kind, size, minsize, maxw, maxlines, leading, tracking_em)
    x, y = xy
    for ln in lines:
        lx = x
        if align == 'center': lx = x + (maxw - text_width(draw, ln, f, tr)) / 2
        draw_text(draw, (lx, y), ln, f, fill, tr)
        y += lh
    return y

def pill(draw, xy, s, size=24, fg=WHITE, bg=BLACK, pad=(22, 12), right=False):
    f = font('sansm', size)
    tw = text_width(draw, s, f, 0.04 * size)
    w, h = tw + pad[0] * 2, size + pad[1] * 2
    x, y = xy
    if right: x = x - w
    draw.rounded_rectangle([x, y, x + w, y + h], radius=h / 2, fill=bg)
    draw_text(draw, (x + pad[0], y + pad[1] - size * 0.12), s, f, fg, 0.04 * size)
    return w, h

def masthead(draw, fill, size=40, x=SAFE, y=None):
    f = font('serif', size)
    if y is None: y = H - SAFE - size
    draw_text(draw, (x, y), 'Mask360', f, fill, -0.04 * size)

def page_no(draw, i, n, fill):
    f = font('sans', 26)
    s = f'{i:02d} / {n:02d}'
    draw_text(draw, (W - SAFE - text_width(draw, s, f), H - SAFE - 26), s, f, fill)

def label(draw, s, fill, y=SAFE):
    draw_text(draw, (SAFE, y), s.upper(), font('sansm', 28), fill, -0.04 * 28)

def spine(draw, cx, y, w=16, gap=8, h=4):
    total = 6 * w + 5 * gap
    x = cx - total / 2
    for c in SPINE:
        draw.rectangle([x, y, x + w, y + h], fill=hexrgb(c)); x += w + gap

def arrow(draw, x, y, fill, size=36):
    draw.line([(x, y + size / 2), (x + size, y + size / 2)], fill=fill, width=4)
    draw.line([(x + size * 0.6, y + size * 0.15), (x + size, y + size / 2), (x + size * 0.6, y + size * 0.85)], fill=fill, width=4, joint='curve')

def ground(color):
    return Image.new('RGB', (W, H), color)

def presented_by(draw, st, ink, y=None):
    sp = str(st.get('sponsor') or '').strip()
    if not sp: return
    f = font('sansm', 24); t = f'PRESENTED BY {sp.upper()}'
    if y is None: y = SAFE + 56
    draw_text(draw, (W - SAFE - text_width(draw, t, f, -0.02 * 24), y), t, f, ink, -0.02 * 24)

def cover_photo(path, title, sec, kicker, paid, st=None):
    st = st or {}
    im = Image.open(path).convert('RGB')
    # cover crop to 4:5
    r = max(W / im.width, H / im.height)
    im = im.resize((max(W, int(im.width * r)), max(H, int(im.height * r))), Image.LANCZOS)
    left, top = (im.width - W) // 2, (im.height - H) // 2
    im = im.crop((left, top, left + W, top + H))
    scrim = Image.new('L', (W, H), 0)
    sd = ImageDraw.Draw(scrim)
    for yy in range(H):
        k = max(0, (yy - H * 0.35) / (H * 0.65))
        sd.line([(0, yy), (W, yy)], fill=int(190 * k))
    im.paste(Image.new('RGB', (W, H), BLACK), (0, 0), scrim)
    draw = ImageDraw.Draw(im)
    label(draw, sec['name'], WHITE)
    pill(draw, (W - SAFE, SAFE - 8), 'PAID PARTNERSHIP' if paid else kicker, right=True)
    presented_by(draw, st, WHITE)
    f, lines, lh, tr = fit_text(draw, title, 'serif', 104, 64, W - 2 * SAFE, 5, 1.0, -0.03)
    y = H - SAFE - 56 - 40 - lh * len(lines)
    for ln in lines: draw_text(draw, (SAFE, y), ln, f, WHITE, tr); y += lh
    masthead(draw, WHITE, 56)
    arrow(draw, W - SAFE - 40, H - SAFE - 44, WHITE)
    return im

def slide_cover(s, st):
    sec, ink = st['section'], hexrgb(st['section']['ink'])
    bg = hexrgb(sec['color'])
    title = s.get('title') or st['title']
    if str(st.get('cover', 'generated')).startswith('photo:'):
        p = os.path.join(st['root'], 'public', st['cover'][6:])
        if os.path.exists(p):
            try: return cover_photo(p, title, sec, st['kicker'], st.get('paid'))
            except Exception as e: print('photo cover failed, generated instead:', e, file=sys.stderr)
    im = ground(bg); draw = ImageDraw.Draw(im)
    label(draw, sec['name'], ink)
    pill(draw, (W - SAFE, SAFE - 8), 'PAID PARTNERSHIP' if st.get('paid') else st['kicker'], right=True)
    presented_by(draw, st, ink)
    ct = str(st.get('coverText') or '').strip()
    top = SAFE + 90
    if ct and len(ct) <= 14:
        # the word or number set huge, the headline under it
        f, lines, lh, tr = fit_text(draw, ct, 'serif', 400 if len(ct) <= 6 else 300, 140, W - 2 * SAFE, 2, 0.9, -0.05)
        y = top + 60
        for ln in lines: draw_text(draw, (SAFE, y), ln, f, ink, tr); y += lh
        y += 48
        block(draw, (SAFE, y), title, 'serif', 76, 44, W - 2 * SAFE, 5, ink, 1.04, -0.03)
    else:
        f, lines, lh, tr = fit_text(draw, title, 'serif', 132, 80, W - 2 * SAFE, 6, 1.0, -0.035)
        y = top + 60
        for ln in lines: draw_text(draw, (SAFE, y), ln, f, ink, tr); y += lh
    masthead(draw, ink, 56)
    arrow(draw, W - SAFE - 40, H - SAFE - 44, ink)
    return im

def slide_tea(s, st, i, n):
    sec = st['section']; im = ground(WHITE); draw = ImageDraw.Draw(im)
    label(draw, sec['name'], hexrgb(sec['color']))
    maxw = W - 2 * SAFE
    pf = fit_text(draw, s['pull'], 'serif', 104, 64, maxw, 3, 1.0, -0.03) if s.get('pull') else None
    tf = fit_text(draw, s.get('text', ''), 'sans', 42, 30, maxw, 13, 1.32, -0.02)
    total = (pf[2] * len(pf[1]) + 44 if pf else 0) + tf[2] * len(tf[1])
    y = max(SAFE + 110, min((H - total) / 2 - 30, H - SAFE - 120 - total))
    if pf:
        for ln in pf[1]: draw_text(draw, (SAFE, y), ln, pf[0], BLACK, pf[3]); y += pf[2]
        y += 44
    for ln in tf[1]: draw_text(draw, (SAFE, y), ln, tf[0], BLACK, tf[3]); y += tf[2]
    masthead(draw, BLACK); page_no(draw, i, n, BLACK)
    return im

def slide_receipt(s, st, i, n):
    sec = st['section']; im = ground(WHITE); draw = ImageDraw.Draw(im)
    draw.rectangle([SAFE - 24, SAFE - 24, W - SAFE + 24, H - SAFE + 24], outline=BLACK, width=2)
    label(draw, 'The receipt', hexrgb(sec['color']))
    kind = s.get('kind')
    if kind == 'image':
        # the media receipt: the actual post, article, still or release, with caption and credit
        box_top, box_h = SAFE + 90, 760
        placed = False
        img = s.get('image')
        if img:
            p = os.path.join(st['root'], 'public', img)
            if os.path.exists(p):
                try:
                    ph = Image.open(p).convert('RGB'); bw = W - 2 * SAFE
                    r = min(bw / ph.width, box_h / ph.height)
                    ph = ph.resize((max(1, int(ph.width * r)), max(1, int(ph.height * r))), Image.LANCZOS)
                    x = SAFE + (bw - ph.width) // 2
                    im.paste(ph, (x, box_top)); draw.rectangle([x, box_top, x + ph.width, box_top + ph.height], outline=BLACK, width=2)
                    box_h = ph.height; placed = True
                except Exception as e: print('receipt image failed:', e, file=sys.stderr)
        if not placed:
            draw.rectangle([SAFE, box_top, W - SAFE, box_top + box_h], fill=FIELD)
        y = box_top + box_h + 32
        y = block(draw, (SAFE, y), s.get('caption', ''), 'sans', 34, 26, W - 2 * SAFE, 4, BLACK, 1.3, -0.02) + 14
        block(draw, (SAFE, y), s.get('credit', ''), 'sans', 24, 20, W - 2 * SAFE, 2, GREY, 1.3, -0.01)
    elif kind == 'number':
        f, lines, lh, tr = fit_text(draw, str(s.get('number', '')), 'serif', 360, 140, W - 2 * SAFE, 2, 0.95, -0.05)
        y = SAFE + 260
        for ln in lines: draw_text(draw, (SAFE, y), ln, f, BLACK, tr); y += lh
        block(draw, (SAFE, y + 40), s.get('caption', ''), 'sans', 40, 28, W - 2 * SAFE, 6, BLACK, 1.3, -0.02)
    elif kind == 'quote':
        y = SAFE + 140
        draw_text(draw, (SAFE, y - 40), '“', font('serif', 160), BLACK)
        y = block(draw, (SAFE, y + 80), s.get('quote', ''), 'italic', 64, 40, W - 2 * SAFE, 9, BLACK, 1.06, -0.02)
        block(draw, (SAFE, y + 36), s.get('source', ''), 'sans', 28, 24, W - 2 * SAFE, 3, GREY, 1.3, -0.02)
    else:  # compare
        colw = (W - 2 * SAFE - 48) / 2
        for k, (lab, txt) in enumerate([(s.get('leftLabel', ''), s.get('leftText', '')), (s.get('rightLabel', ''), s.get('rightText', ''))]):
            x = SAFE + k * (colw + 48)
            draw_text(draw, (x, SAFE + 200), str(lab).upper(), font('sansm', 30), GREY, -0.02 * 30)
            block(draw, (x, SAFE + 260), txt, 'serif', 64, 40, colw, 10, BLACK, 1.08, -0.02)
        draw.line([(W / 2, SAFE + 200), (W / 2, H - SAFE - 120)], fill=BLACK, width=1)
    masthead(draw, BLACK); page_no(draw, i, n, BLACK)
    return im

def slide_verdict(s, st, i, n):
    sec = st['section']; ink = hexrgb(sec['ink']); im = ground(hexrgb(sec['color'])); draw = ImageDraw.Draw(im)
    label(draw, 'The read', ink)
    txt = re.sub(r'^\s*the read:\s*', '', s.get('text', ''), flags=re.I)
    f, lines, lh, tr = fit_text(draw, txt, 'serif', 92, 52, W - 2 * SAFE, 11, 1.06, -0.03)
    total = lh * len(lines)
    y = max(SAFE + 110, min((H - total) / 2 - 40, H - SAFE - 240 - total))
    for ln in lines: draw_text(draw, (SAFE, y), ln, f, ink, tr); y += lh
    if st.get('score') not in (None, ''):
        sc = str(st['score'])
        f = font('serif', 180)
        draw_text(draw, (W - SAFE - text_width(draw, sc, f, -0.05 * 180), H - SAFE - 300), sc, f, ink, -0.05 * 180)
        draw_text(draw, (W - SAFE - text_width(draw, '/10', font('sans', 32)), H - SAFE - 110 - 32), '/10', font('sans', 32), ink)
    masthead(draw, ink); page_no(draw, i, n, ink)
    return im

def monogram(draw, cx, cy, r, name, color, ink):
    draw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=BLACK)
    parts = [p for p in re.split(r'[\s,]+', str(name)) if p]
    initials = ''.join(p[0] for p in parts[:2]).upper() or 'M'
    f = font('serif', int(r * 1.1))
    tw = text_width(draw, initials, f, -0.04 * r)
    draw_text(draw, (cx - tw / 2, cy - r * 0.68), initials, f, WHITE, -0.04 * r)

def slide_item(s, st, i, n):
    sec = st['section']; im = ground(WHITE); draw = ImageDraw.Draw(im)
    label(draw, sec['name'], hexrgb(sec['color']))
    if s.get('paid'): pill(draw, (W - SAFE, SAFE - 8), 'PAID PARTNERSHIP', right=True)
    maxw = W - 2 * SAFE
    catch = 'The catch: ' + str(s.get('catch', ''))
    # measure the text at a scale that fits under the image box; shrink the box before the type
    bottom_limit = H - SAFE - 60
    for box_h, scale in ((560, 1.0), (480, 1.0), (440, 0.92), (400, 0.85), (360, 0.78)):
        nf = fit_text(draw, s.get('name', ''), 'serif', int(68 * scale), 40, maxw, 2, 1.02, -0.03)
        wf = fit_text(draw, s.get('why', ''), 'sans', int(36 * scale), 26, maxw, 5, 1.3, -0.02)
        cf = fit_text(draw, catch, 'sans', int(32 * scale), 24, maxw, 4, 1.3, -0.02)
        total = nf[2] * len(nf[1]) + 18 + wf[2] * len(wf[1]) + 22 + cf[2] * len(cf[1])
        if SAFE + 80 + box_h + 40 + total <= bottom_limit: break
    box = (SAFE, SAFE + 80, W - SAFE, SAFE + 80 + box_h)
    img = s.get('image')
    placed = False
    if img:
        p = os.path.join(st['root'], 'public', img)
        if os.path.exists(p):
            try:
                ph = Image.open(p).convert('RGB'); bw, bh = box[2] - box[0], box[3] - box[1]
                r = max(bw / ph.width, bh / ph.height); ph = ph.resize((int(ph.width * r) + 1, int(ph.height * r) + 1), Image.LANCZOS)
                l, t = (ph.width - bw) // 2, (ph.height - bh) // 2; im.paste(ph.crop((l, t, l + bw, t + bh)), (box[0], box[1])); placed = True
            except Exception as e: print('item image failed:', e, file=sys.stderr)
    if not placed:
        draw.rectangle(box, fill=hexrgb(sec['color']))
        monogram(draw, (box[0] + box[2]) / 2, (box[1] + box[3]) / 2, int(box_h * 0.3), s.get('name', 'M'), sec['color'], sec['ink'])
    y = box[3] + 40
    for f, lines, lh, tr, fill, gap in ((nf[0], nf[1], nf[2], nf[3], BLACK, 18), (wf[0], wf[1], wf[2], wf[3], BLACK, 22), (cf[0], cf[1], cf[2], cf[3], GREY, 0)):
        for ln in lines: draw_text(draw, (SAFE, y), ln, f, fill, tr); y += lh
        y += gap
    masthead(draw, BLACK); page_no(draw, i, n, BLACK)
    return im

def slide_close(s, st, i, n):
    im = ground(BLACK); draw = ImageDraw.Draw(im)
    spine(draw, W / 2, SAFE + 10)
    y = H * 0.36
    y = block(draw, (SAFE, y), 'Steeped by Mask360.', 'serif', 104, 64, W - 2 * SAFE, 2, WHITE, 1.0, -0.03) + 24
    draw_text(draw, (SAFE, y), 'Three. Six. Tea.', font('serif', 48), GREY, -0.02 * 48); y += 110
    block(draw, (SAFE, y), s.get('text') or 'Send this to the one person who needs it.', 'sans', 36, 28, W - 2 * SAFE, 3, WHITE, 1.3, -0.02)
    handle = st.get('handle') or '@mask360'
    if str(st.get('sponsor') or '').strip():
        presented_by(draw, st, WHITE, y=H - SAFE - 100)
    draw_text(draw, (SAFE, H - SAFE - 30), handle, font('sansm', 28), WHITE, -0.02 * 28)
    sitef = font('sans', 26); site = st.get('site', 'mask360.agency/magazine')
    draw_text(draw, (W - SAFE - text_width(draw, site, sitef), H - SAFE - 28), site, sitef, GREY)
    return im

def og_image(st, cover):
    """1200 x 630: section colour ground, headline re-set, masthead. Photo covers show the photo left."""
    sec = st['section']; ink = hexrgb(sec['ink'])
    im = Image.new('RGB', (1200, 630), hexrgb(sec['color'])); draw = ImageDraw.Draw(im)
    textw = 1200 - 2 * 56
    if str(st.get('cover', '')).startswith('photo:'):
        ph = cover.crop((0, 0, W, H)).resize((504, 630), Image.LANCZOS); im.paste(ph, (696, 0)); textw = 696 - 56 - 40
    draw_text(draw, (56, 48), sec['name'].upper(), font('sansm', 22), ink, -0.04 * 22)
    pill(draw, (56 + text_width(draw, sec['name'].upper(), font('sansm', 22), -0.04 * 22) + 24, 40), 'PAID PARTNERSHIP' if st.get('paid') else st['kicker'], size=18, pad=(16, 8))
    block(draw, (56, 110), st['title'], 'serif', 100, 52, textw, 4, ink, 1.0, -0.03)
    f = font('serif', 44); draw_text(draw, (56, 630 - 48 - 44), 'Mask360', f, ink, -0.04 * 44)
    tag = 'Three. Six. Tea.'; ft = font('sans', 20)
    draw_text(draw, (56 + text_width(draw, 'Mask360', f, -0.04 * 44) + 24, 630 - 48 - 26), tag, ft, ink)
    return im

def tile(st, size, cover):
    """Card or hero image without the headline: the coverText set huge on the section colour, or the photo cropped."""
    tw, th = size
    sec = st['section']; ink = hexrgb(sec['ink'])
    if str(st.get('cover', '')).startswith('photo:'):
        p = os.path.join(st['root'], 'public', st['cover'][6:])
        if os.path.exists(p):
            ph = Image.open(p).convert('RGB'); r = max(tw / ph.width, th / ph.height)
            ph = ph.resize((int(ph.width * r) + 1, int(ph.height * r) + 1), Image.LANCZOS)
            l, t = (ph.width - tw) // 2, (ph.height - th) // 2
            return ph.crop((l, t, l + tw, t + th))
    im = Image.new('RGB', (tw, th), hexrgb(sec['color'])); draw = ImageDraw.Draw(im)
    pad = int(tw * 0.066)
    if tw > th:  # hero: tone on tone, the headline is overlaid on the web
        base = hexrgb(sec['color']); ink = tuple(int(base[k] * 0.78 + ink[k] * 0.22) for k in range(3))
    ct = str(st.get('coverText') or '').strip() or st['title']
    big = len(ct) <= 14
    size0 = int(min(tw, th) * (0.42 if len(ct) <= 6 else 0.3)) if big else int(min(tw, th) * 0.11)
    f, lines, lh, tr = fit_text(draw, ct, 'serif', size0, int(size0 * 0.4), tw - 2 * pad, 2 if big else 6, 0.92, -0.05 if big else -0.035)
    total = lh * len(lines)
    y = (th - total) / 2 - (th * 0.04)
    for ln in lines: draw_text(draw, (pad, y), ln, f, ink, tr); y += lh
    ms = int(min(tw, th) * 0.05)
    draw_text(draw, (pad, th - pad - ms), 'Mask360', font('serif', ms), ink, -0.04 * ms)
    draw_text(draw, (pad, pad), sec['name'].upper(), font('sansm', int(ms * 0.55)), ink, -0.04 * ms * 0.55)
    return im

def main():
    st = json.load(sys.stdin)
    out = st['outDir']; os.makedirs(out, exist_ok=True)
    slides = st['slides']; n = len(slides)
    images = []
    for i, s in enumerate(slides, 1):
        t = s.get('type')
        if t == 'cover': im = slide_cover(s, st)
        elif t == 'tea': im = slide_tea(s, st, i, n)
        elif t == 'receipt': im = slide_receipt(s, st, i, n)
        elif t == 'verdict': im = slide_verdict(s, st, i, n)
        elif t == 'item': im = slide_item(s, st, i, n)
        elif t == 'close': im = slide_close(s, st, i, n)
        else: raise SystemExit(f'unknown slide type {t}')
        im.save(os.path.join(out, f'{i:02d}.jpg'), 'JPEG', quality=90, optimize=True)
        images.append(im)
    cover = images[0]
    cover.save(os.path.join(out, 'cover.webp'), 'WEBP', quality=84)
    card = tile(st, (864, 1080), cover)
    card.save(os.path.join(out, 'card.webp'), 'WEBP', quality=82)
    card.resize((216, 270), Image.LANCZOS).save(os.path.join(out, 'thumb.webp'), 'WEBP', quality=80)
    tile(st, (1920, 1080), cover).save(os.path.join(out, 'hero.webp'), 'WEBP', quality=82)
    og_image(st, cover).save(os.path.join(out, 'og.jpg'), 'JPEG', quality=86)
    pdf = [im.convert('RGB') for im in images]
    pdf[0].save(os.path.join(out, 'carousel.pdf'), save_all=True, append_images=pdf[1:], resolution=144)
    print(json.dumps({'slug': st['slug'], 'slides': n, 'outDir': out}))

if __name__ == '__main__':
    main()
