import LandingPage from './pages/LandingPage';
import AppPrivacyPage from './pages/AppPrivacyPage';
import ContactPage from './pages/ContactPage';
import DeleteAccountPage from './pages/DeleteAccountPage';
import WaitlistPrivacyPage from './pages/WaitlistPrivacyPage';

function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';

  if (path === '/privacy') {
    return <AppPrivacyPage />;
  }

  if (path === '/waitlist-privacy') {
    return <WaitlistPrivacyPage />;
  }

  if (path === '/delete-account') {
    return <DeleteAccountPage />;
  }

  if (path === '/contact') {
    return <ContactPage />;
  }

  return <LandingPage />;
}

export default App;
