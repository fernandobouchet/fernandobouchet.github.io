import { useContext } from 'react';
import LanguageContext from '../context/LanguageContext';
import ThemeButton from './ThemeButton';

const NavBar = () => {
  const { texts, handleChangeLanguage, language } = useContext(LanguageContext);
  return (
    <>
      <div className="z-10 h-14 fixed w-full top-0 left-1/2 -translate-x-1/2 p-5 bg-neutral-100 dark:bg-neutral-800 animate-fadeIn transition">
        <nav className="flex max-w-5xl m-auto">
          <ul className="flex flex-row gap-4 text-xs md:text-sm font-medium items-center">
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
          <ul className="flex flex-row gap-4 text-xs md:text-sm font-medium ml-auto items-center">
            <li>
              <button
                onClick={() => handleChangeLanguage()}
                className="hover:text-stone-400"
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
