import style from '@styles/components/Hero.module.scss';
import { ThemeContext } from '@context/ThemeContext';
import BadgesContainer from '@components/BadgesContainer';
import LinkButton from './ui/LinkButton';
import useIntersection from '../hooks/useIntersection';
import { useContext, useRef } from 'react';

const Hero = () => {
  const { theme } = useContext(ThemeContext);

  const ref = useRef(null);

  const isIntersecting = useIntersection(ref);

  return (
    <div
      id="about"
      className={`fade-in section__full-screen ${
        isIntersecting ? 'fade-in-active' : ''
      }`}
      ref={ref}
    >
      <div className={style.hero__container}>
        <h1 className={style.hero__title}>Hola, Soy Fernando</h1>
        <p className={style.hero__text}>
          Soy un{' '}
          <span className={`${style.hero__text__span} ${style[theme]}`}>
            desarrollador full-stack
          </span>
          , actualmente me encuentro finalizando mis estudios de{' '}
          <span className={`${style.hero__text__span} ${style[theme]}`}>
            técnico universitario en programación
          </span>
          , mientras aprendo de forma{' '}
          <span className={`${style.hero__text__span} ${style[theme]}`}>
            autodidacta
          </span>{' '}
          otras tecnologías. Continuamente estoy creando y colaborando en
          proyectos para mejorar mis habilidades. Busco mi primera experiencia
          profesional en el mundo IT. Estas hay algunas tecnologías con las que
          he estado trabajando recientemente:
        </p>
        <BadgesContainer />
        <LinkButton
          className="primary"
          text="Obtener CV"
          link={
            'https://drive.google.com/file/d/1LlCYRFeAQ5b2uRnIuw4_nVFK9MMpEwCV/view?usp=sharing'
          }
        />
      </div>
    </div>
  );
};

export default Hero;
