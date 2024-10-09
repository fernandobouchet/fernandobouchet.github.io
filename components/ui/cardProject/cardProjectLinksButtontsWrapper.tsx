"use client";

import { IconExternLink, IconGithub } from "@/components/icons";
import { Button } from "../button";

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

const CardProjectLinksButtontsWrapper = ({ project }: Props) => {
  return (
    <div className="w-full flex justify-around">
      <Button>
        <a
          className="flex items-center gap-2"
          href={project.github}
          target="_blank"
        >
          <span>Github</span> <IconGithub className="link-icon-small" />
        </a>
      </Button>
      <Button>
        <a
          className="flex items-center gap-2"
          href={project.demo}
          target="_blank"
        >
          <span>Demo</span> <IconExternLink className="link-icon-small" />
        </a>
      </Button>
    </div>
  );
};

export { CardProjectLinksButtontsWrapper };
