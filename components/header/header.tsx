"use client";

import { useNavbar } from "@/hooks/useNavBar";
import { Nav } from "./nav";

const Header = () => {
  const { isScrolled } = useNavbar();

  return (
    <header
      className={`fixed top-0 right-0 w-full flex h-12 z-50 p-3 transition-all ${
        isScrolled
          ? "bg-background shadow-xs dark:shadow-gray-800"
          : "bg-transparent"
      }`}
    >
      <Nav />
    </header>
  );
};
export { Header };
