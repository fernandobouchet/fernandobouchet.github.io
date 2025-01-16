import { NavItem } from "./navItem";

const Links = ["ABOUT", "PROJECTS", "CONTACT"];

const Nav = () => {
  return (
    <nav className="w-full flex items-center">
      <ul className="flex gap-2 md:gap-5 font-bold text-foreground">
        {Links.map((item) => (
          <li key={item}>
            <NavItem title={item} link={item} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
export { Nav };
