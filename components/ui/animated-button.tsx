import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, ReactElement } from "react";

const iconVariants = {
  initial: { opacity: 0, rotate: -180 },
  animate: { opacity: 1, rotate: 0 },
  exit: { opacity: 0, rotate: 180 },
};

interface Props {
  onClick: () => void;
  icon: ReactElement;
  label: string;
}

const AnimatedButton = ({ onClick, icon, label }: Props) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return <div className="toggle-icon" />;

  return (
    <motion.button
      onClick={onClick}
      className="toggle-icon flex items-center justify-center"
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      aria-label={label}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={label + (icon.key || "default")}
          variants={iconVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.3 }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
};

export { AnimatedButton };
