"use client";
import { LanguageToggle } from "../ui/language.toggle";
import { ThemeToggle } from "../ui/theme-toggle";
import { useNavbar } from "@/hooks/useNavBar";
import { NavLinks } from "./nav-links";

const Nav = () => {
  const { activeSection, scrollToSection, isScrolled } = useNavbar();

  return (
    <>
      <nav
        className={`
          pointer-events-auto
          flex items-center justify-between px-5 rounded-full
          bg-secondary/30 backdrop-blur-xl shadow-lg shadow-black/5
          transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
          ${
            isScrolled
              ? "py-2 w-[95%] max-w-5xl bg-secondary/60 shadow-xl"
              : "py-3 w-full max-w-4xl"
          }
        `}
      >
        <div className="text-lg font-bold tracking-tight text-foreground select-none flex items-center gap-1">
          FB
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        </div>
        <ul className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
          <NavLinks
            activeSection={activeSection}
            scrollToSection={scrollToSection}
          />
        </ul>
        <ul className="flex items-center gap-2">
          <li>
            <ThemeToggle />
          </li>
          <li>
            <LanguageToggle />
          </li>
        </ul>
      </nav>
    </>
  );
};
export { Nav };
