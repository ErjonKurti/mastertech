import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import deTranslations from './locales/de/translation.json';
import enTranslations from './locales/en/translation.json';
import sqTranslations from './locales/sq/translation.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: enTranslations },
            sq: { translation: sqTranslations },
            de: { translation: deTranslations },
        },
        lng: localStorage.getItem('language') || 'en', 
        fallbackLng: 'en', 
        interpolation: {
            escapeValue: false, 
        },
    });

export default i18n;
