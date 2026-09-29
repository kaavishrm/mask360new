# mask360.agency

The Mask360 website. Static, no framework, no dependencies. Everything a browser needs is in `public/`.

## Edit

- `content.mjs` holds every word on the site: home, contact, the nine case studies, the client index and the "also" list.
- `build.mjs` turns that into HTML in `public/`. Run it after any edit:

```
cd website && node build.mjs
```

- `public/assets/css/site.css` is the design system (Space Grotesk, white, paper, night, flame, curved cards).
- `public/assets/js/site.js` only handles video loops and the footer year.
- `DESIGN.md` is the creative direction: references, the single idea, what we refuse, the tokens.

The build refuses to run if the copy contains an em dash, an exclamation mark or a banned word.

## Add a case study

1. Drop rendered WebP files into `public/assets/img/<slug>/` named `<name>-<width>.webp` (widths 1800, 1200, 720 for landscape; 1440, 1000, 640 for portrait).
2. Update `assets-manifest.json` with the new set (name, width, height, sizes). A small Python or Node script can regenerate it by scanning the folder.
3. Add the case to `cases` in `content.mjs`, optionally to `featured` for the home page and `indexSpans` in `build.mjs` for the work index layout.
4. Video loops live in `public/assets/video/` as `<name>.mp4`, `<name>.webm` and `<name>-poster.webp`. Encode at 1280 wide, muted, 24 fps, H.264 CRF 28 to 30 and VP9 CRF 36.

## Deploy

Any static host works. Configs are included for three:

- **Vercel**: import the repo; `vercel.json` sets the build command and output directory. Point `mask360.agency` at Vercel when ready.
- **Netlify**: import the repo; `netlify.toml` sets base, command and publish folder.
- **GitHub Pages**: `.github/workflows/pages.yml` builds and deploys on every push to `main` that touches `website/`. Enable Pages with the "GitHub Actions" source and attach the custom domain (links are root relative, so the site needs its own domain rather than a `/repo/` path).

## Contact form

The form posts to [FormSubmit](https://formsubmit.co) and delivers to `connect@mask360.agency`. The first submission triggers a one-time activation email to that inbox; click the link once and every message after that arrives normally. Replies land on `/contact/thanks/`. Swap the `action` in `contactPage.form` in `content.mjs` to use another service.

## Media sources

Photography and film come from the Mask360 Drive (Anantara Jewel Bagh shoot, ZORÁE studio films, Ajio Luxe Wkend 2023, Chivas Regal CGI, St. Regis and Fire-Boltt films) and from the credentials site at mask360.work. Nothing is stock.
