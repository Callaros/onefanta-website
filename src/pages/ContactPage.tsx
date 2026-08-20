import LegalPage from '../components/LegalPage';
import PolicySection from '../components/PolicySection';
import { EmailLink } from '../content/legal.it';
import { getMessages } from '../i18n/messages';
import type { Locale } from '../lib/i18n';

function ContactPage({ locale }: { locale: Locale }) {
  const m = getMessages(locale);

  if (locale === 'en') {
    return (
      <LegalPage locale={locale} title={m.pages.contact.title} subtitle={m.pages.contact.subtitle}>
        <div className="space-y-6">
          <PolicySection title="Privacy and personal data">
            <p>For GDPR requests, data deletion, withdrawal of consent or questions about our privacy notices, contact us at <EmailLink />.</p>
          </PolicySection>
          <PolicySection title="Support">
            <p>For general questions about OneFanta, you can use the same email address. Once the app is available, this page may include dedicated support channels.</p>
          </PolicySection>
        </div>
      </LegalPage>
    );
  }

  return (
    <LegalPage locale={locale} title={m.pages.contact.title} subtitle={m.pages.contact.subtitle}>
      <div className="space-y-6">
        <PolicySection title="Privacy e dati personali">
          <p>
            Per richieste GDPR, cancellazione dati, revoca del consenso o domande sulle informative privacy puoi scrivere a <EmailLink />.
          </p>
        </PolicySection>

        <PolicySection title="Supporto">
          <p>
            Per richieste generali su OneFanta puoi usare lo stesso indirizzo email. Quando l'app sarà disponibile, questa pagina potrà
            includere canali di supporto dedicati.
          </p>
        </PolicySection>
      </div>
    </LegalPage>
  );
}

export default ContactPage;
