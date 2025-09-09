"use client";

import { useContext } from "react";
import { SectionContainer } from "../ui/section-container";
import { LanguageContext } from "@/context/language-context";
import { SkillCard } from "./skill-card";
import { HiCode, HiDatabase } from "react-icons/hi";
import { HiWrench } from "react-icons/hi2";
import { RiPaletteFill } from "react-icons/ri";

const Skills = () => {
  const { texts } = useContext(LanguageContext);

  const SkillsSections = [
    {
      id: 1,
      title: texts.skills.languages,
      icon: <HiCode />,
      items: ["JavaScript (ES6+)", "TypeScript", "Java", "Bash", "SQL"],
    },
    {
      id: 2,
      title: texts.skills.frontend,
      icon: <RiPaletteFill />,
      items: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS", "Shadcn/ui"],
    },
    {
      id: 3,
      title: texts.skills.backend,
      icon: <HiDatabase />,
      items: [
        "Node.js",
        "Express.js",
        "SpringBoot",
        "RESTful APIs",
        "MySQL",
        "PostgreSQL",
        "MongoDB",
      ],
    },
    {
      id: 5,
      title: texts.skills.tools,
      icon: <HiWrench />,
      items: ["Git", "Docker", "Linux", "Agile"],
    },
  ];

  return (
    <SectionContainer sectionId="skills">
      <h2 className="section-title">{texts.skills.title}</h2>
      <p className="text-center pb-4">{texts.skills.p1}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4">
        {SkillsSections.length > 0 &&
          SkillsSections.map((section) => (
            <SkillCard
              key={section.id}
              title={section.title}
              icon={section.icon}
              items={section.items}
            />
          ))}
      </div>
    </SectionContainer>
  );
};

export { Skills };
