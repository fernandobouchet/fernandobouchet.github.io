import style from '@styles/components/Hero.module.scss';
import BadgesContainer from '@components/BadgesContainer';
import LinkButton from './ui/LinkButton';
import useIntersection from '../hooks/useIntersection';
import { useContext, useRef } from 'react';
import { LanguageContext } from '@context/LanguageContext';

const Hero = () => {
  const { texts } = useContext(LanguageContext);
  const ref = useRef(null);
  const isIntersecting = useIntersection(ref);

  return (
    <div
      id="about"
      className={`section__full-screen fade-in ${style.hero__container} ${
        isIntersecting ? 'fade-in-active' : ''
      }`}
      ref={ref}
    >
      <img
        className={style.hero__img}
        src="/Profile.webp"
        alt="Fernando Bouchet profile picture"
      ></img>
      <h1 className={style.hero__title}>{texts.about.hero}</h1>
      <p className={`${style.hero__text1}`}>
        {texts.about.p1}
        <span className={`${style.hero__text__span} color__accent`}>
          {texts.about.span1}
        </span>
        {texts.about.p2}
        <span className={`${style.hero__text__span} color__accent`}>
          {texts.about.span2}
        </span>
        {texts.about.p3}
        <span className={`${style.hero__text__span} color__accent`}>
          {texts.about.span3}
        </span>
        {texts.about.p4}
      </p>
      <p className={style.hero__text2}> {texts.about.p5} </p>
      <BadgesContainer />
      <LinkButton
        className="primary"
        text={texts.about.resumeButton}
        link={texts.about.resumeLink}
        description={texts.about.resumeButton}
      />
    </div>
  );
};

export default Hero;
