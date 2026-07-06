import PolicySection from '../components/PolicySection';

export const CONTACT_EMAIL = 'privacy@onefanta.app';
export const LAST_UPDATED = '4 luglio 2026';

export function EmailLink() {
  return (
    <a className="text-electric-300 hover:text-electric-200 underline underline-offset-4" href={`mailto:${CONTACT_EMAIL}`}>
      {CONTACT_EMAIL}
    </a>
  );
}

export function WaitlistPrivacyPolicy() {
  return (
    <div className="space-y-6">
      <p className="text-dark-400">Ultimo aggiornamento: {LAST_UPDATED}</p>

      <PolicySection title="1. Titolare del trattamento">
        <p>
          One Fanta tratta i dati personali raccolti tramite la landing page e il modulo di iscrizione alla lista d'attesa.
          Per domande o richieste relative alla protezione dei dati puoi scrivere a <EmailLink />.
        </p>
      </PolicySection>

      <PolicySection title="2. Dati raccolti">
        <p className="mb-3">Quando ti iscrivi alla waitlist raccogliamo:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong className="text-white">Indirizzo email:</strong> necessario per avvisarti del lancio di One Fanta.</li>
          <li><strong className="text-white">Data di iscrizione:</strong> registrata per documentare quando hai richiesto l'iscrizione.</li>
          <li><strong className="text-white">Fonte dell'iscrizione:</strong> ad esempio il sito web, per distinguere eventuali canali futuri.</li>
        </ul>
      </PolicySection>

      <PolicySection title="3. Finalità e base giuridica">
        <p>
          Usiamo la tua email solo per gestire la lista d'attesa, comunicarti il lancio dell'app e inviarti aggiornamenti
          strettamente collegati alla disponibilità di One Fanta. La base giuridica è il consenso che presti inviando il modulo.
          Puoi revocarlo in qualsiasi momento.
        </p>
      </PolicySection>

      <PolicySection title="4. Servizi e destinatari">
        <p>
          I dati sono conservati tramite Supabase, il servizio usato per il database della waitlist. Potremmo usare un
          fornitore email per inviare comunicazioni agli iscritti. Non vendiamo i tuoi dati e non li usiamo per marketing
          generico, sponsor o comunicazioni non legate al rilascio, salvo un consenso separato e specifico.
        </p>
      </PolicySection>

      <PolicySection title="5. Trasferimenti fuori dallo SEE">
        <p>
          Alcuni fornitori tecnici possono trattare dati anche fuori dallo Spazio Economico Europeo. In tal caso il trattamento
          deve avvenire sulla base di garanzie adeguate previste dal GDPR, come clausole contrattuali standard o altri meccanismi
          riconosciuti dalla normativa.
        </p>
      </PolicySection>

      <PolicySection title="6. Conservazione">
        <p>
          Conserviamo il tuo indirizzo email fino alla revoca del consenso, alla richiesta di cancellazione o fino a quando la
          lista d'attesa non sarà più necessaria. Possiamo conservare dati aggregati e non identificativi per statistiche interne.
        </p>
      </PolicySection>

      <PolicySection title="7. I tuoi diritti">
        <p className="mb-3">Nei limiti previsti dal GDPR puoi chiedere accesso, rettifica, cancellazione, limitazione del trattamento, portabilità, opposizione quando applicabile e revoca del consenso.</p>
        <p>Puoi esercitare questi diritti scrivendo a <EmailLink />.</p>
      </PolicySection>

      <PolicySection title="8. Sicurezza">
        <p>
          Applichiamo misure tecniche e organizzative ragionevoli per proteggere i dati. Il sito consente l'inserimento pubblico
          nella lista d'attesa, ma non espone pubblicamente gli indirizzi email degli iscritti.
        </p>
      </PolicySection>

      <PolicySection title="9. Reclamo">
        <p>
          Se ritieni che il trattamento violi la normativa sulla protezione dei dati, puoi proporre reclamo all'autorità di
          controllo competente. In Italia è il Garante per la protezione dei dati personali.
        </p>
      </PolicySection>
    </div>
  );
}

export function AppPrivacyPolicy() {
  return (
    <div className="space-y-6">
      <p className="text-dark-400">Ultimo aggiornamento: {LAST_UPDATED}</p>

      <PolicySection title="1. Ambito">
        <p>
          Questa informativa descrive il trattamento dei dati personali nell'app mobile One Fanta. La landing page e la waitlist
          sono coperte dalla <a href="/waitlist-privacy" className="text-electric-300 hover:text-electric-200 underline underline-offset-4">Waitlist Privacy Policy</a>.
        </p>
      </PolicySection>

      <PolicySection title="2. Dati che l'app può raccogliere">
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong className="text-white">Account e contatti:</strong> email, identificativo utente, informazioni di accesso e preferenze.</li>
          <li><strong className="text-white">Dati di gioco:</strong> leghe, squadre, rose, classifiche, punteggi, statistiche e impostazioni di lega.</li>
          <li><strong className="text-white">Dati tecnici:</strong> dispositivo, sistema operativo, versione app, log diagnostici e crash report.</li>
          <li><strong className="text-white">Notifiche:</strong> token push e preferenze di notifica, se abilitate.</li>
          <li><strong className="text-white">Analytics e ads:</strong> dati aggregati o pseudonimizzati per misurare uso, performance e funzionalità pubblicitarie se presenti nell'app.</li>
        </ul>
      </PolicySection>

      <PolicySection title="3. Finalità">
        <p>
          Usiamo i dati per creare e gestire account, fornire le funzionalità dell'app, salvare backup e progressi, mostrare
          statistiche e classifiche, inviare notifiche richieste, migliorare stabilità e sicurezza, prevenire abusi e rispettare
          obblighi legali. Eventuali analytics, advertising o comunicazioni promozionali saranno dichiarati nell'app e negli store
          secondo le impostazioni disponibili.
        </p>
      </PolicySection>

      <PolicySection title="4. Base giuridica">
        <p>
          Il trattamento può basarsi su esecuzione del servizio richiesto, consenso per funzionalità facoltative, legittimo
          interesse per sicurezza e miglioramento tecnico, e obblighi legali quando applicabili.
        </p>
      </PolicySection>

      <PolicySection title="5. Condivisione con fornitori">
        <p>
          Possiamo condividere dati con fornitori tecnici necessari per database, autenticazione, backup, notifiche push, hosting,
          analytics, crash reporting, advertising e assistenza. I fornitori trattano i dati secondo istruzioni contrattuali e misure
          di sicurezza adeguate. Non vendiamo dati personali degli utenti.
        </p>
      </PolicySection>

      <PolicySection title="6. Conservazione">
        <p>
          Conserviamo i dati per il tempo necessario a fornire l'app, mantenere l'account, adempiere a obblighi legali, gestire
          sicurezza e risolvere controversie. I dati eliminati possono restare per un periodo limitato nei backup tecnici prima della
          cancellazione definitiva.
        </p>
      </PolicySection>

      <PolicySection title="7. Cancellazione account e dati">
        <p>
          Puoi richiedere cancellazione dell'account e dei dati personali dalla pagina{' '}
          <a href="/delete-account" className="text-electric-300 hover:text-electric-200 underline underline-offset-4">Account and Data Deletion</a>
          {' '}o scrivendo a <EmailLink />.
        </p>
      </PolicySection>

      <PolicySection title="8. Sicurezza">
        <p>
          Usiamo misure tecniche e organizzative ragionevoli per proteggere i dati, incluse limitazioni di accesso e controlli sui
          sistemi usati per erogare il servizio. Nessun sistema può garantire sicurezza assoluta, ma lavoriamo per ridurre i rischi.
        </p>
      </PolicySection>

      <PolicySection title="9. I tuoi diritti">
        <p>
          Nei limiti previsti dal GDPR puoi chiedere accesso, rettifica, cancellazione, limitazione del trattamento, portabilità,
          opposizione quando applicabile e revoca del consenso. Per esercitare i diritti scrivi a <EmailLink />.
        </p>
      </PolicySection>

      <PolicySection title="10. Store disclosure">
        <p>
          Le informazioni dichiarate in Google Play Console e App Store Connect devono riflettere i dati effettivamente raccolti
          dall'app. Questa policy offre dettagli aggiuntivi e deve essere aggiornata se cambiano funzionalità, fornitori o categorie
          di dati trattati.
        </p>
      </PolicySection>
    </div>
  );
}

export function CookiePolicy() {
  return (
    <div className="space-y-6">
      <p className="text-dark-400">Ultimo aggiornamento: {LAST_UPDATED}</p>

      <PolicySection title="1. Cosa sono i cookie">
        <p>
          I cookie sono piccoli file o informazioni salvate sul dispositivo dell'utente dal sito web o da servizi terzi. Tecnologie
          simili possono includere local storage, pixel e altri strumenti di tracciamento.
        </p>
      </PolicySection>

      <PolicySection title="2. Cookie usati da questo sito">
        <p>
          Questo sito non usa cookie di profilazione, cookie marketing o cookie analytics. Non usiamo Google Analytics, Meta Pixel
          o strumenti simili. Il modulo di iscrizione invia direttamente l'indirizzo email a Supabase quando premi il pulsante di invio.
        </p>
      </PolicySection>

      <PolicySection title="3. Banner cookie">
        <p>
          Poiché il sito non usa cookie o strumenti di tracciamento che richiedono consenso preventivo, non mostriamo un banner di
          accettazione o rifiuto. Se in futuro aggiungeremo analytics, marketing, pixel o altri strumenti non necessari, aggiorneremo
          questa policy e mostreremo un meccanismo di consenso adeguato prima dell'attivazione.
        </p>
      </PolicySection>

      <PolicySection title="4. Contatti">
        <p>Per domande su cookie o strumenti di tracciamento puoi scrivere a <EmailLink />.</p>
      </PolicySection>
    </div>
  );
}
