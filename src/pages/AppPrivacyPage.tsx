import LegalPage from '../components/LegalPage';
import { AppPrivacyPolicy } from '../content/legal';

function AppPrivacyPage() {
  return (
    <LegalPage title="Privacy Policy - One Fanta App" subtitle="Informativa per l'app mobile One Fanta.">
      <AppPrivacyPolicy />
    </LegalPage>
  );
}

export default AppPrivacyPage;
