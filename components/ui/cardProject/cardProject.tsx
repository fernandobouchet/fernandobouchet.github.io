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
      className="w-[90vw] md:w-[22rem] lg:w-[30rem] h-80"
      variants={listItemAnimation}
    >
      <div className="relative overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 mx-auto rounded-2xl w-full h-full">
        <div className="relative p-0 h-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 pb-1">
            <div>
              <h3 className="text-lg lg:text-xl font-bold mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-pretty lg:text-base mb-2 text-justify">
                {language === "ES" ? project.info_es : project.info_en}
              </p>
            </div>
            <div className="flex flex-col h-full justify-end">
              <div className="flex w-full justify-between pb-2">
                <CardProjectLinksButtontsWrapper project={project} />
              </div>
              <div className="flex flex-wrap gap-1 justify-center">
                <CardProjectTechWrapper techstack={project.techstack} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export { CardProject };
