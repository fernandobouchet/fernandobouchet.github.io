import { useState, useEffect, useCallback } from "react";

export function useNavbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;

    if (scrollPosition === 0) {
      setActiveSection("about");
      setIsScrolled(false);
      return;
    }

    setIsScrolled(true);

    const scrollPositionWithOffset = scrollPosition + window.innerHeight / 3;

    const sections = document.querySelectorAll("section[id]");
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = (section as HTMLElement).offsetTop;
      const sectionHeight = (section as HTMLElement).offsetHeight;

      if (
        scrollPositionWithOffset >= sectionTop &&
        scrollPositionWithOffset < sectionTop + sectionHeight
      ) {
        currentSection = section.id;
      }
    });

    setActiveSection(currentSection);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToSection = (href: string) => {
    const targetSection = document.querySelector(href);
    if (targetSection) {
      const navbarHeight = document.querySelector("nav")?.offsetHeight || 0;
      const targetPosition =
        (targetSection as HTMLElement).offsetTop - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return { activeSection, isScrolled, scrollToSection };
}
