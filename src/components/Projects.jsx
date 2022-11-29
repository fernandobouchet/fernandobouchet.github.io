import { useState } from "react";
import { ProjectsData } from "../utils/projectsData";
import Button from "./Button";
import Card from "./Card";

const Projects = () => {
  const [projectsToShow, setprojectsToShow] = useState(3);

  const handleOnClick = () => {
    setprojectsToShow((prevState) => prevState + 3);
  };

  return (
    <div
      id="projects"
      className="max-w-5xl mx-auto min-h-screen flex flex-col items-center pt-20"
    >
      <h2 className="font-medium text-3xl md:text-4xl pb-5">Projects</h2>
      <p className="text-sm md:text-base">
        These are some projects I've been working on:
      </p>
      <div className="pt-10 flex flex-col gap-10 pb-10">
        {ProjectsData.slice(0, projectsToShow).map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </div>
      {ProjectsData.length > projectsToShow && (
        <Button text={"Load more"} onClick={handleOnClick}></Button>
      )}
    </div>
  );
};
export default Projects;
