import { HelpCircle, Mail, ShieldCheck, Trash2 } from 'lucide-react';
import LegalPage from '../components/LegalPage';
import PolicySection from '../components/PolicySection';
import { CONTACT_EMAIL } from '../content/legal';
import { localizedPath, type Locale } from '../lib/i18n';

function SupportPage({ locale }: { locale: Locale }) {
  const isItalian = locale === 'it';
  const subject = isItalian ? 'Richiesta di assistenza OneFanta' : 'OneFanta support request';
  const body = isItalian
    ? 'Ciao, ho bisogno di assistenza con OneFanta.\n\nDescrizione del problema:\n\nEmail dell’account (se pertinente):\nModello del dispositivo:\nVersione iOS:\nVersione dell’app:'
    : 'Hello, I need help with OneFanta.\n\nIssue description:\n\nAccount email (if relevant):\nDevice model:\niOS version:\nApp version:';
  const emailHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const contactCard = (
    <section className="rounded-2xl border border-electric-500/25 bg-electric-500/10 p-5 md:p-6">
      <div className="flex items-start gap-4">
        <div className="rounded-xl bg-electric-500/20 p-3 text-electric-300"><Mail className="h-6 w-6" /></div>
        <div>
          <h2 className="mb-2 text-xl font-semibold text-white">{isItalian ? 'Contatta l’assistenza' : 'Contact support'}</h2>
          <p className="mb-4">{isItalian ? 'Raccontaci cosa è successo e ti aiuteremo a risolvere il problema.' : 'Tell us what happened and we’ll help you resolve the issue.'}</p>
          <a href={emailHref} className="inline-flex items-center rounded-xl bg-electric-500 px-5 py-3 font-semibold text-white transition-colors hover:bg-electric-400">
            {isItalian ? 'Scrivi a' : 'Email'} {CONTACT_EMAIL}
          </a>
        </div>
      </div>
    </section>
  );

  const resourceCards = (
    <div className="grid gap-4 sm:grid-cols-2">
      <a href={localizedPath(locale, '/delete-account')} className="rounded-xl border border-white/10 bg-white/5 p-5 transition-colors hover:border-electric-500/40 hover:bg-white/10">
        <Trash2 className="mb-3 h-5 w-5 text-electric-300" />
        <h2 className="font-semibold text-white">{isItalian ? 'Cancella il tuo account' : 'Delete your account'}</h2>
        <p className="mt-1 text-sm text-dark-300">{isItalian ? 'Istruzioni per eliminare definitivamente account e dati.' : 'Instructions for permanently deleting your account and data.'}</p>
      </a>
      <a href={localizedPath(locale, '/privacy')} className="rounded-xl border border-white/10 bg-white/5 p-5 transition-colors hover:border-electric-500/40 hover:bg-white/10">
        <ShieldCheck className="mb-3 h-5 w-5 text-electric-300" />
        <h2 className="font-semibold text-white">Privacy</h2>
        <p className="mt-1 text-sm text-dark-300">{isItalian ? 'Scopri come OneFanta tratta i tuoi dati personali.' : 'Learn how OneFanta handles your personal data.'}</p>
      </a>
    </div>
  );

  if (!isItalian) {
    return (
      <LegalPage locale={locale} title="OneFanta Support" subtitle="Help with your account, leagues and app features.">
        <div className="space-y-6">
          {contactCard}
          <PolicySection title="Information that helps us assist you">
            <p className="mb-3">Please include a short description of the issue and, when relevant:</p>
            <ul className="ml-4 list-disc space-y-2">
              <li>the email address associated with your OneFanta account;</li>
              <li>your device model, iOS version and OneFanta app version;</li>
              <li>the steps that caused the issue and any error message shown.</li>
            </ul>
            <p className="mt-3 text-dark-400">Never send us your password or verification codes.</p>
          </PolicySection>
          <PolicySection title="Common questions">
            <div className="space-y-5">
              <div><h3 className="mb-1 font-semibold text-white">I can’t sign in</h3><p>Check that you are using the email linked to your account and request a new password-reset email. Also check your spam folder.</p></div>
              <div><h3 className="mb-1 font-semibold text-white">Scores or standings look incorrect</h3><p>Live data may change while matches are being played. If the issue remains after the matchday is finalised, send us the league name, matchday and affected player or team.</p></div>
              <div><h3 className="mb-1 font-semibold text-white">Notifications aren’t arriving</h3><p>Make sure notifications are enabled both in OneFanta and in your device settings.</p></div>
            </div>
          </PolicySection>
          {resourceCards}
          <p className="flex items-center gap-2 text-sm text-dark-400"><HelpCircle className="h-4 w-4" /> This is the official support page for the OneFanta app.</p>
        </div>
      </LegalPage>
    );
  }

  return (
    <LegalPage locale={locale} title="Assistenza OneFanta" subtitle="Aiuto per account, leghe e funzionalità dell’app.">
      <div className="space-y-6">
        {contactCard}
        <PolicySection title="Informazioni utili per ricevere assistenza">
          <p className="mb-3">Descrivi brevemente il problema e, quando pertinente, indica:</p>
          <ul className="ml-4 list-disc space-y-2">
            <li>l’indirizzo email associato al tuo account OneFanta;</li>
            <li>il modello del dispositivo, la versione di iOS e la versione dell’app;</li>
            <li>i passaggi che hanno causato il problema e l’eventuale messaggio di errore.</li>
          </ul>
          <p className="mt-3 text-dark-400">Non inviarci mai password o codici di verifica.</p>
        </PolicySection>
        <PolicySection title="Domande frequenti">
          <div className="space-y-5">
            <div><h3 className="mb-1 font-semibold text-white">Non riesco ad accedere</h3><p>Verifica di usare l’email collegata al tuo account e richiedi un nuovo messaggio per reimpostare la password. Controlla anche la cartella spam.</p></div>
            <div><h3 className="mb-1 font-semibold text-white">Punteggi o classifica non sono corretti</h3><p>I dati live possono cambiare mentre le partite sono in corso. Se il problema rimane dopo la chiusura della giornata, indicaci lega, giornata e giocatore o squadra interessati.</p></div>
            <div><h3 className="mb-1 font-semibold text-white">Non ricevo le notifiche</h3><p>Controlla che le notifiche siano abilitate sia in OneFanta sia nelle impostazioni del dispositivo.</p></div>
          </div>
        </PolicySection>
        {resourceCards}
        <p className="flex items-center gap-2 text-sm text-dark-400"><HelpCircle className="h-4 w-4" /> Questa pagina è il canale ufficiale di assistenza per l’app OneFanta.</p>
      </div>
    </LegalPage>
  );
}

export default SupportPage;
