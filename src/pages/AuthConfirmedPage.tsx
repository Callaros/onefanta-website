import { ArrowRight, CheckCircle2, MailCheck } from 'lucide-react';
import Background from '../components/Background';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { localizedPath, type Locale } from '../lib/i18n';

function AuthConfirmedPage({ locale }: { locale: Locale }) {
  const isItalian = locale === 'it';
  return (
    <div className="min-h-screen bg-dark-950 text-white overflow-x-hidden">
      <Background />

      <main className="min-h-screen px-6 py-10 flex items-center justify-center">
        <section className="w-full max-w-xl text-center">
          <div className="mb-10 flex items-center justify-between gap-4">
          <a href={localizedPath(locale, '/')} className="inline-flex items-center justify-center" aria-label="OneFanta home">
            <img
              src="/onefanta-logo.png"
              alt="OneFanta"
              className="h-14 w-auto rounded-xl"
            />
          </a>
          <LanguageSwitcher locale={locale} compact />
          </div>

          <div className="bg-gradient-to-br from-dark-800/80 to-dark-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-7 md:p-10 shadow-2xl shadow-electric-500/10">
            <div className="mx-auto mb-6 w-16 h-16 bg-electric-500/20 rounded-full flex items-center justify-center animate-pulse-glow">
              <CheckCircle2 className="w-9 h-9 text-electric-300" />
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-electric-500/10 border border-electric-500/25 rounded-full mb-6">
              <MailCheck className="w-4 h-4 text-electric-300" />
              <span className="text-electric-300 text-sm font-medium">{isItalian ? 'Email confermata' : 'Email confirmed'}</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {isItalian ? 'La tua email è stata confermata' : 'Your email has been confirmed'}
            </h1>

            <p className="text-dark-300 text-lg leading-relaxed mb-8">
              {isItalian
                ? 'Grazie per aver confermato il tuo account OneFanta. Ora puoi tornare nell’app e continuare da dove eri rimasto.'
                : 'Thanks for confirming your OneFanta account. You can now return to the app and pick up where you left off.'}
            </p>

            <a
              href="https://open.onefanta.com/auth/confirmed"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-electric-500 to-electric-600 hover:from-electric-400 hover:to-electric-500 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-electric-500/25"
            >
              {isItalian ? 'Torna a OneFanta' : 'Return to OneFanta'}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AuthConfirmedPage;
