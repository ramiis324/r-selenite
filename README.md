# r-selenite

CDN repo hosting games sourced from [selenite-cc/selenite-old](https://github.com/selenite-cc/selenite-old), an open-source unblocked-games site.

Served via GitHub Pages for the Rcdn site's offline games section.

- Games live under `selenite/<folder>/` (entry: `selenite/<folder>/index.html`).
- `js/` and `emulatorjs/` are shared root assets that game pages reference.
- `js/all.js` is a cleaned shim (original added analytics + anti-embedding that would blank an iframe).