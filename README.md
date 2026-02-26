# Inspire AI PM Personal Portfolio

Personal portfolio for the Inspire (Thoughtworks China) AI Product Manager challenge.

## Stack

- React + Vite + TypeScript
- Fully static single-page site
- Bilingual (Chinese/English) with runtime language switch
- GitHub Pages deployment via GitHub Actions

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Content Source

- Main profile content: `src/content/profile.ts`
- Types: `src/types/profile.ts`
- Components: `src/components/*`
- Styles: `src/styles/*`

## Deployment (GitHub Pages)

1. Push this project to a GitHub repository.
2. In repository settings, enable Pages and set source to `GitHub Actions`.
3. Ensure default branch is `main`.
4. Push to `main` and workflow `.github/workflows/deploy.yml` will deploy automatically.

The Vite base path is auto-detected in CI from `GITHUB_REPOSITORY`, so the same code works for local preview and GitHub Pages.

## Public URL

- Placeholder: `https://<github-username>.github.io/<repo-name>/`
