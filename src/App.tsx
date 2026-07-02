import { useState } from 'react';
import { Star, Users, BarChart3, Lock, ChevronDown, Mail, CheckCircle, AlertCircle, X, Shield, Cookie } from 'lucide-react';
import { supabase } from './lib/supabase';

type ModalType = 'privacy' | 'cookie' | null;

function App() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [activeModal, setActiveModal] = useState<ModalType>(null);

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
        .from('email_signups')
        .insert([{ email: email.toLowerCase() }]);

      if (error) {
        if (error.code === '23505') {
          setStatus('success');
        } else {
          throw error;
        }
      } else {
        setStatus('success');
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
              Unisciti a <span className="text-electric-400 font-semibold">2.500+</span> giocatori già in lista d'attesa
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
      <p className="text-dark-400">Last updated: July 1, 2026</p>

      <section>
        <h3 className="text-lg font-semibold text-white mb-3">1. Introduction</h3>
        <p>
          OneFanta (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy
          explains how we collect, use, disclose, and safeguard your information when you visit our
          website or use our mobile application. Please read this policy carefully. By using our services,
          you consent to the practices described in this policy.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-white mb-3">2. Information We Collect</h3>
        <p className="mb-3">We collect information that you provide directly to us, including:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong className="text-white">Email Address:</strong> When you sign up for our waitlist, we collect your email address to notify you about our app launch.</li>
          <li><strong className="text-white">Usage Data:</strong> Information about how you interact with our website and app, including pages viewed and features used.</li>
          <li><strong className="text-white">Device Information:</strong> Browser type, operating system, device identifiers, and mobile network information.</li>
        </ul>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-white mb-3">3. Legal Basis for Processing (GDPR)</h3>
        <p className="mb-3">Under the General Data Protection Regulation (GDPR), we process your personal data based on:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong className="text-white">Consent:</strong> You have given explicit consent to receive marketing communications about our app launch.</li>
          <li><strong className="text-white">Legitimate Interest:</strong> We have a legitimate interest in analyzing usage patterns to improve our services.</li>
          <li><strong className="text-white">Contract Performance:</strong> When you use our services, processing is necessary to provide the requested functionality.</li>
        </ul>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-white mb-3">4. How We Use Your Information</h3>
        <p className="mb-3">We use the information we collect to:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Send you notifications about our app launch and updates</li>
          <li>Analyze and improve our website and services</li>
          <li>Respond to your inquiries and support requests</li>
          <li>Protect against fraud and unauthorized access</li>
        </ul>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-white mb-3">5. Data Sharing and Disclosure</h3>
        <p>
          We do not sell your personal information. We may share your information with third-party
          service providers who assist us in operating our website and app, subject to confidentiality
          obligations. These providers include email delivery services, analytics platforms, and cloud
          hosting services.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-white mb-3">6. Your Rights Under GDPR</h3>
        <p className="mb-3">You have the following rights regarding your personal data:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong className="text-white">Right to Access:</strong> Request a copy of your personal data.</li>
          <li><strong className="text-white">Right to Rectification:</strong> Request correction of inaccurate data.</li>
          <li><strong className="text-white">Right to Erasure:</strong> Request deletion of your personal data (&quot;right to be forgotten&quot;).</li>
          <li><strong className="text-white">Right to Restriction:</strong> Request limited processing of your data.</li>
          <li><strong className="text-white">Right to Data Portability:</strong> Receive your data in a portable format.</li>
          <li><strong className="text-white">Right to Object:</strong> Object to processing based on legitimate interest.</li>
          <li><strong className="text-white">Right to Withdraw Consent:</strong> Withdraw consent at any time.</li>
        </ul>
        <p className="mt-3">
          To exercise these rights, contact us at <span className="text-electric-400">privacy@onefanta.app</span>.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-white mb-3">7. Data Retention</h3>
        <p>
          We retain your email address until you request deletion or withdraw your consent. We may
          retain anonymized, aggregated data indefinitely for analytical purposes.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-white mb-3">8. International Data Transfers</h3>
        <p>
          Your information may be transferred to and stored on servers located outside your country
          of residence. We implement appropriate safeguards to ensure your data is protected in
          accordance with this policy and applicable law.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-white mb-3">9. Security</h3>
        <p>
          We implement appropriate technical and organizational measures to protect your personal
          data against unauthorized access, alteration, disclosure, or destruction. However, no
          internet transmission is completely secure.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-white mb-3">10. Children&apos;s Privacy</h3>
        <p>
          Our service is not directed to children under 16. We do not knowingly collect personal
          information from children under 16. If you believe we have collected such information,
          please contact us immediately.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-white mb-3">11. Changes to This Policy</h3>
        <p>
          We may update this policy periodically. We will notify you of material changes by posting
          the updated policy on this page and updating the &quot;Last updated&quot; date.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-white mb-3">12. Contact Us</h3>
        <p>
          For questions about this Privacy Policy or our data practices, contact us at{' '}
          <span className="text-electric-400">privacy@onefanta.app</span>.
        </p>
      </section>
    </div>
  );
}

function CookiePolicy() {
  return (
    <div className="space-y-6">
      <p className="text-dark-400">Last updated: July 1, 2026</p>

      <section>
        <h3 className="text-lg font-semibold text-white mb-3">1. What Are Cookies?</h3>
        <p>
          Cookies are small text files stored on your device when you visit a website. They are
          widely used to make websites work more efficiently and provide information to website owners.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-white mb-3">2. Types of Cookies We Use</h3>

        <div className="space-y-4">
          <div className="bg-dark-800/50 rounded-lg p-4">
            <h4 className="font-semibold text-electric-400 mb-2">Essential Cookies</h4>
            <p className="text-dark-300">
              These cookies are necessary for the website to function properly. They enable basic
              functions like page navigation and access to secure areas. The website cannot function
              properly without these cookies. We do not currently use essential cookies beyond
              those required for basic site operation.
            </p>
          </div>

          <div className="bg-dark-800/50 rounded-lg p-4">
            <h4 className="font-semibold text-electric-400 mb-2">Analytics Cookies</h4>
            <p className="text-dark-300">
              These cookies help us understand how visitors interact with our website by collecting
              and reporting information anonymously. This helps us improve our website and services.
              We may use services like Google Analytics to gather this data.
            </p>
          </div>

          <div className="bg-dark-800/50 rounded-lg p-4">
            <h4 className="font-semibold text-electric-400 mb-2">Marketing Cookies</h4>
            <p className="text-dark-300">
              These cookies are used to track visitors across websites. The intention is to display
              ads that are relevant and engaging for the individual user. We do not currently use
              marketing cookies, but may implement them in the future with your consent.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-white mb-3">3. How We Use Cookies</h3>
        <p className="mb-3">We use cookies for the following purposes:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>To ensure our website functions correctly</li>
          <li>To analyze website traffic and usage patterns</li>
          <li>To remember your preferences and settings</li>
          <li>To provide personalized content (with your consent)</li>
        </ul>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-white mb-3">4. Third-Party Cookies</h3>
        <p>
          Some cookies are placed by third-party services that appear on our pages. We do not
          control these cookies. The third-party services we may use include analytics providers
          and social media platforms. Each third-party has its own cookie policy.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-white mb-3">5. Managing Cookies</h3>
        <p className="mb-3">You can control cookies through your browser settings. Most browsers allow you to:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>View cookies stored on your device and delete them individually</li>
          <li>Block third-party cookies</li>
          <li>Block all cookies from specific sites</li>
          <li>Block all cookies from all sites</li>
          <li>Delete all cookies when you close your browser</li>
        </ul>
        <p className="mt-3">
          Please note that blocking all cookies may impact your experience on our website and
          prevent certain features from functioning properly.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-white mb-3">6. Browser Cookie Settings</h3>
        <p className="mb-3">Here are links to manage cookies in popular browsers:</p>
        <ul className="space-y-2 ml-4">
          <li>
            <span className="text-electric-400">Google Chrome:</span>{' '}
            <span className="text-dark-300">Settings → Privacy and security → Cookies and other site data</span>
          </li>
          <li>
            <span className="text-electric-400">Mozilla Firefox:</span>{' '}
            <span className="text-dark-300">Settings → Privacy & Security → Cookies and Site Data</span>
          </li>
          <li>
            <span className="text-electric-400">Safari:</span>{' '}
            <span className="text-dark-300">Preferences → Privacy</span>
          </li>
          <li>
            <span className="text-electric-400">Microsoft Edge:</span>{' '}
            <span className="text-dark-300">Settings → Cookies and site permissions → Cookies and site data</span>
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-white mb-3">7. Updates to This Policy</h3>
        <p>
          We may update this Cookie Policy from time to time to reflect changes in technology,
          legislation, or our data practices. Any changes will be posted on this page with an
          updated revision date.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-white mb-3">8. Contact Us</h3>
        <p>
          If you have questions about our use of cookies, please contact us at{' '}
          <span className="text-electric-400">privacy@onefanta.app</span>.
        </p>
      </section>
    </div>
  );
}

export default App;
