"use client";

import { LanguageContext } from "@/context/language-context";
import { useContext } from "react";
import { MdCode, MdSecurity, MdFileDownload } from "react-icons/md";

const RESUME_BASE_URL = "https://drive.usercontent.google.com/u/0/uc?id=";

const GetResumeButton = () => {
  const { texts } = useContext(LanguageContext);

  return (
    <div className="flex flex-col items-center gap-3 mt-4 w-full max-w-md mx-auto z-10 relative font-sans">
      <div className="flex items-center gap-2 text-primary/90 animate-fade-in">
        <MdFileDownload className="text-lg" />
        <span className="text-xs uppercase tracking-[0.2em] font-bold">
          {texts.about.resumeButton}
        </span>
      </div>

      <div
        className="flex w-full p-1.5 rounded-full shadow-lg backdrop-blur-md
                   bg-secondary/30"
      >
        <a
          href={`${RESUME_BASE_URL}${texts.about.resumeLinkSoftwareId}&export=download`}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-full 
            bg-primary text-primary-foreground shadow-md
            transition-opacity duration-300 hover:opacity-90
          "
        >
          <MdCode className="text-xl" />
          <span className="font-bold text-sm sm:text-base whitespace-nowrap">
            {texts.about.resumeSoftwareLabel}
          </span>
        </a>

        <a
          href={`${RESUME_BASE_URL}${texts.about.resumeLinkCybersecurityId}&export=download`}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-full 
            font-semibold text-sm sm:text-base whitespace-nowrap
            text-secondary-foreground
            transition-colors duration-300 group
            hover:text-primary hover:bg-primary/5
          "
        >
          <MdSecurity className="text-xl text-primary/70 group-hover:text-primary transition-colors" />
          <span>{texts.about.resumeCybersecurityLabel}</span>
        </a>
      </div>
    </div>
  );
};

export { GetResumeButton };
