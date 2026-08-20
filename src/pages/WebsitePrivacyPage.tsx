import LegalPage from '../components/LegalPage';
import { WebsitePrivacyPolicy } from '../content/legal.it';
import { WebsitePrivacyPolicyEn } from '../content/legal.en';
import { getMessages } from '../i18n/messages';
import type { Locale } from '../lib/i18n';

function WebsitePrivacyPage({ locale }: { locale: Locale }) {
  const m = getMessages(locale).pages.websitePrivacy;

  return (
    <LegalPage locale={locale} title={m.title} subtitle={m.subtitle}>
      {locale === 'it' ? <WebsitePrivacyPolicy /> : <WebsitePrivacyPolicyEn />}
    </LegalPage>
  );
}

export default WebsitePrivacyPage;
