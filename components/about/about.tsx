"use client";

import { useContext } from "react";
import { LanguageContext } from "@/context/languageContext";
import { LinkButton } from "@/components/ui/linkButton";
import { AboutBadgesWrapper } from "./aboutBadgesWrapper";
import { motion } from "framer-motion";
import { mainSectionAnimation } from "@/utils/motionContants";
import Image from "next/image";

const About = () => {
  const { texts } = useContext(LanguageContext);

  return (
    <motion.section
      id="about"
      className={`section-container text-center`}
      {...mainSectionAnimation}
    >
      <Image
        className="rounded-full w-48 md:w-60"
        src="profile.webp"
        width={300}
        height={300}
        alt="Fernando Bouchet profile picture"
        priority
      />
      <h1 className="text-4xl md:text-5xl font-bold py-4">
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
      <AboutBadgesWrapper />
      <LinkButton
        text={texts.about.resumeButton}
        link={texts.about.resumeLink}
      />
    </motion.section>
  );
};

export { About };
