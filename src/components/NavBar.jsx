import { useContext, useState } from 'react';
import LanguageContext from '../context/LanguageContext';
import ThemeButton from './ThemeButton';

const NavBar = () => {
  const { texts, handleChangeLanguage, language } = useContext(LanguageContext);
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <div className="z-10 h-14 fixed w-full top-0 left-1/2 -translate-x-1/2 p-5 text-light-font dark:text-dark-font bg-light-background dark:bg-dark-background transition">
        <nav className="flex max-w-5xl m-auto">
          <section className="flex  lg:hidden">
            <svg
              onClick={() => setIsNavOpen((prev) => !prev)}
              className="fill-light-font dark:fill-dark-font"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
            >
              <path d="M3 18v-2h18v2Zm0-5v-2h18v2Zm0-5V6h18v2Z" />
            </svg>
            <div
              className={`${
                isNavOpen
                  ? 'flex flex-col absolute bg-light-surface dark:bg-dark-surface left-0 w-3/4 h-[100dvh] overflow-y-scroll top-0 z-10 rounded-r-xl p-5 transition'
                  : 'hidden'
              }`}
            >
              <svg
                className="fill-light-font dark:fill-dark-font"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
                onClick={() => setIsNavOpen((prev) => !prev)}
              >
                <path d="M3 18v-2h13v2Zm16.6-1-5-5 5-5L21 8.4 17.4 12l3.6 3.6ZM3 13v-2h10v2Zm0-5V6h13v2Z" />
              </svg>
              <ul
                className={
                  'flex flex-col gap-8 text-base leading-5 md:leading-6 font-medium items-center pt-10'
                }
              >
                <li>
                  <a
                    href="#about"
                    className="hover:text-light-font dark:hover:text-dark-font"
                    onClick={() => setIsNavOpen(false)}
                  >
                    {texts.navbar.about}
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="hover:text-light-font dark:hover:text-dark-font"
                    onClick={() => setIsNavOpen(false)}
                  >
                    {texts.navbar.projects}
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-light-font dark:hover:text-dark-font"
                    onClick={() => setIsNavOpen(false)}
                  >
                    {texts.navbar.contact}
                  </a>
                </li>
              </ul>
              <ul className="flex flex-row gap-4 mt-auto text-base leading-5 md:leading-6 font-medium items-center justify-end">
                <li>
                  <button
                    onClick={() => handleChangeLanguage()}
                    className="hover:text-light-font dark:hover:text-dark-font align-middle"
                  >
                    {language}
                  </button>
                </li>
                <li>
                  <ThemeButton />
                </li>
              </ul>
            </div>
          </section>
          <section className="hidden lg:flex w-full">
            <ul className="flex flex-row gap-4 text-sm md:text-base leading-5 md:leading-6 font-medium items-center">
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
            <ul className="flex flex-row gap-4 text-sm md:text-base leading-5 md:leading-6 font-medium ml-auto items-center">
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
          </section>
        </nav>
      </div>
    </>
  );
};
export default NavBar;
