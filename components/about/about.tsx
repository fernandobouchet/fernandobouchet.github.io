"use client";

import { useContext } from "react";
import { LanguageContext } from "@/context/languageContext";
import { LinkButton } from "@/components/ui/linkButton";

const About = () => {
  const { texts } = useContext(LanguageContext);

  return (
    <section
      id="about"
      className={`section-container text-center text-sm md:text-base`}
    >
      {
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className="rounded-full w-48 md:w-60"
          src="profile.webp"
          alt="Fernando Bouchet profile picture"
        ></img>
      }
      <h1 className="text-4xl md:text-5xl font-bold py-5">
        {texts.about.hero}
      </h1>
      <p>
        {texts.about.p1}
        <span className="text-accent">{texts.about.span1}</span>
        {texts.about.p2}
        <span className="text-accent">{texts.about.span2}</span>
        {texts.about.p3}
      </p>
      <p>
        {texts.about.p4}
        <span className="text-accent">{texts.about.span3}</span>
        {texts.about.p5}
      </p>
      <p> {texts.about.p6} </p>
      <LinkButton
        text={texts.about.resumeButton}
        link={texts.about.resumeLink}
      />
    </section>
  );
};

export { About };
