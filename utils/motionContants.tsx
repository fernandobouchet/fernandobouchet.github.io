const mainSectionAnimation = {
  initial: {
    opacity: 0,
  },
  whileInView: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeIn" },
  },
  viewport: { once: false },
};

const listContainerAnimation = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const listItemAnimation = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export { mainSectionAnimation, listContainerAnimation, listItemAnimation };
