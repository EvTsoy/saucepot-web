import Image from 'next/image';
import Link from 'next/link';
import { nav, site } from '@/lib/site';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2.5 no-underline" aria-label={`${site.name} home`}>
          <Image src="/app-icon.png" alt="" width={32} height={32} className="rounded-[9px]" priority />
          <span className="text-lg font-black text-ink">{site.name}</span>
        </Link>
        <nav aria-label="Main" className="flex items-center gap-1 text-[15px] font-extrabold">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${item.href === '/support' ? '' : 'hidden sm:inline-block'} rounded-full px-3 py-2 text-muted no-underline hover:bg-tint hover:text-ink`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
