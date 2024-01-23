import style from '@styles/components/Contact.module.scss';
import { MutableRefObject, useContext } from 'react';
import ContactLinksContainer from '@components/ContactLinksContainer';
import { LanguageContext } from '@context/LanguageContext';

interface Props {
  sectionRef: MutableRefObject<null>;
  intersectionSectionId: string | null;
}

const Contact = ({ sectionRef, intersectionSectionId }: Props) => {
  const { texts } = useContext(LanguageContext);

  return (
    <div
      id="contact"
      className={`section__full-screen fade-in ${style.contact__container} ${
        intersectionSectionId === 'contact' ? 'fade-in-active' : ''
      }`}
      ref={sectionRef}
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
