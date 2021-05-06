  
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import  HttpBackend   from "i18next-http-backend";
/* import locales from './locales' */

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(HttpBackend)
  .init({
    react: {
        useSuspense: false,
    },
  //  resources: locales,
/*   load: 'languageOnly', */
  whitelist: ['en', 'es'],
  fallbackLng: { 
    'en': ['en'],
    'en-US': ['en'],
    'es': ['es'],
    'es-ES': ['es-ES'],
    'default': ['en']
}   ,
    preload: ['en'],
    debug: false,

    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false,

    interpolation: {
      escapeValue: false
    },
    backend: {
        loadPath: 'https://demo.paellastogomiami.com/api/{{lng}}.php'
      }
  });

export default i18n;
