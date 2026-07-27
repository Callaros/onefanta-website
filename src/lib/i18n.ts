export const SUPPORTED_LOCALES = ['it', 'en'] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

const LOCALE_STORAGE_KEY = 'onefanta-locale';

export const getLocaleFromPath = (pathname: string): Locale | null => {
  const segment = pathname.split('/').filter(Boolean)[0]?.toLowerCase();
  return SUPPORTED_LOCALES.includes(segment as Locale) ? (segment as Locale) : null;
};

export const stripLocaleFromPath = (pathname: string) => {
  const locale = getLocaleFromPath(pathname);
  if (!locale) return pathname.replace(/\/$/, '') || '/';

  const stripped = pathname.replace(new RegExp(`^/${locale}(?=/|$)`), '').replace(/\/$/, '');
  return stripped || '/';
};

export const localizedPath = (locale: Locale, pathname: string) => {
  const route = stripLocaleFromPath(pathname);
  return route === '/' ? `/${locale}` : `/${locale}${route}`;
};

export const detectPreferredLocale = (): Locale => {
  try {
    const storedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    if (SUPPORTED_LOCALES.includes(storedLocale as Locale)) return storedLocale as Locale;
  } catch {
    // Storage can be unavailable in privacy-focused browser modes.
  }

  const browserLanguages = navigator.languages?.length ? navigator.languages : [navigator.language];
  return browserLanguages.some((language) => language.toLowerCase().startsWith('it')) ? 'it' : 'en';
};

export const rememberLocale = (locale: Locale) => {
  try {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  } catch {
    // The URL remains the source of truth when storage is unavailable.
  }
};

export const switchLocale = (locale: Locale) => {
  rememberLocale(locale);
  const destination = `${localizedPath(locale, window.location.pathname)}${window.location.search}${window.location.hash}`;
  window.location.assign(destination);
};

