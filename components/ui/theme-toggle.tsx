"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return <div className="toggle-icon" />;

  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={handleClick}
      className="toggle-icon"
      aria-label="theme toggle"
    >
      {theme === "light" ? (
        <MdDarkMode size="1.1em" />
      ) : (
        <MdLightMode size="1.1em" />
      )}
    </button>
  );
};
export { ThemeToggle };
