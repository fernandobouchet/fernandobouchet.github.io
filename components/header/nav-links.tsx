import { LanguageContext } from "@/context/language-context";
import { useContext } from "react";
import { NavItem } from "./nav-item";

interface Props {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  onClick?: () => void;
}

const NavLinks = ({ activeSection, scrollToSection, onClick }: Props) => {
  const { texts } = useContext(LanguageContext);

  const Links = [
    { text: texts.navbar.about, href: "about" },
    { text: texts.navbar.skills, href: "skills" },
    { text: texts.navbar.projects, href: "projects" },
    { text: texts.navbar.contact, href: "contact" },
  ];

  return (
    <>
      {Links.map((item) => (
        <li key={item.href}>
          <NavItem
            title={item.text}
            link={item.href}
            activeSection={activeSection}
            scrollToSection={scrollToSection}
            onClick={onClick}
          />
        </li>
      ))}
    </>
  );
};

export { NavLinks };
