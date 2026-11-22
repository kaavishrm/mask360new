"""Average the sub-frame samples render.mjs wrote for motion-blurred frames.
Averaging happens in linear light so bright edges streak the way they do on a real shutter."""
import glob, os
from multiprocessing import Pool
import numpy as np
from PIL import Image

cache = os.environ.get('REEL_CACHE', os.path.join(os.path.dirname(os.path.abspath(__file__)), '.cache'))
sub, out = os.path.join(cache, 'sub'), os.path.join(cache, 'frames')
v = np.arange(256) / 255
LUT = np.where(v <= 0.04045, v / 12.92, ((v + 0.055) / 1.055) ** 2.4).astype(np.float32)


def blend(item):
    name, paths = item
    acc = None
    for p in paths:
        a = LUT[np.asarray(Image.open(p).convert('RGB'))]
        acc = a if acc is None else acc + a
    lin = acc / len(paths)
    srgb = np.where(lin <= 0.0031308, lin * 12.92, 1.055 * np.power(np.maximum(lin, 1e-9), 1 / 2.4) - 0.055)
    Image.fromarray(np.clip(srgb * 255 + 0.5, 0, 255).astype(np.uint8)).save(os.path.join(out, name + '.png'), compress_level=3)
    return name


if __name__ == '__main__':
    groups = {}
    for p in sorted(glob.glob(os.path.join(sub, '*_*.png'))):
        groups.setdefault(os.path.basename(p).split('_')[0], []).append(p)
    with Pool() as pool:
        done = pool.map(blend, sorted(groups.items()), chunksize=4)
    print(f'blended {len(done)} frames')
