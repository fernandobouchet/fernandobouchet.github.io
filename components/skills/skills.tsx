"use client";

import { useContext } from "react";
import { SectionContainer } from "../ui/section-container";
import { LanguageContext } from "@/context/language-context";
import { SkillCard } from "./skill-card";
import { HiCode, HiDatabase } from "react-icons/hi";
import { FiLayers } from "react-icons/fi";
import { HiWrench } from "react-icons/hi2";

const Skills = () => {
  const { texts } = useContext(LanguageContext);

  const SkillsSections = [
    {
      id: 1,
      title: texts.skills.languages,
      icon: <HiCode />,
      items: [
        "HTML",
        "CSS",
        "Node.js",
        "JavaScript (ES6+)",
        "TypeScript",
        "Java",
        "Python",
      ],
    },
    {
      id: 2,
      title: texts.skills.frameworks,
      icon: <FiLayers />,
      items: ["React", "Next.js", "Express.js", "Spring Boot", "Tailwind CSS"],
    },
    {
      id: 3,
      title: texts.skills.databases,
      icon: <HiDatabase />,
      items: ["MongoDB", "PostgreSQL", "MySQL", "Prisma (ORM)"],
    },
    {
      id: 4,
      title: texts.skills.tools,
      icon: <HiWrench />,
      items: ["Git", "GitHub", "Docker", "Linux", "NPM", "Agile (Scrum)"],
    },
  ];

  return (
    <SectionContainer sectionId="skills">
      <h2 className="section-title">{texts.skills.title}</h2>
      <p className="text-center pb-4">{texts.skills.p1}</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
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
