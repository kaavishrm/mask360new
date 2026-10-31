# Assembles carousels/png/*/slide-*.png into one PDF per carousel and a contact sheet per carousel.
from PIL import Image
import os, glob
root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
png_root = os.path.join(root, "carousels", "png")
os.makedirs(os.path.join(root, "previews"), exist_ok=True)
for cid in sorted(os.listdir(png_root)):
    files = sorted(glob.glob(os.path.join(png_root, cid, "slide-*.png")))
    imgs = [Image.open(f).convert("RGB") for f in files]
    imgs[0].save(os.path.join(root, "carousels", f"{cid}.pdf"), save_all=True, append_images=imgs[1:], resolution=96.0)
    tw, th, cols = 360, 450, 4
    rows = (len(imgs) + cols - 1) // cols
    sheet = Image.new("RGB", (cols * tw + (cols + 1) * 12, rows * th + (rows + 1) * 12), (40, 40, 40))
    for i, im in enumerate(imgs):
        sheet.paste(im.resize((tw, th), Image.LANCZOS), (12 + (i % cols) * (tw + 12), 12 + (i // cols) * (th + 12)))
    sheet.save(os.path.join(root, "previews", f"{cid}.png"))
    print(cid, len(imgs), "slides")
