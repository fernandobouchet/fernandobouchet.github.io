"use client";

import { useContext } from "react";
import { LanguageContext } from "@/context/languageContext";
import { ContactLinks } from "@/components/contact/contactLinks";
import { motion } from "framer-motion";
import { mainSectionAnimation } from "@/utils/motionContants";

const Contact = () => {
  const { texts } = useContext(LanguageContext);

  return (
    <motion.section
      id="contact"
      className={`section-container`}
      {...mainSectionAnimation}
    >
      <h2 className="section-title">{texts.contact.title}</h2>
      <div className="text-center py-4">
        <p>{texts.contact.p1}</p>
        <p>
          {texts.contact.p2}{" "}
          <a href="mailto:fernandobouchet@gmail.com" className="link-text">
            fernandobouchet@gmail.com
          </a>
          {texts.contact.p3}
        </p>
      </div>
      <ContactLinks />
    </motion.section>
  );
};

export { Contact };
