"use client";

import { LanguageContext } from "@/context/language-context";
import { useContext, useEffect, useState } from "react";
import { MdLanguage } from "react-icons/md";

const LanguageToggle = () => {
  const { handleChangeLanguage } = useContext(LanguageContext);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return <div className="toggle-icon" />;

  return (
    <button
      onClick={handleChangeLanguage}
      className="toggle-icon"
      aria-label="language toggle"
    >
      <MdLanguage size="1.1em" />
    </button>
  );
};
export { LanguageToggle };
