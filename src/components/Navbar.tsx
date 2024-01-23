import style from '@styles/components/Navbar.module.scss';
import { useContext } from 'react';
import ThemeButton from '@components/ui/ThemeButton';
import LanguageButton from '@components/ui/LanguageButton';
import { LanguageContext } from '@context/LanguageContext';
import { ThemeContext } from '@context/ThemeContext';

interface Props {
  intersectionSectionId: string | null;
}

const Navbar = ({ intersectionSectionId }: Props) => {
  const { texts } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  return (
    <header className={`${style.header} ${style[theme]}`}>
      <nav className={`${style.header__nav}`}>
        <ul className={`${style.header__nav_list}`}>
          <li>
            <a
              className={`${style.header__nav__list__item_anchor}  ${
                intersectionSectionId === 'about' ? `${style.current}` : ''
              }`}
              href="#about"
            >
              {texts.navbar.about}
            </a>
          </li>
          <li>
            <a
              className={`${style.header__nav__list__item_anchor} ${
                intersectionSectionId === 'projects' ? `${style.current}` : ''
              }`}
              href="#projects"
            >
              {texts.navbar.projects}
            </a>
          </li>
          <li>
            <a
              className={`${style.header__nav__list__item_anchor} ${
                intersectionSectionId === 'contact' ? `${style.current}` : ''
              }`}
              href="#contact"
            >
              {texts.navbar.contact}
            </a>
          </li>
        </ul>
        <ul className={`${style.header__nav_list__options}`}>
          <li>
            <LanguageButton />
          </li>
          <li>
            <ThemeButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
