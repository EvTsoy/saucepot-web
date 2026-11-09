import { site } from '@/lib/site';

function Badge({ store, href }: { store: string; href: string | null }) {
  const body = (
    <>
      <span className="block text-[11px] font-bold uppercase tracking-wide opacity-75">
        {href ? 'Download on' : 'Coming soon to'}
      </span>
      <span className="block text-lg font-black leading-tight">{store}</span>
    </>
  );
  const cls = 'inline-flex min-w-44 flex-col rounded-[14px] bg-ink px-5 py-2.5 text-bg no-underline';
  // Official badge artwork replaces this once the store pages exist (W6).
  return href ? (
    <a href={href} className={cls}>
      {body}
    </a>
  ) : (
    <span className={`${cls} opacity-90`} aria-label={`${store}: coming soon`}>
      {body}
    </span>
  );
}

export function StoreBadges({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <Badge store="App Store" href={site.appStoreUrl} />
      <Badge store="Google Play" href={site.playStoreUrl} />
    </div>
  );
}
