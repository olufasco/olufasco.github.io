# olufasco.github.io

My developer portfolio, built with React, TypeScript and Vite and deployed to
GitHub Pages at **https://olufasco.github.io**.

## Editing content

All text, skills and projects live in [`src/data.ts`](src/data.ts). To show
email, LinkedIn or a CV link in the Contact section, fill in `email`,
`linkedin` or `cv` on `profile`. Empty values are hidden.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Deploy

Every push to `main` builds and deploys through
`.github/workflows/deploy.yml`. One-time setup: **Settings → Pages → Build and
deployment → Source: GitHub Actions**.
