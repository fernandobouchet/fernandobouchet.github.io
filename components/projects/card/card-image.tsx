"use client";
import { MorphingDialogImage } from "@/components/ui/morphing-dialog";

interface Props {
  src: string;
  alt: string;
  className?: string;
}

const CardImage = ({ src, alt, className }: Props) => {
  return (
    <div className="relative w-full h-48 rounded-2xl overflow-hidden">
      <MorphingDialogImage
        src={src}
        alt={alt}
        className={`w-full h-full object-cover rounded-b-2xl hover:scale-110 transition duration-500  ${className}}`}
      />
    </div>
  );
};
export { CardImage };
