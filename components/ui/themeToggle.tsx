"use client";
import { useTheme } from "next-themes";
import { IconDarkMode, IconLightMode } from "@/components/icons";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted)
    return (
      <button className="p-1">
        <IconLightMode className="w-5 md:w-6 h-auto" />
      </button>
    );

  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button onClick={handleClick} className="p-1">
      {theme === "light" ? (
        <IconDarkMode className="w-5 md:w-6 h-auto" />
      ) : (
        <IconLightMode className="w-5 md:w-6 h-auto" />
      )}
    </button>
  );
};

export { ThemeToggle };
