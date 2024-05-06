"use client";

import { useContext } from "react";
import { LanguageContext } from "@/context/languageContext";
import { useIntersection } from "@/context/intersectionContext";

const NavItems = () => {
  const { texts } = useContext(LanguageContext);
  const { intersectionSectionId } = useIntersection();

  return (
    <ul className="flex gap-2 md:gap-5 text-sm md:text-base font-bold text-foreground">
      <li>
        <a
          href="#about"
          className={`py-1 px-2 rounded-full ${
            intersectionSectionId === "about"
              ? "bg-card text-card-foreground"
              : ""
          }`}
        >
          {texts.navbar.about}
        </a>
      </li>
      <li>
        <a
          href="#projects"
          className={`py-1 px-2 rounded-full ${
            intersectionSectionId === "projects"
              ? "bg-card text-card-foreground"
              : ""
          }`}
        >
          {texts.navbar.projects}
        </a>
      </li>
      <li>
        <a
          href="#contact"
          className={`py-1 px-2 rounded-full ${
            intersectionSectionId === "contact"
              ? "bg-card text-card-foreground"
              : ""
          }`}
        >
          {texts.navbar.contact}
        </a>
      </li>
    </ul>
  );
};

export { NavItems };
