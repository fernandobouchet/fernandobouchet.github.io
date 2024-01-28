import style from '@styles/components/ProjectsCardContainer.module.scss';
import { ProjectsData } from '../data/ProjectsData';
import CardCarousel from '@components/CardCarousel';

const ProjectsCardContainer = () => {
  const CarouselData = ProjectsData.sort((projectA, projectB) =>
    projectA.id > projectB.id ? -1 : 1
  );

  return (
    <div className={style.cardsCarousel__container}>
      <CardCarousel data={CarouselData} />
    </div>
  );
};

export default ProjectsCardContainer;
