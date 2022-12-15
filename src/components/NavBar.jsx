import { useContext } from 'react';
import LanguageContext from '../context/LanguageContext';

const NavBar = () => {
  const { texts, handleChangeLanguage, language } = useContext(LanguageContext);
  return (
    <>
      <div className="z-10 max-w-5xl h-16 fixed w-full top-0 left-1/2 -translate-x-1/2 p-5 bg-inherit">
        <nav className="flex">
          <ul className="flex flex-row gap-4 text-xs md:text-sm font-medium">
            <li>
              <a href="#about" className="hover:text-stone-400">
                {texts.navbar.about}
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-stone-400">
                {texts.navbar.projects}
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-stone-400">
                {texts.navbar.contact}
              </a>
            </li>
          </ul>
          <ul className="flex flex-row gap-4 text-xs md:text-sm font-medium ml-auto">
            <li>
              <button
                onClick={() => handleChangeLanguage()}
                className="hover:text-stone-400"
              >
                {language}
              </button>
            </li>
            {/*
              <li>
                <button className="hover:text-stone-400">TODO THEME TOGGLE</button>
              </li>*/}
          </ul>
        </nav>
      </div>
    </>
  );
};
export default NavBar;
