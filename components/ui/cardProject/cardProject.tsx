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
    <div className="flex flex-col md:flex-row items-center md:items-start w-full h-full gap-1 md:gap-4 p-2 md:even:flex-row-reverse backdrop-blur-xl bg-black/10 dark:bg-white/10 rounded-2xl group/card">
      <div className="relative flex flex-col items-center w-full h-60 md:w-1/2 ">
        {
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="object-cover object-center w-full h-60 transition duration-500 md:full md:h-full md:scale-95 md:group-hover/card:scale-100 rounded-2xl"
          />
        }
      </div>
      <div className="p-2 md:w-1/2 h-full md:h-60 flex flex-col">
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold">{project.title}</h2>
          <p className="text-sm">
            {language === "ES" ? project.info_es : project.info_en}
          </p>
        </div>
        <CardProjectTechWrapper techstack={project.techstack} />
        <CardProjectLinksButtontsWrapper project={project} />
      </div>
    </div>
  );
};

export { CardProject };
