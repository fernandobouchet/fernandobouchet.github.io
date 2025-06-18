import { useContext } from "react";
import { TextLoop } from "../motion-primitives/text-loop";
import { LanguageContext } from "@/context/language-context";

const SubtitleLoop = () => {
  const { texts } = useContext(LanguageContext);

  return (
    <TextLoop className="pb-3 overflow-y-clip">
      {texts.about.subtitles.map((subtitle, index) => (
        <span
          key={index}
          className="text-lg md:text-2xl text-secondary-foreground font-semibold"
        >
          {subtitle}
        </span>
      ))}
    </TextLoop>
  );
};

export { SubtitleLoop };
