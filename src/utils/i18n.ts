import { SUPPORTED_LANGUAGES } from '@/common/constants/supportLanguages';
import enTranslation from '@/locales/en_translation.json';
import thTranslation from '@/locales/th_translation.json';
import i18n from 'i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import Cookies from 'js-cookie';
import { initReactI18next } from 'react-i18next';

export const DEFAULT_I18NEXT_NAMESPACE = 'translation';
export const availableLangs = SUPPORTED_LANGUAGES.map(({ value }) => value);
export const resources = {
  en: {
    translation: enTranslation,
  },
  th: {
    translation: thTranslation,
  },
} as const;

const LANG_KEY = 'lang';
const CUSTOM_DETECTOR_NAME = 'customDetector';
const DEFAULT_LANG = availableLangs[0];

const languageDetector = new I18nextBrowserLanguageDetector();

languageDetector.addDetector({
  name: CUSTOM_DETECTOR_NAME,
  lookup() {
    return Cookies.get(LANG_KEY) ?? DEFAULT_LANG;
  },
  cacheUserLanguage(lng) {
    Cookies.set(LANG_KEY, lng);
  },
});

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources,
    supportedLngs: availableLangs,
    fallbackLng: DEFAULT_LANG,

    ns: DEFAULT_I18NEXT_NAMESPACE,
    defaultNS: DEFAULT_I18NEXT_NAMESPACE,

    debug: process.env.NODE_ENV === 'development', // Enable logs

    interpolation: {
      escapeValue: false, // React already escapes everything
    },
    detection: {
      order: ['querystring', CUSTOM_DETECTOR_NAME],
      caches: [CUSTOM_DETECTOR_NAME],
      lookupQuerystring: LANG_KEY,
    },
  });

export default i18n;
