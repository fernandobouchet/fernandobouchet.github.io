import style from "@styles/components/Hero.module.scss";
import { ThemeContext } from "@context/ThemeContext";
import BadgesContainer from "@components/BadgesContainer";
import LinkButton from "./ui/LinkButton";
import useIntersection from "../hooks/useIntersection";
import { useContext, useRef } from "react";
import { LanguageContext } from "@context/LanguageContext";

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  const { texts } = useContext(LanguageContext);

  const ref = useRef(null);

  const isIntersecting = useIntersection(ref);

  return (
    <div
      id="about"
      className={`fade-in section__full-screen ${
        isIntersecting ? "fade-in-active" : ""
      }`}
      ref={ref}
    >
      <div className={style.hero__container}>
        <img
          className={style.hero__img}
          src="/Profile.webp"
          alt="Fernando Bouchet profile picture"
        ></img>
        <h1 className={style.hero__title}>{texts.about.hero}</h1>
        <p className={style.hero__text1}>
          {texts.about.p1}
          <span className={`${style.hero__text__span} ${style[theme]}`}>
            {texts.about.span1}
          </span>
          {texts.about.p2}{" "}
          <span className={`${style.hero__text__span} ${style[theme]}`}>
            {texts.about.span2}
          </span>
          {texts.about.p3}{" "}
          <span className={`${style.hero__text__span} ${style[theme]}`}>
            {texts.about.span3}
          </span>{" "}
          {texts.about.p4}{" "}
        </p>
        <p className={style.hero__text2}> {texts.about.p5} </p>
        <BadgesContainer />
        <LinkButton
          className="primary"
          text={texts.about.resumeButton}
          link={texts.about.resumeLink}
          description={texts.about.resumeLink}
        />
      </div>
    </div>
  );
};

export default Hero;
