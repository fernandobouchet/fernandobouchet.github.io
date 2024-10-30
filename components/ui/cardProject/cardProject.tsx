"use client";

import { useContext, useState } from "react";
import { LanguageContext } from "@/context/languageContext";
import { CardProjectLinksButtontsWrapper } from "@/components/ui/cardProject/cardProjectLinksButtontsWrapper";
import { CardProjectTechWrapper } from "@/components/ui/cardProject/cardProjectTechWrapper";
import { AnimatePresence, motion } from "framer-motion";
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
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      className="flex flex-col items-center gap-1 backdrop-blur-xl bg-black/5 dark:bg-white/5 rounded-2xl w-[90vw] md:w-[22rem] lg:w-[30rem] h-full"
      variants={listItemAnimation}
    >
      <a
        className="relative flex flex-col items-center w-full h-72 rounded-2xl overflow-hidden"
        href={project.demo}
        target="_blank"
        rel="noopener noreferrer"
      >
        <AnimatePresence>
          {!isLoaded && (
            <motion.div
              className="w-full h-72 rounded-2xl animate-pulse flex space-x-4 bg-slate-700 relative"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-slate-700 w-full rounded-2xl h-72"></div>
            </motion.div>
          )}
        </AnimatePresence>

        <Image
          src={project.image}
          alt={project.title}
          className="object-cover object-top w-full h-72 transition duration-500 scale-105 hover:scale-110 rounded-2xl"
          fill
          onLoad={() => setIsLoaded(true)}
        />
      </a>
      <div className="px-4 w-full flex flex-col h-1/2">
        <div className="flex flex-col">
          <div className="flex items-center pb-1">
            <h2 className="text-lg font-semibold">{project.title}</h2>
            <CardProjectLinksButtontsWrapper project={project} />
          </div>
          <p className="text-sm lg:text-sm text-neutral-900 dark:text-neutral-300">
            {language === "ES" ? project.info_es : project.info_en}
          </p>
        </div>
        <CardProjectTechWrapper techstack={project.techstack} />
      </div>
    </motion.div>
  );
};

export { CardProject };
