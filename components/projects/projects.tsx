"use client";

import { useContext } from "react";
import { LanguageContext } from "@/context/languageContext";
import { ProjectsData } from "@/utils/projectsData";
import { CardProject } from "@/components/ui/cardProject/cardProject";
import { useIntersection } from "@/context/intersectionContext";
import { Carousel } from "@/components/ui/carousel/carousel";
import { motion } from "framer-motion";
import { mainSectionAnimation } from "@/utils/motionContants";

const Projects = () => {
  const { texts } = useContext(LanguageContext);
  const { RegisterAndObserveElement } = useIntersection();
  const ref = RegisterAndObserveElement();

  const sortedProjects = ProjectsData.sort((a, b) => b.id - a.id);

  return (
    <motion.section
      id="projects"
      className={`section-container`}
      ref={ref}
      {...mainSectionAnimation}
    >
      <h2 className="section-title">{texts.projects.title}</h2>
      <p className="text-sm md:text-base text-center py-4">
        {texts.projects.p1}{" "}
        <a
          href="https://github.com/fernandobouchet"
          target="_blank"
          className="link-text"
        >
          Github
        </a>
        .
      </p>
      <Carousel options={{ loop: true }}>
        {sortedProjects.map((project, index) => (
          <div key={index} className="carousel_slide">
            <CardProject key={project.id} project={project} />
          </div>
        ))}
      </Carousel>
    </motion.section>
  );
};

export { Projects };
