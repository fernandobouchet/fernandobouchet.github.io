"use client";

import { useContext } from "react";
import { LanguageContext } from "@/context/languageContext";
import { CardProjectLinksButtontsWrapper } from "@/components/ui/cardProject/cardProjectLinksButtontsWrapper";
import { CardProjectTechWrapper } from "@/components/ui/cardProject/cardProjectTechWrapper";
import { motion } from "framer-motion";
import { listItemAnimation } from "@/utils/motionContants";
import Image from "next/image";

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
    <motion.div
      className="flex flex-col items-center gap-1 lg:gap-4 p-2 backdrop-blur-xl bg-black/5 dark:bg-white/5 rounded-2xl group/card w-[90vw] md:w-[22rem] lg:w-[30rem] h-full"
      variants={listItemAnimation}
    >
      <a
        className="relative flex flex-col items-center w-full h-72"
        href={project.demo}
        target="_blank"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-top w-full h-60 transition duration-500 lg:scale-95 lg:group-hover/card:scale-100 rounded-2xl"
        />
      </a>
      <div className="p-2 w-full flex flex-col h-1/2">
        <div className="flex flex-col">
          <div className="flex items-center pb-1">
            <h2 className="text-lg font-semibold">{project.title}</h2>
            <CardProjectLinksButtontsWrapper project={project} />
          </div>
          <p className="text-sm lg:text-sm">
            {language === "ES" ? project.info_es : project.info_en}
          </p>
        </div>
        <CardProjectTechWrapper techstack={project.techstack} />
      </div>
    </motion.div>
  );
};

export { CardProject };
