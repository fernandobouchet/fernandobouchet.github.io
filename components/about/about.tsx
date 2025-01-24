"use client";

import { SectionContainer } from "../ui/section-container";
import { GetResumeButton } from "./get-resume-button";
import { TechSlider } from "./tech-slider";
import { Avatar } from "./avatar";
import { useContext } from "react";
import { LanguageContext } from "@/context/language-context";

const About = () => {
  const { texts } = useContext(LanguageContext);

  return (
    <SectionContainer sectionId="about">
      <Avatar />
      <h1 className="text-3xl md:text-4xl font-bold py-4">
        {texts.about.hero}
      </h1>
      <div className="flex flex-col text-center">
        <p>
          {texts.about.p1}
          <span className="text-secondary-foreground">{texts.about.span1}</span>
          {texts.about.p2}
          <span className="text-secondary-foreground">{texts.about.span2}</span>
          {texts.about.p3}
        </p>
        <p>
          {texts.about.p4}
          <span className="text-secondary-foreground">{texts.about.span3}</span>
          {texts.about.p5}
        </p>
        <p> {texts.about.p6} </p>
      </div>
      <TechSlider />
      <div>
        <GetResumeButton />
      </div>
    </SectionContainer>
  );
};
export { About };
