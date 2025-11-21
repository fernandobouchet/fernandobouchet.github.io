"use client";

import { motion } from "motion/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SocialLink } from "./social-link";

const links = [
  {
    id: 1,
    link: "https://www.linkedin.com/in/fernandobouchet",
    icon: <FaLinkedin />,
    name: "LinkedIn",
  },
  {
    id: 2,
    link: "https://github.com/fernandobouchet",
    icon: <FaGithub />,
    name: "Github",
  },
];

const ContactLinks = () => {
  return (
    <motion.div
      className="flex items-center justify-center gap-8 w-full border-t border-white/5 pt-8"
      variants={{
        hidden: { opacity: 0 },
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
      viewport={{ once: true }}
    >
      {links.map((e) => (
        <motion.div
          key={e.id}
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
        >
          <SocialLink href={e.link} icon={e.icon} label={e.name} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export { ContactLinks };
