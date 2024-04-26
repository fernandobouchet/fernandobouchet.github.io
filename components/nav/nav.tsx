import { ThemeToggle } from "@/components/ui/themeToggle";
import { LanguageToggle } from "@/components/ui/languageToggle";
import { NavItems } from "@/components/nav/navItems";

const Nav = () => {
  return (
    <header>
      <nav className="w-full flex items-center">
        <NavItems />
        <div className="flex items-center gap-1 ml-auto">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export { Nav };