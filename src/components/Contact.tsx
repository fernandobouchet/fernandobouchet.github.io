import style from '@styles/components/Contact.module.scss';
import useIntersection from '../hooks/useIntersection';
import { useContext, useRef } from 'react';
import { ThemeContext } from '@context/ThemeContext';
import ContactLinksContainer from '@components/ContactLinksContainer';
import { LanguageContext } from '@context/LanguageContext';

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const { texts } = useContext(LanguageContext);

  const ref = useRef(null);

  const isIntersecting = useIntersection(ref);

  return (
    <div
      id="contact"
      className={`fade-in section__full-screen ${
        isIntersecting ? 'fade-in-active' : ''
      }`}
      ref={ref}
    >
      <div className={style.contact__container}>
        <h2 className={style.contact__title}>{texts.contact.title}</h2>
        <p className={style.contact__text}>
          {texts.contact.p1}
          <br />
          {texts.contact.p2}{' '}
          <a
            className={`${style.link__text__accent} ${style[theme]}`}
            href="mailto:fernandobouchet@gmail.com"
          >
            fernandobouchet@gmail.com
          </a>
          {texts.contact.p3}
        </p>
        <ContactLinksContainer />
      </div>
    </div>
  );
};

export default Contact;
