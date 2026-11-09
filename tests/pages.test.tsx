import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Home from '@/app/page';
import PrivacyPage from '@/app/privacy/page';
import SupportPage from '@/app/support/page';
import TermsPage from '@/app/terms/page';
import { SiteFooter } from '@/components/SiteFooter';
import { site } from '@/lib/site';

function hrefs(container: HTMLElement) {
  return Array.from(container.querySelectorAll('a')).map((a) => a.getAttribute('href') ?? '');
}

function expectValidLinks(container: HTMLElement) {
  for (const href of hrefs(container)) {
    expect(href, `bad link ${href}`).toMatch(/^(\/|#|mailto:|https:\/\/)/);
  }
}

describe('/support (App Store Support URL)', () => {
  it('has contact, the support email and the FAQ the stores expect', () => {
    const { container } = render(<SupportPage />);
    expect(screen.getByRole('heading', { level: 1, name: 'Saucepot support' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Contact us' })).toBeInTheDocument();
    expect(hrefs(container).some((h) => h.startsWith(`mailto:${site.email}`))).toBe(true);
    for (const q of [
      'How do I restore my purchase?',
      'How do I manage or cancel my subscription?',
      'How does the free trial work?',
      'How do I delete my data?',
    ]) {
      expect(screen.getByRole('heading', { name: q })).toBeInTheDocument();
    }
    expect(hrefs(container)).toEqual(expect.arrayContaining(['/privacy', '/terms']));
    expectValidLinks(container);
  });
});

describe('/privacy', () => {
  it('has the required headed sections and names every third party', () => {
    const { container } = render(<PrivacyPage />);
    for (const h of [
      'Who we are',
      'Data stored on your device',
      'Data that leaves your device',
      'Stew’s voice',
      'What we don’t collect',
      'How long data is kept',
      'Children',
      'Your rights',
    ]) {
      expect(screen.getByRole('heading', { level: 2, name: new RegExp(h) })).toBeInTheDocument();
    }
    const text = container.textContent ?? '';
    expect(text).toContain('RevenueCat');
    expect(text).toContain('Expo');
    expect(text).toMatch(/no AI/i);
    expect(text).toContain(site.email);
    expectValidLinks(container);
  });
});

describe('/terms', () => {
  it('states the subscription terms, the 24-hour rule and links the Apple EULA', () => {
    const { container } = render(<TermsPage />);
    expect(screen.getByRole('heading', { level: 1, name: 'Terms of Use (EULA)' })).toBeInTheDocument();
    const subs = screen.getByRole('region', { name: /Subscriptions and purchases/ });
    expect(within(subs).getByText(/7-day free trial/)).toBeInTheDocument();
    expect(subs.textContent).toMatch(/at least 24 hours before the end of the current period/);
    expect(hrefs(container)).toContain('https://www.apple.com/legal/internet-services/itunes/dev/stdeula/');
    expectValidLinks(container);
  });

  it.skipIf(site.governingLaw === null)('has no TODO once the governing law is set', () => {
    const { container } = render(<TermsPage />);
    expect(container.textContent).not.toMatch(/TODO/);
  });
});

describe('home and footer', () => {
  it('has the promise, store badges without broken links, and the footer links', () => {
    const { container } = render(
      <>
        <Home />
        <SiteFooter />
      </>,
    );
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Save the recipe/);
    expect(screen.getAllByLabelText(/coming soon/).length).toBeGreaterThan(0);
    expect(hrefs(container)).toEqual(expect.arrayContaining(['/support', '/privacy', '/terms', `mailto:${site.email}`]));
    expectValidLinks(container);
  });
});
