"use client";

import { createContext, useState } from "react";
import { getSavedLanguage, saveLanguage } from "@/utils/functions";
import { translations } from "@/utils/translations";

type LanguageKey = keyof typeof translations;

export const LanguageContext = createContext({
  language: "EN" as LanguageKey,
  texts: translations.EN,
  handleChangeLanguage: () => {},
});

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguage] = useState<LanguageKey>(getSavedLanguage());

  const [texts, setTexts] = useState(translations[language]);

  const handleChangeLanguage = () => {
    if (language === "EN") {
      setLanguage("ES");
      setTexts(translations.ES);
      saveLanguage("ES");
    } else {
      setLanguage("EN");
      setTexts(translations.EN);
      saveLanguage("EN");
    }
  };

  return (
    <LanguageContext.Provider value={{ texts, handleChangeLanguage, language }}>
      {children}
    </LanguageContext.Provider>
  );
};
