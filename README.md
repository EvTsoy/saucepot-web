# saucepot-web

The website for the Saucepot app: https://saucepot.evtsoy.com

- `/`: landing page
- `/support`: App Store Support URL (required, Apple 1.5)
- `/privacy`: Privacy Policy
- `/terms`: Terms of Use (EULA)

Next.js 16 (App Router, every page static), Tailwind CSS 4, Nunito self-hosted. Colours come from the app's tokens in `brand/colors.json`.

## Commands

```bash
npm install
npm run dev      # http://localhost:3000
npm run check    # tokens + typecheck + lint + tests + build
```

`npm run tokens` regenerates `app/tokens.css` from `brand/colors.json`. Copy a fresh `colors.json` from the app when its tokens change.

## Deploy (Vercel)

1. Push this folder to the GitHub repo `saucepot-web` (branch `main`).
2. vercel.com → Add New → Project → import `saucepot-web`. The defaults are fine (Framework: Next.js, no environment variables). Deploy.
3. Project → Settings → Domains → add `saucepot.evtsoy.com`. Vercel shows the DNS record to add; usually a `CNAME` for `saucepot` pointing to the value Vercel gives. Add it at the DNS provider for `evtsoy.com` and wait for the domain to show "Valid".
4. Open https://saucepot.evtsoy.com/support, `/privacy` and `/terms` and check each one loads over HTTPS.

Every push to `main` deploys to production; other branches get preview URLs.

## Before going live

- [ ] Set `governingLaw` in `lib/site.ts` (e.g. `'the laws of Uzbekistan'`). Until then `/terms` shows a visible TODO.
- [ ] Replace `public/screens/*.webp` with real device screenshots (390×844 @2x crops, same file names). The current ones are the approved design renders.
- [ ] After the apps are approved: set `appStoreUrl` / `playStoreUrl` in `lib/site.ts`, swap the "Coming soon" pills for the official App Store and Google Play badge artwork, and add the Smart App Banner (`itunes: { appId }` in the root metadata).

## When the app changes what it collects

Update `/privacy` (and `/support` if needed) in the same release, before the app goes to review. The source of truth is the app repo's `docs/PRIVACY_INVENTORY.md` (a copy is in `docs/APP_PRIVACY_INVENTORY.md`).

The legal pages are a practical draft that matches how the app works. They are not legal advice; a lawyer can review them.
