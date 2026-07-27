import LegalPage from '../components/LegalPage';
import PolicySection from '../components/PolicySection';
import { EmailLink, LAST_UPDATED } from '../content/legal';

function DeleteAccountPage() {
  return (
    <LegalPage title="Cancellazione dell'account e dei dati" subtitle="Come eliminare definitivamente l'account e i dati personali.">
      <div className="space-y-6">
        <p className="text-dark-400">Ultimo aggiornamento: {LAST_UPDATED}</p>

        <PolicySection title="Come eliminare l'account dall'app">
          <p className="mb-3">
            Apri OneFanta, accedi alla sezione <strong className="text-white">Profilo</strong> e premi il pulsante rosso{' '}
            <strong className="text-white">Elimina account</strong>. L'app ti chiederà di confermare prima di procedere.
          </p>
          <p>
            Dopo la conferma, la cancellazione è definitiva e non può essere annullata. Non è necessario inviare un'email per usare
            questa procedura.
          </p>
        </PolicySection>

        <PolicySection title="Dati eliminati">
          <p>
            Quando la procedura viene completata, elimineremo o renderemo anonimi i dati personali associati all'account, inclusi email,
            profilo, preferenze, dati di gioco personali, contenuti caricati e token di notifica, salvo quanto dobbiamo conservare per
            obblighi legali, sicurezza, prevenzione abusi, tutela dei diritti o gestione di richieste pendenti. I dati condivisi con
            altri partecipanti possono essere resi anonimi quando la loro rimozione comprometterebbe lo storico o il funzionamento
            della lega. I log tecnici e di sicurezza ancora necessari vengono anonimizzati e non restano associati all'account.
          </p>
        </PolicySection>

        <PolicySection title="Effetti e tempi">
          <p>
            La procedura viene avviata dopo la conferma nell'app. OneFanta non conserva copie di backup separate dei dati dell'account.
            I log tecnici e di sicurezza anonimizzati possono essere conservati fino a 12 mesi; gli eventi diagnostici già inviati a
            Sentry, che non contengono l'identificativo dell'account o l'email, sono eliminati dopo 30 giorni.
          </p>
        </PolicySection>

        <PolicySection title="Esercizio dei diritti GDPR">
          <p>
            La funzione nell'app è il percorso ordinario per eliminare autonomamente l'account. Separatamente, puoi scrivere a{' '}
            <EmailLink /> per esercitare i diritti previsti dal GDPR, compreso il diritto alla cancellazione dei dati personali nei
            casi in cui è applicabile. Potremo chiedere le informazioni strettamente necessarie a verificare la tua identità e
            risponderemo nei termini previsti dalla normativa.
          </p>
        </PolicySection>

        <PolicySection title="Dati presenti sul dispositivo e presso terzi">
          <p>
            La cancellazione dell'account riguarda i dati gestiti da OneFanta e dai fornitori che operano per suo conto. File esportati
            dall'utente e dati rimasti sul dispositivo possono dover essere rimossi direttamente dall'utente o tramite la
            disinstallazione dell'app. Le preferenze pubblicitarie possono inoltre essere modificate tramite gli strumenti di privacy
            disponibili nell'app e nelle impostazioni del dispositivo.
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
