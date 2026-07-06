import LegalPage from '../components/LegalPage';
import PolicySection from '../components/PolicySection';
import { EmailLink } from '../content/legal';

function ContactPage() {
  return (
    <LegalPage title="Contact" subtitle="Contatti ufficiali per privacy, supporto e richieste dati.">
      <div className="space-y-6">
        <PolicySection title="Privacy e dati personali">
          <p>
            Per richieste GDPR, cancellazione dati, revoca del consenso o domande sulle informative privacy puoi scrivere a <EmailLink />.
          </p>
        </PolicySection>

        <PolicySection title="Supporto">
          <p>
            Per richieste generali su One Fanta puoi usare lo stesso indirizzo email. Quando l'app sarà disponibile, questa pagina potrà
            includere canali di supporto dedicati.
          </p>
        </PolicySection>
      </div>
    </LegalPage>
  );
}

export default ContactPage;
