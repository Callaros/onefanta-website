import PolicySection from '../components/PolicySection';
import LocalizedLink from '../components/LocalizedLink';
import type { Locale } from '../lib/i18n';

export const CONTACT_EMAIL = 'privacy@onefanta.com';
export const LAST_UPDATED = '20 agosto 2026';
const APP_PRIVACY_LAST_UPDATED = '20 agosto 2026';

export function EmailLink() {
  return (
    <a className="text-electric-300 hover:text-electric-200 underline underline-offset-4" href={`mailto:${CONTACT_EMAIL}`}>
      {CONTACT_EMAIL}
    </a>
  );
}

export function WebsitePrivacyPolicy() {
  return (
    <div className="space-y-6">
      <p className="text-dark-400">Ultimo aggiornamento: {LAST_UPDATED}</p>

      <PolicySection title="1. Titolare del trattamento">
        <p>
          Il titolare del trattamento è <strong className="text-white">Luca Antonelli</strong>, residente in{' '}
          <strong className="text-white">Contrada Addolorata 49/A, Recanati (MC), Italia</strong>. Per domande o richieste
          relative alla protezione dei dati puoi scrivere a <EmailLink />.
        </p>
      </PolicySection>

      <PolicySection title="2. Dati trattati">
        <p className="mb-3">Quando visiti il sito possiamo trattare:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong className="text-white">Dati tecnici:</strong> indirizzo IP, user-agent, data e ora della richiesta e altri dati di rete necessari a fornire il sito, proteggerlo e prevenire abusi.</li>
          <li><strong className="text-white">Dati di contatto e registrazione:</strong> le informazioni che scegli di inviarci quando ci contatti via email e l'indirizzo email che invii per registrarti o richiedere email relative all'account.</li>
        </ul>
      </PolicySection>

      <PolicySection title="3. Finalità e base giuridica">
        <p>
          I dati tecnici sono trattati per il legittimo interesse a rendere il sito disponibile e sicuro e a prevenire usi abusivi.
          I dati che invii via email sono trattati per rispondere alla tua richiesta e, quando necessario, per adempiere a obblighi
          legali o tutelare i nostri diritti.
        </p>
      </PolicySection>

      <PolicySection title="4. Servizi e destinatari">
        <p>
          Cloudflare fornisce l'infrastruttura di hosting, storage, distribuzione e sicurezza del sito nella regione europea e può
          trattare i dati tecnici necessari a erogarlo e proteggerlo. Supabase fornisce i servizi di registrazione, autenticazione e
          database usati dal sito e può trattare l'indirizzo email e i dati tecnici necessari a tali funzioni. Resend invia email
          transazionali, quali email di conferma dell'account e reimpostazione della password, e può trattare l'indirizzo email del
          destinatario, il contenuto del messaggio e i metadati di consegna. Non vendiamo i tuoi dati e non li usiamo per marketing o
          profilazione.
        </p>
      </PolicySection>

      <PolicySection title="5. Trasferimenti fuori dallo SEE">
        <p>
          I servizi Cloudflare usati dal sito sono configurati nella regione europea. Qualora i fornitori o i loro sub-responsabili,
          inclusi Supabase o Resend, effettuino trattamenti fuori dallo Spazio
          Economico Europeo, gli eventuali trasferimenti avvengono mediante i meccanismi riconosciuti dalla normativa applicabile,
          come decisioni di adeguatezza, Data Privacy Framework o clausole contrattuali standard. Puoi chiedere informazioni sulle
          garanzie applicabili scrivendo a <EmailLink />.
        </p>
        <p className="mt-3">
          Puoi consultare l'informativa di{' '}
          <a href="https://www.cloudflare.com/privacypolicy/" className="text-electric-300 hover:text-electric-200 underline underline-offset-4">Cloudflare</a>,{' '}
          <a href="https://supabase.com/privacy" className="text-electric-300 hover:text-electric-200 underline underline-offset-4">Supabase</a> e{' '}
          <a href="https://resend.com/legal/privacy-policy" className="text-electric-300 hover:text-electric-200 underline underline-offset-4">Resend</a>.
        </p>
      </PolicySection>

      <PolicySection title="6. Conservazione">
        <p>
          I dati tecnici sono conservati per il tempo necessario alle finalità descritte e, di norma, non oltre 12 mesi. Le email
          ricevute sono conservate per il tempo necessario a gestire la richiesta e per gli eventuali obblighi di legge. Possiamo
          conservare dati aggregati e non identificativi per statistiche interne.
        </p>
      </PolicySection>

      <PolicySection title="7. I tuoi diritti">
        <p className="mb-3">Nei limiti previsti dal GDPR puoi chiedere accesso, rettifica, cancellazione, limitazione del trattamento, portabilità e opposizione quando applicabile. Non svolgiamo processi decisionali automatizzati che producono effetti giuridici o analogamente significativi.</p>
        <p>Puoi esercitare questi diritti scrivendo a <EmailLink />.</p>
      </PolicySection>

      <PolicySection title="8. Sicurezza">
        <p>
          Applichiamo misure tecniche e organizzative ragionevoli per proteggere i dati.
        </p>
      </PolicySection>

      <PolicySection title="9. Reclamo">
        <p>
          Se ritieni che il trattamento violi la normativa sulla protezione dei dati, puoi proporre reclamo all'autorità di
          controllo competente. In Italia è il Garante per la protezione dei dati personali.
        </p>
      </PolicySection>

      <PolicySection title="10. Cookie">
        <p>Il sito non usa cookie di profilazione o analitici. Per maggiori informazioni consulta la Cookie Policy disponibile nel footer.</p>
      </PolicySection>
    </div>
  );
}

export function AppPrivacyPolicy({ locale }: { locale: Locale }) {
  return (
    <div className="space-y-6">
      <p className="text-dark-400">Ultimo aggiornamento: {APP_PRIVACY_LAST_UPDATED}</p>

      <PolicySection title="1. Titolare del trattamento e ambito">
        <p className="mb-3">
          Il titolare del trattamento è <strong className="text-white">Luca Antonelli</strong>, residente in{' '}
          <strong className="text-white">Contrada Addolorata 49/A, Recanati (MC), Italia</strong>. Per domande o richieste
          relative alla protezione dei dati puoi scrivere a <EmailLink />.
        </p>
        <p>
          Questa informativa descrive il trattamento dei dati personali nell'app mobile OneFanta. Il sito web è coperto dalla{' '}
          <LocalizedLink locale={locale} href="/website-privacy">Privacy Policy del sito</LocalizedLink>.
        </p>
      </PolicySection>

      <PolicySection title="2. Dati trattati">
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong className="text-white">Account e contatti:</strong> email, identificativo utente, informazioni di accesso e preferenze. Se scegli l'accesso con Google o Apple, possiamo inoltre ricevere l'identificativo assegnato dal provider e, secondo le informazioni disponibili e le tue scelte, nome, nome visualizzato, immagine del profilo o indirizzo email, compreso un eventuale indirizzo relay privato di Apple.</li>
          <li><strong className="text-white">Dati di gioco:</strong> leghe, squadre, rose, classifiche, punteggi, statistiche e impostazioni di lega.</li>
          <li><strong className="text-white">Contenuti forniti dall'utente:</strong> nomi di squadre e leghe e immagini personalizzate selezionate tramite il dispositivo.</li>
          <li><strong className="text-white">Assistenza:</strong> indirizzo email, contenuto della richiesta ed eventuali informazioni che scegli di comunicarci quando contatti il supporto.</li>
          <li><strong className="text-white">Dati tecnici del servizio:</strong> indirizzo IP, user-agent, data e ora delle richieste e log necessari per autenticazione, sicurezza e funzionamento del backend.</li>
          <li><strong className="text-white">Dati locali:</strong> preferenze, impostazioni, cache e dati di gioco salvati sul dispositivo.</li>
          <li><strong className="text-white">Notifiche:</strong> token push, piattaforma e preferenze di notifica, solo se decidi di abilitarle.</li>
          <li><strong className="text-white">Diagnostica:</strong> errori, eccezioni, stack trace, breadcrumb tecnici, schermata o operazione interessata, modello del dispositivo, sistema operativo, versione dell'app, data e ora dell'evento e indirizzo IP.</li>
          <li><strong className="text-white">Pubblicità:</strong> identificatori pubblicitari o dell'installazione, indirizzo IP, informazioni sul dispositivo e sull'app, interazioni con gli annunci, dati diagnostici e scelte relative al consenso, secondo le opzioni disponibili.</li>
        </ul>
      </PolicySection>

      <PolicySection title="3. Finalità e basi giuridiche">
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong className="text-white">Erogazione del servizio:</strong> creazione e gestione dell'account, autenticazione anche tramite Google o Apple, salvataggio dei dati di gioco, leghe, squadre, classifiche e contenuti richiesti. La base giuridica è l'esecuzione del servizio richiesto dall'utente.</li>
          <li><strong className="text-white">Sicurezza e prevenzione degli abusi:</strong> protezione di account, utenti e sistemi. La base giuridica è il legittimo interesse del titolare a mantenere OneFanta sicuro e affidabile.</li>
          <li><strong className="text-white">Diagnostica:</strong> individuazione e correzione di crash, errori e malfunzionamenti tramite Sentry. La base giuridica è il legittimo interesse a garantire stabilità, sicurezza e corretto funzionamento dell'app.</li>
          <li><strong className="text-white">Notifiche:</strong> invio delle notifiche di servizio che scegli di abilitare. La base giuridica è l'esecuzione della funzione richiesta; l'attivazione è facoltativa e può essere revocata disabilitando le notifiche nell'app o nelle impostazioni del dispositivo.</li>
          <li><strong className="text-white">Assistenza:</strong> gestione e risposta alle richieste inviate dall'utente. La base giuridica è l'esecuzione del servizio o di misure richieste dall'utente e, quando applicabile, l'adempimento di obblighi legali.</li>
          <li><strong className="text-white">Pubblicità:</strong> visualizzazione, misurazione e, quando autorizzata, personalizzazione degli annunci tramite Google Mobile Ads. I trattamenti che richiedono consenso sono eseguiti secondo le scelte espresse nell'app.</li>
          <li><strong className="text-white">Obblighi legali:</strong> adempimento di obblighi previsti dalla legge o di richieste legittime delle autorità competenti.</li>
        </ul>
      </PolicySection>

      <PolicySection title="4. Supabase">
        <p>
          Usiamo Supabase per database, autenticazione, gestione dell'account, archiviazione e sincronizzazione dei dati
          necessari al funzionamento di OneFanta. A seconda delle funzioni utilizzate, Supabase tratta dati dell'account, dati di
          gioco, contenuti caricati e informazioni tecniche necessarie a fornire e proteggere il servizio. OneFanta non utilizza una
          funzione di backup separata per questi dati. Il database è collocato nella regione Europa centrale (Francoforte).
        </p>
        <p className="mt-3">
          Le immagini personalizzate delle squadre sono conservate in un bucket privato di Supabase Storage. Non sono pubblicamente
          accessibili e possono essere visualizzate soltanto dai membri autorizzati della relativa lega privata.
        </p>
      </PolicySection>

      <PolicySection title="5. Accesso con Google e Apple">
        <p className="mb-3">
          Puoi creare un account o accedere usando Google Sign-In o Sign in with Apple. In questo caso Google o Apple autenticano
          l'utente e trasmettono a OneFanta e a Supabase Auth un token di autenticazione e un identificativo univoco del provider.
          Secondo il provider, la configurazione e le scelte effettuate durante l'accesso, possiamo inoltre ricevere l'indirizzo
          email, il nome o nome visualizzato e, per Google, l'eventuale immagine del profilo. Se scegli "Nascondi la mia email" con
          Apple, riceviamo l'indirizzo relay privato generato da Apple invece dell'indirizzo email reale. Apple può comunicare il nome
          soltanto in occasione della prima autorizzazione.
        </p>
        <p className="mb-3">
          OneFanta usa questi dati esclusivamente per creare, autenticare, collegare e proteggere l'account e non riceve né conserva
          la password del tuo account Google o Apple. La base giuridica è l'esecuzione del servizio richiesto. Google e Apple trattano
          autonomamente i dati necessari a fornire e proteggere i rispettivi servizi di identità, secondo le proprie informative.
        </p>
        <p>
          Puoi revocare l'autorizzazione dalle impostazioni del tuo account Google o Apple. La revoca impedisce i successivi accessi
          tramite quel provider, ma non elimina automaticamente l'account o i dati già conservati in OneFanta: per farlo devi usare
          la funzione <strong className="text-white">Elimina account</strong> descritta nella presente informativa.
        </p>
      </PolicySection>

      <PolicySection title="6. Sentry e dati diagnostici">
        <p className="mb-3">
          Usiamo Sentry per ricevere segnalazioni tecniche di crash, errori e malfunzionamenti. Gli eventi possono contenere errori,
          eccezioni, stack trace, breadcrumb tecnici, schermata o operazione interessata, modello del dispositivo, sistema operativo,
          versione dell'app, data e ora dell'evento e indirizzo IP.
        </p>
        <p>
          OneFanta non invia a Sentry l'identificativo dell'account o l'indirizzo email dell'utente. Non utilizziamo le funzioni di
          tracing delle prestazioni né di profiling di Sentry. I dati diagnostici sono usati esclusivamente per stabilità, sicurezza
          e correzione degli errori, sono trattati nella regione Unione europea e sono conservati in Sentry per 30 giorni.
        </p>
      </PolicySection>

      <PolicySection title="7. Notifiche">
        <p>
          Le notifiche non sono attivate automaticamente. Se scegli di abilitarle, usiamo Firebase Cloud Messaging e i servizi di
          notifica del sistema operativo per associare all'installazione un token push e consegnare le notifiche richieste. Puoi
          disabilitarle in qualsiasi momento dall'app o dalle impostazioni del dispositivo; in tal caso non riceverai più notifiche,
          senza perdere l'accesso alle altre funzionalità di OneFanta.
        </p>
      </PolicySection>

      <PolicySection title="8. Pubblicità e gestione del consenso">
        <p className="mb-3">
          OneFanta usa Google Mobile Ads per mostrare annunci. Al primo avvio l'app presenta il meccanismo di gestione del consenso
          previsto per la pubblicità e raccoglie le scelte dell'utente prima di richiedere i trattamenti pubblicitari soggetti a
          consenso. Le scelte espresse determinano le modalità con cui Google e i fornitori pubblicitari autorizzati possono trattare
          dati per archiviazione, misurazione e personalizzazione degli annunci.
        </p>
        <p>
          I dati pubblicitari possono includere identificatori pubblicitari o dell'installazione, indirizzo IP, caratteristiche del
          dispositivo e dell'app, interazioni con gli annunci, dati diagnostici e informazioni relative al consenso. OneFanta non
          vende i dati personali degli utenti. Se non presti il consenso alla personalizzazione, l'app può continuare a mostrare
          annunci non personalizzati, nel rispetto delle scelte espresse nel meccanismo di gestione del consenso.
        </p>
      </PolicySection>

      <PolicySection title="9. Destinatari e trasferimenti internazionali">
        <p>
          I dati possono essere trattati, nei limiti necessari alle finalità descritte, dai partecipanti alle leghe private per i dati
          di gioco e i contenuti condivisi nella lega, da Supabase per backend, autenticazione e archiviazione nella regione Europa
          centrale (Francoforte), da Google e Apple per l'autenticazione federata scelta dall'utente,
          Functional Software, Inc. (Sentry) per la diagnostica, Google e i relativi fornitori autorizzati per Firebase Cloud Messaging
          e Google Mobile Ads e da Resend per le email transazionali, compresi l'indirizzo email del destinatario, il contenuto del
          messaggio e i metadati di consegna. Sportmonks fornisce a OneFanta i dati sportivi: OneFanta li recupera lato server e non
          invia intenzionalmente a Sportmonks dati dell'account o dati di gioco degli utenti. Sentry tratta gli eventi nella regione
          Unione europea. Qualora i
          fornitori o i loro sub-responsabili effettuino trattamenti fuori dallo
          Spazio Economico Europeo, i trasferimenti avvengono sulla base dei meccanismi riconosciuti dalla normativa applicabile, come
          decisioni di adeguatezza, Data Privacy Framework o clausole contrattuali standard.
        </p>
        <p className="mt-3">
          Puoi consultare le informative dei principali fornitori sui siti di{' '}
          <a href="https://supabase.com/privacy" className="text-electric-300 hover:text-electric-200 underline underline-offset-4">Supabase</a>,{' '}
          <a href="https://sentry.io/privacy/" className="text-electric-300 hover:text-electric-200 underline underline-offset-4">Sentry</a>,{' '}
          <a href="https://policies.google.com/privacy" className="text-electric-300 hover:text-electric-200 underline underline-offset-4">Google</a>,{' '}
          <a href="https://resend.com/legal/privacy-policy" className="text-electric-300 hover:text-electric-200 underline underline-offset-4">Resend</a> e{' '}
          <a href="https://www.apple.com/legal/privacy/" className="text-electric-300 hover:text-electric-200 underline underline-offset-4">Apple</a>.
        </p>
      </PolicySection>

      <PolicySection title="10. Conservazione">
        <p>
          I dati dell'account e di gioco sono conservati per il tempo necessario a fornire il servizio e fino alla cancellazione
          dell'account, salvo obblighi di legge o esigenze di tutela dei diritti. I token e le preferenze di notifica sono conservati
          finché necessari a gestire la scelta dell'utente e vengono rimossi quando non sono più necessari o quando l'account viene
          eliminato. I log tecnici e di sicurezza sono conservati per un massimo di 12 mesi; se l'account viene eliminato, i log ancora
          necessari vengono anonimizzati e non sono più associati all'utente. I dati diagnostici restano in Sentry per 30 giorni. I
          dati pubblicitari sono conservati secondo le impostazioni di consenso e i periodi applicati dai fornitori coinvolti. Le
          richieste di assistenza sono conservate fino alla loro definizione e, se necessario, per il periodo successivo richiesto da
          obblighi di legge o dalla tutela dei diritti.
        </p>
      </PolicySection>

      <PolicySection title="11. Cancellazione account e dati">
        <p className="mb-3">
          Puoi eliminare direttamente l'account dall'app aprendo la sezione <strong className="text-white">Profilo</strong>,
          premendo il pulsante rosso <strong className="text-white">Elimina account</strong> e confermando la scelta. La
          cancellazione è definitiva e non può essere annullata.
        </p>
        <p>
          La pagina <LocalizedLink locale={locale} href="/delete-account">Cancellazione dell'account e dei dati</LocalizedLink>
          {' '}contiene ulteriori informazioni. Resta possibile esercitare i diritti previsti dal GDPR scrivendo a <EmailLink />;
          questa possibilità è distinta dalla procedura ordinaria e immediata disponibile nell'app.
        </p>
      </PolicySection>

      <PolicySection title="12. Conferimento dei dati e funzioni facoltative">
        <p>
          Email o identità fornita dal provider, informazioni di autenticazione e dati di gioco necessari sono indispensabili per creare l'account e fornire le relative funzionalità;
          senza di essi non è possibile usare le aree riservate. Il caricamento di immagini, le notifiche e i trattamenti
          pubblicitari basati sul consenso sono facoltativi. Il loro mancato conferimento o la revoca del consenso non impediscono
          l'uso delle altre funzioni dell'app, salvo quelle che dipendono direttamente dal dato o dal permesso rifiutato. L'invio di
          una richiesta di assistenza è facoltativo, ma senza i dati necessari non potremo rispondere.
        </p>
      </PolicySection>

      <PolicySection title="13. Minori">
        <p>
          OneFanta può essere utilizzata anche da utenti minorenni secondo quanto previsto nei Termini. In Italia, quando un
          trattamento relativo a un servizio online si basa sul consenso, l'utente che ha compiuto 14 anni può esprimerlo
          autonomamente; per gli utenti di età inferiore a 14 anni il consenso deve essere prestato o autorizzato da chi esercita la
          responsabilità genitoriale. Le funzioni facoltative basate sul consenso, inclusa l'eventuale personalizzazione
          pubblicitaria, non devono essere attivate da un utente infraquattordicenne senza tale autorizzazione.
        </p>
      </PolicySection>

      <PolicySection title="14. Sicurezza">
        <p>
          Usiamo misure tecniche e organizzative ragionevoli per proteggere i dati, incluse limitazioni di accesso e controlli sui
          sistemi usati per erogare il servizio. Nessun sistema può garantire sicurezza assoluta, ma lavoriamo per ridurre i rischi.
        </p>
      </PolicySection>

      <PolicySection title="15. I tuoi diritti e reclamo">
        <p className="mb-3">
          Nei limiti previsti dal GDPR puoi chiedere accesso, rettifica, cancellazione, limitazione del trattamento, portabilità,
          opposizione quando applicabile e revoca del consenso. Per esercitare i diritti scrivi a <EmailLink />.
        </p>
        <p>
          Se ritieni che il trattamento violi la normativa sulla protezione dei dati, puoi proporre reclamo all'autorità di controllo
          competente. In Italia è il Garante per la protezione dei dati personali.
        </p>
        <p className="mt-3">
          OneFanta non adotta decisioni basate unicamente su trattamenti automatizzati che producano effetti giuridici o analogamente
          significativi sull'utente. L'eventuale personalizzazione pubblicitaria avviene secondo le scelte espresse nel meccanismo di
          consenso dell'app.
        </p>
      </PolicySection>

      <PolicySection title="16. Informazioni negli store e aggiornamenti">
        <p>
          Le informazioni dichiarate in Google Play Console e App Store Connect devono riflettere i dati effettivamente raccolti
          dall'app. Questa policy offre dettagli aggiuntivi e sarà aggiornata se cambiano funzionalità, fornitori o categorie di dati
          trattati. Le modifiche sostanziali saranno comunicate nell'app o attraverso un altro canale idoneo prima che producano
          effetto, quando richiesto dalla normativa.
        </p>
      </PolicySection>
    </div>
  );
}

export function CookiePolicy({ locale }: { locale: Locale }) {
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
        <p className="mb-3">
          Questo sito non usa cookie di profilazione, cookie marketing o cookie analytics. Non usiamo Google Analytics, Meta Pixel
          o strumenti simili. Il modulo di iscrizione invia direttamente l'indirizzo email a Supabase quando premi il pulsante di invio.
        </p>
        <p>
          Il sito usa inoltre il local storage strettamente necessario per ricordare la lingua scelta e mantenere la navigazione
          nella versione italiana o inglese. Questa preferenza non è usata per profilazione o pubblicità.
        </p>
        <p className="mt-3">
          Le pagine di conferma dell'account e recupero password possono usare memoria locale o di sessione strettamente necessaria a
          verificare il collegamento ricevuto, mantenere per il tempo necessario la sessione di autenticazione e completare l'operazione
          richiesta. Queste tecnologie non sono usate per profilazione o pubblicità.
        </p>
        <p className="mt-3">
          Cloudflare fornisce hosting, storage, distribuzione e protezione del sito nella regione europea e può utilizzare tecnologie
          strettamente necessarie alla sicurezza, alla gestione del traffico e alla disponibilità del servizio. I relativi log tecnici
          sono conservati per un massimo di 12 mesi.
        </p>
      </PolicySection>

      <PolicySection title="3. Banner cookie">
        <p>
          Poiché il sito non usa cookie o strumenti di tracciamento che richiedono consenso preventivo, non mostriamo un banner di
          accettazione o rifiuto. Se in futuro aggiungeremo analytics, marketing, pixel o altri strumenti non necessari, aggiorneremo
          questa policy e mostreremo un meccanismo di consenso adeguato prima dell'attivazione.
        </p>
      </PolicySection>

      <PolicySection title="4. App mobile">
        <p>
          Questa Cookie Policy riguarda il sito web. La gestione del consenso pubblicitario e degli identificatori nell'app mobile è
          descritta nella <LocalizedLink locale={locale} href="/privacy">Privacy Policy dell'app</LocalizedLink>.
        </p>
      </PolicySection>

      <PolicySection title="5. Contatti">
        <p>Per domande su cookie o strumenti di tracciamento puoi scrivere a <EmailLink />.</p>
      </PolicySection>
    </div>
  );
}
