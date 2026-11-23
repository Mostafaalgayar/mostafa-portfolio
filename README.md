# Mostafa Algayar | Front-End Portfolio

Personal portfolio built with React, TypeScript, Vite and Tailwind CSS.

## Run locally

Open a terminal in the folder containing package.json:

```sh
npm ci
npm run dev
```

Open the local address printed in the terminal. Node.js 22 is recommended.

## Build and preview

```sh
npm run build
npm run preview
```

The production build is generated in dist/. The source includes the approved soft-edge portrait, project screenshot and WhatsApp contact button. Images are embedded as WebP data in src/assets.ts so no external image folder is required.

## Edit

- src/App.tsx: page sections and contact button.
- src/data/portfolio.ts: profile, projects and contact links.
- src/index.css: responsive layout and styling.
- src/assets.ts: optimized image data.
- docs/index.html: self-contained deployed version. Open it directly for a no-install preview.

GitHub Pages publishes from main /docs. After editing source, rebuild and regenerate docs/index.html before publishing updates. The deployed single-file page contains a gzip-compressed production script and uses the browser's DecompressionStream API. Google Fonts and outgoing links require internet.
