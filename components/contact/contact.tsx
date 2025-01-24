"use client";

import { useContext } from "react";
import { SectionContainer } from "../ui/section-container";
import { ContactLinks } from "./contact-links";
import { LanguageContext } from "@/context/language-context";

const Contact = () => {
  const { texts } = useContext(LanguageContext);

  return (
    <SectionContainer sectionId="contact">
      <h2 className="section-title pt-4 pb-6">{texts.contact.title}</h2>
      <div className="text-center">
        <p>{texts.contact.p1}</p>
        <p>
          {texts.contact.p2}:{" "}
          <a href="mailto:fernandobouchet@gmail.com" className="link-text">
            fernandobouchet@gmail.com
          </a>
          ,
        </p>
        <p>{texts.contact.p3}</p>
      </div>
      <ContactLinks />
    </SectionContainer>
  );
};
export { Contact };
