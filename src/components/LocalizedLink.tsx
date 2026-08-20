import type { ReactNode } from 'react';
import { localizedPath, type Locale } from '../lib/i18n';

const linkClass = 'text-electric-300 hover:text-electric-200 underline underline-offset-4';

type LocalizedLinkProps = {
  locale: Locale;
  href: string;
  className?: string;
  children: ReactNode;
};

function LocalizedLink({ locale, href, className = linkClass, children }: LocalizedLinkProps) {
  return (
    <a href={localizedPath(locale, href)} className={className}>
      {children}
    </a>
  );
}

export default LocalizedLink;
