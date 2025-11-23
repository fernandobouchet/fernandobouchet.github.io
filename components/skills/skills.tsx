"use client";

import { useContext } from "react";
import { SectionContainer } from "../ui/section-container";
import { LanguageContext } from "@/context/language-context";
import { SkillCard } from "./skill-card";

import { HiCode, HiDatabase } from "react-icons/hi";
import { HiWrench } from "react-icons/hi2";
import { RiPaletteFill } from "react-icons/ri";

import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiGnubash,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiGit,
  SiDocker,
  SiLinux,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";

const Skills = () => {
  const { texts } = useContext(LanguageContext);

  const SkillsSections = [
    {
      id: 1,
      title: texts.skills.languages,
      icon: <HiCode />,
      items: [
        { name: "JavaScript", icon: SiJavascript },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Python", icon: SiPython },
        { name: "Bash", icon: SiGnubash },
        { name: "SQL", icon: TbSql },
      ],
    },
    {
      id: 2,
      title: texts.skills.frontend,
      icon: <RiPaletteFill />,
      items: [
        { name: "React", icon: SiReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Tailwind", icon: SiTailwindcss },
        { name: "HTML5", icon: SiHtml5 },
        { name: "CSS3", icon: SiCss3 },
      ],
    },
    {
      id: 3,
      title: texts.skills.backend,
      icon: <HiDatabase />,
      items: [
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Express", icon: SiExpress },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "MongoDB", icon: SiMongodb },
        { name: "MySQL", icon: SiMysql },
        { name: "Prisma", icon: SiPrisma },
      ],
    },
    {
      id: 5,
      title: texts.skills.tools,
      icon: <HiWrench />,
      items: [
        { name: "Git", icon: SiGit },
        { name: "Docker", icon: SiDocker },
        { name: "Linux", icon: SiLinux },
      ],
    },
  ];

  return (
    <SectionContainer sectionId="skills">
      <div className="flex flex-col items-center w-full max-w-6xl">
        <h2 className="section-title mb-4">{texts.skills.title}</h2>
        <p className="text-center text-lg text-muted-foreground max-w-2xl mb-12 leading-relaxed">
          {texts.skills.p1}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {SkillsSections.map((section) => (
            <SkillCard
              key={section.id}
              title={section.title}
              icon={section.icon}
              items={section.items}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export { Skills };
