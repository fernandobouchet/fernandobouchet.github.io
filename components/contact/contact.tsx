"use client";

import { useContext } from "react";
import { LanguageContext } from "@/context/languageContext";
import { ContactLinks } from "@/components/contact/contactLinks";
import { useIntersection } from "@/context/intersectionContext";

const Contact = () => {
  const { texts } = useContext(LanguageContext);
  const { RegisterAndObserveElement } = useIntersection();
  const ref = RegisterAndObserveElement();

  return (
    <section id="contact" className={`section-container`} ref={ref}>
      <h2 className="section-title">{texts.contact.title}</h2>
      <div className="text-center">
        <p className="section-text">{texts.contact.p1}</p>
        <p className="section-text">
          {texts.contact.p2}{" "}
          <a href="mailto:fernandobouchet@gmail.com" className="link-text">
            fernandobouchet@gmail.com
          </a>
          {texts.contact.p3}
        </p>
      </div>
      <ContactLinks />
    </section>
  );
};

export { Contact };
