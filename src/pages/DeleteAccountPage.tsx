import LegalPage from '../components/LegalPage';
import PolicySection from '../components/PolicySection';
import { EmailLink, LAST_UPDATED } from '../content/legal';

function DeleteAccountPage() {
  return (
    <LegalPage title="Account and Data Deletion" subtitle="Come richiedere cancellazione account e dati personali.">
      <div className="space-y-6">
        <p className="text-dark-400">Ultimo aggiornamento: {LAST_UPDATED}</p>

        <PolicySection title="Come richiedere la cancellazione">
          <p className="mb-3">
            Per richiedere la cancellazione dell'account One Fanta e dei dati personali associati, invia un'email a <EmailLink /> usando
            l'indirizzo collegato al tuo account.
          </p>
          <p>
            Inserisci come oggetto: <strong className="text-white">Account deletion request</strong>.
          </p>
        </PolicySection>

        <PolicySection title="Dati eliminati">
          <p>
            Quando la richiesta viene verificata, elimineremo o renderemo anonimi i dati personali associati all'account, inclusi email,
            profilo, preferenze, dati di gioco personali e token di notifica, salvo quanto dobbiamo conservare per obblighi legali,
            sicurezza, prevenzione abusi o gestione di richieste pendenti.
          </p>
        </PolicySection>

        <PolicySection title="Tempi">
          <p>
            Puntiamo a gestire le richieste entro 30 giorni dalla verifica dell'identità. Alcuni dati potrebbero restare per un periodo
            limitato nei backup tecnici prima della cancellazione definitiva.
          </p>
        </PolicySection>

        <PolicySection title="Waitlist">
          <p>
            Se vuoi cancellare solo l'email dalla lista d'attesa, scrivi a <EmailLink /> indicando che la richiesta riguarda la waitlist.
          </p>
        </PolicySection>
      </div>
    </LegalPage>
  );
}

export default DeleteAccountPage;
