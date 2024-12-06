"use client";

import { createContext, useEffect, useState } from "react";
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
  const [language, setLanguage] = useState<LanguageKey>("EN");
  const [texts, setTexts] = useState(translations[language]);

  useEffect(() => {
    setTexts(translations[language]);
  }, [language]);

  const handleChangeLanguage = () => {
    if (language === "EN") {
      setLanguage("ES");
    } else {
      setLanguage("EN");
    }
  };

  return (
    <LanguageContext.Provider value={{ texts, handleChangeLanguage, language }}>
      {children}
    </LanguageContext.Provider>
  );
};
