"""Fetch the site assets the reel uses and cut them into frame sequences.

assets.json lists what comes from mask360.agency (fonts, public films, public stills).
shots.json lists every shot: which source, which frames, how it is cropped.
Nothing fetched here is committed: it all lands in .cache/.
"""
import json
import os
import subprocess
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
CACHE = os.environ.get('REEL_CACHE', os.path.join(HERE, '.cache'))
FULL = (1080, 1920)
STILL = (1296, 2304)        # photographs are cut a fifth larger, so the slow push never softens them
TILE = (840, 1050)          # carousel tiles are drawn at 560 by 700; the extra covers the tiles that swing closer


def fetch():
    assets = json.load(open(os.path.join(HERE, 'assets.json')))
    for local, url in assets.items():
        dst = os.path.join(CACHE, local)
        if os.path.exists(dst) and os.path.getsize(dst) > 1000:
            continue
        os.makedirs(os.path.dirname(dst), exist_ok=True)
        print('fetch', local)
        subprocess.run(['curl', '-sS', '-L', '--fail', '--retry', '3', '--max-time', '300', '-o', dst, url], check=True)


def crop_filter(w, h, out, cx, cy, zoom):
    """Crop the largest box of the output's shape, shrunk by zoom, placed at cx, cy (0 to 1)."""
    ow, oh = out
    cw = min(w, h * ow / oh) / zoom
    ch = cw * oh / ow
    x = (w - cw) * cx
    y = (h - ch) * cy
    return f'crop={cw:.0f}:{ch:.0f}:{x:.0f}:{y:.0f},scale={ow}:{oh}:flags=lanczos'


def probe(path):
    out = subprocess.check_output(['ffprobe', '-v', 'error', '-select_streams', 'v:0', '-show_entries', 'stream=width,height', '-of', 'csv=p=0', path]).decode().strip()
    w, h = out.split(',')[:2]
    return int(w), int(h)


def source_frames(s):
    """The source frame numbers a shot plays, in order."""
    if 'img' in s:
        return [0]
    if 'segments' in s:
        out, f = [], s['start']
        for count, step in s['segments']:
            for _ in range(count):
                out.append(f); f += step
        return out
    return list(range(s['start'], s['start'] + s.get('count', 1)))


def cut():
    shots = json.load(open(os.path.join(HERE, 'shots.json')))
    for name, s in shots.items():
        if name.startswith('_'):
            continue
        out = {'full': FULL, 'still': STILL, 'tile': TILE}[s['fit']]
        d = os.path.join(CACHE, 'seq', name)
        frames = source_frames(s)
        n = len(frames)
        if os.path.exists(os.path.join(d, f'{n:04d}.jpg')):
            continue
        os.makedirs(d, exist_ok=True)
        src = os.path.join(CACHE, 'site', s.get('src') or s['img'])
        w, h = probe(src)
        vf = crop_filter(w, h, out, s.get('cx', 0.5), s.get('cy', 0.5), s.get('zoom', 1.0))
        if 'src' in s:
            pick = '+'.join(f'eq(n,{f})' for f in frames) if 'segments' in s else f'between(n,{frames[0]},{frames[-1]})'
            vf = f"select='{pick}'," + vf + (',unsharp=5:5:0.4' if s['fit'] == 'full' and w < 2000 * 9 / 16 * 1.4 else '')
            cmd = ['ffmpeg', '-v', 'error', '-y', '-i', src, '-vf', vf, '-vsync', '0', '-q:v', '2', os.path.join(d, '%04d.jpg')]
        else:
            cmd = ['ffmpeg', '-v', 'error', '-y', '-i', src, '-vf', vf, '-frames:v', '1', '-q:v', '2', os.path.join(d, '0001.jpg')]
        subprocess.run(cmd, check=True)
        got = len(os.listdir(d))
        print(f'cut {name:12s} {got} frames')
        if got != n:
            sys.exit(f'{name}: expected {n} frames, got {got}')


if __name__ == '__main__':
    fetch()
    cut()
