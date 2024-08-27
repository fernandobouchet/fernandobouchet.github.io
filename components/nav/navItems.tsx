"use client";

import { useContext } from "react";
import { LanguageContext } from "@/context/languageContext";

const NavItems = () => {
  const { texts } = useContext(LanguageContext);

  return (
    <ul className="flex gap-2 md:gap-5 text-sm md:text-base font-bold text-foreground">
      <li>
        <a href="#about" className={`py-1 px-2 rounded-full`}>
          {texts.navbar.about}
        </a>
      </li>
      <li>
        <a href="#projects" className={`py-1 px-2 rounded-full `}>
          {texts.navbar.projects}
        </a>
      </li>
      <li>
        <a href="#contact" className={`py-1 px-2 rounded-full $`}>
          {texts.navbar.contact}
        </a>
      </li>
    </ul>
  );
};

export { NavItems };
