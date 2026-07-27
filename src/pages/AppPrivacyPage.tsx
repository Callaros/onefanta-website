import LegalPage from '../components/LegalPage';
import { AppPrivacyPolicy } from '../content/legal';

function AppPrivacyPage() {
  return (
    <LegalPage title="Privacy Policy - OneFanta App" subtitle="Informativa per l'app mobile OneFanta.">
      <AppPrivacyPolicy />
    </LegalPage>
  );
}

export default AppPrivacyPage;
