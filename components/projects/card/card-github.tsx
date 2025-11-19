import { motion } from "motion/react";
import { CardBackground } from "./card-background";
import Image from "next/image";
import { useContext } from "react";
import { LanguageContext } from "@/context/language-context";
import { ButtonGithub } from "@/components/ui/button-github";

const CardGithub = () => {
  const { texts } = useContext(LanguageContext);

  return (
    <motion.div
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 20,
        bounce: 0.1,
        duration: 0.3,
      }}
      className="overflow-hidden transition-all duration-500 w-full relative group h-full rounded-2xl flex flex-col"
    >
      <CardBackground />
      <div className="absolute inset-0 bg-surface-container/40 group-hover:bg-surface-container/60 dark:bg-surface-container/20 dark:group-hover:bg-surface-container/30 transition-all duration-500 rounded-2xl" />

      <div className="relative h-56 overflow-hidden z-10 rounded-2xl">
        <div className="absolute inset-0 transition-all duration-500">
          <Image
            src="/projects-images/git_card.webp"
            alt=""
            fill
            className="object-cover scale-105 group-hover:scale-110 brightness-95 dark:brightness-90 group-hover:brightness-100 transition-all duration-500"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent dark:from-black/70 dark:via-black/20 dark:to-transparent" />
      </div>

      <div className="relative z-10 p-4 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-2xl font-bold text-foreground drop-shadow-lg">
            {texts.gitCard.title}
          </h3>
          <p className="text-base text-foreground/90 leading-relaxed drop-shadow-md">
            {texts.gitCard.p1}
          </p>
        </div>
        <div className="flex justify-center pt-4 md:pt-0 mt-auto">
          <ButtonGithub
            link="https://github.com/fernandobouchet"
            variant="ghost"
          >
            Github
          </ButtonGithub>
        </div>
      </div>
    </motion.div>
  );
};

export { CardGithub };
