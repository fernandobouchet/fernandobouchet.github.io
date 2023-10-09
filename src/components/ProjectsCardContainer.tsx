import style from '@styles/components/ProjectsCardContainer.module.scss';
import { ProjectsData } from '../data/ProjectsData';
import Card from '@components/ui/Card';
import Button from './ui/Button';
import { useContext, useState } from 'react';
import { LanguageContext } from '@context/LanguageContext';

const ProjectsCardContainer = () => {
  const [projectsToShow, setProjectsToShow] = useState(2);
  const { texts } = useContext(LanguageContext);

  return (
    <>
      <div className={style.cards__container}>
        {ProjectsData.sort((projectA, projectB) =>
          projectA.id > projectB.id ? -1 : 1
        )
          .slice(0, projectsToShow)
          .map((project) => (
            <Card key={project.id} data={project} />
          ))}
      </div>
      {projectsToShow < ProjectsData.length && (
        <div className={style.button__wrapper}>
          <Button
            className="primary"
            text={texts.projects.loadButton}
            onClick={() => setProjectsToShow(projectsToShow + 2)}
          />
        </div>
      )}
    </>
  );
};

export default ProjectsCardContainer;
