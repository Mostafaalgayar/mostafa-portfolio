# Mostafa Algayar | Front-End Portfolio

Personal portfolio built with React, TypeScript, Vite and Tailwind CSS.

## Run locally

Open a terminal in the folder containing package.json, then run:

```sh
npm ci
npm run dev
```

Open the local address printed in the terminal. Node.js 22 is recommended.

## Build

```sh
npm run build
npm run preview
```

The production build is in dist/. Image paths use the Vite base so the site works under a GitHub Pages repository path.

## Files

- src/App.tsx: page sections and contact button.
- src/data/portfolio.ts: profile, projects and contact links.
- src/index.css: responsive layout and styling.
- public/images/portrait-soft.png: approved soft-edge portrait.
- public/images/adasa-preview.png: project screenshot.
- preview.html: self-contained preview of this version, opened without installation.
- docs/index.html: same self-contained production version for GitHub Pages.

GitHub Pages publishes from main /docs. After editing source, rebuild and regenerate the self-contained preview and docs page before publishing updates. Google Fonts and outgoing contact links require internet.
