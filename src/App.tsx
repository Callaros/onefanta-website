import { useEffect, useState } from 'react';
import { Star, Users, BarChart3, Lock, ChevronDown, Mail, CheckCircle, AlertCircle, X, Shield, Cookie } from 'lucide-react';
import { supabase } from './lib/supabase';

type ModalType = 'privacy' | 'cookie' | null;

function App() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [activeModal, setActiveModal] = useState<ModalType>(null);
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

  const handleSubmit = async (e: React.FormEvent) => {
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

  const openModal = (type: ModalType) => {
    setActiveModal(type);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen bg-dark-950 text-white overflow-x-hidden">
      {/* Animated background gradient */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-950 to-dark-900" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-electric-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-electric-600/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric-500/5 rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-950/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/onefanta-logo.png"
              alt="OneFanta"
              className="h-10 w-auto rounded-xl"
            />
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-5 py-2 bg-electric-500 hover:bg-electric-400 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-electric-500/25"
          >
            Avvisami
          </button>
        </div>
      </nav>

      {/* Hero Section — full viewport height, email form inline */}
      <section id="signup" className="min-h-screen flex flex-col items-center justify-center pt-20 pb-8 px-6">
        <div className="max-w-3xl mx-auto text-center w-full">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-electric-500/10 border border-electric-500/25 rounded-full mb-8 animate-float">
            <span className="w-2 h-2 bg-electric-400 rounded-full animate-pulse" />
            <span className="text-electric-300 text-sm font-medium">Presto disponibile su iOS & Android</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-5 leading-tight">
            <span className="bg-gradient-to-r from-white via-electric-100 to-electric-300 bg-clip-text text-transparent">
              Domina la tua
            </span>
            <br />
            <span className="bg-gradient-to-r from-electric-400 to-electric-600 bg-clip-text text-transparent">
              Lega di Fantacalcio
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-dark-300 max-w-xl mx-auto mb-10 leading-relaxed">
            Voti live, leghe private con gli amici e classifiche in tempo reale.
            <span className="text-electric-400"> La fantacalcio fatta bene.</span>
          </p>

          {/* Email Signup — above the fold */}
          <div className="bg-gradient-to-br from-dark-800/80 to-dark-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl shadow-electric-500/5 mb-8">
            {status === 'success' ? (
              <div className="flex flex-col items-center gap-3 py-4">
                <div className="w-14 h-14 bg-electric-500/20 rounded-full flex items-center justify-center animate-pulse-glow">
                  <CheckCircle className="w-7 h-7 text-electric-400" />
                </div>
                <p className="text-xl font-semibold text-electric-300">Sei nella lista!</p>
                <p className="text-dark-400">Ti avvisiamo non appena OneFanta sarà disponibile.</p>
              </div>
            ) : (
              <>
                <p className="text-dark-300 mb-4">
                  Lascia la tua email — ti avvisiamo il giorno del lancio. Niente spam, mai.
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

          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
            <button className="flex items-center gap-3 px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300 hover:scale-105">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs text-dark-400">Prossimamente</div>
                <div className="font-semibold">App Store</div>
              </div>
            </button>
            <button className="flex items-center gap-3 px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300 hover:scale-105">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs text-dark-400">Prossimamente</div>
                <div className="font-semibold">Google Play</div>
              </div>
            </button>
          </div>

          {/* Scroll indicator */}
          <button
            onClick={scrollToFeatures}
            className="animate-bounce text-dark-400 hover:text-electric-400 transition-colors"
          >
            <ChevronDown className="w-8 h-8 mx-auto" />
          </button>
        </div>
      </section>

      {/* Features Section */}
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
            {/* Feature 1 */}
            <div className="group bg-dark-900/50 hover:bg-dark-800/50 border border-white/5 hover:border-electric-500/25 rounded-2xl p-6 transition-all duration-300 hover:translate-y-[-4px]">
              <div className="w-14 h-14 bg-gradient-to-br from-electric-500/20 to-electric-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Star className="w-7 h-7 text-electric-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Voti Live</h3>
              <p className="text-dark-400">
                Segui i voti dei tuoi giocatori in tempo reale, aggiornati minuto per minuto durante le partite.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group bg-dark-900/50 hover:bg-dark-800/50 border border-white/5 hover:border-electric-500/25 rounded-2xl p-6 transition-all duration-300 hover:translate-y-[-4px]">
              <div className="w-14 h-14 bg-gradient-to-br from-electric-500/20 to-electric-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Lock className="w-7 h-7 text-electric-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Leghe Private</h3>
              <p className="text-dark-400">
                Crea la tua lega, invita gli amici e sfidatevi nella vostra competizione personalizzata.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group bg-dark-900/50 hover:bg-dark-800/50 border border-white/5 hover:border-electric-500/25 rounded-2xl p-6 transition-all duration-300 hover:translate-y-[-4px]">
              <div className="w-14 h-14 bg-gradient-to-br from-electric-500/20 to-electric-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-7 h-7 text-electric-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Statistiche Giocatori</h3>
              <p className="text-dark-400">
                Analizza le performance di ogni calciatore con dati dettagliati e storici di ogni stagione.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group bg-dark-900/50 hover:bg-dark-800/50 border border-white/5 hover:border-electric-500/25 rounded-2xl p-6 transition-all duration-300 hover:translate-y-[-4px]">
              <div className="w-14 h-14 bg-gradient-to-br from-electric-500/20 to-electric-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7 text-electric-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Classifiche in Tempo Reale</h3>
              <p className="text-dark-400">
                Guarda la tua posizione aggiornata live durante ogni giornata di campionato.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center">
            <img
              src="/onefanta-logo.png"
              alt="OneFanta"
              className="h-8 w-auto rounded-lg"
            />
          </div>

          <div className="flex items-center gap-6 text-dark-400 text-sm">
            <button
              onClick={() => openModal('privacy')}
              className="hover:text-electric-400 transition-colors flex items-center gap-2"
            >
              <Shield className="w-4 h-4" />
              Privacy Policy
            </button>
            <button
              onClick={() => openModal('cookie')}
              className="hover:text-electric-400 transition-colors flex items-center gap-2"
            >
              <Cookie className="w-4 h-4" />
              Cookie Policy
            </button>
          </div>

          <p className="text-dark-400 text-sm">
            © 2026 OneFanta. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Modal Overlay */}
      {activeModal && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-dark-900 border border-white/10 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-dark-900 border-b border-white/10 px-6 py-4 flex items-center justify-between">
              <h2 className="text-xl font-bold flex items-center gap-3">
                {activeModal === 'privacy' ? (
                  <>
                    <Shield className="w-5 h-5 text-electric-400" />
                    Privacy Policy
                  </>
                ) : (
                  <>
                    <Cookie className="w-5 h-5 text-electric-400" />
                    Cookie Policy
                  </>
                )}
              </h2>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="px-6 py-6 text-dark-200 leading-relaxed">
              {activeModal === 'privacy' ? <PrivacyPolicy /> : <CookiePolicy />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function PrivacyPolicy() {
  return (
    <div className="space-y-6">
      <p className="text-dark-400">Ultimo aggiornamento: 2 luglio 2026</p>

      <section>
        <h3 className="text-lg font-semibold text-white mb-3">1. Titolare del trattamento</h3>
        <p>
          OneFanta tratta i dati personali raccolti tramite questo sito web. Per domande o richieste
          relative alla protezione dei dati puoi scrivere a{' '}
          <span className="text-electric-400">privacy@onefanta.app</span>.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-white mb-3">2. Dati raccolti</h3>
        <p className="mb-3">Quando ti iscrivi alla lista d'attesa raccogliamo:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong className="text-white">Indirizzo email:</strong> necessario per avvisarti del lancio e degli aggiornamenti relativi a OneFanta.</li>
          <li><strong className="text-white">Data di iscrizione:</strong> registrata automaticamente per documentare quando hai richiesto l'iscrizione.</li>
          <li><strong className="text-white">Fonte dell'iscrizione:</strong> ad esempio il sito web, per distinguere eventuali canali futuri.</li>
        </ul>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-white mb-3">3. Finalità e base giuridica</h3>
        <p className="mb-3">Usiamo i dati per:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>gestire la lista d'attesa;</li>
          <li>inviarti comunicazioni sul lancio di OneFanta e aggiornamenti strettamente collegati alla tua iscrizione;</li>
          <li>prevenire iscrizioni duplicate e abusi del modulo.</li>
        </ul>
        <p className="mt-3">
          La base giuridica principale è il consenso che presti inviando il modulo di iscrizione.
          Puoi revocarlo in qualsiasi momento.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-white mb-3">4. Servizi e destinatari</h3>
        <p>
          I dati sono conservati tramite Supabase, il servizio usato per il database della lista
          d'attesa. In futuro potremmo usare un fornitore email per inviare comunicazioni agli
          iscritti. Non vendiamo i tuoi dati e non pubblichiamo l'elenco degli iscritti.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-white mb-3">5. Trasferimenti fuori dallo SEE</h3>
        <p>
          Alcuni fornitori tecnici possono trattare dati anche fuori dallo Spazio Economico Europeo.
          In tal caso il trattamento deve avvenire sulla base di garanzie adeguate previste dal GDPR,
          come clausole contrattuali standard o altri meccanismi riconosciuti dalla normativa.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-white mb-3">6. Conservazione</h3>
        <p>
          Conserviamo il tuo indirizzo email fino alla revoca del consenso, alla richiesta di cancellazione
          o fino a quando la lista d'attesa non sarà più necessaria. Possiamo conservare dati aggregati
          e non identificativi per statistiche interne.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-white mb-3">7. I tuoi diritti</h3>
        <p className="mb-3">Nei limiti previsti dal GDPR puoi chiedere:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>accesso ai tuoi dati;</li>
          <li>rettifica dei dati inesatti;</li>
          <li>cancellazione dei dati;</li>
          <li>limitazione del trattamento;</li>
          <li>portabilità dei dati;</li>
          <li>opposizione, quando applicabile;</li>
          <li>revoca del consenso.</li>
        </ul>
        <p className="mt-3">
          Puoi esercitare questi diritti scrivendo a{' '}
          <span className="text-electric-400">privacy@onefanta.app</span>.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-white mb-3">8. Sicurezza</h3>
        <p>
          Applichiamo misure tecniche e organizzative ragionevoli per proteggere i dati. In particolare,
          il sito consente l'inserimento pubblico nella lista d'attesa, ma non espone pubblicamente
          gli indirizzi email degli iscritti.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-white mb-3">9. Reclamo</h3>
        <p>
          Se ritieni che il trattamento violi la normativa sulla protezione dei dati, puoi proporre
          reclamo all'autorità di controllo competente. In Italia è il Garante per la protezione dei
          dati personali.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-white mb-3">10. Modifiche</h3>
        <p>
          Potremo aggiornare questa informativa. La versione pubblicata su questa pagina indica la
          data dell'ultimo aggiornamento.
        </p>
      </section>
    </div>
  );
}

function CookiePolicy() {
  return (
    <div className="space-y-6">
      <p className="text-dark-400">Ultimo aggiornamento: 2 luglio 2026</p>

      <section>
        <h3 className="text-lg font-semibold text-white mb-3">1. Cosa sono i cookie</h3>
        <p>
          I cookie sono piccoli file o informazioni salvate sul dispositivo dell'utente dal sito web
          o da servizi terzi. Tecnologie simili possono includere local storage, pixel e altri strumenti
          di tracciamento.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-white mb-3">2. Cookie usati da questo sito</h3>
        <p>
          Questo sito non usa cookie di profilazione, cookie marketing o cookie analytics. Non usiamo
          Google Analytics, Meta Pixel o strumenti simili. Il modulo di iscrizione invia direttamente
          l'indirizzo email a Supabase quando premi il pulsante di invio.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-white mb-3">3. Banner cookie</h3>
        <p>
          Poiché il sito non usa cookie o strumenti di tracciamento che richiedono consenso preventivo,
          non mostriamo un banner di accettazione o rifiuto. Se in futuro aggiungeremo analytics,
          marketing, pixel o altri strumenti non necessari, aggiorneremo questa policy e mostreremo
          un meccanismo di consenso adeguato prima dell'attivazione.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-white mb-3">4. Gestione dal browser</h3>
        <p>
          Puoi comunque controllare o cancellare cookie e dati dei siti dalle impostazioni del tuo
          browser. Questa operazione riguarda eventuali dati salvati da altri siti o da configurazioni
          future.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-white mb-3">5. Contatti</h3>
        <p>
          Per domande su cookie o strumenti di tracciamento puoi scrivere a{' '}
          <span className="text-electric-400">privacy@onefanta.app</span>.
        </p>
      </section>
    </div>
  );
}

export default App;
