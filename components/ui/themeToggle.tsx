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

  if (!hasMounted) return <div className="w-[18px] h-[18px] md:w-5 md:h-5" />;

  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button onClick={handleClick} className="w-[14px] h-[14px] md:w-4 md:h-4">
      {theme === "light" ? <IconDarkMode /> : <IconLightMode />}
    </button>
  );
};

export { ThemeToggle };
