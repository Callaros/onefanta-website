import LegalPage from '../components/LegalPage';
import TermsIt from '../content/terms.it';
import TermsEn from '../content/terms.en';
import { getMessages } from '../i18n/messages';
import type { Locale } from '../lib/i18n';

function TermsPage({ locale }: { locale: Locale }) {
  const t = getMessages(locale).pages.terms;

  return (
    <LegalPage locale={locale} title={t.title} subtitle={t.subtitle}>
      {locale === 'it' ? <TermsIt locale={locale} /> : <TermsEn locale={locale} />}
    </LegalPage>
  );
}

export default TermsPage;
