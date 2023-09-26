import Button from '@components/ui/Button';
import style from '@styles/components/Hero.module.scss';
import { useContext } from 'react';
import { ThemeContext } from '@context/ThemeContext';
import BadgesContainer from '@components/BadgesContainer';

const Hero = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div id="about" className="section__full-screen">
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
        <Button className="primary" text="Obtener CV" />
      </div>
    </div>
  );
};

export default Hero;
