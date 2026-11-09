import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Support',
  description: `Help with ${site.name}: restore purchases, manage your subscription, delete your data, and contact us.`,
  alternates: { canonical: '/support' },
};

const faq: { id: string; q: string; a: React.ReactNode }[] = [
  {
    id: 'restore',
    q: 'How do I restore my purchase?',
    a: (
      <p>
        Open Saucepot, go to <strong>Settings → Restore purchases</strong>. Use the same Apple ID or Google account you
        bought with. Your Pro access comes back on any phone signed in to that account.
      </p>
    ),
  },
  {
    id: 'cancel',
    q: 'How do I manage or cancel my subscription?',
    a: (
      <>
        <p>
          In the app: <strong>Settings → Manage subscription</strong>. Or directly in your store account:
        </p>
        <ul>
          <li>
            iPhone and iPad: Settings → your name → Subscriptions → Saucepot.{' '}
            <a href="https://support.apple.com/en-us/118428">Apple&apos;s guide</a>
          </li>
          <li>
            Android: Play Store → your profile → Payments &amp; subscriptions → Subscriptions → Saucepot.{' '}
            <a href="https://support.google.com/googleplay/answer/7018481">Google&apos;s guide</a>
          </li>
        </ul>
        <p>Cancel at least 24 hours before the current period ends to avoid the next charge.</p>
      </>
    ),
  },
  {
    id: 'trial',
    q: 'How does the free trial work?',
    a: (
      <p>
        The yearly plan starts with a 7-day free trial. You&apos;re charged the yearly price when the trial ends unless
        you cancel at least 24 hours before. If you turn on the reminder, Saucepot notifies you before the trial ends.
        Monthly renews every month; Lifetime is a one-time purchase.
      </p>
    ),
  },
  {
    id: 'storage',
    q: 'Where are my recipes stored?',
    a: (
      <p>
        Only on your phone. Saucepot has no account and no cloud copy, so deleting the app deletes your recipes.{' '}
        <Link href="/privacy">More in the privacy policy</Link>.
      </p>
    ),
  },
  {
    id: 'delete',
    q: 'How do I delete my data?',
    a: (
      <p>
        <strong>Settings → Delete my data</strong> removes your recipes, cook history and grocery list from the phone.
        Deleting the app removes everything. Your subscription stays with your Apple or Google account; cancel it there
        if you want to stop paying.
      </p>
    ),
  },
  {
    id: 'import',
    q: 'Importing a recipe didn’t work',
    a: (
      <p>
        Some websites block apps from reading their pages. Tap <strong>Paste text instead</strong>, copy the recipe
        from the page and paste it. You can also type it in.
      </p>
    ),
  },
  {
    id: 'voice',
    q: 'How do I turn off Stew’s voice?',
    a: (
      <p>
        <strong>Settings → Stew talks</strong>. He also stays quiet when your phone is on silent, and while VoiceOver
        or TalkBack is on (his line still shows as text).
      </p>
    ),
  },
  {
    id: 'notifications',
    q: 'I don’t get reminders',
    a: (
      <p>
        Check <strong>Settings → Notifications</strong> in Saucepot, then allow notifications for Saucepot in your
        phone&apos;s settings. Reminders are scheduled on the phone, so they work offline.
      </p>
    ),
  },
  {
    id: 'crash',
    q: 'The app crashes or won’t open',
    a: (
      <p>
        Update Saucepot to the latest version and restart your phone. If it still happens, email us with the details
        below.
      </p>
    ),
  },
];

export default function SupportPage() {
  return (
    <article className="mx-auto max-w-[720px] px-5 pb-20 pt-12">
      <div className="flex items-center gap-4">
        <Image src="/app-icon.png" alt="Saucepot app icon" width={64} height={64} className="rounded-[16px]" />
        <div>
          <h1 className="text-[2.125rem] font-black leading-tight tracking-tight">Saucepot support</h1>
          <p className="text-[15px] font-bold text-muted">For the Saucepot app on iPhone, iPad and Android.</p>
        </div>
      </div>

      <section aria-labelledby="contact" className="mt-8 rounded-[22px] border border-line bg-surface p-6">
        <h2 id="contact" className="text-[1.375rem] font-black">
          Contact us
        </h2>
        <p className="mt-2 text-[17px] leading-relaxed">
          Email{' '}
          <a href={`mailto:${site.email}?subject=Saucepot%20support`} className="font-extrabold">
            {site.email}
          </a>
          . We usually reply within 2 business days.
        </p>
        <p className="mt-3 text-[15px] font-extrabold text-muted">Please include</p>
        <ul className="mt-1 list-disc pl-5 text-[17px] leading-relaxed">
          <li>the app version (Settings → About)</li>
          <li>your phone model and iOS or Android version</li>
          <li>what you did and what happened</li>
        </ul>
        <p className="mt-3 text-[15px] text-muted">
          In the app, Settings → Contact support fills in the version for you. Never send passwords or payment details.
        </p>
      </section>

      <section aria-labelledby="faq" className="prose-legal mt-4">
        <h2 id="faq">Frequently asked questions</h2>
        {faq.map((item) => (
          <div key={item.id} className="mt-6">
            <h3 id={item.id}>{item.q}</h3>
            {item.a}
          </div>
        ))}
      </section>

      <p className="mt-10 text-[15px] text-muted">
        See also the <Link href="/privacy">Privacy Policy</Link> and the <Link href="/terms">Terms of Use</Link>.
      </p>
    </article>
  );
}
