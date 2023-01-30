import StyledLinkButton from './StyledLinkButton';
import Badge from './Badge';
import LanguageContext from '../context/LanguageContext';
import { useContext } from 'react';

const About = () => {
  const { texts, language } = useContext(LanguageContext);

  return (
    <>
      <div
        id="about"
        className="max-w-5xl mx-auto h-screen flex flex-col gap-14 justify-center items-center p-5 pt-16"
      >
        <div>
          <h1 className="font-medium text-5xl md:text-6xl text-center">
            {texts.about.hero}
          </h1>
        </div>
        <div>
          <p className="text-sm md:text-base leading-5 md:leading-6 max-w-2xl text-center">
            {texts.about.p1}{' '}
            <span className="font-medium text-light-fontColored dark:text-dark-fontColored">
              {texts.about.span}
            </span>
            {texts.about.p2}
          </p>
          <p className="text-sm md:text-base leading-5 md:leading-6 max-w-2xl text-center">
            {texts.about.p3}
          </p>
          <div className="max-w-md flex justify-center m-auto pt-5 flex-wrap">
            <Badge text="HTML" />
            <Badge text="CSS" />
            <Badge text="JAVASCRIPT" />
            <Badge text="TYPESCRIPT" />
            <Badge text="REACT" />
            <Badge text="NODEJS" />
            <Badge text="EXPRESS" />
            <Badge text="MONGO DB" />
            <Badge text="MY SQL" />
          </div>
        </div>
        <div className="flex">
          <StyledLinkButton
            href={
              language === 'EN'
                ? 'https://drive.google.com/file/d/1U6ObryGK9yXwLtXGHUxjpji0cY1MPwar/view?usp=sharing'
                : 'https://drive.google.com/file/d/1LlCYRFeAQ5b2uRnIuw4_nVFK9MMpEwCV/view?usp=sharing'
            }
            text={texts.about.resumeButton}
          />
        </div>
      </div>
    </>
  );
};
export default About;
