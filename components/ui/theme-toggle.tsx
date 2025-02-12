"use client";

import { useTheme } from "next-themes";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { AnimatedButton } from "./animated-button";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <AnimatedButton
      onClick={handleClick}
      icon={
        theme === "light" ? (
          <MdDarkMode key="dark" size="1.1em" />
        ) : (
          <MdLightMode key="light" size="1.1em" />
        )
      }
      label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
    />
  );
};
export { ThemeToggle };
