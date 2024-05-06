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
      <LinkWithIcon
        className="h-8 w-8 md:h-9 md:w-9 bg-transparent"
        link={project.github}
        icon={<IconGithub className="link-icon-small" />}
      />

      <LinkWithIcon
        className="h-8 w-8 md:h-9 md:w-9 bg-transparent"
        link={project.demo}
        icon={<IconExternLink className="link-icon-small" />}
      />
    </div>
  );
};

export { CardProjectLinksButtontsWrapper };
