import style from '@styles/components/ProjectsCardContainer.module.scss';
import { ProjectsData } from '../data/ProjectsData';
import Card from '@components/ui/Card';

const ProjectsCardContainer = () => {
  return (
    <div className={style.cards__container}>
      {ProjectsData.sort((projectA, projectB) =>
        projectA.id > projectB.id ? -1 : 1
      ).map((project) => (
        <Card key={project.id} data={project} />
      ))}
    </div>
  );
};

export default ProjectsCardContainer;
