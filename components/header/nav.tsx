"use client";
import { LanguageToggle } from "../ui/language.toggle";
import { ThemeToggle } from "../ui/theme-toggle";
import { useState } from "react";
import { MobileMenu } from "./mobile-menu";
import { useNavbar } from "@/hooks/useNavBar";
import { NavLinks } from "./nav-links";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { activeSection, scrollToSection } = useNavbar();

  return (
    <nav
      className={`w-full flex items-center px-2 ${
        !isMobileMenuOpen ? "backdrop-blur-md bg-background/50" : ""
      }`}
    >
      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      <ul className="items-center gap-2 md:gap-5 font-semibold hidden md:flex">
        <NavLinks
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />
      </ul>
      <ul className="flex items-center gap-3 ml-auto z-50">
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
