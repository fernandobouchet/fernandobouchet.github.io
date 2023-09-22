import style from '../styles/components/Navbar.module.scss';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <header className={`${style.header} ${style[theme]}`}>
      <nav className={`${style.header__nav}`}>
        <ul className={`${style.header__nav_list}`}>
          <li className={`${style.header__nav__list_item}`}>
            <a
              className={`${style.header__nav__list__item_anchor}`}
              href="#about"
            >
              SOBRE MÍ
            </a>
          </li>
          <li className={`${style.header__nav__list_item}`}>
            <a
              className={`${style.header__nav__list__item_anchor}`}
              href="#projects"
            >
              PROYECTOS
            </a>
          </li>
          <li className={`${style.header__nav__list_item}`}>
            <a
              className={`${style.header__nav__list__item_anchor}`}
              href="#contact"
            >
              CONTACTO
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <button onClick={() => changeTheme()}>Cambiar tema</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
