import type { ReactNode } from 'react';
import { ArrowLeft } from 'lucide-react';
import Background from './Background';
import LanguageSwitcher from './LanguageSwitcher';
import { localizedPath, type Locale } from '../lib/i18n';

type LegalPageProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
  locale: Locale;
};

function LegalPage({ title, subtitle, children, locale }: LegalPageProps) {
  return (
    <div className="min-h-screen bg-dark-950 text-white overflow-x-hidden">
      <Background />

      <main className="px-6 py-10 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 flex items-center justify-between gap-4">
            <a
              href={localizedPath(locale, '/')}
              className="inline-flex items-center gap-2 text-dark-300 hover:text-electric-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {locale === 'it' ? 'Torna al sito' : 'Back to website'}
            </a>
            <LanguageSwitcher locale={locale} compact />
          </div>

          <header className="mb-10">
            <img
              src="/onefanta-logo.png"
              alt="OneFanta"
              className="h-12 w-auto rounded-xl mb-8"
            />
            <p className="text-electric-300 text-sm font-medium mb-3">OneFanta</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            <p className="text-dark-300 text-lg">{subtitle}</p>
          </header>

          <article className="bg-dark-900/70 border border-white/10 rounded-2xl p-6 md:p-8 text-dark-200 leading-relaxed">
            {children}
          </article>
        </div>
      </main>
    </div>
  );
}

export default LegalPage;
