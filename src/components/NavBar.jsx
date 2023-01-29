import { useContext } from 'react';
import LanguageContext from '../context/LanguageContext';
import ThemeButton from './ThemeButton';

const NavBar = () => {
  const { texts, handleChangeLanguage, language } = useContext(LanguageContext);
  return (
    <>
      <div className="z-10 h-14 fixed w-full top-0 left-1/2 -translate-x-1/2 p-5 text-light-fontSurface dark:text-dark-fontSurface bg-light-surface dark:bg-dark-surface animate-fadeIn transition">
        <nav className="flex max-w-5xl m-auto">
          <ul className="flex flex-row gap-4 text-xs md:text-sm font-medium items-center">
            <li>
              <a
                href="#about"
                className="hover:text-light-font dark:hover:text-dark-font"
              >
                {texts.navbar.about}
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-light-font dark:hover:text-dark-font"
              >
                {texts.navbar.projects}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-light-font dark:hover:text-dark-font"
              >
                {texts.navbar.contact}
              </a>
            </li>
          </ul>
          <ul className="flex flex-row gap-4 text-xs md:text-sm font-medium ml-auto items-center">
            <li>
              <button
                onClick={() => handleChangeLanguage()}
                className="hover:text-light-font dark:hover:text-dark-font"
              >
                {language}
              </button>
            </li>
            <li>
              <ThemeButton />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
export default NavBar;
