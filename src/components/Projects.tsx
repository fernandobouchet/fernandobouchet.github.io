import style from '@styles/components/Projects.module.scss';
import ProjectsCardContainer from '@components/ProjectsCardContainer';
import useIntersection from '../hooks/useIntersection';
import { useContext, useRef } from 'react';
import { ThemeContext } from '@context/ThemeContext';
import { LanguageContext } from '@context/LanguageContext';

const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const { texts } = useContext(LanguageContext);

  const ref = useRef(null);

  const isIntersecting = useIntersection(ref);

  return (
    <div
      id="projects"
      className={`fade-in ${style.projects} ${
        isIntersecting ? 'fade-in-active' : ''
      }`}
      ref={ref}
    >
      <div className={style.projects__container}>
        <h2>{texts.projects.title}</h2>
        <p>
          {texts.projects.p1}{' '}
          <a
            className={`${style.link__text__accent} ${style[theme]}`}
            href="https://github.com/fernandobouchet"
            target="_blank"
          >
            Github
          </a>
          .
        </p>
        <ProjectsCardContainer />
      </div>
    </div>
  );
};

export default Projects;
