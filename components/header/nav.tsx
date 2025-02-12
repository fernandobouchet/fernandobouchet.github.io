"use client";
import { LanguageContext } from "@/context/language-context";
import { LanguageToggle } from "../ui/language.toggle";
import { ThemeToggle } from "../ui/theme-toggle";
import { NavItem } from "./nav-item";
import { useContext } from "react";

const Nav = () => {
  const { texts } = useContext(LanguageContext);

  const Links = [
    { text: texts.navbar.about, href: "about" },
    { text: texts.navbar.projects, href: "projects" },
    { text: texts.navbar.contact, href: "contact" },
  ];

  return (
    <nav className="w-full flex items-center">
      <ul className="flex items-center gap-2 md:gap-5 font-bold">
        {Links.map((item) => (
          <li key={item.href}>
            <NavItem title={item.text} link={item.href} />
          </li>
        ))}
      </ul>
      <ul className="flex items-center gap-3 ml-auto">
        <li>
          <ThemeToggle />
        </li>
        <li>
          <LanguageToggle />
        </li>
      </ul>
    </nav>
  );
};
export { Nav };
