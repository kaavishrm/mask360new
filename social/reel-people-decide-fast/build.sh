#!/usr/bin/env bash
# Builds the reel end to end: site assets, frame sequences, picture, sound, master, cover.
# Needs node with playwright and chromium, python3 with numpy, scipy and pillow, ffmpeg and curl.
set -euo pipefail
cd "$(dirname "$0")"
export REEL_CACHE="${REEL_CACHE:-$PWD/.cache}"
C="$REEL_CACHE"; OUT=out; NAME=mask360-reel-people-decide-fast
mkdir -p "$C" "$OUT"

# 1. Fetch Switzer and the public films and stills from mask360.agency (assets.json),
#    then cut every shot into a frame sequence (shots.json).
python3 cut.py

# 2. Picture: 720 frames at 1080 by 1920, then the motion-blurred frames are averaged.
rm -rf "$C/frames" "$C/sub"
node render.mjs
python3 blend.py
rm -rf "$C/sub"

# 3. Sound.
python3 audio.py "$C/reel.wav"

# 4. Master. H.264 high profile, 24 fps, BT.709, AAC: what Instagram asks for.
ffmpeg -v error -y -framerate 24 -i "$C/frames/%05d.png" -i "$C/reel.wav" \
  -vf "scale=in_range=full:out_range=tv:out_color_matrix=bt709,format=yuv420p" \
  -c:v libx264 -preset slow -crf 16 -profile:v high -level 4.2 -g 48 -bf 2 \
  -color_primaries bt709 -color_trc bt709 -colorspace bt709 -color_range tv \
  -c:a aac -b:a 256k -ar 48000 -movflags +faststart -shortest "$OUT/$NAME.mp4"

# 5. Cover: the hook with the whole line in, after dark.
ffmpeg -v error -y -i "$C/frames/00090.png" -q:v 2 "$OUT/$NAME-cover.jpg"

ffprobe -v error -show_entries format=duration,size -of default=nw=1 "$OUT/$NAME.mp4"
echo "built $OUT/$NAME.mp4"
