import style from '@styles/components/Navbar.module.scss';
import { useContext } from 'react';
import { ThemeContext } from '@context/ThemeContext';
import ThemeButton from '@components/ui/ThemeButton';
import LanguageButton from '@components/ui/LanguageButton';
import { LanguageContext } from '@context/LanguageContext';

const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  const { texts } = useContext(LanguageContext);

  return (
    <header className={`${style.header} ${style[theme]}`}>
      <nav className={`${style.header__nav}`}>
        <ul className={`${style.header__nav_list}`}>
          <li className={`${style.header__nav__list_item}`}>
            <a
              className={`${style.header__nav__list__item_anchor}`}
              href="#about"
            >
              {texts.navbar.about}
            </a>
          </li>
          <li className={`${style.header__nav__list_item}`}>
            <a
              className={`${style.header__nav__list__item_anchor}`}
              href="#projects"
            >
              {texts.navbar.projects}
            </a>
          </li>
          <li className={`${style.header__nav__list_item}`}>
            <a
              className={`${style.header__nav__list__item_anchor}`}
              href="#contact"
            >
              {texts.navbar.contact}
            </a>
          </li>
        </ul>
        <ul className={`${style.header__nav_list__options}`}>
          <li>
            <LanguageButton />
            <ThemeButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
