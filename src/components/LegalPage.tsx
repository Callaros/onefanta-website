import type { ReactNode } from 'react';
import { ArrowLeft } from 'lucide-react';
import Background from './Background';

type LegalPageProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
};

function LegalPage({ title, subtitle, children }: LegalPageProps) {
  return (
    <div className="min-h-screen bg-dark-950 text-white overflow-x-hidden">
      <Background />

      <main className="px-6 py-10 md:py-16">
        <div className="max-w-4xl mx-auto">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-dark-300 hover:text-electric-300 transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Torna al sito
          </a>

          <header className="mb-10">
            <img
              src="/onefanta-logo.png"
              alt="OneFanta"
              className="h-12 w-auto rounded-xl mb-8"
            />
            <p className="text-electric-300 text-sm font-medium mb-3">One Fanta</p>
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
