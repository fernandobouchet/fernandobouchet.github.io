"use client";
import { motion } from "motion/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import { ButtonLink } from "../ui/button-link";

const links = [
  {
    id: 1,
    link: "https://www.linkedin.com/in/fernandobouchet",
    icon: <FaLinkedin className="link-icon" />,
    name: "Linkedin",
  },
  {
    id: 2,
    link: "https://github.com/fernandobouchet",
    icon: <FaGithub className="link-icon" />,
    name: "Github",
  },
  {
    id: 3,
    link: "mailto:fernandobouchet@gmail.com",
    icon: <TbMailFilled className="link-icon" />,
    name: "Email",
  },
];

const ContactLinks = () => {
  return (
    <motion.ul
      className="w-full flex justify-around md:justify-center md:gap-10 py-5"
      variants={{
        hidden: { opacity: 1 },
        visible: {
          opacity: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
    >
      {links.map((link) => (
        <motion.li
          className="flex flex-col items-center gap-1"
          key={link.id}
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
            },
          }}
        >
          <ButtonLink link={link.link} icon={link.icon}>
            {link.name}
          </ButtonLink>
        </motion.li>
      ))}
    </motion.ul>
  );
};
export { ContactLinks };
