"use client";

import { useContext } from "react";
import { LanguageContext } from "@/context/languageContext";
import { CardProjectLinksButtontsWrapper } from "@/components/ui/cardProject/cardProjectLinksButtontsWrapper";
import { CardProjectTechWrapper } from "@/components/ui/cardProject/cardProjectTechWrapper";

interface Props {
  project: {
    id: number;
    title: string;
    info_es: string;
    info_en: string;
    image: string;
    demo: string;
    github: string;
    techstack: string[];
  };
}

const CardProject = ({ project }: Props) => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="flex flex-col items-center w-full gap-1 md:gap-4 p-2 md:even:flex-row-reverse backdrop-blur-xl bg-black/5 dark:bg-white/5 rounded-2xl group/card h-full">
      <a
        className="relative flex flex-col items-center w-full"
        href={project.demo}
        target="_blank"
      >
        {
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="object-cover object-top w-full  h-60 transition duration-500 md:scale-95 md:group-hover/card:scale-100 rounded-2xl"
          />
        }
      </a>
      <div className="p-2 w-full h-full flex flex-col">
        <div className="flex flex-col">
          <div className="flex items-center pb-1">
            <h2 className="text-lg font-semibold">{project.title}</h2>
            <CardProjectLinksButtontsWrapper project={project} />
          </div>
          <p className="text-xs md:text-sm">
            {language === "ES" ? project.info_es : project.info_en}
          </p>
        </div>
        <CardProjectTechWrapper techstack={project.techstack} />
      </div>
    </div>
  );
};

export { CardProject };
