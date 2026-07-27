import { useEffect } from 'react';
import LandingPage from './pages/LandingPage';
import AppPrivacyPage from './pages/AppPrivacyPage';
import ContactPage from './pages/ContactPage';
import DeleteAccountPage from './pages/DeleteAccountPage';
import WaitlistPrivacyPage from './pages/WaitlistPrivacyPage';
import AuthConfirmedPage from './pages/AuthConfirmedPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import TermsPage from './pages/TermsPage';
import { detectPreferredLocale, getLocaleFromPath, localizedPath, rememberLocale, stripLocaleFromPath } from './lib/i18n';

function App() {
  const locale = getLocaleFromPath(window.location.pathname);
  const activeLocale = locale ?? detectPreferredLocale();

  useEffect(() => {
    if (!locale) return;
    rememberLocale(locale);
    document.documentElement.lang = locale;
    const isItalian = locale === 'it';
    const title = isItalian ? 'OneFanta - Fantacalcio per la Premier League' : 'OneFanta - Premier League Fantasy Football';
    const description = isItalian
      ? 'Voti live, leghe private e classifiche in tempo reale per il fantacalcio basato sulla Premier League.'
      : 'Live ratings, private leagues and real-time standings for fantasy football based on the Premier League.';
    document.title = title;

    const setMeta = (selector: string, content: string) => {
      document.querySelector<HTMLMetaElement>(selector)?.setAttribute('content', content);
    };
    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);

    document.querySelectorAll('link[data-i18n-link]').forEach((element) => element.remove());
    const addLink = (rel: string, href: string, hrefLang?: string) => {
      const link = document.createElement('link');
      link.rel = rel;
      link.href = href;
      link.dataset.i18nLink = 'true';
      if (hrefLang) link.hreflang = hrefLang;
      document.head.appendChild(link);
    };
    const absolute = (targetLocale: 'it' | 'en') => new URL(localizedPath(targetLocale, window.location.pathname), window.location.origin).href;
    addLink('canonical', absolute(locale));
    addLink('alternate', absolute('it'), 'it');
    addLink('alternate', absolute('en'), 'en');
    addLink('alternate', absolute('en'), 'x-default');
  }, [locale]);

  if (!locale) {
    const destination = `${localizedPath(activeLocale, window.location.pathname)}${window.location.search}${window.location.hash}`;
    window.location.replace(destination);
    return null;
  }

  const path = stripLocaleFromPath(window.location.pathname);

  if (path === '/privacy') {
    return <AppPrivacyPage locale={locale} />;
  }

  if (path === '/waitlist-privacy') {
    return <WaitlistPrivacyPage locale={locale} />;
  }

  if (path === '/delete-account') {
    return <DeleteAccountPage locale={locale} />;
  }

  if (path === '/contact') {
    return <ContactPage locale={locale} />;
  }

  if (path === '/terms') {
    return <TermsPage locale={locale} />;
  }

  if (path === '/auth/confirmed') {
    return <AuthConfirmedPage locale={locale} />;
  }

  if (path === '/auth/reset-password') {
    return <ResetPasswordPage locale={locale} />;
  }

  return <LandingPage locale={locale} />;
}

export default App;
