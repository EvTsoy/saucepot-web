import Link from 'next/link';
import { PhoneFrame } from '@/components/PhoneFrame';
import { Stew } from '@/components/Stew';
import { StoreBadges } from '@/components/StoreBadges';
import { site } from '@/lib/site';

const features = [
  {
    title: 'Save from any link',
    body: 'Paste a recipe link or share it from Safari. Saucepot pulls out the ingredients and steps, without the life story.',
    shot: '/screens/recipe.webp',
    alt: 'A saved recipe with its photo, ingredients and a Start cooking button',
  },
  {
    title: 'Cook step by step',
    body: 'Big steps, built-in timers, an ingredient checklist and a screen that stays awake while your hands are messy.',
    shot: '/screens/cook.webp',
    alt: 'Cook mode showing one step with a running timer',
  },
  {
    title: 'The recipe graveyard',
    body: 'Recipes that wait too long end up here. Cook one, or finally let it go. Stew keeps count either way.',
    shot: '/screens/graveyard.webp',
    alt: 'The graveyard listing recipes waiting for weeks',
  },
  {
    title: 'A grocery list that knows the recipe',
    body: 'Add a recipe’s ingredients in one tap, tick them off in the shop, share what’s left.',
    shot: '/screens/grocery.webp',
    alt: 'Grocery list with items left to buy',
  },
];

const steps = [
  { n: '1', title: 'Save', body: 'Paste a link, share from your browser, or type it in.' },
  { n: '2', title: 'Pick one', body: 'Set a weekly goal. Saucepot shows what’s been waiting longest.' },
  { n: '3', title: 'Cook it', body: 'Cook mode walks you through. Tap Cooked it and Stew grudgingly approves.' },
];

const differences = [
  'No ads, ever',
  'No account: recipes stay on your phone',
  'Works offline once a recipe is saved',
  'Home Screen and Lock Screen widgets',
  'A weekly recap to share (or hide)',
  'Lifetime option, no subscription needed',
];

const faq = [
  {
    q: 'Is there a free trial?',
    a: 'Yes. The yearly plan starts with a 7-day free trial. Monthly and a one-time Lifetime purchase are also available; prices are shown in the app.',
  },
  { q: 'Do I need an account?', a: 'No. There’s no sign-in, and your recipes live only on your phone.' },
  {
    q: 'Who is Stew?',
    a: 'A grumpy cast-iron pot who roasts your save-and-never-cook habit, never you. He can talk, and goes quiet when your phone is on silent.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  name: site.name,
  operatingSystem: 'iOS, Android',
  applicationCategory: 'LifestyleApplication',
  description: site.description,
  url: site.url,
  author: { '@type': 'Person', name: site.owner },
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-12 md:grid-cols-[1.1fr_0.9fr] md:pt-20">
        <div>
          <Stew mood="idle" size={96} className="mb-4" />
          <h1 className="text-[2.75rem] font-black leading-[1.05] tracking-tight sm:text-6xl">
            Save the recipe.
            <br />
            <span className="text-strong">Actually cook it.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
            Saucepot is a recipe keeper that gets you cooking. Save recipes from any site, set a weekly goal, and let
            Stew the grumpy pot keep count of what you never made.
          </p>
          <StoreBadges className="mt-8" />
          <p className="mt-4 text-[15px] font-bold text-muted">7-day free trial on the yearly plan.</p>
        </div>
        <PhoneFrame src="/screens/home.webp" alt="Saucepot home screen with the weekly cooking goal" priority />
      </section>

      {/* Problem */}
      <section className="bg-surface">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Hundreds of saved recipes. Toast again.</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Bookmarks, screenshots, a dozen tabs. Saving feels like cooking, until it&apos;s 7 pm. Saucepot turns the
            pile into a short list, and makes sure the good ones actually get made.
          </p>
        </div>
      </section>

      {/* Features */}
      <section aria-labelledby="features" className="mx-auto max-w-6xl px-5 py-20">
        <h2 id="features" className="sr-only">
          Features
        </h2>
        <div className="grid gap-20">
          {features.map((f, i) => (
            <div key={f.title} className="grid items-center gap-10 md:grid-cols-2">
              <div className={i % 2 ? 'md:order-2' : ''}>
                <h3 className="text-3xl font-black tracking-tight">{f.title}</h3>
                <p className="mt-3 text-lg leading-relaxed text-muted">{f.body}</p>
              </div>
              <PhoneFrame src={f.shot} alt={f.alt} />
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-tint">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="text-center text-3xl font-black tracking-tight sm:text-4xl">How it works</h2>
          <ol className="mt-10 grid gap-5 sm:grid-cols-3">
            {steps.map((s) => (
              <li key={s.n} className="rounded-[22px] bg-surface p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-black text-on-primary">
                  {s.n}
                </span>
                <h3 className="mt-4 text-xl font-black">{s.title}</h3>
                <p className="mt-1 leading-relaxed text-muted">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Different */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-[0.8fr_1.2fr]">
        <div className="flex justify-center">
          <Stew mood="roast" size={220} />
        </div>
        <div>
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Made to be used, not scrolled</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {differences.map((d) => (
              <li key={d} className="flex items-center gap-3 rounded-[16px] border border-line bg-surface px-4 py-3 font-extrabold">
                <span aria-hidden className="h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
                {d}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq" className="bg-surface">
        <div className="mx-auto max-w-3xl px-5 py-16">
          <h2 id="faq" className="text-3xl font-black tracking-tight">
            Questions
          </h2>
          <dl className="mt-6 divide-y divide-line">
            {faq.map((f) => (
              <div key={f.q} className="py-5">
                <dt className="text-lg font-black">{f.q}</dt>
                <dd className="mt-1 leading-relaxed text-muted">{f.a}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 font-extrabold">
            More answers on the <Link href="/support">support page</Link>.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-3xl px-5 py-20 text-center">
        <Stew mood="happy" size={120} className="mx-auto" />
        <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">Your recipes are waiting.</h2>
        <p className="mt-3 text-lg text-muted">Stew says they&apos;re not getting any younger.</p>
        <StoreBadges className="mt-8 justify-center" />
      </section>
    </>
  );
}
