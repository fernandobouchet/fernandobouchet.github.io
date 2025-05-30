"use client";

import { useNavbar } from "@/hooks/useNavBar";
import Link from "next/link";

interface Props {
  title: string;
  link: string;
}

const NavItem = ({ title, link }: Props) => {
  const { activeSection, scrollToSection } = useNavbar();
  const href = `#${link}`.toLowerCase();

  const handleOnClick = () => {
    scrollToSection(href);
  };

  return (
    <Link
      href={href}
      onClick={handleOnClick}
      className={`py-2 px-4 md:px-5 rounded-full transition-all ${
        activeSection === link.toLowerCase()
          ? "bg-foreground/10 text-foreground"
          : "hover:bg-foreground/20 text-foreground"
      }`}
    >
      {title}
    </Link>
  );
};
export { NavItem };
