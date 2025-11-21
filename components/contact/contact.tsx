"use client";

import { useContext } from "react";
import { LanguageContext } from "@/context/language-context";
import { SectionContainer } from "../ui/section-container";
import { MdEmail, MdArrowOutward } from "react-icons/md";
import { ContactLinks } from "./contact-links";

const Contact = () => {
  const { texts } = useContext(LanguageContext);
  const email = "fernandobouchet@gmail.com";

  return (
    <SectionContainer sectionId="contact">
      <div className="w-full max-w-2xl px-4 flex flex-col items-center text-center">
        <h2 className="section-title">{texts.contact.title}</h2>
        <p className="max-w-lg leading-relaxed">{texts.contact.p1}</p>

        <div className="flex flex-col items-center gap-2">
          <p>{texts.contact.p2}:</p>
          <a
            href={`mailto:${email}`}
            className="
              group flex items-center gap-3 px-6 py-3 rounded-full
              bg-secondary/30 border border-primary/10 
              backdrop-blur-md shadow-lg
              transition-colors duration-300 hover:bg-secondary/50
            "
          >
            <MdEmail className="text-xl text-primary" />
            <span className="font-mono text-base font-medium text-foreground/90">
              {email}
            </span>
            <MdArrowOutward className="text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </div>

        <p className="max-w-lg leading-relaxed mt-2 mb-12">
          {texts.contact.p3}
        </p>
        <ContactLinks />
      </div>
    </SectionContainer>
  );
};

export { Contact };
