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

  if (!hasMounted) return <div className="w-4 h-4 lg:w-[18px] lg:[18px]" />;

  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button onClick={handleClick} className="w-4 h-4 lg:w-[18px] lg:[18px]">
      {theme === "light" ? <IconDarkMode /> : <IconLightMode />}
    </button>
  );
};

export { ThemeToggle };
