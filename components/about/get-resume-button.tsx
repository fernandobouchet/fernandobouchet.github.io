"use client";

import { LanguageContext } from "@/context/language-context";
import { useContext } from "react";
import { MdCode, MdSecurity, MdFileDownload } from "react-icons/md";

const RESUME_BASE_URL = "https://drive.usercontent.google.com/u/0/uc?id=";

const GetResumeButton = () => {
  const { texts } = useContext(LanguageContext);

  return (
    <div className="flex flex-col items-center gap-3 mt-8 w-full max-w-md mx-auto">
      <div className="flex items-center gap-2 text-muted-foreground/70 animate-fade-in">
        <MdFileDownload className="text-lg text-primary" />
        <span className="text-xs uppercase tracking-[0.2em] font-bold">
          {texts.about.resumeButton}
        </span>
      </div>

      <div
        className="flex w-full p-1.5 rounded-full border shadow-sm backdrop-blur-sm
                      bg-neutral-100 border-neutral-200 
                      dark:bg-white/5 dark:border-white/10"
      >
        <a
          href={`${RESUME_BASE_URL}${texts.about.resumeLinkSoftwareId}&export=download`}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-full 
            bg-primary text-primary-foreground shadow-md
            transition-all duration-300 hover:scale-[1.02] active:scale-95
            group
          "
        >
          <MdCode className="text-xl group-hover:-rotate-12 transition-transform" />
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
            transition-all duration-300 active:scale-95 group
            text-zinc-600 hover:text-black hover:bg-white
            dark:text-zinc-400 dark:hover:text-white dark:hover:bg-white/10
          "
        >
          <MdSecurity className="text-xl text-primary group-hover:scale-110 transition-transform" />
          <span>{texts.about.resumeCybersecurityLabel}</span>
        </a>
      </div>
    </div>
  );
};

export { GetResumeButton };
