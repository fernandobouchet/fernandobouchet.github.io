"use client";

import { useContext } from "react";
import { LanguageContext } from "@/context/languageContext";
import { Link } from "react-scroll";

const NavItems = () => {
  const { texts } = useContext(LanguageContext);

  return (
    <ul className="flex gap-2 md:gap-5 font-bold text-foreground pt-2">
      <li>
        <Link
          to="about"
          activeClass="nav-active"
          spy={true}
          smooth={true}
          duration={200}
          offset={-40}
          className={`px-3 py-2 rounded-full cursor-pointer`}
        >
          {texts.navbar.about}
        </Link>
      </li>
      <li>
        <Link
          to="projects"
          activeClass="nav-active"
          spy={true}
          smooth={true}
          duration={200}
          offset={-40}
          className={`px-3 py-2 rounded-full cursor-pointer`}
        >
          {texts.navbar.projects}
        </Link>
      </li>
      <li>
        <Link
          to="contact"
          activeClass="nav-active"
          spy={true}
          smooth={true}
          duration={200}
          offset={-40}
          className={`px-3 py-2 rounded-full cursor-pointer`}
        >
          {texts.navbar.contact}
        </Link>
      </li>
    </ul>
  );
};

export { NavItems };
