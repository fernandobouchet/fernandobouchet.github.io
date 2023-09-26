import style from '../styles/components/Contact.module.scss';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import ContactLinksContainer from './ContactLinksContainer';

const Contact = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div id="contact" className="section__full-screen">
      <div className={style.contact__container}>
        <h2 className={style.contact__title}>Contacto</h2>
        <p className={style.contact__text}>
          Gracias por su interés en ponerse en contacto!
          <br />
          La mejor manera de contactarme es a través de mi dirección de correo
          electrónico:{' '}
          <a
            className={`${style.link__text__accent} ${style[theme]}`}
            href="mailto:fernandobouchet@gmail.com"
          >
            fernandobouchet@gmail.com
          </a>
          , también puedes encontrarme en las redes sociales a continuación,
          intentaré responder a la brevedad!
        </p>
        <ContactLinksContainer />
      </div>
    </div>
  );
};

export default Contact;
