"use client";

import { useState, useEffect, useCallback } from "react";

export function useNavbar() {
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;

    if (scrollPosition < 20) {
      setIsScrolled(false);
      if (scrollPosition === 0) setActiveSection("about");
    } else {
      setIsScrolled(true);
    }

    const scrollPositionWithOffset = scrollPosition + window.innerHeight / 3;

    const sections = document.querySelectorAll("section[id]");

    sections.forEach((section) => {
      const element = section as HTMLElement;
      const sectionTop = element.offsetTop;
      const sectionHeight = element.offsetHeight;

      if (
        scrollPositionWithOffset >= sectionTop &&
        scrollPositionWithOffset < sectionTop + sectionHeight
      ) {
        setActiveSection(section.id);
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    const targetSection = document.getElementById(id);

    if (targetSection) {
      const navbarHeight = document.querySelector("header")?.offsetHeight || 0;

      const extraBuffer = 24;

      const targetPosition =
        targetSection.offsetTop - navbarHeight - extraBuffer;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return {
    activeSection,
    isScrolled,
    scrollToSection,
  };
}
