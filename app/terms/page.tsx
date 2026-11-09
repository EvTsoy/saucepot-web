import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalPage, type Section } from '@/components/LegalPage';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Terms of Use (EULA)',
  description: `Terms of Use for ${site.name}, including subscriptions, the free trial and cancellation.`,
  alternates: { canonical: '/terms' },
};

const mail = <a href={`mailto:${site.email}`}>{site.email}</a>;

const sections: Section[] = [
  {
    id: 'acceptance',
    title: 'Acceptance',
    body: (
      <p>
        These Terms of Use are an agreement between you and {site.owner} (&quot;we&quot;, &quot;us&quot;) for the
        Saucepot app and this website. By downloading or using Saucepot you agree to them. If you don&apos;t agree,
        please don&apos;t use the app.
      </p>
    ),
  },
  {
    id: 'apple-eula',
    title: 'App Store users',
    body: (
      <p>
        If you got Saucepot from the Apple App Store, Apple&apos;s{' '}
        <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">
          Licensed Application End User License Agreement (Standard EULA)
        </a>{' '}
        applies, and these terms add to it. If they conflict, the Standard EULA wins. Apple is not responsible for the
        app or its support.
      </p>
    ),
  },
  {
    id: 'licence',
    title: 'Licence',
    body: (
      <p>
        We give you a personal, non-exclusive, non-transferable licence to use Saucepot on devices you own or control,
        under the rules of the store you got it from. You may not copy, resell, reverse-engineer or redistribute the
        app, its artwork, its mascot Stew or its voice recordings.
      </p>
    ),
  },
  {
    id: 'subscriptions',
    title: 'Subscriptions and purchases',
    body: (
      <>
        <p>Saucepot needs Saucepot Pro to use. Pro is available as:</p>
        <ul>
          <li>
            <strong>Monthly</strong>: an auto-renewing subscription billed every month.
          </li>
          <li>
            <strong>Yearly</strong>: an auto-renewing subscription billed every year, starting with a 7-day free trial
            where offered.
          </li>
          <li>
            <strong>Lifetime</strong>: a one-time purchase that doesn&apos;t renew.
          </li>
        </ul>
        <p>Prices are shown in the app before you buy, in your local currency.</p>
        <ul>
          <li>Payment is charged to your Apple ID or Google account when you confirm the purchase.</li>
          <li>
            Subscriptions renew automatically unless you cancel at least 24 hours before the end of the current period.
            Your account is charged for the next period within 24 hours before it ends.
          </li>
          <li>
            Free trial: if you don&apos;t cancel at least 24 hours before the trial ends, it converts to a paid yearly
            subscription and you&apos;re charged. Any unused part of a trial ends when you buy a subscription.
          </li>
          <li>
            Manage or cancel in your store account settings (iPhone: Settings → your name → Subscriptions; Android: Play
            Store → Payments &amp; subscriptions) or in the app under Settings → Manage subscription. Cancelling stops
            the next renewal; you keep Pro until the paid period ends.
          </li>
          <li>
            Refunds are handled by Apple or Google under their refund policies. We can&apos;t issue refunds for store
            purchases ourselves.
          </li>
          <li>Restore a purchase on a new phone with Settings → Restore purchases.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'your-content',
    title: 'Your recipes and content',
    body: (
      <p>
        Recipes you import or type stay on your phone and remain yours. You&apos;re responsible for having the right
        to save content you import, and for how you share it. Saucepot reads a web page only when you ask it to import
        that page.
      </p>
    ),
  },
  {
    id: 'acceptable-use',
    title: 'Acceptable use',
    body: (
      <p>
        Don&apos;t use Saucepot to break the law, to infringe anyone&apos;s rights, or to interfere with the app or the
        websites it reads from (for example by automated mass importing).
      </p>
    ),
  },
  {
    id: 'disclaimers',
    title: 'Disclaimers',
    body: (
      <>
        <p>
          Saucepot helps you keep recipes and plan to cook them. It gives no nutrition, dietary, allergy or health
          advice. Check ingredients, allergens and cooking times yourself; recipes come from their original sources and
          we don&apos;t verify them.
        </p>
        <p>
          The app is provided &quot;as is&quot; and &quot;as available&quot;. To the extent the law allows, we make no
          warranties beyond those required by law, and we don&apos;t promise it will be uninterrupted or error-free.
        </p>
      </>
    ),
  },
  {
    id: 'liability',
    title: 'Limitation of liability',
    body: (
      <p>
        To the extent the law allows, we&apos;re not liable for indirect, incidental or consequential damages, or for
        loss of data stored on your device. Our total liability for any claim is limited to the amount you paid for
        Saucepot in the 12 months before the claim. Nothing here limits rights you have under consumer law that
        can&apos;t be limited.
      </p>
    ),
  },
  {
    id: 'termination',
    title: 'Termination',
    body: (
      <p>
        You can stop using Saucepot at any time by deleting it (and cancelling any subscription in your store account).
        We may end your licence if you seriously break these terms. Sections on disclaimers, liability and governing law
        continue after termination.
      </p>
    ),
  },
  {
    id: 'governing-law',
    title: 'Governing law',
    body: site.governingLaw ? (
      <p>
        These terms are governed by {site.governingLaw}, without affecting mandatory consumer protection rules of the
        country where you live.
      </p>
    ) : (
      <p className="rounded-md border border-line bg-tint p-3 font-extrabold">
        TODO: governing law. Set <code>governingLaw</code> in lib/site.ts before going live.
      </p>
    ),
  },
  {
    id: 'changes',
    title: 'Changes',
    body: (
      <p>
        We may update these terms. The new version applies from the date at the top of this page. If a change is
        significant, we&apos;ll say so in the app or on this site.
      </p>
    ),
  },
  {
    id: 'contact',
    title: 'Contact',
    body: (
      <p>
        {site.owner}, {mail}. Help with the app: <Link href="/support">Support</Link>. Privacy:{' '}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use (EULA)"
      intro={<p>Plain-language terms for using Saucepot. They are a practical draft, not legal advice.</p>}
      sections={sections}
    />
  );
}
