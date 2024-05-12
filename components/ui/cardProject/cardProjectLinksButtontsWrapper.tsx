"use client";

import { LinkWithIcon } from "@/components/ui/linkWithIcon";
import { IconExternLink, IconGithub } from "@/components/icons";

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
    <div className="flex items-center gap-1 ml-auto">
      <a
        className="flex items-center justify-center h-8 w-8 md:h-9 md:w-9 bg-transparent rounded-full transition ease-in hover:bg-tertiary hover:scale-110"
        href={project.github}
      >
        {<IconGithub className="link-icon-small" />}
      </a>
      <a
        className="flex items-center justify-center h-8 w-8 md:h-9 md:w-9 bg-transparent rounded-full transition ease-in hover:bg-tertiary hover:scale-110"
        href={project.github}
      >
        {<IconExternLink className="link-icon-small" />}
      </a>
    </div>
  );
};

export { CardProjectLinksButtontsWrapper };
