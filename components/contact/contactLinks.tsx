import { motion } from "framer-motion";
import { IconGithub, IconLinkedin, IconMail } from "../icons";
import { LinkWithIcon } from "../ui/linkWithIcon";
import {
  listContainerAnimation,
  listItemAnimation,
} from "@/utils/motionContants";

const links = [
  {
    id: 1,
    link: "https://www.linkedin.com/in/fernandobouchet",
    icon: <IconLinkedin className="link-icon" />,
  },
  {
    id: 2,
    link: "https://github.com/fernandobouchet",
    icon: <IconGithub className="link-icon" />,
  },
  {
    id: 3,
    link: "mailto:fernandobouchet@gmail.com",
    icon: <IconMail className="link-icon" />,
  },
];

const ContactLinks = () => {
  return (
    <motion.ul
      className="w-full flex justify-center gap-10 py-5"
      variants={listContainerAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
    >
      {links.map((link) => (
        <motion.li key={link.id} variants={listItemAnimation}>
          <LinkWithIcon link={link.link} icon={link.icon} />
        </motion.li>
      ))}
    </motion.ul>
  );
};

export { ContactLinks };
