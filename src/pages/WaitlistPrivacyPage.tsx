import LegalPage from '../components/LegalPage';
import { WaitlistPrivacyPolicy } from '../content/legal';
import { WaitlistPrivacyPolicyEn } from '../content/legal.en';
import type { Locale } from '../lib/i18n';

function WaitlistPrivacyPage({ locale }: { locale: Locale }) {
  return (
    <LegalPage
      locale={locale}
      title="Privacy Policy - OneFanta Waitlist"
      subtitle={locale === 'it' ? "Informativa per la lista d'attesa del sito OneFanta." : 'Privacy notice for the OneFanta website waitlist.'}
    >
      {locale === 'it' ? <WaitlistPrivacyPolicy /> : <WaitlistPrivacyPolicyEn />}
    </LegalPage>
  );
}

export default WaitlistPrivacyPage;
