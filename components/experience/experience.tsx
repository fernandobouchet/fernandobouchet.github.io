"use client";

import { useContext } from "react";
import { HiBriefcase } from "react-icons/hi2";
import { LanguageContext } from "@/context/language-context";
import { CardBackground } from "../projects/card/card-background";
import { SectionContainer } from "../ui/section-container";

const Experience = () => {
  const { texts } = useContext(LanguageContext);

  return (
    <SectionContainer sectionId="experience">
      <div className="flex flex-col items-center w-full max-w-4xl">
        <h2 className="section-title mb-4">{texts.experience.title}</h2>

        <ol className="relative ml-6 w-[calc(100%-1.5rem)] border-l-2 border-primary/30">
          {texts.experience.items.map((experience) => (
            <li
              key={`${experience.company}-${experience.role}`}
              className="relative pb-10 pl-10 last:pb-2"
            >
              <div className="absolute -left-6 top-6 flex size-12 items-center justify-center rounded-full border-4 border-background bg-primary text-primary-foreground shadow-md">
                <HiBriefcase className="size-5" />
              </div>

              <article className="relative w-full overflow-hidden rounded-4xl p-6 md:p-8 shadow-lg shadow-black/5">
                <CardBackground />

                <div className="relative z-10">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-bold tracking-tight">
                        {experience.role}
                      </h3>
                      <p className="text-lg font-semibold text-primary">
                        {experience.company}
                      </p>
                    </div>
                    <time className="text-sm font-medium text-muted-foreground sm:text-right">
                      {experience.period}
                    </time>
                  </div>

                  <ul className="mt-5 space-y-3 text-sm leading-relaxed text-foreground/85 md:text-base">
                    {experience.responsibilities.map((responsibility) => (
                      <li key={responsibility} className="flex gap-3">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </SectionContainer>
  );
};

export { Experience };
