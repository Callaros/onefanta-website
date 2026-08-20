import LegalPage from '../components/LegalPage';
import PolicySection from '../components/PolicySection';
import { EmailLink, LAST_UPDATED } from '../content/legal.it';
import { LAST_UPDATED_EN } from '../content/legal.en';
import { getMessages } from '../i18n/messages';
import type { Locale } from '../lib/i18n';

function DeleteAccountPage({ locale }: { locale: Locale }) {
  const m = getMessages(locale);
  if (locale === 'en') {
    return (
      <LegalPage locale={locale} title={m.pages.deleteAccount.title} subtitle={m.pages.deleteAccount.subtitle}>
        <div className="space-y-6">
          <p className="text-dark-400">Last updated: {LAST_UPDATED_EN}</p>
          <PolicySection title="How to delete your account in the app">
            <p className="mb-3">Open OneFanta, go to <strong className="text-white">Profile</strong> and select the red <strong className="text-white">Delete account</strong> button. The app will ask you to confirm.</p>
            <p>After confirmation, deletion is permanent and cannot be undone. You do not need to send an email to use this process.</p>
          </PolicySection>
          <PolicySection title="Data deleted"><p>Once complete, we delete or anonymise personal data associated with the account, including email, profile, preferences, personal game data, uploads and notification tokens, except where retention is required for legal obligations, security, abuse prevention, protection of rights or pending requests. Data shared with other participants may be anonymised where removal would compromise league history or operation. Technical and security logs still needed are anonymised and no longer linked to the account.</p></PolicySection>
          <PolicySection title="Effects and timing"><p>The process begins after in-app confirmation. OneFanta does not keep separate account-data backups. Anonymised technical and security logs may be retained for up to 12 months; diagnostic events already sent to Sentry, which do not contain the account ID or email, are deleted after 30 days.</p></PolicySection>
          <PolicySection title="Exercising GDPR rights"><p>The in-app feature is the standard self-service deletion method. Separately, contact <EmailLink /> to exercise GDPR rights, including erasure where applicable. We may request only the information necessary to verify your identity and will respond within statutory deadlines.</p></PolicySection>
          <PolicySection title="Device and third-party data"><p>Account deletion covers data managed by OneFanta and processors acting on its behalf. Exported files and data remaining on your device may need to be removed by you or by uninstalling the app. Advertising preferences can be changed in the app and device privacy settings.</p></PolicySection>
        </div>
      </LegalPage>
    );
  }

  return (
    <LegalPage locale={locale} title={m.pages.deleteAccount.title} subtitle={m.pages.deleteAccount.subtitle}>
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

      </div>
    </LegalPage>
  );
}

export default DeleteAccountPage;
