import { motion } from "motion/react";
import { CardBackground } from "../projects/card/card-background";
import { Badge } from "../ui/badge";

interface Props {
  title: string;
  icon: React.JSX.Element;
  items: string[];
}

const SkillCard = ({ title, icon, items }: Props) => {
  return (
    <motion.div
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 20,
        bounce: 0.1,
        duration: 0.4,
      }}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      viewport={{ once: true }}
      className="relative group flex flex-col rounded-2xl p-4 overflow-hidden h-full"
    >
      <CardBackground />

      <div className="relative z-10 mb-4 flex items-center gap-2">
        <span className="text-xl text-primary">{icon}</span>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>

      <div className="relative z-10 flex flex-wrap gap-2">
        {items.map((item, index) => (
          <Badge key={index} text={item} className="[&>span]:text-base" />
        ))}
      </div>
    </motion.div>
  );
};

export { SkillCard };
