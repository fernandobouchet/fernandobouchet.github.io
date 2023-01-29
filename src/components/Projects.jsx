import { useContext } from 'react';
import { useState } from 'react';
import LanguageContext from '../context/LanguageContext';
import { ProjectsData } from '../utils/projectsData';
import Button from './Button';
import Card from './Card';

const Projects = () => {
  const { texts } = useContext(LanguageContext);

  const [projectsToShow, setprojectsToShow] = useState(4);

  const handleOnClick = () => {
    setprojectsToShow((prevState) => prevState + 2);
  };

  return (
    <div
      id="projects"
      className="max-w-5xl mx-auto min-h-screen flex flex-col items-center p-5 pt-24"
    >
      <h2 className="font-medium text-3xl md:text-4xl pb-5">
        {texts.projects.title}
      </h2>
      <p className="text-sm md:text-base">{texts.projects.p1}</p>
      <div className="pt-10 grid grid-cols-1 md:grid-cols-2 grid-rows-auto gap-8 pb-10">
        {ProjectsData.slice(0, projectsToShow).map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </div>
      {ProjectsData.length > projectsToShow ? (
        <Button
          text={texts.projects.loadButton}
          onClick={handleOnClick}
        ></Button>
      ) : (
        <p className="text-sm md:text-base max-w-2xl text-center">
          {texts.projects.p2}{' '}
          <a
            className="font-medium text-light-fontColored dark:text-dark-fontColored hover:underline hover:decoration-from-font"
            href="https://github.com/fernandobouchet?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            github
          </a>
          !
        </p>
      )}
    </div>
  );
};
export default Projects;
