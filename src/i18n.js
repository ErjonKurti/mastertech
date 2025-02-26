import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import deTranslations from './locales/de/translation.json';
import enTranslations from './locales/en/translation.json';
import esTranslations from './locales/es/translation.json';
import frTranslations from './locales/fr/translation.json';
import itTranslations from './locales/it/translation.json';
import jaTranslations from './locales/ja/translation.json';
import sqTranslations from './locales/sq/translation.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: enTranslations },
            sq: { translation: sqTranslations },
            es: { translation: esTranslations }, 
            fr: { translation: frTranslations },
            it: { translation: itTranslations }, 
            de: { translation: deTranslations }, 
            ja: { translation: jaTranslations }, 
        },
        lng: localStorage.getItem('language') || 'en', 
        fallbackLng: 'en', 
        interpolation: {
            escapeValue: false, 
        },
    });

export default i18n;
