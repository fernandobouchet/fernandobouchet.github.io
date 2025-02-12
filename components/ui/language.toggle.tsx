"use client";

import { LanguageContext } from "@/context/language-context";
import { useContext } from "react";
import { MdLanguage } from "react-icons/md";
import { AnimatedButton } from "./animated-button";

const LanguageToggle = () => {
  const { language, handleChangeLanguage } = useContext(LanguageContext);

  return (
    <AnimatedButton
      onClick={handleChangeLanguage}
      icon={
        language === "ES" ? (
          <MdLanguage key="es" size="1.1em" />
        ) : (
          <MdLanguage key="en" size="1.1em" className="rotate-180" />
        )
      }
      label="language toggle"
    />
  );
};
export { LanguageToggle };
