import LegalPage from '../components/LegalPage';
import PolicySection from '../components/PolicySection';
import { EmailLink } from '../content/legal';

const TERMS_LAST_UPDATED = '27 luglio 2026';

function TermsPage() {
  return (
    <LegalPage
      title="Termini e condizioni di utilizzo"
      subtitle="Le regole per usare il sito, l'app e i servizi OneFanta."
    >
      <div className="space-y-8">
        <p className="text-dark-400">Ultimo aggiornamento: {TERMS_LAST_UPDATED}</p>

        <PolicySection title="1. Chi fornisce OneFanta e ambito dei Termini">
          <p className="mb-3">
            I presenti Termini regolano l'accesso e l'uso del sito web, dell'app mobile e dei servizi collegati denominati
            “OneFanta” (insieme, il “Servizio”). OneFanta è il nome usato per identificare il Servizio e non viene qui indicato
            come marchio registrato.
          </p>
          <p>
            Il Servizio è gestito da <strong className="text-white">Luca Antonelli</strong>, persona fisica, residente in{' '}
            <strong className="text-white">Contrada Addolorata 49/A, Recanati (MC), Italia</strong>. Per assistenza e
            comunicazioni è disponibile <EmailLink />. L'eventuale partita IVA sarà indicata quando applicabile.
          </p>
        </PolicySection>

        <PolicySection title="2. Accettazione e documenti collegati">
          <p className="mb-3">
            Creando un account o usando le funzionalità del Servizio, dichiari di aver letto e accettato questi Termini. Se non li
            accetti, non creare un account e non usare le funzionalità riservate. La semplice consultazione delle pagine pubbliche
            non limita i diritti che ti spettano per legge.
          </p>
          <p>
            Il trattamento dei dati personali è descritto nella <a href="/privacy" className="text-electric-300 hover:text-electric-200 underline underline-offset-4">Privacy Policy dell'app</a>.
            Per il sito, la waitlist e i cookie si applicano le rispettive informative disponibili nel footer.
          </p>
        </PolicySection>

        <PolicySection title="3. Il Servizio OneFanta">
          <p className="mb-3">
            OneFanta consente, a seconda delle funzionalità disponibili, di creare o partecipare a leghe private, gestire squadre
            e rose, consultare voti e statistiche, calcolare punteggi e seguire classifiche e aggiornamenti in tempo reale.
          </p>
          <p>
            Il Servizio è destinato all'intrattenimento. Non è un servizio di scommesse, non garantisce vincite o risultati sportivi
            e non è ufficialmente affiliato a club, leghe, federazioni, calciatori o competizioni, salvo quando ciò sia dichiarato
            espressamente. Nomi e segni di terzi appartengono ai rispettivi titolari.
          </p>
        </PolicySection>

        <PolicySection title="4. Requisiti di età">
          <p className="mb-3">
            Le funzionalità gratuite possono essere utilizzate anche da utenti minorenni. Se non hai la capacità di accettare
            autonomamente questi Termini secondo la legge applicabile, l'uso del Servizio deve essere autorizzato e supervisionato
            da un genitore o tutore, che è invitato a leggere questi Termini e le informative privacy.
          </p>
          <p>
            Gli eventuali abbonamenti o altri servizi a pagamento offerti direttamente da OneFanta sono riservati agli utenti che
            hanno compiuto 18 anni. OneFanta non organizza attualmente concorsi a premi.
          </p>
          <p className="mt-3">
            Per le funzioni facoltative il cui trattamento dei dati si basa sul consenso, in Italia l'utente che ha compiuto 14 anni
            può esprimerlo autonomamente; per gli utenti di età inferiore a 14 anni il consenso deve essere prestato o autorizzato da
            chi esercita la responsabilità genitoriale. Un utente infraquattordicenne non deve attivare autonomamente la
            personalizzazione pubblicitaria o altre funzioni il cui trattamento si basa sul consenso.
          </p>
        </PolicySection>

        <PolicySection title="5. Account e sicurezza">
          <ul className="list-disc space-y-2 pl-5">
            <li>Devi fornire informazioni accurate e mantenerle aggiornate.</li>
            <li>L'account è personale e non può essere ceduto o condiviso senza autorizzazione.</li>
            <li>Devi custodire le credenziali e avvisarci tempestivamente se sospetti accessi non autorizzati.</li>
            <li>Sei responsabile delle attività svolte dal tuo account nei limiti consentiti dalla legge e salvo usi non imputabili a te.</li>
          </ul>
        </PolicySection>

        <PolicySection title="6. Leghe private, amministratori e regole di gioco">
          <p className="mb-3">
            Le leghe private sono gruppi organizzati dagli utenti. Chi crea o amministra una lega può configurarne le regole,
            invitare o rimuovere partecipanti e gestire le decisioni di gioco mediante gli strumenti disponibili.
          </p>
          <p className="mb-3">
            Partecipanti e amministratore sono responsabili delle regole interne, degli accordi tra loro e della risoluzione delle
            contestazioni di gioco. OneFanta fornisce l'infrastruttura tecnica e può intervenire per problemi del Servizio, abusi o
            violazioni di questi Termini, ma non è parte degli accordi privati tra i membri della lega.
          </p>
          <p>
            Denaro, quote d'ingresso o premi organizzati autonomamente dagli utenti non sono gestiti né garantiti da OneFanta.
            Gli utenti devono verificare che le proprie iniziative siano consentite dalla legge applicabile. OneFanta non organizza
            attualmente concorsi e non interviene nella raccolta o distribuzione di quote e premi delle leghe private.
          </p>
        </PolicySection>

        <PolicySection title="7. Voti, statistiche, punteggi e correzioni">
          <p className="mb-3">
            I dati sportivi di base, inclusi risultati, eventi e statistiche, sono forniti tramite la Sportmonks Football API.
            OneFanta seleziona, interpreta ed elabora tali dati secondo criteri propri per adattarli alle regole e alle meccaniche
            del fantacalcio. Sportmonks non determina i voti fantasy, i bonus, i malus o i punteggi assegnati da OneFanta.
            OneFanta non utilizza loghi o fotografie ottenuti tramite Sportmonks.
          </p>
          <p>
            I dati possono essere provvisori, arrivare in ritardo, essere incompleti o contenere errori. In caso di aggiornamenti
            della fonte o anomalie individuate dal gestore, OneFanta può correggere i dati elaborati e ricalcolare voti, punteggi e
            classifiche. Le informazioni fornite nell'app hanno finalità di gioco e non costituiscono una fonte sportiva ufficiale
            né consulenza per decisioni economiche.
          </p>
        </PolicySection>

        <PolicySection title="8. Uso consentito e comportamenti vietati">
          <p className="mb-3">Usando OneFanta ti impegni a rispettare la legge, questi Termini e i diritti degli altri. In particolare, non puoi:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>usare il Servizio per frodi, molestie, minacce, discriminazione o altre attività illecite;</li>
            <li>caricare o condividere contenuti illeciti, offensivi o lesivi di privacy, immagine, copyright o altri diritti;</li>
            <li>accedere ad account, dati o aree senza autorizzazione, eludere misure di sicurezza o interferire con il Servizio;</li>
            <li>usare bot, scraping o strumenti automatizzati non autorizzati, o sovraccaricare l'infrastruttura;</li>
            <li>copiare, rivendere, modificare o sfruttare commercialmente il Servizio o i suoi contenuti senza autorizzazione;</li>
            <li>alterare risultati, abusare di bug o creare account per aggirare limitazioni o provvedimenti.</li>
          </ul>
        </PolicySection>

        <PolicySection title="9. Contenuti degli utenti">
          <p className="mb-3">
            OneFanta non include attualmente funzioni di chat o messaggistica tra utenti. Per i contenuti che possono essere inseriti
            nel Servizio, come nomi di squadra o lega e immagini personalizzate dei team, mantieni i relativi diritti e ne sei
            responsabile. Devi avere le autorizzazioni necessarie e non devi caricare contenuti illeciti, offensivi o lesivi della
            privacy, dell'immagine, del copyright o di altri diritti di terzi.
          </p>
          <p className="mb-3">
            Le immagini dei team sono utilizzate nell'ambito delle leghe private e sono normalmente visibili ai relativi partecipanti.
            La natura privata della lega non autorizza comunque l'uso di immagini appartenenti a terzi e non esclude gli accessi
            tecnici strettamente necessari per assistenza, sicurezza e funzionamento del Servizio.
          </p>
          <p>
            Con il caricamento concedi al fornitore di OneFanta una licenza non esclusiva, gratuita e limitata a ospitare, riprodurre,
            adattare tecnicamente e mostrare il contenuto soltanto per erogare, proteggere e migliorare il Servizio. La licenza termina
            quando il contenuto viene eliminato, salvo copie tecniche temporanee o obblighi di legge.
          </p>
        </PolicySection>

        <PolicySection title="10. Proprietà intellettuale">
          <p>
            Software, interfaccia, grafica, testi, database e contenuti originali di OneFanta sono protetti dalle norme applicabili
            sul diritto d'autore e sugli altri diritti di proprietà intellettuale, anche se il nome OneFanta non è attualmente un
            marchio registrato. Ti concediamo un diritto personale, limitato, revocabile, non esclusivo e non trasferibile a usare il
            Servizio secondo questi Termini. I contenuti e i segni di terzi restano dei rispettivi titolari.
          </p>
        </PolicySection>

      <PolicySection title="11. Servizi di terzi, store, pubblicità e acquisti">
        <p className="mb-3">
            L'app è attualmente distribuita esclusivamente tramite Apple App Store e Google Play Store. Alcune funzioni possono
            dipendere da servizi di terzi, tra cui Supabase per database, autenticazione e archiviazione, Sportmonks per i dati
            sportivi, Sentry per la diagnostica dei malfunzionamenti, Firebase Cloud Messaging per le notifiche abilitate dall'utente
            e Google Mobile Ads per la pubblicità. Il sito usa inoltre Cloudflare per hosting, storage, distribuzione e sicurezza.
            A tali servizi possono applicarsi condizioni e informative proprie.
          </p>
          <p className="mb-3">
            Le notifiche sono facoltative e possono essere disabilitate dall'utente. Per i trattamenti pubblicitari soggetti a
            consenso, l'app presenta all'avvio il relativo meccanismo di scelta prima di richiedere tali trattamenti. Maggiori dettagli
            sono disponibili nella <a href="/privacy" className="text-electric-300 hover:text-electric-200 underline underline-offset-4">Privacy Policy dell'app</a>.
            Se l'utente non acconsente alla personalizzazione, possono essere mostrati annunci non personalizzati.
          </p>
          <p>
            Se saranno offerti abbonamenti o acquisti, prezzo totale, durata, rinnovo, modalità di pagamento, recesso e cancellazione
            saranno mostrati prima dell'ordine, nel rispetto della legge e delle regole dello store utilizzato. Questi Termini non
            attivano da soli alcun acquisto o rinnovo automatico.
          </p>
        </PolicySection>

        <PolicySection title="12. Disponibilità territoriale">
          <p>
            OneFanta non prevede attualmente un limite territoriale generale. La possibilità concreta di scaricare o usare l'app può
            dipendere dalla disponibilità su Apple App Store e Google Play Store nel Paese dell'utente, dalla compatibilità del
            dispositivo, dai servizi di terzi e dalle leggi locali. È responsabilità dell'utente verificare che l'uso del Servizio
            sia consentito nel luogo in cui si trova.
          </p>
        </PolicySection>

        <PolicySection title="13. Disponibilità, modifiche e aggiornamenti del Servizio">
          <p>
            Lavoriamo per mantenere OneFanta disponibile e sicuro, ma possono verificarsi manutenzioni, ritardi, errori o interruzioni.
            Possiamo modificare o interrompere funzionalità per ragioni tecniche, di sicurezza, legali o di prodotto. Quando una modifica
            incide in modo sostanziale sul Servizio o su un rapporto continuativo, forniremo un preavviso ragionevole, salvo urgenze,
            obblighi di legge o rischi di sicurezza. Restano fermi i rimedi inderogabili riconosciuti ai consumatori.
          </p>
        </PolicySection>

        <PolicySection title="14. Sospensione, chiusura dell'account e segnalazioni">
          <p className="mb-3">
            Puoi smettere di usare il Servizio ed eliminare direttamente l'account dalla sezione Profilo dell'app, premendo il pulsante
            rosso “Elimina account” e confermando la scelta. La cancellazione è definitiva e non può essere annullata. Ulteriori
            informazioni sono disponibili nella pagina{' '}
            <a href="/delete-account" className="text-electric-300 hover:text-electric-200 underline underline-offset-4">Cancellazione dell'account e dei dati</a>.
          </p>
          <p>
            Possiamo limitare o sospendere funzionalità, rimuovere contenuti o chiudere un account in caso di violazioni, rischi per
            utenti o sistemi, obblighi legali o inattività prolungata. La misura sarà, per quanto possibile, proporzionata e motivata;
            nei casi non urgenti sarà dato preavviso e potrai chiedere chiarimenti o contestarla scrivendo a <EmailLink />.
          </p>
        </PolicySection>

        <PolicySection title="15. Responsabilità e diritti dei consumatori">
          <p className="mb-3">
            Nulla in questi Termini esclude o limita responsabilità e diritti che non possono essere esclusi per legge, inclusi i
            rimedi previsti per i servizi digitali non conformi. OneFanta risponde dei danni direttamente imputabili al proprio
            inadempimento secondo la legge applicabile.
          </p>
          <p>
            Nei limiti consentiti dalla legge, OneFanta non risponde di accordi privati tra membri di una lega, condotte degli utenti,
            uso del Servizio contrario a questi Termini, indisponibilità imputabili al dispositivo o alla connessione dell'utente,
            né di eventi imprevedibili e fuori dal proprio ragionevole controllo.
          </p>
        </PolicySection>

        <PolicySection title="16. Modifiche ai Termini">
          <p>
            Possiamo aggiornare questi Termini per cambiamenti del Servizio, della legge o per esigenze di sicurezza. Pubblicheremo la
            versione aggiornata con la relativa data e comunicheremo in modo chiaro le modifiche sostanziali prima che abbiano effetto,
            quando richiesto o ragionevolmente possibile. Se non accetti una modifica che incide su un servizio continuativo, puoi
            interrompere l'uso e chiudere l'account, fatti salvi gli ulteriori diritti previsti dalla legge.
          </p>
        </PolicySection>

        <PolicySection title="17. Legge applicabile, controversie e disposizioni finali">
          <p className="mb-3">
            I Termini sono regolati dalla legge italiana, senza privare il consumatore delle tutele inderogabili eventualmente previste
            dalla legge del Paese in cui risiede. Per il consumatore è competente il giudice del luogo di residenza o domicilio nei
            casi previsti dalla legge. Prima di agire, puoi contattarci per tentare una soluzione amichevole e, ove applicabile,
            rivolgerti a un organismo ADR competente.
          </p>
          <p>
            Se una disposizione risulta invalida o inefficace, le altre restano valide. Il mancato esercizio di un diritto non
            costituisce rinuncia. Per domande, segnalazioni o contestazioni relative ai Termini puoi scrivere a <EmailLink />.
          </p>
        </PolicySection>
      </div>
    </LegalPage>
  );
}

export default TermsPage;
