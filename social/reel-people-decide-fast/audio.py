"""Original soundtrack for the reel, synthesised from scratch so there is nothing to license.
Deep house at 120 BPM, F minor, 30 seconds, locked to the picture: a beat is 12 frames at 24 fps.

    python3 audio.py out.wav

Sections follow the timeline in src/reel.js:
    0-4 hook | 4-6 work intro | 6-14 four cases | 14-16 four more, on the carousel |
    16-20 under NDA | 20-24 numbers | 24-27 the closing line | 27-30 end card
"""
import sys
import numpy as np
from scipy.signal import butter, sosfilt, fftconvolve
from scipy.io import wavfile

SR, DUR = 48000, 30.0
N = int(SR * DUR)
BEAT, BAR = 0.5, 2.0
rng = np.random.default_rng(360)


# ---------- helpers ----------
def tt(n):
    return np.arange(n) / SR


def noise(n):
    return rng.standard_normal(n)


def filt(x, kind, f, order=2):
    return sosfilt(butter(order, f, kind, fs=SR, output='sos'), x)


def norm(x):
    return x / (np.abs(x).max() + 1e-12)


def fade(x, a=0.002, r=0.01):
    n = len(x); a_n, r_n = max(1, int(a * SR)), max(1, int(r * SR))
    e = np.ones(n); e[:a_n] = np.linspace(0, 1, a_n); e[-r_n:] *= np.linspace(1, 0, r_n)
    return x * (e[:, None] if x.ndim == 2 else e)


class Bus:
    """A stereo track that one-shots are dropped onto."""
    def __init__(self):
        self.b = np.zeros((N, 2))

    def add(self, x, t, gain=1.0, pan=0.0):
        i = int(round(t * SR))
        if i >= N or i < 0:
            return
        if x.ndim == 1:
            l, r = np.cos((pan + 1) * np.pi / 4), np.sin((pan + 1) * np.pi / 4)
            x = np.stack([x * l, x * r], 1) * 1.41421
        n = min(len(x), N - i)
        self.b[i:i + n] += x[:n] * gain


# ---------- instruments ----------
def kick():
    n = int(0.42 * SR); t = tt(n)
    f = 52 + 130 * np.exp(-t / 0.032) + 80 * np.exp(-t / 0.006)
    body = np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t / 0.105)
    knock = np.sin(2 * np.pi * 190 * t) * np.exp(-t / 0.024) * 0.5           # carries on phone speakers
    click = filt(noise(n), 'hp', 2500) * np.exp(-t / 0.0025) * 0.22
    return norm(fade(np.tanh(1.9 * (body + knock + click)), 0.0005, 0.03))


def hat(decay=0.022, length=0.09):
    n = int(length * SR); t = tt(n)
    metal = sum(np.sign(np.sin(2 * np.pi * f * t)) for f in (2105, 3120, 3741, 5290, 5560, 8140)) / 6
    x = 0.55 * noise(n) + 0.45 * metal
    x = filt(filt(x, 'hp', 7200, 4), 'lp', 15000)
    return norm(fade(x * np.exp(-t / decay), 0.0005, 0.005))


def clap():
    n = int(0.36 * SR); t = tt(n)
    x = filt(filt(noise(n), 'bp', [850, 3400]), 'hp', 700)
    e = sum(np.where(t >= d, np.exp(-(t - d) / 0.007), 0) for d in (0.0, 0.011, 0.022)) * 0.8
    e += np.where(t >= 0.030, np.exp(-(t - 0.030) / 0.085), 0)
    return norm(fade(x * e, 0.0005, 0.02))


def shaker():
    n = int(0.07 * SR); t = tt(n)
    e = np.minimum(1, t / 0.008) * np.exp(-t / 0.022)
    return norm(filt(noise(n), 'hp', 6200, 3) * e)


def tick(low=False):
    """A watch movement: two short resonances and a tiny thunk. Tick is higher, tock lower."""
    n = int(0.07 * SR); t = tt(n)
    f1, f2 = (1750, 2850) if low else (2150, 3400)
    x = np.sin(2 * np.pi * f1 * t) * np.exp(-t / 0.0065) + 0.6 * np.sin(2 * np.pi * f2 * t) * np.exp(-t / 0.004)
    x += 0.55 * np.sin(2 * np.pi * 540 * t) * np.exp(-t / 0.012) + 0.25 * filt(noise(n), 'hp', 3000) * np.exp(-t / 0.0015)
    return norm(fade(filt(x, 'lp', 6500), 0.0003, 0.01))


def snare():
    n = int(0.16 * SR); t = tt(n)
    x = filt(noise(n), 'bp', [1100, 6500]) * np.exp(-t / 0.045) + 0.5 * np.sin(2 * np.pi * 196 * t) * np.exp(-t / 0.03)
    return norm(fade(x, 0.0005, 0.01))


def bass(freq, dur=0.2):
    n = int((dur + 0.07) * SR); t = tt(n); ph = 2 * np.pi * freq * t
    x = 0.7 * np.sin(ph) + 0.8 * np.sin(2 * ph) * np.exp(-t / 0.16) + 0.5 * np.sin(3 * ph) * np.exp(-t / 0.11) + 0.3 * np.sin(4 * ph) * np.exp(-t / 0.08) + 0.16 * np.sin(6 * ph) * np.exp(-t / 0.05)
    e = np.minimum(1, t / 0.004) * np.where(t < dur, 1, np.exp(-(t - dur) / 0.03))
    return norm(fade(np.tanh(1.5 * x * e), 0.001, 0.025))


def keys(freqs, dur=1.5, bright=1.0, detune=0.0):
    """FM electric piano chord."""
    n = int(dur * SR); t = tt(n); out = np.zeros(n)
    for f in freqs:
        f = f * (1 + detune)
        idx = 2.0 * bright * np.exp(-t / 0.11) + 0.32
        out += np.sin(2 * np.pi * f * t + idx * np.sin(2 * np.pi * f * t))
        out += 0.10 * bright * np.sin(2 * np.pi * f * 7 * t) * np.exp(-t / 0.035)       # tine
    out *= np.exp(-t / 0.5) / len(freqs)
    return fade(filt(out, 'lp', 4200), 0.002, 0.05)           # left un-normalised: keys_st does the pair together


def keys_st(freqs, **kw):
    return norm(np.stack([keys(freqs, detune=-0.0016, **kw), keys(freqs, detune=0.0016, **kw)], 1))


def pad(freqs, dur, cutoff=1500):
    n = int(dur * SR); t = tt(n); chans = []
    for side in (-1, 1):
        x = np.zeros(n)
        for f in freqs:
            for d in (-0.004, 0.0, 0.0035):
                ff = f * (1 + d + side * 0.0012); ph0 = rng.uniform(0, 6.283)
                for k in range(1, 9):
                    a = (1 / k) / (1 + (k * ff / cutoff) ** 2)
                    x += a * np.sin(2 * np.pi * k * ff * t + ph0 * k)
        chans.append(x / (len(freqs) * 3))
    return norm(fade(np.stack(chans, 1), 0.03, min(0.4, dur / 4)))


def riser(dur, f0=350.0, f1=9500.0, curve=2.0):
    n = int(dur * SR); src = noise(n); u = tt(n) / dur; out = np.zeros(n)
    pos = np.log(f0) + (np.log(f1) - np.log(f0)) * u ** 1.4
    for c in np.geomspace(280, 13000, 16):
        out += filt(src, 'bp', [c / 1.22, min(c * 1.22, 20000)]) * np.exp(-0.5 * ((np.log(c) - pos) / 0.33) ** 2)
    return norm(fade(out * u ** curve, 0.002, 0.006))


def boom(dur=1.8, air=0.2):
    n = int(dur * SR); t = tt(n)
    f = 39 + 75 * np.exp(-t / 0.07)
    body = np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t / 0.30) * 0.75
    mid = np.sin(2 * np.pi * np.cumsum(f * 2) / SR) * np.exp(-t / 0.22) * 0.6 + np.sin(2 * np.pi * np.cumsum(f * 4) / SR) * np.exp(-t / 0.12) * 0.3   # octaves up, for small speakers
    thump = filt(noise(n), 'lp', 900) * np.exp(-t / 0.10) * 0.7
    crash = filt(noise(n), 'hp', 4500, 3) * np.exp(-t / 0.55) * air
    return norm(fade(np.tanh(1.3 * (body + mid + thump)) + crash, 0.0005, 0.1))


def reverb_ir(tau, length, lo=250, hi=7000):
    n = int(length * SR); t = tt(n)
    ir = np.stack([filt(filt(noise(n), 'hp', lo), 'lp', hi) * np.exp(-t / tau) for _ in range(2)], 1)
    ir[: int(0.012 * SR)] *= np.linspace(0, 1, int(0.012 * SR))[:, None]            # short pre-delay
    return ir / np.sqrt((ir ** 2).sum(0)).max()


def reverb(x, ir):
    return np.stack([fftconvolve(x[:, c], ir[:, c])[:N] for c in range(2)], 1)


def delay(x, time=0.375, fb=0.38, taps=5):
    out = np.zeros_like(x); d = int(time * SR)
    for k in range(1, taps + 1):
        g = fb ** k; src = x[:, ::-1] if k % 2 else x                                # ping pong
        out[k * d:] += src[: N - k * d] * g
    return out


# ---------- the arrangement ----------
F2, Db2, Eb2, C2 = 87.31, 69.30, 77.78, 65.41
CH = {
    'Fm9':  [174.61, 207.65, 261.63, 311.13, 392.00],
    'Db9':  [138.59, 174.61, 207.65, 261.63, 311.13],
    'Eb':   [155.56, 196.00, 233.08, 261.63, 349.23],
    'Cm7':  [130.81, 155.56, 196.00, 233.08, 349.23],
    'Ab9':  [207.65, 261.63, 311.13, 392.00, 466.16],
    'Fm9h': [349.23, 415.30, 523.25, 622.25, 783.99],
}
ROOT = {'Fm9': F2, 'Db9': Db2, 'Eb': Eb2, 'Cm7': C2}
# one chord per bar, bar 1 is the hook
PROG = ['Fm9', 'Fm9', 'Db9', 'Fm9', 'Db9', 'Eb', 'Cm7', 'Cm7', 'Fm9', 'Db9', 'Fm9', 'Eb', 'Fm9', 'Fm9', 'Fm9']

drums, low, mus, fx, tk, kb = Bus(), Bus(), Bus(), Bus(), Bus(), Bus()
K, HC, HO, CL, SH, SN = kick(), hat(), hat(0.11, 0.32), clap(), shaker(), snare()
TICK, TOCK = tick(False), tick(True)
kicks = []


def swipe(dur=0.14):
    """A short breath of noise: the redaction bar sliding off a name."""
    n = int(dur * SR); t = tt(n)
    return norm(fade(filt(noise(n), 'bp', [1800, 7000]) * np.sin(np.pi * t / dur) ** 2, 0.002, 0.01))


def groove(bar, t0, kick_beats=(0, 1, 2, 3), claps=True, hats=1.0, shk=0.0, stabs=(3, 6, 10, 13), stab_gain=1.0, bassline=True, kick_gain=0.90):
    chord = PROG[bar - 1]
    for b in kick_beats:
        kb.add(K, t0 + b * BEAT, kick_gain); kicks.append(t0 + b * BEAT)
    for b in range(4):
        drums.add(HO, t0 + b * BEAT + 0.25, 0.20 * hats, 0.18)                       # open hat off the beat
        if claps and b in (1, 3):
            drums.add(CL, t0 + b * BEAT, 0.40)
    for s in range(16):
        if s % 2:
            drums.add(HC, t0 + s * 0.125, 0.12 * hats * (1.0 if s % 4 == 3 else 0.7), -0.2)
        if shk:
            drums.add(SH, t0 + s * 0.125, shk * (1.0 if s % 4 == 2 else 0.6), 0.3)
    if bassline:
        for b in range(4):
            low.add(bass(ROOT[chord], 0.19), t0 + b * BEAT + 0.25, 0.46)
        low.add(bass(ROOT[chord] * 1.5, 0.08), t0 + 1.875, 0.26)                       # pickup into the next bar
    for i, s in enumerate(stabs):
        mus.add(keys_st(CH[chord], dur=1.1, bright=0.9 + 0.25 * (i % 2)), t0 + s * 0.125, 0.34 * stab_gain * (1.0 if i % 2 == 0 else 0.8))


# 0-4  hook: a low hit, a held chord and a watch ticking. The second line lands at 1 s, the palace
#      goes dark around 2 s, "starts there" lands at 3 s.
fx.add(boom(1.6, 0.10), 0.0, 0.55)
mus.add(keys_st(CH['Fm9'], dur=3.0, bright=0.7), 0.0, 0.38)
mus.add(pad(CH['Fm9'], 4.2) * np.minimum(1, tt(int(4.2 * SR)) / 1.5)[:, None], 0.0, 0.15)
for i in range(16):
    tk.add(TOCK if i % 2 else TICK, i * 0.25, 0.20 + 0.006 * i, -0.25 if i % 2 == 0 else 0.25)
fx.add(boom(1.0, 0.06), 1.0, 0.30)
mus.add(keys_st(CH['Fm9h'], dur=1.8, bright=0.8), 1.0, 0.20)
fx.add(riser(0.9, 400, 6000)[::-1].copy(), 1.6, 0.13)                                 # the light falls
fx.add(boom(1.4, 0.20), 3.0, 0.48)
mus.add(keys_st(CH['Ab9'], dur=1.6, bright=1.1), 3.0, 0.34)
fx.add(riser(1.0, 500, 9000), 3.0, 0.20)
for i, t in enumerate((3.5, 3.625, 3.75, 3.875)):
    drums.add(SN, t, 0.10 + 0.04 * i)

# 4-6  work intro: the beat arrives, still light
groove(3, 4.0, claps=False, hats=0.8, stab_gain=0.85)
fx.add(boom(1.2, 0.30), 4.0, 0.40)
fx.add(riser(0.5, 1500, 9000, 3.0), 5.5, 0.08)

# 6-14  four cases, a bar each: the full groove
for bar in range(4, 8):
    t0 = (bar - 1) * BAR
    groove(bar, t0, shk=0.0 if bar < 5 else 0.07)
    fx.add(riser(0.5, 1500, 9000, 3.0), t0 + BAR - 0.5, 0.07)                       # a breath into each new case

# 14-16  the carousel: one case per beat, and a climb into the drop-out
groove(8, 14.0, shk=0.09, stabs=(3, 6))
steps = (14.0, 14.5, 15.0, 15.5)
for i, t in enumerate(steps):
    tk.add(TICK if i % 2 == 0 else TOCK, t, 0.30); fx.add(swipe(0.16), t, 0.16)
for i, t in enumerate([15.0 + i * 0.125 for i in range(8)]):
    drums.add(SN, t, 0.10 + 0.03 * i)
fx.add(riser(1.2, 400, 10000, 2.2), 14.7, 0.26)

# 16-20  under NDA: everything drops away. A low pulse, a watch, and one tick as each name is uncovered
fx.add(boom(2.2, 0.30), 16.0, 0.80)
mus.add(pad(CH['Fm9'], 4.0, 800) * np.minimum(1, tt(int(4.0 * SR)) / 0.4)[:, None], 16.0, 0.22)
mus.add(keys_st(CH['Fm9'], dur=2.6, bright=0.6), 16.0, 0.30)
for t in (16.0, 17.0, 18.0, 19.0):
    low.add(bass(F2, 0.5), t, 0.36)
    kb.add(K, t, 0.55); kicks.append(t)
for i in range(8):                                                                   # rows land on the half beats from 16.5
    t = 16.5 + i * 0.25
    tk.add(TICK if i % 2 == 0 else TOCK, t, 0.34, -0.2 if i % 2 == 0 else 0.2); fx.add(swipe(), t + 0.06, 0.20)
fx.add(riser(1.4, 400, 10000, 2.4), 18.5, 0.26)
for i, t in enumerate([19.0 + i * 0.125 for i in range(4)] + [19.5 + i * 0.0625 for i in range(6)]):
    drums.add(SN, t, 0.10 + 0.24 * (t - 19.0) / 0.875)

# 20-24  numbers: the drop. A stat lands on each beat from 20.5 and counts up
for bar in (11, 12):
    groove(bar, (bar - 1) * BAR, shk=0.10, hats=1.15, stabs=(3, 6, 11, 14))
fx.add(boom(1.4, 0.45), 20.0, 0.70)
mus.add(keys_st(CH['Fm9h'], dur=1.3, bright=1.3), 20.0, 0.30)
for i, t in enumerate((20.5, 21.0, 21.5, 22.0)):
    mus.add(keys_st(CH['Ab9' if i % 2 == 0 else 'Fm9h'], dur=1.1, bright=1.25), t, 0.24)
    for j in range(9):                                                               # the count running up
        tk.add(TICK, t + 0.03 + j * 0.055, 0.19 * (1 - j / 11), 0.0)
fx.add(riser(1.0, 600, 10000, 2.6), 23.0, 0.20)
for i, t in enumerate([23.5 + i * 0.0625 for i in range(6)]):
    drums.add(SN, t, 0.12 + 0.03 * i)

# 24-27  the closing line: the floor drops away, then the second sentence lands at 25.5
fx.add(boom(1.4, 0.10), 24.0, 0.50)
mus.add(pad(CH['Fm9'], 3.2, 900) * np.minimum(1, tt(int(3.2 * SR)) / 0.5)[:, None], 24.0, 0.16)
mus.add(keys_st(CH['Fm9'], dur=1.8, bright=0.6), 24.0, 0.22)
for i, t in enumerate((24.5, 25.0)):
    tk.add(TICK if i % 2 == 0 else TOCK, t, 0.22)
fx.add(boom(2.4, 0.40), 25.5, 0.85)
mus.add(keys_st(CH['Ab9'], dur=2.4, bright=1.25), 25.5, 0.48)
mus.add(keys_st(CH['Fm9h'], dur=2.0, bright=0.9), 25.5, 0.20)
low.add(bass(F2, 1.0), 25.5, 0.42)
for i in range(2):
    tk.add(TICK if i % 2 == 0 else TOCK, 26.0 + i * 0.5, 0.16)

# 27-30  end card: one last kick, the chord resolves, and the clocks tick: a tock on every second
kb.add(K, 27.0, 0.80); kicks.append(27.0)
fx.add(boom(1.2, 0.30), 27.0, 0.30)
mus.add(keys_st(CH['Fm9'], dur=2.9, bright=1.0), 27.0, 0.44)
mus.add(keys_st(CH['Fm9h'], dur=2.6, bright=0.8), 27.0, 0.18)
low.add(bass(F2, 0.9), 27.0, 0.36)
for i in range(11):
    on_second = i % 4 == 3
    tk.add(TOCK if on_second else TICK, 27.25 + i * 0.25, (0.30 if on_second else 0.16) * (1 - i / 18), -0.25 if i % 2 == 0 else 0.25)

# ---------- mix ----------
t = tt(N)
duck = np.ones(N)                                                                    # sidechain: the kick makes room for itself
for k in kicks:
    i = int(k * SR); n = min(N - i, int(0.3 * SR))
    duck[i:i + n] = np.minimum(duck[i:i + n], 1 - 0.55 * np.exp(-tt(n) / 0.085))
room, hall = reverb_ir(0.45, 1.6), reverb_ir(1.3, 4.0, 300, 6000)
G = dict(kick=1.0, drums=2.8, low=0.95, mus=2.1, fx=1.0, tk=2.4)                     # bus levels
mus_wet = mus.b + delay(mus.b) * 0.45
parts = {
    'kick': kb.b * G['kick'],
    'drums': drums.b * G['drums'] + reverb(drums.b * 0.10 * G['drums'], room) * 0.9,
    'low': low.b * duck[:, None] * G['low'],
    'mus': mus_wet * (0.55 + 0.45 * duck[:, None]) * G['mus'] + reverb(mus_wet * 0.32 * G['mus'], hall) * (0.6 + 0.4 * duck[:, None]),
    'fx': fx.b * G['fx'] + reverb(fx.b * 0.22 * G['fx'], hall),
    'tk': tk.b * G['tk'] + reverb(tk.b * 0.35 * G['tk'], room) * 0.9,
}
mix = sum(parts.values())
if '--stats' in sys.argv:
    def bands(x):
        m = x.mean(1); return [10 * np.log10((filt(m, 'bp', [lo, hi], 4) ** 2).mean() + 1e-12) for lo, hi in ((30, 120), (120, 400), (400, 2000), (2000, 6000), (6000, 16000))]
    print('bus      sub  lowmid   mid  pres   air   (dB)   peak')
    for k, v in list(parts.items()) + [('MIX', mix)]:
        print(f'{k:6s}' + ''.join(f'{b:6.1f}' for b in bands(v)) + f'   {np.abs(v).max():5.2f}')

# two breaths of near silence right before the drops, and a clean tail
gap = np.ones(N)
for a, b in ((15.89, 16.0), (19.89, 20.0), (23.9, 24.0)):
    i, j = int(a * SR), int(b * SR); gap[i:j] = np.linspace(1, 0.12, j - i)
    gap[j:j + 240] = np.linspace(0.12, 1, 240)
mix *= gap[:, None]
mix[-int(0.25 * SR):] *= np.linspace(1, 0, int(0.25 * SR))[:, None] ** 2

mix = np.stack([filt(mix[:, c], 'hp', 28) for c in range(2)], 1)
mix /= np.abs(mix).max()
mix = np.tanh(1.7 * mix) / np.tanh(1.7)                                               # glue: soft saturation in place of a limiter
mix *= 10 ** (-3.2 / 20) / np.abs(mix).max()                                          # headroom; lands near -12.5 LUFS

out = next((a for a in sys.argv[1:] if not a.startswith('--')), 'reel.wav')
wavfile.write(out, SR, mix.astype(np.float32))
rms = 20 * np.log10(np.sqrt((mix ** 2).mean()))
print(f'wrote {out}: {DUR:.0f}s, peak {20 * np.log10(np.abs(mix).max()):.1f} dBFS, rms {rms:.1f} dBFS')
