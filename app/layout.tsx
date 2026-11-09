import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { site } from '@/lib/site';
import './globals.css';

const nunito = localFont({
  src: [
    { path: './fonts/Nunito-Regular.ttf', weight: '400', style: 'normal' },
    { path: './fonts/Nunito-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: './fonts/Nunito-Bold.ttf', weight: '700', style: 'normal' },
    { path: './fonts/Nunito-ExtraBold.ttf', weight: '800', style: 'normal' },
    { path: './fonts/Nunito-Black.ttf', weight: '900', style: 'normal' },
  ],
  variable: '--font-nunito',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name}: recipe keeper that gets you cooking`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: site.name,
    url: site.url,
    title: `${site.name}: ${site.promise}`,
    description: site.description,
  },
  twitter: { card: 'summary_large_image' },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F7F4F0' },
    { media: '(prefers-color-scheme: dark)', color: '#141110' },
  ],
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${nunito.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col bg-bg text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-surface focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
