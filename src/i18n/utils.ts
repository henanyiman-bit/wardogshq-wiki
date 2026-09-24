import { localeMeta, locales, type Locale } from './config';

export const languageAlternates = locales.map((locale) => ({
  lang: localeMeta[locale].htmlLang,
  path: localeMeta[locale].path,
}));

export const localizedHomePath = (locale: Locale): string => localeMeta[locale].path;

export const localizedAlternates = (slug: string) => locales.map((locale) => ({
  lang: localeMeta[locale].htmlLang,
  path: `${localeMeta[locale].path}${slug}/`,
}));
