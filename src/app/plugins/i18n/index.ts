import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { getLocalizations } from "@/app/api/services/dataService";

enum AVAILABLE_LOCALIZATIONS {
  ES = "es",
  EN = "en",
}

const DEFAULT_LANGUAGE = AVAILABLE_LOCALIZATIONS.EN;

export const initializeI18n = async () => {
  const localizationsResponse = await getLocalizations();
  const ES_LOCALIZATION = localizationsResponse.find((localization) => localization.id === AVAILABLE_LOCALIZATIONS.ES);
  const EN_LOCALIZATION = localizationsResponse.find((localization) => localization.id === AVAILABLE_LOCALIZATIONS.EN);

  const resources = {
    es: {
      translation: ES_LOCALIZATION!.data,
    },
    en: {
      translation: EN_LOCALIZATION!.data,
    },
  };

  i18n.use(initReactI18next).init({
    resources,
    lng: DEFAULT_LANGUAGE,
    interpolation: {
      escapeValue: false, // safes from xss
    },
  });
};
