"use client";

import { SectionContainer } from "../ui/section-container";
import { GetResumeButton } from "./get-resume-button";
import { Avatar } from "./avatar";
import { useContext } from "react";
import { LanguageContext } from "@/context/language-context";
import { SubtitleLoop } from "./subtitle-loop";

const About = () => {
  const { texts } = useContext(LanguageContext);

  return (
    <SectionContainer sectionId="about" className="md:max-w-4xl">
      <Avatar />
      <h1 className="text-4xl md:text-5xl font-bold py-4">
        {texts.about.hero}
      </h1>
      <div className="flex flex-col text-center">
        <SubtitleLoop />
        <p>
          {texts.about.p1}
          <span className="highlighted-text">{texts.about.span1}</span>
          {texts.about.p2}
          <span className="highlighted-text">{texts.about.span2}</span>
          {texts.about.p3}
          <span className="highlighted-text">{texts.about.span3}</span>
          {texts.about.p4}
        </p>
        <p>
          {texts.about.p5}
          <span className="highlighted-text">{texts.about.span4}</span>
          {texts.about.p6}
        </p>
      </div>
      <div className="py-4">
        <GetResumeButton />
      </div>
    </SectionContainer>
  );
};
export { About };
