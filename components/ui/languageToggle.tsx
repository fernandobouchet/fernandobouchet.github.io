"use client";

import { LanguageContext } from "@/context/languageContext";
import { useContext } from "react";

const LanguageToggle = () => {
  const { language, handleChangeLanguage } = useContext(LanguageContext);

  return (
    <button
      className="font-bold text-foreground"
      onClick={() => handleChangeLanguage()}
    >
      {language === "EN" ? "ES" : "EN"}
    </button>
  );
};

export { LanguageToggle };
