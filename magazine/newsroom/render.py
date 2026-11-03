#!/usr/bin/env python3
"""Carousel renderer. Reads one story as JSON on stdin, writes slides, cover, card, hero, OG image and a PDF.

Usage: node newsroom/story-json.mjs content/stories/2026/11/slug.md | python3 -I newsroom/render.py
Design: HOUSE/02-design-system.md. Grounds are paper and ink only. Section inks label, never fill.
The cover is photo-led, built from the story's lead media receipt; Scorecards carry the score; with no
evidence the cover is typographic on ink. Only Pillow is required.
"""
import json, os, sys, re
from PIL import Image, ImageDraw, ImageFont, ImageFilter

HERE = os.path.dirname(os.path.abspath(__file__))
FONTS = os.path.join(HERE, 'fonts')
W, H = 1080, 1350
SAFE = 72

_fonts = {}
def font(kind, size):
    key = (kind, int(size))
    if key not in _fonts:
        name = {'serif': 'InstrumentSerif-Regular.ttf', 'italic': 'InstrumentSerif-Italic.ttf', 'sans': 'Amulya-Regular.ttf', 'sansm': 'Amulya-Medium.ttf'}[kind]
        _fonts[key] = ImageFont.truetype(os.path.join(FONTS, name), max(8, int(size)))
    return _fonts[key]

def hexrgb(h):
    h = h.lstrip('#'); return tuple(int(h[i:i + 2], 16) for i in (0, 2, 4))

# ---------- palette (overridden by the payload) ----------
P = {'ink': '#0E0D0B', 'paper': '#F3EFE7', 'white': '#FFFFFF', 'tea': '#B4532A', 'grey': '#6F6A62'}
SPINE = ['#8B1E1E', '#5A2D5C', '#9A6A12', '#1E2A57', '#2F5A3F', '#1F5A63']
def INK(): return hexrgb(P['ink'])
def PAPER(): return hexrgb(P['paper'])
def TEA(): return hexrgb(P['tea'])
def GREY(): return hexrgb(P['grey'])

# ---------- text ----------
_broke = False
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
    global _broke
    _broke = False
    words = str(s).split()
    lines, cur = [], ''
    for w in words:
        t = (cur + ' ' + w).strip()
        if text_width(draw, t, f, tracking) <= maxw or not cur: cur = t
        else: lines.append(cur); cur = w
    if cur: lines.append(cur)
    out = []
    for ln in lines:
        while text_width(draw, ln, f, tracking) > maxw and len(ln) > 1:
            cut = len(ln) - 1
            while cut > 1 and text_width(draw, ln[:cut], f, tracking) > maxw: cut -= 1
            out.append(ln[:cut]); ln = ln[cut:]; _broke = True
        out.append(ln)
    return out

def fit_text(draw, s, kind, size, minsize, maxw, maxlines, leading=1.0, tracking_em=0.0):
    size = int(size)
    while True:
        f = font(kind, size)
        tr = tracking_em * size
        lines = wrap(draw, s, f, maxw, tr)
        if (len(lines) <= maxlines and not _broke) or size <= minsize:
            return f, lines, int(size * leading), tr
        size = max(minsize, int(size * 0.92))

def block(draw, xy, s, kind, size, minsize, maxw, maxlines, fill, leading=1.0, tracking_em=0.0):
    f, lines, lh, tr = fit_text(draw, s, kind, size, minsize, maxw, maxlines, leading, tracking_em)
    x, y = xy
    for ln in lines:
        draw_text(draw, (x, y), ln, f, fill, tr); y += lh
    return y

def measure(draw, s, kind, size, minsize, maxw, maxlines, leading=1.0, tracking_em=0.0):
    f, lines, lh, tr = fit_text(draw, s, kind, size, minsize, maxw, maxlines, leading, tracking_em)
    return (f, lines, lh, tr), lh * len(lines)

def paint(draw, xy, m, fill):
    f, lines, lh, tr = m
    x, y = xy
    for ln in lines: draw_text(draw, (x, y), ln, f, fill, tr); y += lh
    return y

# ---------- furniture ----------
def pill(draw, xy, s, size=22, fg=None, bg=None, pad=(20, 11), right=False):
    fg = fg or PAPER(); bg = bg or TEA()
    f = font('sansm', size)
    tw = text_width(draw, s, f, 0.06 * size)
    w, h = tw + pad[0] * 2, size + pad[1] * 2
    x, y = xy
    if right: x = x - w
    draw.rounded_rectangle([x, y, x + w, y + h], radius=h / 2, fill=bg)
    draw_text(draw, (x + pad[0], y + pad[1] - size * 0.12), s, f, fg, 0.06 * size)
    return w, h

def label(draw, s, fill, y=SAFE, x=SAFE):
    draw_text(draw, (x, y), s.upper(), font('sansm', 26), fill, 0.08 * 26)

def masthead(draw, fill, size=40, x=SAFE, y=None):
    f = font('serif', size)
    if y is None: y = H - SAFE - size
    draw_text(draw, (x, y), 'Mask360', f, fill, -0.04 * size)

def page_no(draw, i, n, fill):
    f = font('sans', 24)
    s = f'{i:02d} / {n:02d}'
    draw_text(draw, (W - SAFE - text_width(draw, s, f), H - SAFE - 24), s, f, fill)

def rule(draw, x, y, w=120, h=3, fill=None):
    draw.rectangle([x, y, x + w, y + h], fill=fill or TEA())

def spine(draw, cx, y, w=16, gap=8, h=4):
    total = 6 * w + 5 * gap
    x = cx - total / 2
    for c in SPINE:
        draw.rectangle([x, y, x + w, y + h], fill=hexrgb(c)); x += w + gap

def arrow(draw, x, y, fill, size=36):
    draw.line([(x, y + size / 2), (x + size, y + size / 2)], fill=fill, width=4)
    draw.line([(x + size * 0.6, y + size * 0.15), (x + size, y + size / 2), (x + size * 0.6, y + size * 0.85)], fill=fill, width=4, joint='curve')

def presented_by(draw, st, fill, y):
    sp = str(st.get('sponsor') or '').strip()
    if not sp: return
    f = font('sansm', 22); t = f'PRESENTED BY {sp.upper()}'
    draw_text(draw, (W - SAFE - text_width(draw, t, f, 0.06 * 22), y), t, f, fill, 0.06 * 22)

def ground(color): return Image.new('RGB', (W, H), color)

def load_photo(st, rel):
    if not rel: return None
    p = os.path.join(st['root'], 'public', rel)
    if not os.path.exists(p): return None
    try: return Image.open(p).convert('RGB')
    except Exception as e: print('photo failed:', e, file=sys.stderr); return None

def sharpen(im):
    return im.filter(ImageFilter.UnsharpMask(radius=1.2, percent=55, threshold=2))

def cover_crop(ph, tw, th):
    """Fill the box. Used only when the aspect ratios are close (nothing meaningful is lost)."""
    r = max(tw / ph.width, th / ph.height)
    im = ph.resize((max(tw, int(ph.width * r) + 1), max(th, int(ph.height * r) + 1)), Image.LANCZOS)
    l, t = (im.width - tw) // 2, max(0, (im.height - th) // 3)
    return sharpen(im.crop((l, t, l + tw, t + th)))

def fit_photo(ph, tw, th, max_up=1.25):
    """Fit the whole photograph into the box: crop only when the aspects are within 8 percent, otherwise contain it over a
    blurred, darkened fill of itself so creatives with words in them are never cut. Never upscale past max_up."""
    ar_src, ar_box = ph.width / ph.height, tw / th
    if abs(ar_src - ar_box) / ar_box <= 0.08 and ph.width >= tw * 0.8:
        return cover_crop(ph, tw, th)
    # background: the same image, filled, blurred and darkened
    bg = ph.resize((max(tw, int(ph.width * max(tw / ph.width, th / ph.height)) + 1), max(th, int(ph.height * max(tw / ph.width, th / ph.height)) + 1)), Image.BILINEAR)
    l, t = (bg.width - tw) // 2, (bg.height - th) // 2
    bg = bg.crop((l, t, l + tw, t + th)).filter(ImageFilter.GaussianBlur(28))
    bg = Image.blend(bg, Image.new('RGB', (tw, th), INK()), 0.55)
    # foreground: contain, capped upscale
    r = min(tw / ph.width, th / ph.height, max_up)
    fw, fh = max(1, int(ph.width * r)), max(1, int(ph.height * r))
    fg = sharpen(ph.resize((fw, fh), Image.LANCZOS)) if r != 1 else ph
    bg.paste(fg, ((tw - fw) // 2, (th - fh) // 2))
    return bg

def top_scrim(im, height=260, strength=150):
    scrim = Image.new('L', (W, height), 0); sd = ImageDraw.Draw(scrim)
    for yy in range(height):
        sd.line([(0, yy), (W, yy)], fill=int(strength * (1 - yy / height)))
    im.paste(Image.new('RGB', (W, height), INK()), (0, 0), scrim)

def cover_photo_for(st):
    if str(st.get('cover', '')).startswith('photo:'): return load_photo(st, st['cover'][6:])
    if st.get('cover') == 'type': return None
    return load_photo(st, st.get('leadImage'))

# ---------- slides ----------
def slide_cover(s, st):
    sec = st['section']; title = s.get('title') or st['title']
    ph = cover_photo_for(st)
    score = str(st.get('score') or '').strip()
    im = ground(INK()); draw = ImageDraw.Draw(im)
    if ph is not None:
        panel = 600 if score else 560
        im.paste(fit_photo(ph, W, H - panel), (0, 0))
        draw = ImageDraw.Draw(im)
        y0 = H - panel
        draw.rectangle([0, y0, W, H], fill=INK())
        label(draw, sec['name'], PAPER(), y=y0 + 44)
        pill(draw, (W - SAFE, y0 + 36), 'PAID PARTNERSHIP' if st.get('paid') else st['kicker'], right=True)
        y = y0 + 110
        if score:
            f = font('serif', 210); draw_text(draw, (SAFE, y - 30), score, f, TEA(), -0.05 * 210)
            draw_text(draw, (SAFE + text_width(draw, score, f, -0.05 * 210) + 18, y + 136), '/10', font('sans', 30), GREY())
            y += 210
            block(draw, (SAFE, y), title, 'serif', 56, 36, W - 2 * SAFE, 3, PAPER(), 1.04, -0.03)
        else:
            block(draw, (SAFE, y), title, 'serif', 80, 48, W - 2 * SAFE, 4, PAPER(), 1.02, -0.035)
    else:
        label(draw, sec['name'], PAPER())
        pill(draw, (W - SAFE, SAFE - 8), 'PAID PARTNERSHIP' if st.get('paid') else st['kicker'], right=True)
        y = SAFE + 170
        if score:
            f = font('serif', 420); draw_text(draw, (SAFE, y - 60), score, f, TEA(), -0.06 * 420); y += 400
            block(draw, (SAFE, y), title, 'serif', 64, 40, W - 2 * SAFE, 4, PAPER(), 1.04, -0.03)
        else:
            ct = str(st.get('coverText') or '').strip()
            if ct and ct.lower() not in title.lower():
                draw_text(draw, (SAFE, y), ct, font('italic', 48), TEA(), -0.02 * 48); y += 80
            block(draw, (SAFE, y), title, 'serif', 124, 72, W - 2 * SAFE, 6, PAPER(), 1.0, -0.035)
    presented_by(draw, st, PAPER(), H - SAFE - 104)
    masthead(draw, PAPER(), 44)
    arrow(draw, W - SAFE - 40, H - SAFE - 42, PAPER())
    return im

def slide_tea(s, st, i, n):
    sec = st['section']; im = ground(PAPER()); draw = ImageDraw.Draw(im)
    label(draw, sec['name'], hexrgb(sec['color']))
    maxw = W - 2 * SAFE
    pm = measure(draw, s['pull'], 'serif', 104, 64, maxw, 3, 1.0, -0.03) if s.get('pull') else None
    tm = measure(draw, s.get('text', ''), 'sans', 42, 30, maxw, 13, 1.34, -0.02)
    total = (pm[1] + 56 if pm else 0) + tm[1]
    y = max(SAFE + 120, min((H - total) / 2 - 30, H - SAFE - 120 - total))
    if pm:
        y = paint(draw, (SAFE, y), pm[0], INK()) + 20
        rule(draw, SAFE, y); y += 36
    paint(draw, (SAFE, y), tm[0], INK())
    masthead(draw, INK()); page_no(draw, i, n, GREY())
    return im

def slide_receipt(s, st, i, n):
    im = ground(PAPER()); draw = ImageDraw.Draw(im)
    label(draw, 'The receipt', TEA())
    kind = s.get('kind'); maxw = W - 2 * SAFE
    if kind == 'image':
        box_top, box_h = SAFE + 80, 780
        ph = load_photo(st, s.get('image'))
        if ph is not None:
            r = min(maxw / ph.width, box_h / ph.height, 1.25)
            ph = sharpen(ph.resize((max(1, int(ph.width * r)), max(1, int(ph.height * r))), Image.LANCZOS))
            x = SAFE + (maxw - ph.width) // 2
            im.paste(ph, (x, box_top)); draw.rectangle([x, box_top, x + ph.width, box_top + ph.height], outline=INK(), width=1)
            box_h = ph.height
        else:
            draw.rectangle([SAFE, box_top, W - SAFE, box_top + box_h], outline=INK(), width=1)
        y = box_top + box_h + 30
        y = block(draw, (SAFE, y), s.get('caption', ''), 'sans', 34, 26, maxw, 4, INK(), 1.3, -0.02) + 12
        block(draw, (SAFE, y), s.get('credit', ''), 'sans', 22, 18, maxw, 2, GREY(), 1.3, 0)
    elif kind == 'frames':
        files = s.get('frames') if isinstance(s.get('frames'), list) else [x.strip() for x in str(s.get('frames', '')).split(',') if x.strip()]
        times = s.get('times') if isinstance(s.get('times'), list) else [x.strip() for x in str(s.get('times', '')).split(',') if x.strip()]
        gap = 16; cw = (maxw - gap) // 2; chh = int(cw * 9 / 16)
        y = SAFE + 80
        for k, rel in enumerate(files[:4]):
            ph = load_photo(st, rel)
            x = SAFE + (k % 2) * (cw + gap); yy = y + (k // 2) * (chh + gap)
            if ph is not None: im.paste(fit_photo(ph, cw, chh), (x, yy))
            else: draw.rectangle([x, yy, x + cw, yy + chh], fill=hexrgb('#1a1917'))
            draw.rectangle([x, yy, x + cw, yy + chh], outline=INK(), width=1)
            if k < len(times): draw_text(draw, (x + 14, yy + chh - 40), str(times[k]), font('sansm', 22), PAPER(), 0.04 * 22)
        y = y + 2 * chh + gap + 30
        y = block(draw, (SAFE, y), s.get('caption', ''), 'sans', 34, 26, maxw, 4, INK(), 1.3, -0.02) + 12
        block(draw, (SAFE, y), s.get('credit', ''), 'sans', 22, 18, maxw, 2, GREY(), 1.3, 0)
    elif kind == 'number':
        f, lines, lh, tr = fit_text(draw, str(s.get('number', '')), 'serif', 360, 140, maxw, 2, 0.95, -0.05)
        y = SAFE + 240
        for ln in lines: draw_text(draw, (SAFE, y), ln, f, INK(), tr); y += lh
        rule(draw, SAFE, y + 10); y += 50
        block(draw, (SAFE, y), s.get('caption', ''), 'sans', 40, 28, maxw, 6, INK(), 1.3, -0.02)
    elif kind == 'quote':
        y = SAFE + 180
        draw_text(draw, (SAFE, y - 60), '“', font('serif', 200), TEA())
        y = block(draw, (SAFE, y + 110), s.get('quote', ''), 'italic', 76, 44, maxw, 9, INK(), 1.06, -0.02)
        block(draw, (SAFE, y + 40), s.get('source', ''), 'sans', 30, 24, maxw, 3, GREY(), 1.3, -0.02)
    else:
        colw = (maxw - 48) / 2
        for k, (lab, txt) in enumerate([(s.get('leftLabel', ''), s.get('leftText', '')), (s.get('rightLabel', ''), s.get('rightText', ''))]):
            x = SAFE + k * (colw + 48)
            draw_text(draw, (x, SAFE + 200), str(lab).upper(), font('sansm', 26), GREY(), 0.08 * 26)
            block(draw, (x, SAFE + 260), txt, 'serif', 64, 40, colw, 10, INK(), 1.08, -0.02)
        draw.line([(W / 2, SAFE + 200), (W / 2, H - SAFE - 120)], fill=INK(), width=1)
    masthead(draw, INK()); page_no(draw, i, n, GREY())
    return im

def slide_verdict(s, st, i, n):
    im = ground(INK()); draw = ImageDraw.Draw(im)
    label(draw, 'The read', TEA())
    txt = re.sub(r'^\s*the read:\s*', '', s.get('text', ''), flags=re.I)
    m, total = measure(draw, txt, 'serif', 92, 52, W - 2 * SAFE, 11, 1.06, -0.03)
    y = max(SAFE + 120, min((H - total) / 2 - 40, H - SAFE - 240 - total))
    paint(draw, (SAFE, y), m, PAPER())
    sc = str(st.get('score') or '').strip()
    if sc:
        f = font('serif', 180)
        draw_text(draw, (W - SAFE - text_width(draw, sc, f, -0.05 * 180), H - SAFE - 300), sc, f, TEA(), -0.05 * 180)
        draw_text(draw, (W - SAFE - text_width(draw, '/10', font('sans', 30)), H - SAFE - 110 - 30), '/10', font('sans', 30), PAPER())
    masthead(draw, PAPER()); page_no(draw, i, n, GREY())
    return im

def slide_item(s, st, i, n, idx):
    sec = st['section']; im = ground(PAPER()); draw = ImageDraw.Draw(im)
    label(draw, sec['name'], hexrgb(sec['color']))
    if s.get('paid'): pill(draw, (W - SAFE, SAFE - 8), 'PAID PARTNERSHIP', right=True)
    maxw = W - 2 * SAFE
    ph = load_photo(st, s.get('image'))
    catch = 'The catch: ' + str(s.get('catch', ''))
    num = f'{idx:02d}'
    bottom_limit = H - SAFE - 60
    for box_h, scale in ((520, 1.0), (440, 1.0), (380, 0.92), (320, 0.85), (0, 0.8)):
        nm = measure(draw, s.get('name', ''), 'serif', int(72 * scale), 40, maxw, 2, 1.02, -0.03)
        wm = measure(draw, s.get('why', ''), 'sans', int(36 * scale), 26, maxw, 5, 1.3, -0.02)
        cm = measure(draw, catch, 'sans', int(30 * scale), 24, maxw, 4, 1.3, -0.02)
        top = SAFE + 140
        total = (box_h + 40 if (ph is not None and box_h) else 0) + nm[1] + 18 + wm[1] + 22 + cm[1]
        if top + total <= bottom_limit: break
    y = SAFE + 60
    draw_text(draw, (SAFE, y - 10), num, font('serif', 96), TEA(), -0.04 * 96)
    y = SAFE + 140
    if ph is not None and box_h:
        im.paste(fit_photo(ph, maxw, box_h), (SAFE, y)); draw.rectangle([SAFE, y, W - SAFE, y + box_h], outline=INK(), width=1)
        y += box_h + 40
    y = paint(draw, (SAFE, y), nm[0], INK()) + 18
    y = paint(draw, (SAFE, y), wm[0], INK()) + 22
    paint(draw, (SAFE, y), cm[0], GREY())
    masthead(draw, INK()); page_no(draw, i, n, GREY())
    return im

def slide_close(s, st, i, n):
    im = ground(INK()); draw = ImageDraw.Draw(im)
    spine(draw, W / 2, SAFE + 10)
    y = H * 0.36
    y = block(draw, (SAFE, y), 'Forward it to the group.', 'serif', 104, 64, W - 2 * SAFE, 2, PAPER(), 1.0, -0.03) + 24
    draw_text(draw, (SAFE, y), 'XO, Mask360', font('serif', 48), TEA(), -0.02 * 48); y += 110
    block(draw, (SAFE, y), s.get('text') or 'Three. Six. Tea.', 'sans', 36, 28, W - 2 * SAFE, 3, PAPER(), 1.3, -0.02)
    presented_by(draw, st, PAPER(), H - SAFE - 100)
    draw_text(draw, (SAFE, H - SAFE - 30), st.get('handle') or '@mask360', font('sansm', 28), PAPER(), -0.02 * 28)
    sitef = font('sans', 24); site = st.get('site', 'mask360.agency/magazine')
    draw_text(draw, (W - SAFE - text_width(draw, site, sitef), H - SAFE - 26), site, sitef, GREY())
    return im

# ---------- tiles ----------
def tile(st, size, kind):
    """card (4:5), hero (16:9): the cover photograph cropped, else an ink tile with the headline (card) or quiet (hero)."""
    tw, th = size
    sec = st['section']
    ph = cover_photo_for(st)
    if ph is not None: return fit_photo(ph, tw, th)
    im = Image.new('RGB', (tw, th), INK()); draw = ImageDraw.Draw(im)
    pad = int(tw * 0.066)
    ms = int(min(tw, th) * 0.05)
    draw_text(draw, (pad, pad), sec['name'].upper(), font('sansm', int(ms * 0.55)), PAPER(), 0.08 * ms * 0.55)
    if kind == 'card':
        f, lines, lh, tr = fit_text(draw, st['title'], 'serif', int(tw * 0.1), int(tw * 0.05), tw - 2 * pad, 6, 1.0, -0.035)
        total = lh * len(lines); y = (th - total) / 2 - th * 0.04
        for ln in lines: draw_text(draw, (pad, y), ln, f, PAPER(), tr); y += lh
    draw_text(draw, (pad, th - pad - ms), 'Mask360', font('serif', ms), PAPER(), -0.04 * ms)
    return im

def og_image(st):
    sec = st['section']
    im = Image.new('RGB', (1200, 630), INK()); draw = ImageDraw.Draw(im)
    textw = 1200 - 2 * 56
    ph = cover_photo_for(st)
    if ph is not None:
        im.paste(fit_photo(ph, 504, 630), (696, 0)); textw = 696 - 56 - 40
    draw_text(draw, (56, 48), sec['name'].upper(), font('sansm', 20), PAPER(), 0.08 * 20)
    pill(draw, (56 + text_width(draw, sec['name'].upper(), font('sansm', 20), 0.08 * 20) + 24, 40), 'PAID PARTNERSHIP' if st.get('paid') else st['kicker'], size=16, pad=(14, 8))
    block(draw, (56, 110), st['title'], 'serif', 96, 48, textw, 4, PAPER(), 1.0, -0.03)
    f = font('serif', 44); draw_text(draw, (56, 630 - 48 - 44), 'Mask360', f, PAPER(), -0.04 * 44)
    draw_text(draw, (56 + text_width(draw, 'Mask360', f, -0.04 * 44) + 24, 630 - 48 - 26), 'Three. Six. Tea.', font('sans', 20), TEA())
    return im

def main():
    global P
    st = json.load(sys.stdin)
    P.update(st.get('palette') or {})
    out = st['outDir']; os.makedirs(out, exist_ok=True)
    slides = st['slides']; n = len(slides)
    images = []; item_index = 0
    for i, s in enumerate(slides, 1):
        t = s.get('type')
        if t == 'cover': im = slide_cover(s, st)
        elif t == 'tea': im = slide_tea(s, st, i, n)
        elif t == 'receipt': im = slide_receipt(s, st, i, n)
        elif t == 'verdict': im = slide_verdict(s, st, i, n)
        elif t == 'item': item_index += 1; im = slide_item(s, st, i, n, item_index)
        elif t == 'close': im = slide_close(s, st, i, n)
        else: raise SystemExit(f'unknown slide type {t}')
        im.save(os.path.join(out, f'{i:02d}.jpg'), 'JPEG', quality=93, optimize=True, subsampling=0)
        images.append(im)
    cover = images[0]
    cover.save(os.path.join(out, 'cover.webp'), 'WEBP', quality=88)
    card = tile(st, (864, 1080), 'card')
    card.save(os.path.join(out, 'card.webp'), 'WEBP', quality=86)
    card.resize((216, 270), Image.LANCZOS).save(os.path.join(out, 'thumb.webp'), 'WEBP', quality=80)
    tile(st, (1920, 1080), 'hero').save(os.path.join(out, 'hero.webp'), 'WEBP', quality=86)
    og_image(st).save(os.path.join(out, 'og.jpg'), 'JPEG', quality=90)
    pdf = [im.convert('RGB') for im in images]
    pdf[0].save(os.path.join(out, 'carousel.pdf'), save_all=True, append_images=pdf[1:], resolution=144)
    print(json.dumps({'slug': st['slug'], 'slides': n, 'outDir': out}))

if __name__ == '__main__':
    main()
