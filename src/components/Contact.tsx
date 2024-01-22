import style from '@styles/components/Contact.module.scss';
import useIntersection from '../hooks/useIntersection';
import { useContext, useRef } from 'react';
import ContactLinksContainer from '@components/ContactLinksContainer';
import { LanguageContext } from '@context/LanguageContext';

const Contact = () => {
  const { texts } = useContext(LanguageContext);
  const ref = useRef(null);
  const isIntersecting = useIntersection(ref);

  return (
    <div
      id="contact"
      className={`section__full-screen fade-in ${style.contact__container} ${
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
            className={`${style.link__text__accent} color__accent`}
            href="mailto:fernandobouchet@gmail.com"
            aria-label="Fernando Bouchet email link"
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
