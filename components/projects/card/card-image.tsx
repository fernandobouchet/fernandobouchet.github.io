"use client";

import Image from "next/image";

interface Props {
  src: string;
  className?: string;
}

const CardImage = ({ src }: Props) => {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-2xl z-10">
      <Image
        src={src}
        alt=""
        fill
        className="object-cover scale-110 blur-xl brightness-50 dark:brightness-[0.25]"
      />
      <div className="absolute inset-0 bg-background/70 dark:bg-background/50" />
    </div>
  );
};
export { CardImage };
