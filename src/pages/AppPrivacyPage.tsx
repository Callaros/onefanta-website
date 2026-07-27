import LegalPage from '../components/LegalPage';
import { AppPrivacyPolicy } from '../content/legal';
import { AppPrivacyPolicyEn } from '../content/legal.en';
import type { Locale } from '../lib/i18n';

function AppPrivacyPage({ locale }: { locale: Locale }) {
  return (
    <LegalPage
      locale={locale}
      title="Privacy Policy - OneFanta App"
      subtitle={locale === 'it' ? "Informativa per l'app mobile OneFanta." : 'Privacy notice for the OneFanta mobile app.'}
    >
      {locale === 'it' ? <AppPrivacyPolicy /> : <AppPrivacyPolicyEn />}
    </LegalPage>
  );
}

export default AppPrivacyPage;
