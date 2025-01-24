import { LanguageToggle } from "../ui/language.toggle";
import { ThemeToggle } from "../ui/theme-toggle";
import { NavItem } from "./nav-item";

const Links = ["About", "Projects", "Contact"];

const Nav = () => {
  return (
    <nav className="w-full flex items-center">
      <ul className="flex items-center gap-2 md:gap-5 font-bold">
        {Links.map((item) => (
          <li key={item}>
            <NavItem title={item} link={item} />
          </li>
        ))}
      </ul>
      <ul className="flex items-center gap-2 ml-auto">
        <ThemeToggle />
        <LanguageToggle />
      </ul>
    </nav>
  );
};
export { Nav };
