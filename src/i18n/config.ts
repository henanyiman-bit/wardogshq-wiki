export const locales = ['en', 'zh-cn', 'es', 'pt-br', 'de', 'fr', 'ja', 'ko'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const localeMeta: Record<Locale, { label: string; htmlLang: string; path: string }> = {
  en: { label: 'English', htmlLang: 'en', path: '/en/' },
  'zh-cn': { label: '简体中文', htmlLang: 'zh-CN', path: '/zh-cn/' },
  es: { label: 'Español', htmlLang: 'es', path: '/es/' },
  'pt-br': { label: 'Português', htmlLang: 'pt-BR', path: '/pt-br/' },
  de: { label: 'Deutsch', htmlLang: 'de', path: '/de/' },
  fr: { label: 'Français', htmlLang: 'fr', path: '/fr/' },
  ja: { label: '日本語', htmlLang: 'ja', path: '/ja/' },
  ko: { label: '한국어', htmlLang: 'ko', path: '/ko/' },
};

export const isLocale = (value: string): value is Locale => locales.includes(value as Locale);
