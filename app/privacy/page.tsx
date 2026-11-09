import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalPage, type Section } from '@/components/LegalPage';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `How ${site.name} handles your data: recipes stay on your phone, no account, no ads, no tracking.`,
  alternates: { canonical: '/privacy' },
};

const mail = <a href={`mailto:${site.email}`}>{site.email}</a>;

const sections: Section[] = [
  {
    id: 'who-we-are',
    title: 'Who we are',
    body: (
      <p>
        Saucepot is an app for iPhone, iPad and Android made by {site.owner}, an individual developer (&quot;we&quot;,
        &quot;us&quot;). This policy covers the Saucepot app and this website. Contact: {mail}. Effective date:{' '}
        {site.legalUpdated}.
      </p>
    ),
  },
  {
    id: 'summary',
    title: 'Summary',
    body: (
      <ul>
        <li>Your recipes, cook history, grocery list and settings stay on your phone.</li>
        <li>There is no account and no sign-in.</li>
        <li>No ads, no analytics, no crash reporting, no tracking, and no AI services.</li>
        <li>Purchases go through Apple or Google, with RevenueCat checking your subscription.</li>
        <li>We don&apos;t sell or rent your data to anyone.</li>
      </ul>
    ),
  },
  {
    id: 'on-device',
    title: 'Data stored on your device',
    body: (
      <>
        <p>
          Saucepot keeps the following in its own storage on your phone. We don&apos;t receive it and can&apos;t see
          it:
        </p>
        <ul>
          <li>
            Recipes you save: title, the source web address, image address, description, servings, time, ingredients,
            steps and notes.
          </li>
          <li>When you cooked each recipe, and your grocery list.</li>
          <li>
            Your settings (appearance, weekly goal, reminders, Stew&apos;s voice on or off) and your onboarding
            answers.
          </li>
          <li>
            A recipe you have open in cook mode (dropped after 12 hours) and a link shared to Saucepot before it&apos;s
            opened (dropped after 24 hours).
          </li>
          <li>
            On iPhone, the home-screen widget and the share extension read a small summary from a storage area shared
            only with Saucepot on your phone (an App Group). It is not uploaded.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'leaves-device',
    title: 'Data that leaves your device',
    body: (
      <>
        <p>Only in these cases, and only what&apos;s listed:</p>
        <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th scope="col">What</th>
              <th scope="col">To whom</th>
              <th scope="col">When</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>A request for the recipe page you chose to import</td>
              <td>That website</td>
              <td>When you tap Import, or share a link to Saucepot</td>
            </tr>
            <tr>
              <td>
                Purchase and subscription status, an anonymous app user ID that RevenueCat creates, and basic device
                and OS details
              </td>
              <td>
                RevenueCat, Inc. (<a href="https://www.revenuecat.com/privacy">privacy policy</a>)
              </td>
              <td>When the app checks, buys or restores your subscription</td>
            </tr>
            <tr>
              <td>Payment</td>
              <td>Apple or Google</td>
              <td>When you buy or restore through the App Store or Google Play</td>
            </tr>
            <tr>
              <td>The app&apos;s runtime version and update channel</td>
              <td>
                Expo&apos;s update service (<a href="https://expo.dev/privacy">privacy policy</a>)
              </td>
              <td>When the app checks for a bug-fix update. Nothing about your recipes is sent</td>
            </tr>
            <tr>
              <td>Your grocery list text or your weekly recap image</td>
              <td>Whoever you choose in the share sheet</td>
              <td>Only when you tap Share</td>
            </tr>
            <tr>
              <td>The app version, build and OS version, plus anything you write</td>
              <td>Us, by email</td>
              <td>Only when you tap Contact support and send the email</td>
            </tr>
          </tbody>
        </table>
        </div>
        <p>
          Images in your saved recipes load from the websites they came from, which can see the request like any web
          page load.
        </p>
      </>
    ),
  },
  {
    id: 'voice',
    title: 'Stew’s voice',
    body: (
      <p>
        Stew&apos;s voice lines are pre-recorded audio files bundled inside the app and played on your phone. Saucepot
        never uses your microphone and doesn&apos;t record, store or send any audio. You can turn the voice off in
        Settings → Stew talks.
      </p>
    ),
  },
  {
    id: 'notifications',
    title: 'Notifications',
    body: (
      <p>
        Reminders (cooking nudges, the weekly recap, graveyard alerts and the optional trial reminder) are scheduled on
        your phone. Saucepot uses no push notification service, so no notification token is sent anywhere. You can turn
        each kind off in Settings.
      </p>
    ),
  },
  {
    id: 'not-collected',
    title: 'What we don’t collect',
    body: (
      <ul>
        <li>No account, name, email address or phone number (unless you email us).</li>
        <li>No analytics, crash reporting or advertising SDKs.</li>
        <li>No tracking across apps or websites, and no advertising identifier.</li>
        <li>No location, contacts, photos, camera, microphone or health data.</li>
        <li>No AI or machine-learning services: your recipes are never sent to one.</li>
      </ul>
    ),
  },
  {
    id: 'use',
    title: 'How we use data and why',
    body: (
      <ul>
        <li>
          Subscription status: to give you the Pro access you paid for (performance of a contract).
        </li>
        <li>Update checks: to deliver bug fixes and keep the app working (legitimate interest).</li>
        <li>Support emails: to answer you (legitimate interest, or your request).</li>
      </ul>
    ),
  },
  {
    id: 'retention',
    title: 'How long data is kept',
    body: (
      <ul>
        <li>Data on your phone: until you delete it in the app or delete the app.</li>
        <li>Support emails: as long as needed to help you, then deleted within 12 months.</li>
        <li>RevenueCat, Apple and Google keep purchase records under their own policies and legal obligations.</li>
      </ul>
    ),
  },
  {
    id: 'sharing',
    title: 'Sharing and selling',
    body: (
      <p>
        We don&apos;t sell, rent or trade personal data, and we don&apos;t share it for advertising. The services named
        above receive only what they need to do their job.
      </p>
    ),
  },
  {
    id: 'children',
    title: 'Children',
    body: (
      <p>
        Saucepot is not directed to children under 13, and we don&apos;t knowingly collect data from them. If you
        think a child has sent us personal data, email {mail} and we&apos;ll delete it.
      </p>
    ),
  },
  {
    id: 'rights',
    title: 'Your rights',
    body: (
      <>
        <p>
          Depending on where you live (for example under the GDPR in the EU and UK, or the CCPA in California), you may
          have the right to access, correct, delete or get a copy of your personal data, and to object to or restrict
          how it&apos;s used.
        </p>
        <ul>
          <li>
            Data on your phone: delete it any time in <strong>Settings → Delete my data</strong>, or delete the app.
          </li>
          <li>
            Anything we hold (support emails) and questions about RevenueCat records: email {mail}. We answer within 30
            days.
          </li>
        </ul>
        <p>You can also complain to your local data protection authority.</p>
      </>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to this policy',
    body: (
      <p>
        If the app starts handling data differently, we&apos;ll update this page before that version is released and
        change the date at the top.
      </p>
    ),
  },
  {
    id: 'contact',
    title: 'Contact',
    body: (
      <p>
        {site.owner}, {mail}. Help with the app: <Link href="/support">Support</Link>.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro={<p>This policy describes how the Saucepot app actually works. It is a plain-language summary, not legal advice.</p>}
      sections={sections}
    />
  );
}
