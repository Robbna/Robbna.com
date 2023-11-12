import { useTranslation } from "react-i18next";

export const useLocalization = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const getLocalization = (key: string) => {
    return t(key);
  };

  return {
    getLocalization,
    changeLanguage,
  };
};
