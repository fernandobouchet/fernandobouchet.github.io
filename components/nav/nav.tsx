import { ThemeToggle } from "@/components/ui/themeToggle";

const Nav = () => {
  return (
    <header>
      <nav className="w-full flex items-center">
        <ul className="flex gap-5 text-sm md:text-base font-semibold text-foreground">
          <li>
            <a href="#about">ABOUT ME</a>
          </li>
          <li>
            <a href="#projects">PROJECTS</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export { Nav };
