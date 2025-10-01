# APK Download Landing Page

This is a simple, responsive HTML/CSS/JS site for hosting an APK download.

## Quick start
1. Open `script.js` and set values in the `CONFIG` object:
   - `apkUrl`: paste your APK download link
   - `appName`, `tagline`
   - Optional: `version`, `lastUpdated`, `sha256`, `contactEmail`, `primaryColor`, `privacyUrl`, `termsUrl`
2. Open `index.html` in your browser to preview (double‑click it or use your browser's Open File option).
3. Customize text in `index.html` if needed and adjust styles in `styles.css`.

## Notes
- The Download button is disabled until `CONFIG.apkUrl` is set.
- The checksum (SHA‑256) line is hidden unless you provide `CONFIG.sha256`.
- This is static and works on any host (GitHub Pages, Netlify, S3, etc.).

## Optional enhancements
- Add a logo: replace the text logo in the header or insert an `<img>` tag.
- Add a favicon: place `favicon.ico` in the same folder and add the appropriate `<link>` tag in `index.html`.
- Create simple Privacy and Terms pages (or set `privacyUrl`/`termsUrl` to existing URLs).
