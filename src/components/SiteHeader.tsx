import { getMessages } from '../i18n/messages';
import { localizedPath, type Locale } from '../lib/i18n';
import LanguageSwitcher from './LanguageSwitcher';

function SiteHeader({ locale }: { locale: Locale }) {
  const t = getMessages(locale).common;

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-dark-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href={localizedPath(locale, '/')} className="flex items-center" aria-label={t.homeAriaLabel}>
          <img src="/onefanta-logo.png" alt="OneFanta" className="h-10 w-auto rounded-xl" />
        </a>
        <div className="flex items-center gap-3">
          <a
            href={localizedPath(locale, '/players')}
            className="hidden text-sm font-medium text-dark-300 transition-colors hover:text-electric-400 sm:block"
          >
            {t.playerList}
          </a>
          <LanguageSwitcher locale={locale} compact />
        </div>
      </div>
    </nav>
  );
}

export default SiteHeader;
