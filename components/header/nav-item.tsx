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
      scroll={false}
      className={`
        py-2 px-4 md:px-5 rounded-full transition-all duration-300
        text-sm font-medium flex items-center gap-2
        active:scale-95
        ${
          activeSection === link.toLowerCase()
            ? "text-primary bg-primary/10 font-bold shadow-sm"
            : "text-muted-foreground hover:text-primary hover:bg-primary/10"
        }
      `}
    >
      {title}
    </Link>
  );
};

export { NavItem };
