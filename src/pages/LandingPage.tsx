import { useEffect, useState, type FormEvent } from 'react';
import {
  AlertCircle,
  BarChart3,
  CheckCircle,
  ChevronDown,
  Cookie,
  Lock,
  Mail,
  Shield,
  Star,
  Trash2,
  Users,
} from 'lucide-react';
import Background from '../components/Background';
import FeatureCard from '../components/FeatureCard';
import LegalModal, { type LegalModalType } from '../components/LegalModal';
import { CookiePolicy, WaitlistPrivacyPolicy } from '../content/legal';
import { supabase } from '../lib/supabase';

function LandingPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [activeModal, setActiveModal] = useState<LegalModalType | null>(null);
  const [waitlistCount, setWaitlistCount] = useState<number | null>(null);

  const fetchWaitlistCount = async () => {
    const { data, error } = await supabase.rpc('get_waitlist_signup_count');

    if (!error && typeof data === 'number') {
      setWaitlistCount(data);
    }
  };

  useEffect(() => {
    fetchWaitlistCount();
  }, []);

  const visibleWaitlistCount = waitlistCount !== null && waitlistCount >= 100
    ? Math.floor(waitlistCount / 100) * 100
    : null;
  const formattedWaitlistCount = visibleWaitlistCount?.toLocaleString('it-IT');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      setStatus('error');
      setErrorMessage('Inserisci un indirizzo email valido');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('waitlist_signups')
        .insert([{ email: email.toLowerCase() }]);

      if (error) {
        if (error.code === '23505') {
          setStatus('success');
        } else {
          throw error;
        }
      } else {
        setStatus('success');
        setWaitlistCount((count) => count === null ? count : count + 1);
      }
    } catch {
      setStatus('error');
      setErrorMessage('Qualcosa è andato storto. Riprova.');
    }
  };

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openModal = (type: LegalModalType) => {
    setActiveModal(type);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen bg-dark-950 text-white overflow-x-hidden">
      <Background />

      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-950/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center" aria-label="OneFanta home">
            <img
              src="/onefanta-logo.png"
              alt="OneFanta"
              className="h-10 w-auto rounded-xl"
            />
          </a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-5 py-2 bg-electric-500 hover:bg-electric-400 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-electric-500/25"
          >
            Avvisami
          </button>
        </div>
      </nav>

      <section id="signup" className="min-h-screen flex flex-col items-center justify-center pt-20 pb-8 px-6">
        <div className="max-w-3xl mx-auto text-center w-full">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-electric-500/10 border border-electric-500/25 rounded-full mb-8 animate-float">
            <span className="w-2 h-2 bg-electric-400 rounded-full animate-pulse" />
            <span className="text-electric-300 text-sm font-medium">Presto disponibile su iOS & Android</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-5 leading-tight">
            <span className="bg-gradient-to-r from-white via-electric-100 to-electric-300 bg-clip-text text-transparent">
              Domina la tua
            </span>
            <br />
            <span className="bg-gradient-to-r from-electric-400 to-electric-600 bg-clip-text text-transparent">
              Lega di Fantacalcio
            </span>
          </h1>

          <p className="text-lg md:text-xl text-dark-300 max-w-xl mx-auto mb-10 leading-relaxed">
            Voti live, leghe private con gli amici e classifiche in tempo reale.
            <span className="text-electric-400"> Il fantacalcio fatto bene.</span>
          </p>

          <div className="bg-gradient-to-br from-dark-800/80 to-dark-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl shadow-electric-500/5 mb-8">
            {status === 'success' ? (
              <div className="flex flex-col items-center gap-3 py-4">
                <div className="w-14 h-14 bg-electric-500/20 rounded-full flex items-center justify-center animate-pulse-glow">
                  <CheckCircle className="w-7 h-7 text-electric-400" />
                </div>
                <p className="text-xl font-semibold text-electric-300">Sei nella lista!</p>
                <p className="text-dark-400">Ti avvisiamo non appena One Fanta sarà disponibile.</p>
              </div>
            ) : (
              <>
                <p className="text-dark-300 mb-4">
                  Lascia la tua email: ti avvisiamo il giorno del lancio. Niente spam, mai.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Inserisci la tua email"
                      className="w-full pl-12 pr-4 py-4 bg-dark-900/60 border border-white/10 rounded-xl text-white placeholder-dark-400 focus:outline-none focus:border-electric-500 focus:ring-2 focus:ring-electric-500/20 transition-all"
                      disabled={status === 'loading'}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="px-8 py-4 bg-gradient-to-r from-electric-500 to-electric-600 hover:from-electric-400 hover:to-electric-500 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-electric-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-w-[140px]"
                  >
                    {status === 'loading' ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      'Avvisami'
                    )}
                  </button>
                </form>

                {status === 'error' && (
                  <div className="flex items-center gap-2 mt-3 text-red-400 text-sm">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <p className="text-dark-400 text-xs leading-relaxed mt-4">
                  Iscrivendoti alla waitlist accetti di ricevere aggiornamenti sul lancio di One Fanta.
                  Puoi richiedere la cancellazione della tua email in qualsiasi momento.{' '}
                  <a href="/waitlist-privacy" className="text-electric-300 hover:text-electric-200 underline underline-offset-4">
                    Leggi la Waitlist Privacy Policy
                  </a>
                  .
                </p>
              </>
            )}

            <p className="text-dark-500 text-xs text-center mt-4">
              {formattedWaitlistCount ? (
                <>
                  Unisciti a{' '}
                  <span className="text-electric-400 font-semibold">{formattedWaitlistCount}+</span>{' '}
                  giocatori già in lista d'attesa
                </>
              ) : (
                "Sii tra i primi a entrare nella lista d'attesa"
              )}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
            <button className="flex items-center gap-3 px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300 hover:scale-105">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <div className="text-xs text-dark-400">Prossimamente</div>
                <div className="font-semibold">App Store</div>
              </div>
            </button>
            <button className="flex items-center gap-3 px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300 hover:scale-105">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z" />
              </svg>
              <div className="text-left">
                <div className="text-xs text-dark-400">Prossimamente</div>
                <div className="font-semibold">Google Play</div>
              </div>
            </button>
          </div>

          <button
            onClick={scrollToFeatures}
            className="animate-bounce text-dark-400 hover:text-electric-400 transition-colors"
            aria-label="Vai alle funzionalità"
          >
            <ChevronDown className="w-8 h-8 mx-auto" />
          </button>
        </div>
      </section>

      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Tutto ciò che ti serve per <span className="text-electric-400">vincere</span>
            </h2>
            <p className="text-dark-300 text-lg max-w-2xl mx-auto">
              Costruito da appassionati di fantacalcio, per appassionati di fantacalcio. Ogni funzione pensata per darti il vantaggio decisivo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard icon={<Star className="w-7 h-7 text-electric-400" />} title="Voti Live">
              Segui i voti dei tuoi giocatori in tempo reale, aggiornati minuto per minuto durante le partite.
            </FeatureCard>
            <FeatureCard icon={<Lock className="w-7 h-7 text-electric-400" />} title="Leghe Private">
              Crea la tua lega, invita gli amici e sfidatevi nella vostra competizione personalizzata.
            </FeatureCard>
            <FeatureCard icon={<BarChart3 className="w-7 h-7 text-electric-400" />} title="Statistiche Giocatori">
              Analizza le performance di ogni calciatore con dati dettagliati e storici di ogni stagione.
            </FeatureCard>
            <FeatureCard icon={<Users className="w-7 h-7 text-electric-400" />} title="Classifiche in Tempo Reale">
              Guarda la tua posizione aggiornata live durante ogni giornata di campionato.
            </FeatureCard>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-electric-500/10 via-electric-600/15 to-electric-500/10 border border-electric-500/20 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto a dominare?
            </h2>
            <p className="text-dark-300 text-lg mb-8">
              Iscriviti ora e sii il primo a sapere quando lanciamo.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-electric-500 to-electric-600 hover:from-electric-400 hover:to-electric-500 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-electric-500/25"
            >
              Unisciti alla lista d'attesa
            </button>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="/" className="flex items-center" aria-label="OneFanta home">
            <img
              src="/onefanta-logo.png"
              alt="OneFanta"
              className="h-8 w-auto rounded-lg"
            />
          </a>

          <div className="flex flex-wrap items-center justify-center gap-5 text-dark-400 text-sm">
            <a href="/privacy" className="hover:text-electric-400 transition-colors flex items-center gap-2">
              <Shield className="w-4 h-4" />
              App Privacy
            </a>
            <button
              onClick={() => openModal('waitlistPrivacy')}
              className="hover:text-electric-400 transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Waitlist Privacy
            </button>
            <a href="/delete-account" className="hover:text-electric-400 transition-colors flex items-center gap-2">
              <Trash2 className="w-4 h-4" />
              Delete Account
            </a>
            <a href="/contact" className="hover:text-electric-400 transition-colors flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Contact
            </a>
            <button
              onClick={() => openModal('cookie')}
              className="hover:text-electric-400 transition-colors flex items-center gap-2"
            >
              <Cookie className="w-4 h-4" />
              Cookie Policy
            </button>
          </div>

          <p className="text-dark-400 text-sm">
            © 2026 One Fanta. All rights reserved.
          </p>
        </div>
      </footer>

      {activeModal && (
        <LegalModal activeModal={activeModal} onClose={closeModal}>
          {activeModal === 'waitlistPrivacy' ? <WaitlistPrivacyPolicy /> : <CookiePolicy />}
        </LegalModal>
      )}
    </div>
  );
}

export default LandingPage;
