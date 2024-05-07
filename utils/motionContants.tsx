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

export { mainSectionAnimation };
