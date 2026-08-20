import LegalPage from '../components/LegalPage';
import { AppPrivacyPolicy } from '../content/legal.it';
import { AppPrivacyPolicyEn } from '../content/legal.en';
import { getMessages } from '../i18n/messages';
import type { Locale } from '../lib/i18n';

function AppPrivacyPage({ locale }: { locale: Locale }) {
  const m = getMessages(locale).pages.appPrivacy;

  return (
    <LegalPage locale={locale} title={m.title} subtitle={m.subtitle}>
      {locale === 'it' ? <AppPrivacyPolicy locale={locale} /> : <AppPrivacyPolicyEn locale={locale} />}
    </LegalPage>
  );
}

export default AppPrivacyPage;
