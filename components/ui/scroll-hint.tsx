"use client";

import { useState, useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const ScrollHint = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const newOpacity = Math.max(0, 1 - currentScroll / 100);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (opacity === 0) return null;

  return (
    <div
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 pointer-events-none flex flex-col items-center gap-1"
      style={{ opacity }}
    >
      <span className="text-[10px] font-medium text-muted-foreground/60 uppercase tracking-widest">
        Scroll
      </span>
      <MdKeyboardArrowDown className="text-2xl text-primary/50 animate-bounce" />
    </div>
  );
};

export { ScrollHint };
