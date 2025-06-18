"use client";

import Link from "next/link";

interface Props {
  title: string;
  link: string;
  onClick?: () => void;
  activeSection?: string;
  scrollToSection: (section: string) => void;
}

const NavItem = ({
  title,
  link,
  onClick,
  activeSection,
  scrollToSection,
}: Props) => {
  const href = `#${link}`.toLowerCase();

  const handleOnClick = () => {
    scrollToSection(href);
    if (onClick) {
      onClick();
    }
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
