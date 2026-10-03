# Elektromax – maxelektro.be

Website van Elektromax (elektricien, Regio Antwerpen). Vite + React 19 + Tailwind CSS v4 + shadcn/ui + Motion. Talen: NL / EN / TR.

## Ontwikkelen

```bash
npm install
npm run dev            # lokale ontwikkelserver
npm run build          # productie-build in dist/ (incl. 404.html voor GitHub Pages)
npm run build:offline  # één zelfstandig HTML-bestand in dist-offline/ (opent met dubbelklik)
```

## Inhoud

- Teksten: `src/content/` (`elektromaxNl.ts`, `elektromaxEn.ts`, `elektromax.ts` (TR), `ui.ts`, `extras.js`)
- Foto's: `src/assets/img/` (bronnen in `CREDITS.md`), koppeling in `src/content/media.js`

## Publicatie

Elke push naar `main` bouwt en publiceert via GitHub Actions (`.github/workflows/pages.yml`) naar https://maxelektro.be.
