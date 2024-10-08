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
    name: "Linkedin",
  },
  {
    id: 2,
    link: "https://github.com/fernandobouchet",
    icon: <IconGithub className="link-icon" />,
    name: "Github",
  },
  {
    id: 3,
    link: "mailto:fernandobouchet@gmail.com",
    icon: <IconMail className="link-icon" />,
    name: "Email",
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
        <motion.li
          className="flex flex-col items-center gap-1"
          key={link.id}
          variants={listItemAnimation}
        >
          <LinkWithIcon link={link.link} icon={link.icon} />
          <span className="font-medium">{link.name}</span>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export { ContactLinks };
