import { useContext } from 'react';
import { useState } from 'react';
import LanguageContext from '../context/LanguageContext';
import { ProjectsData } from '../utils/projectsData';
import Button from './Button';
import Card from './Card';

const Projects = () => {
  const { texts } = useContext(LanguageContext);

  const [projectsToShow, setprojectsToShow] = useState(3);

  const handleOnClick = () => {
    setprojectsToShow((prevState) => prevState + 3);
  };

  return (
    <div
      id="projects"
      className="max-w-5xl mx-auto min-h-screen flex flex-col items-center pt-16 animate-fadeIn transition"
    >
      <h2 className="font-medium text-3xl md:text-4xl pb-5">
        {texts.projects.title}
      </h2>
      <p className="text-sm md:text-base">{texts.projects.p1}</p>
      <div className="pt-10 flex flex-col gap-10 pb-10">
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
            className="font-normal text-blue-600 dark:text-blue-300"
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
