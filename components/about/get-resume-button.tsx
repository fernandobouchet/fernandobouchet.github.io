"use client";

import { LanguageContext } from "@/context/language-context";
import { useContext } from "react";
import { MdOutlineArrowForward } from "react-icons/md";

const GetResumeButton = () => {
  const { texts } = useContext(LanguageContext);
  return (
    <a
      href={texts.about.resumeLink}
      target="_blank"
      className="group relative inline-flex h-16 items-center justify-center overflow-hidden rounded-full bg-primary px-10 text-primary-foreground font-semibold primary-hover text-lg lg:text-xl"
    >
      <span>{texts.about.resumeButton}</span>
      <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-2 group-hover:opacity-100">
        <MdOutlineArrowForward className="link-icon" />
      </div>
    </a>
  );
};
export { GetResumeButton };
