/** One place for the site's identity. Matches the app (src/config/app.ts). */
export const site = {
  name: 'Saucepot',
  slug: 'saucepot',
  url: 'https://saucepot.evtsoy.com',
  email: 'saucepot@evtsoy.com',
  owner: 'Evgeniy Tsoy',
  promise: 'Save the recipe. Actually cook it.',
  description:
    'Saucepot keeps the recipes you save and nudges you to actually cook them. Import from any link, cook step by step, and let Stew the grumpy pot keep count.',
  /** Store links: null until the apps are live. Badges show "Coming soon" without a link. */
  appStoreUrl: null as string | null,
  playStoreUrl: null as string | null,
  /**
   * Governing law for the Terms. Fill in the country before go-live
   * (for example 'the laws of Uzbekistan'). While null, /terms shows a visible notice.
   */
  governingLaw: null as string | null,
  legalUpdated: '9 November 2026',
} as const;

export const nav = [
  { href: '/support', label: 'Support' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
] as const;
