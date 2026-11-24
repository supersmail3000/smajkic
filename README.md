# smailsmajkic.com

find the problem. shape the product. build the brand.

the source of smailsmajkic.com. one page, one object: a black chrome cube that reflects the page, melts as the page scrolls and takes a new shape for product, design and brand.

## stack

- the homepage is one static file, `public/home.html`, with its own three.js scene
- three.js r170, vendored under `public/vendor`, no bundler
- next.js 16 for the imprint, the privacy page and the routing
- geist light and geist pixel, self-hosted under `public/fonts`

## run

```bash
npm install
npm run dev
```

then open http://localhost:3000.

## structure

```
public/home.html     the homepage and its scene, served at /
public/hdri/         the studio light the chrome reflects
public/llms.txt      the facts, for language models
app/imprint/         imprint, english and german
app/privacy/         privacy, english and german
app/layout.tsx       metadata for the next routes
next.config.ts       rewrites, the www redirect, cache headers
```

## deploy

vercel cli, no git integration. a push to main deploys nothing.

```bash
npx vercel deploy          # preview
npx vercel deploy --prod   # smailsmajkic.com
```

© supersmail gmbh. all rights reserved.
