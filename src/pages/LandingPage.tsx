import { useState } from 'react';
import {
  BarChart3,
  ChevronDown,
  Cookie,
  Headphones,
  Lock,
  ScrollText,
  Shield,
  Star,
  Trash2,
  Users,
} from 'lucide-react';
import Background from '../components/Background';
import FeatureCard from '../components/FeatureCard';
import LegalModal from '../components/LegalModal';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { CookiePolicy } from '../content/legal.it';
import { CookiePolicyEn } from '../content/legal.en';
import { getMessages } from '../i18n/messages';
import { localizedPath, type Locale } from '../lib/i18n';

const APP_STORE_URL = 'https://apps.apple.com/it/app/onefanta-fantasy-football/id6781030562';

function LandingPage({ locale }: { locale: Locale }) {
  const isItalian = locale === 'it';
  const shared = getMessages(locale).footer;
  const t = isItalian ? {
    available: 'Ora disponibile su iOS', heroTop: 'Domina la tua', heroBottom: 'Lega di Fantacalcio',
    intro: 'Voti live, leghe private con gli amici e classifiche in tempo reale.', introAccent: ' Il fantacalcio fatto bene.',
    competitionFocus: 'Al lancio, OneFanta supporta il fantacalcio basato sulla Premier League.',
    affiliationNotice: 'OneFanta è un servizio indipendente e non è affiliato, approvato, sponsorizzato o autorizzato da The Football Association Premier League Limited. Il nome “Premier League” identifica esclusivamente la competizione attualmente supportata.',
    soon: 'Prossimamente', featuresLabel: 'Vai alle funzionalità', featuresBefore: 'Tutto ciò che ti serve per ', featuresAccent: 'vincere',
    featuresIntro: 'Costruito da appassionati di fantacalcio, per appassionati di fantacalcio. Ogni funzione pensata per darti il vantaggio decisivo.',
    liveTitle: 'Voti Live', liveBody: 'Segui i voti dei tuoi giocatori in tempo reale, aggiornati minuto per minuto durante le partite.',
    leaguesTitle: 'Leghe Private', leaguesBody: 'Crea la tua lega, invita gli amici e sfidatevi nella vostra competizione personalizzata.',
    statsTitle: 'Statistiche Giocatori', statsBody: 'Analizza le performance di ogni calciatore con dati dettagliati e storici di ogni stagione.',
    ranksTitle: 'Classifiche in Tempo Reale', ranksBody: 'Guarda la tua posizione aggiornata live durante ogni giornata di campionato.',
    ready: 'Pronto a dominare?', ctaBody: 'Scarica OneFanta dall’App Store e inizia a giocare.', cta: 'Scarica dall’App Store',
    terms: 'Termini e condizioni', deleteAccount: 'Cancella account', rights: 'Tutti i diritti riservati.',
    homeAriaLabel: 'Home OneFanta',
  } : {
    available: 'Now available on iOS', heroTop: 'Rule your', heroBottom: 'Fantasy Football League',
    intro: 'Live ratings, private leagues with friends and real-time standings.', introAccent: ' Fantasy football done right.',
    competitionFocus: 'At launch, OneFanta supports fantasy football based on the Premier League.',
    affiliationNotice: 'OneFanta is an independent service and is not affiliated with, endorsed, sponsored or authorised by The Football Association Premier League Limited. The name “Premier League” is used solely to identify the competition currently supported.',
    soon: 'Coming soon', featuresLabel: 'Go to features', featuresBefore: 'Everything you need to ', featuresAccent: 'win',
    featuresIntro: 'Built by fantasy football fans, for fantasy football fans. Every feature is designed to give you the winning edge.',
    liveTitle: 'Live Ratings', liveBody: 'Follow your players’ ratings in real time, updated minute by minute during matches.',
    leaguesTitle: 'Private Leagues', leaguesBody: 'Create your league, invite friends and compete in your own custom competition.',
    statsTitle: 'Player Statistics', statsBody: 'Analyse every player with detailed performance data and season history.',
    ranksTitle: 'Real-Time Standings', ranksBody: 'See your live position throughout every matchday.',
    ready: 'Ready to take control?', ctaBody: 'Download OneFanta from the App Store and start playing.', cta: 'Download on the App Store',
    terms: 'Terms and conditions', deleteAccount: 'Delete account', rights: 'All rights reserved.',
    homeAriaLabel: 'OneFanta home',
  };
  const [activeModal, setActiveModal] = useState<'cookie' | null>(null);

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openModal = (type: 'cookie') => {
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
          <a href={localizedPath(locale, '/')} className="flex items-center" aria-label={t.homeAriaLabel}>
            <img
              src="/onefanta-logo.png"
              alt="OneFanta"
              className="h-10 w-auto rounded-xl"
            />
          </a>
          <LanguageSwitcher locale={locale} compact />
        </div>
      </nav>

      <section id="signup" className="min-h-screen flex flex-col items-center justify-center pt-20 pb-8 px-6">
        <div className="max-w-3xl mx-auto text-center w-full">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-electric-500/10 border border-electric-500/25 rounded-full mb-8 animate-float">
            <span className="w-2 h-2 bg-electric-400 rounded-full animate-pulse" />
            <span className="text-electric-300 text-sm font-medium">{t.available}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-5 leading-tight">
            <span className="bg-gradient-to-r from-white via-electric-100 to-electric-300 bg-clip-text text-transparent">
              {t.heroTop}
            </span>
            <br />
            <span className="bg-gradient-to-r from-electric-400 to-electric-600 bg-clip-text text-transparent">
              {t.heroBottom}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-dark-300 max-w-xl mx-auto mb-10 leading-relaxed">
            {t.intro}
            <span className="text-electric-400">{t.introAccent}</span>
          </p>

          <p className="inline-flex items-center px-4 py-2 mb-8 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-white">
            {t.competitionFocus}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300 hover:scale-105"
            >
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <div className="text-xs text-dark-400">{t.available}</div>
                <div className="font-semibold">App Store</div>
              </div>
            </a>
            <button className="flex items-center gap-3 px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300 hover:scale-105">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z" />
              </svg>
              <div className="text-left">
                <div className="text-xs text-dark-400">{t.soon}</div>
                <div className="font-semibold">Google Play</div>
              </div>
            </button>
          </div>

          <button
            onClick={scrollToFeatures}
            className="animate-bounce text-dark-400 hover:text-electric-400 transition-colors"
            aria-label={t.featuresLabel}
          >
            <ChevronDown className="w-8 h-8 mx-auto" />
          </button>
        </div>
      </section>

      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              {t.featuresBefore}<span className="text-electric-400">{t.featuresAccent}</span>
            </h2>
            <p className="text-dark-300 text-lg max-w-2xl mx-auto">
              {t.featuresIntro}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard icon={<Star className="w-7 h-7 text-electric-400" />} title={t.liveTitle}>
              {t.liveBody}
            </FeatureCard>
            <FeatureCard icon={<Lock className="w-7 h-7 text-electric-400" />} title={t.leaguesTitle}>
              {t.leaguesBody}
            </FeatureCard>
            <FeatureCard icon={<BarChart3 className="w-7 h-7 text-electric-400" />} title={t.statsTitle}>
              {t.statsBody}
            </FeatureCard>
            <FeatureCard icon={<Users className="w-7 h-7 text-electric-400" />} title={t.ranksTitle}>
              {t.ranksBody}
            </FeatureCard>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-electric-500/10 via-electric-600/15 to-electric-500/10 border border-electric-500/20 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.ready}
            </h2>
            <p className="text-dark-300 text-lg mb-8">
              {t.ctaBody}
            </p>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-electric-500 to-electric-600 hover:from-electric-400 hover:to-electric-500 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-electric-500/25"
            >
              {t.cta}
            </a>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <a href={localizedPath(locale, '/')} className="flex items-center" aria-label={t.homeAriaLabel}>
              <img
                src="/onefanta-logo.png"
                alt="OneFanta"
                className="h-8 w-auto rounded-lg"
              />
            </a>

            <div className="flex flex-wrap items-center justify-center gap-5 text-dark-400 text-sm">
              <a href={localizedPath(locale, '/terms')} className="hover:text-electric-400 transition-colors flex items-center gap-2">
                <ScrollText className="w-4 h-4" />
                {t.terms}
              </a>
              <a href={localizedPath(locale, '/privacy')} className="hover:text-electric-400 transition-colors flex items-center gap-2">
                <Shield className="w-4 h-4" />
                {shared.appPrivacy}
              </a>
              <a href={localizedPath(locale, '/website-privacy')} className="hover:text-electric-400 transition-colors flex items-center gap-2">
                <Shield className="w-4 h-4" />
                {shared.websitePrivacy}
              </a>
              <a href={localizedPath(locale, '/delete-account')} className="hover:text-electric-400 transition-colors flex items-center gap-2">
                <Trash2 className="w-4 h-4" />
                {t.deleteAccount}
              </a>
              <a href={localizedPath(locale, '/support')} className="hover:text-electric-400 transition-colors flex items-center gap-2">
                <Headphones className="w-4 h-4" />
                {shared.support}
              </a>
              <button
                onClick={() => openModal('cookie')}
                className="hover:text-electric-400 transition-colors flex items-center gap-2"
              >
                <Cookie className="w-4 h-4" />
                {shared.cookiePolicy}
              </button>
            </div>

            <p className="text-dark-400 text-sm">
              © 2026 OneFanta. {t.rights}
            </p>
          </div>

          <p className="max-w-4xl mx-auto mt-8 pt-6 border-t border-white/5 text-center text-xs leading-relaxed text-dark-500">
            {t.affiliationNotice}
          </p>
        </div>
      </footer>

      {activeModal && (
        <LegalModal activeModal={activeModal} onClose={closeModal} locale={locale}>
          {isItalian ? <CookiePolicy locale={locale} /> : <CookiePolicyEn locale={locale} />}
        </LegalModal>
      )}
    </div>
  );
}

export default LandingPage;
