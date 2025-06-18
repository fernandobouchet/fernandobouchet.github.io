"use client";

import { NavLinks } from "./nav-links";

interface Props {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}
const MobileMenu = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  activeSection,
  scrollToSection,
}: Props) => {
  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="md:hidden relative z-50">
      <button
        onClick={toggleMenu}
        className="flex flex-col justify-center items-center w-10 h-10 group z-50 relative"
        aria-label="Toggle menu"
        aria-expanded={isMobileMenuOpen}
      >
        <span
          className={`bg-foreground h-0.5 w-6 mb-1 transform transition duration-300 ${
            isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        />
        <span
          className={`bg-foreground h-0.5 w-6 mb-1 transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`bg-foreground h-0.5 w-6 transform transition duration-300 ${
            isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        />
      </button>

      <div
        className={`fixed top-0 left-0 w-full h-[calc(100dvh)] backdrop-blur-md bg-background/50 ${
          isMobileMenuOpen ? "scale-y-100" : "scale-y-0 pointer-events-none"
        } origin-top z-40`}
      >
        <ul className="flex flex-col items-center justify-center h-full space-y-10 text-xl font-medium">
          <NavLinks
            activeSection={activeSection}
            scrollToSection={scrollToSection}
            onClick={toggleMenu}
          />
        </ul>
      </div>
    </div>
  );
};

export { MobileMenu };
