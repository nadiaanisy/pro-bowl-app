
import i18n from 'i18next';
import bm from './locales/bm.json';
import en from './locales/en.json';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: { translation: en },
      ms: { translation: bm }
    }
  });

export default i18n;