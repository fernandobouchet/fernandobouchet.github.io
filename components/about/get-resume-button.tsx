"use client";

import { LanguageContext } from "@/context/language-context";
import { useContext } from "react";
import { MdFileDownload } from "react-icons/md";

const RESUME_BASE_URL = "https://drive.usercontent.google.com/u/0/uc?id=";

const GetResumeButton = () => {
  const { texts } = useContext(LanguageContext);

  return (
    <div className="flex justify-center mt-4 w-full z-10 relative font-sans">
      <a
        href={`${RESUME_BASE_URL}${texts.about.resumeLinkSoftwareId}&export=download`}
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full
          bg-primary text-primary-foreground shadow-md
          transition-opacity duration-300 hover:opacity-90
        "
      >
        <MdFileDownload className="text-xl" />
        <span className="font-bold text-sm sm:text-base whitespace-nowrap">
          {texts.about.resumeButton}
        </span>
      </a>
    </div>
  );
};

export { GetResumeButton };
