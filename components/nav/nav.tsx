import { ThemeToggle } from "@/components/ui/themeToggle";
import { LanguageToggle } from "@/components/ui/languageToggle";
import { NavItems } from "@/components/nav/navItems";

const Nav = () => {
  return (
    <header className="fixed top-0 right-0 px-2 w-full flex backdrop-blur h-10 z-50">
      <nav className="w-full flex items-center">
        <NavItems />
        <div className="flex items-center gap-2 ml-auto">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export { Nav };
