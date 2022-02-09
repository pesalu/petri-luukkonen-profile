import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  lng: "fi",
  resources: {
    en: {
      translations: require("./locales/en/translations.json"),
      cvcontent: require("./locales/en/cv-content.json"),
    },
    fi: {
      translations: require("./locales/fi/translations.json"),
      cvcontent: require("./locales/fi/cv-content.json"),
    },
  },
  ns: ["translations", "cvcontent"],
  defaultNS: "translations",
});

i18n.languages = ["en", "fi"];

export default i18n;
