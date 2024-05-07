import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  listContainerAnimation,
  listItemAnimation,
} from "@/utils/motionContants";

const Technologies = [
  { id: 0, title: "HTML" },
  { id: 1, title: "CSS" },
  { id: 2, title: "JAVASCRIPT" },
  { id: 3, title: "TYPESCRIPT" },
  { id: 4, title: "REACT" },
  { id: 5, title: "NEXT JS" },
  { id: 6, title: "NODE JS" },
  { id: 7, title: "EXPRESS" },
  { id: 8, title: "MONGO DB" },
  { id: 9, title: "POSTGRESQL" },
  { id: 10, title: "MYSQL" },
];

const AboutBadgesWrapper = () => {
  return (
    <motion.ul
      className="w-full flex flex-wrap justify-center gap-1 md:gap-3 py-2 md:py-4"
      variants={listContainerAnimation}
      initial="hidden"
      animate="visible"
    >
      {Technologies.map((item) => (
        <motion.li key={item.id} variants={listItemAnimation}>
          <Badge text={item.title} />
        </motion.li>
      ))}
    </motion.ul>
  );
};

export { AboutBadgesWrapper };
