"use client";
import { MorphingDialogImage } from "@/components/ui/morphing-dialog";
import useImageIsLoaded from "@/hooks/useImageIsLoaded";

interface Props {
  src: string;
  alt: string;
  className?: string;
}

const CardImage = ({ src, alt, className }: Props) => {
  const isLoaded = useImageIsLoaded(src);

  return (
    <div className="relative w-full h-48 rounded-2xl overflow-hidden">
      {!isLoaded && (
        <div className="absolute inset-0 z-10 bg-gray-200 animate-pulse rounded-b-2xl" />
      )}
      <MorphingDialogImage
        src={src}
        alt={alt}
        className={`w-full h-full object-cover rounded-b-2xl hover:scale-110 transition duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } ${className}}`}
      />
    </div>
  );
};
export { CardImage };
