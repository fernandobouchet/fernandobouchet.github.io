"use client";

import { LuExternalLink } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";

interface Props {
  demo?: string;
  github: string;
}

const ProjectLinks = ({ demo, github }: Props) => {
  return (
    <div className="flex items-center justify-center w-full mt-auto pt-4">
      <div
        className="flex w-full max-w-[280px] p-1.5 rounded-full shadow-lg backdrop-blur-md
                   bg-secondary/30 border border-primary/10"
      >
        {demo ? (
          <>
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Project Demo"
              className="
                flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-full 
                bg-secondary text-secondary-foreground shadow-sm
                transition-all duration-300 hover:opacity-90
                font-semibold text-sm
              "
            >
              <LuExternalLink className="text-lg" />
              <span>Demo</span>
            </a>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Project Github"
              className="
                flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-full 
                text-secondary-foreground/80 font-medium text-sm
                transition-colors duration-300 hover:text-secondary-foreground hover:bg-secondary/10
              "
            >
              <FaGithub className="text-lg" />
              <span>Github</span>
            </a>
          </>
        ) : (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Project Github"
            className="
              flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-full 
              bg-secondary text-secondary-foreground shadow-sm
              transition-all duration-300 hover:opacity-90
              font-semibold text-sm
            "
          >
            <FaGithub className="text-lg" />
            <span>Github</span>
          </a>
        )}
      </div>
    </div>
  );
};

export { ProjectLinks };
