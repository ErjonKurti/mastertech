import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en/translation.json';
<<<<<<< HEAD
import sqTranslations from './locales/sq/translation.json';
=======
>>>>>>> 0e5357c6f4c744981bbafd9e46dfd46f38bea99c

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: enTranslations },
<<<<<<< HEAD
            sq: { translation: sqTranslations }, 
=======
            sq: { translation: sqTranslations }
>>>>>>> 0e5357c6f4c744981bbafd9e46dfd46f38bea99c
        },
        lng: localStorage.getItem('language') || 'en', 
        fallbackLng: 'en', 
        interpolation: {
            escapeValue: false, 
        },
    });

export default i18n;
