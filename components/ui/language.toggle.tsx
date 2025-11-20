"use client";

import { LanguageContext } from "@/context/language-context";
import { useContext } from "react";
import { motion, AnimatePresence } from "motion/react";

const LanguageToggle = () => {
  const { language, handleChangeLanguage } = useContext(LanguageContext);
  const nextLanguage = language === "ES" ? "EN" : "ES";

  return (
    <button
      onClick={handleChangeLanguage}
      aria-label={`Switch to ${nextLanguage}`}
      className="relative w-6 h-6 overflow-hidden cursor-pointer flex flex-col items-center px-4 py-2 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
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
