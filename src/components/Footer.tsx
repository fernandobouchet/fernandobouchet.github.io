import style from '@styles/components/Footer.module.scss';
import { useContext } from 'react';
import { ThemeContext } from '@context/ThemeContext';
import { Github } from '@components/icons';

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const text = `Fernando Bouchet - ${new Date().getFullYear()}`;

  return (
    <div className={style.footer__container}>
      <a
        className={`${style.footer__link} ${style[theme]}`}
        href="https://github.com/fernandobouchet"
        target="_blank"
        aria-label={`${text} github link`}
      >
        <Github className={style.footer__link__icon} />
        <span className={style.footer__link__text}>{text}</span>
      </a>
    </div>
  );
};

export default Footer;
