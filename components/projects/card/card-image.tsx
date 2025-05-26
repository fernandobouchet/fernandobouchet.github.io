"use client";

import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  className?: string;
}

const CardImage = ({ src, alt }: Props) => {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-2xl">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover scale-110 blur-xl brightness-[0.2] saturate-[1.2] dark:brightness-[0.25] dark:saturate-100"
      />
      <div className="absolute inset-0 bg-background/50 dark:bg-background/50" />
    </div>
  );
};
export { CardImage };
