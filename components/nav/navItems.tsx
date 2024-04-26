"use client";

import { useContext } from "react";
import { LanguageContext } from "@/context/languageContext";

const NavItems = () => {
  const { texts } = useContext(LanguageContext);

  return (
    <ul className="flex gap-3 md:gap-5 text-sm md:text-base font-bold text-foreground">
      <li>
        <a href="#about">{texts.navbar.about}</a>
      </li>
      <li>
        <a href="#projects">{texts.navbar.projects}</a>
      </li>
      <li>
        <a href="#contact">{texts.navbar.contact}</a>
      </li>
    </ul>
  );
};

export { NavItems };
