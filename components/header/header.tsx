"use client";

import { Nav } from "./nav";

const Header = () => {
  return (
    <header
      className={`fixed top-0 right-0 w-full flex h-12 md:h-14 z-50 p-4"
      }`}
    >
      <Nav />
    </header>
  );
};
export { Header };
