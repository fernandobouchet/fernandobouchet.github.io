import style from '@styles/components/ProjectsCardContainer.module.scss';
import { ProjectsData } from '../data/ProjectsData';
import Card from '@components/ui/Card';
import Button from './ui/Button';
import { useState } from 'react';

const ProjectsCardContainer = () => {
  const [projectsToShow, setProjectsToShow] = useState(2);

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
            text={'Mostrar más'}
            onClick={() => setProjectsToShow(projectsToShow + 2)}
          />
        </div>
      )}
    </>
  );
};

export default ProjectsCardContainer;
