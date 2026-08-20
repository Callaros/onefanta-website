import { Languages } from 'lucide-react';
import { getMessages } from '../i18n/messages';
import { switchLocale, type Locale } from '../lib/i18n';

type LanguageSwitcherProps = {
  locale: Locale;
  compact?: boolean;
};

function LanguageSwitcher({ locale, compact = false }: LanguageSwitcherProps) {
  const nextLocale: Locale = locale === 'it' ? 'en' : 'it';
  const m = getMessages(locale);
  const label = nextLocale === 'it' ? 'Italiano' : 'English';

  return (
    <button
      type="button"
      onClick={() => switchLocale(nextLocale)}
      className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-dark-200 transition-colors hover:border-electric-500/40 hover:text-electric-300"
      aria-label={nextLocale === 'en' ? m.common.switchToEnglish : m.common.switchToItalian}
    >
      <Languages className="h-4 w-4" />
      {compact ? nextLocale.toUpperCase() : label}
    </button>
  );
}

export default LanguageSwitcher;
