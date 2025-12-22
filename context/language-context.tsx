"use client";

import { translations } from "@/utils/translations";
import { createContext, useState, useMemo, useCallback } from "react";

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

  const texts = translations[language];

  const handleChangeLanguage = useCallback(() => {
    setLanguage((prev) => (prev === "EN" ? "ES" : "EN"));
  }, []);

  const value = useMemo(
    () => ({
      texts,
      handleChangeLanguage,
      language,
    }),
    [texts, handleChangeLanguage, language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
