# Decisions

- W-001 Separate repo `saucepot-web`, deployed on Vercel, domain `saucepot.evtsoy.com`.
- W-002 Next.js 16 App Router, all routes statically prerendered. Tailwind CSS 4 for styling; colours only from `brand/colors.json` via generated CSS variables (`app/tokens.css`), light and dark by `prefers-color-scheme`.
- W-003 Nunito self-hosted with `next/font/local` (same files as the app, OFL in `app/fonts/OFL.txt`). No font CDN.
- W-004 Stew is shown as the app's own SVG drawings (`public/stew`), still, no animation on the site.
- W-005 Store badges are text pills marked "Coming soon" with no link until the store pages exist; official badge artwork replaces them at go-live.
- W-006 The privacy policy is written only from the app's privacy inventory. No analytics, cookies or trackers on the site.
- W-007 Support emails are deleted within 12 months (stated in /privacy). Change the policy text if this changes.
