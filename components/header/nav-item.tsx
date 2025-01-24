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
      className={`py-1 px-2 rounded-full transition-all ${
        activeSection === link.toLowerCase()
          ? "bg-foreground text-background"
          : ""
      }`}
    >
      {title}
    </Link>
  );
};
export { NavItem };
