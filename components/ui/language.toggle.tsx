"use client";

import { LanguageContext } from "@/context/language-context";
import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LanguageToggle = () => {
  const { language, handleChangeLanguage } = useContext(LanguageContext);
  const nextLanguage = language === "ES" ? "EN" : "ES";

  return (
    <button
      onClick={handleChangeLanguage}
      aria-label={`Switch to ${nextLanguage}`}
      className="relative w-6 h-6 overflow-hidden font-semibold cursor-pointer flex flex-col items-center"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={nextLanguage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {nextLanguage}
        </motion.span>
      </AnimatePresence>
    </button>
  );
};

export { LanguageToggle };
