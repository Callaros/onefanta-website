import { ArrowRight, CheckCircle2, MailCheck } from 'lucide-react';
import Background from '../components/Background';

function AuthConfirmedPage() {
  return (
    <div className="min-h-screen bg-dark-950 text-white overflow-x-hidden">
      <Background />

      <main className="min-h-screen px-6 py-10 flex items-center justify-center">
        <section className="w-full max-w-xl text-center">
          <a href="/" className="inline-flex items-center justify-center mb-10" aria-label="OneFanta home">
            <img
              src="/onefanta-logo.png"
              alt="OneFanta"
              className="h-14 w-auto rounded-xl"
            />
          </a>

          <div className="bg-gradient-to-br from-dark-800/80 to-dark-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-7 md:p-10 shadow-2xl shadow-electric-500/10">
            <div className="mx-auto mb-6 w-16 h-16 bg-electric-500/20 rounded-full flex items-center justify-center animate-pulse-glow">
              <CheckCircle2 className="w-9 h-9 text-electric-300" />
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-electric-500/10 border border-electric-500/25 rounded-full mb-6">
              <MailCheck className="w-4 h-4 text-electric-300" />
              <span className="text-electric-300 text-sm font-medium">Email confermata</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              La tua email e stata confermata
            </h1>

            <p className="text-dark-300 text-lg leading-relaxed mb-8">
              Grazie per aver confermato il tuo account OneFanta. Ora puoi tornare al sito e continuare da dove eri rimasto.
            </p>

            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-electric-500 to-electric-600 hover:from-electric-400 hover:to-electric-500 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-electric-500/25"
            >
              Torna a OneFanta
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AuthConfirmedPage;
