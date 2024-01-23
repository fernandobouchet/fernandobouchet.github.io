import style from '@styles/components/Projects.module.scss';
import ProjectsCardContainer from '@components/ProjectsCardContainer';
import { MutableRefObject, useContext } from 'react';
import { LanguageContext } from '@context/LanguageContext';

interface Props {
  sectionRef: MutableRefObject<null>;
  intersectionSectionId: string | null;
}

const Projects = ({ sectionRef, intersectionSectionId }: Props) => {
  const { texts } = useContext(LanguageContext);

  return (
    <div
      id="projects"
      className={`${style.projects} ${style.projects__container} fade-in ${
        intersectionSectionId === 'projects' ? 'fade-in-active' : ''
      }`}
      ref={sectionRef}
    >
      <h2>{texts.projects.title}</h2>
      <p>
        {texts.projects.p1}{' '}
        <a
          className={`${style.link__text__accent} color__accent`}
          href="https://github.com/fernandobouchet"
          target="_blank"
        >
          Github
        </a>
        .
      </p>
      <ProjectsCardContainer />
    </div>
  );
};

export default Projects;
