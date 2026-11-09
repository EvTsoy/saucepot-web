import Link from 'next/link';
import { nav, site } from '@/lib/site';

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 text-[15px] sm:flex-row sm:items-center sm:justify-between">
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2 font-extrabold">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-ink no-underline hover:text-strong">
              {item.label}
            </Link>
          ))}
          <a href={`mailto:${site.email}`} className="font-extrabold">
            {site.email}
          </a>
        </nav>
        <p className="text-muted">
          © {2026} {site.owner}
        </p>
      </div>
    </footer>
  );
}
