"use client";

import { NavLinks } from "./nav-links";

interface Props {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const MobileMenu = ({ activeSection, scrollToSection }: Props) => {
  return (
    <div
      className="
      md:hidden 
      fixed bottom-6 z-50 
      left-1/2 -translate-x-1/2
      w-[95%] max-w-md
      pointer-events-none
    "
    >
      <nav
        className="pointer-events-auto
          flex items-center justify-center py-2 rounded-full
           bg-secondary/30 backdrop-blur-xl shadow-lg shadow-black/5"
      >
        <ul className="flex items-center justify-between w-full px-2">
          <NavLinks
            activeSection={activeSection}
            scrollToSection={scrollToSection}
          />
        </ul>
      </nav>
    </div>
  );
};

export { MobileMenu };
