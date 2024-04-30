"use client";

import { useContext } from "react";
import { LanguageContext } from "@/context/languageContext";
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
  const { language } = useContext(LanguageContext);

  return (
    <div className="flex justify-around">
      <LinkWithIcon
        link={project.github}
        icon={<IconGithub />}
        className="link-icon-with-text"
      >
        {language === "ES" ? "Código" : "Source"}
      </LinkWithIcon>

      <LinkWithIcon
        link={project.demo}
        className="link-icon-with-text"
        icon={<IconExternLink />}
      >
        {language === "ES" ? "Vista previa" : "Preview"}
      </LinkWithIcon>
    </div>
  );
};

export { CardProjectLinksButtontsWrapper };
