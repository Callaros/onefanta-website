import LegalPage from '../components/LegalPage';
import { WaitlistPrivacyPolicy } from '../content/legal.it';
import { WaitlistPrivacyPolicyEn } from '../content/legal.en';
import { getMessages } from '../i18n/messages';
import type { Locale } from '../lib/i18n';

function WaitlistPrivacyPage({ locale }: { locale: Locale }) {
  const m = getMessages(locale).pages.waitlistPrivacy;

  return (
    <LegalPage locale={locale} title={m.title} subtitle={m.subtitle}>
      {locale === 'it' ? <WaitlistPrivacyPolicy /> : <WaitlistPrivacyPolicyEn />}
    </LegalPage>
  );
}

export default WaitlistPrivacyPage;
