import Link from 'next/link';
import { Stew } from '@/components/Stew';

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center px-5 py-24 text-center">
      <Stew mood="roast" size={160} />
      <h1 className="mt-6 text-3xl font-black">Nothing cooking here</h1>
      <p className="mt-2 text-lg text-muted">This page doesn&apos;t exist.</p>
      <Link
        href="/"
        className="mt-8 rounded-[18px] bg-primary px-6 py-3.5 text-[17px] font-black text-on-primary no-underline shadow-[0_4px_0_var(--c-primary-edge)]"
      >
        Go home
      </Link>
    </div>
  );
}
