"use client";
import { MorphingDialogImage } from "@/components/ui/morphing-dialog";
import useImageIsLoaded from "@/hooks/useImageIsLoaded";

interface Props {
  src: string;
  alt: string;
}

const CardImage = ({ src, alt }: Props) => {
  const isLoaded = useImageIsLoaded(src);

  return (
    <div className="relative w-full h-48">
      {!isLoaded && (
        <div className="absolute inset-0 z-10 bg-gray-200 animate-pulse rounded-b-2xl" />
      )}
      <MorphingDialogImage
        src={src}
        alt={alt}
        className={`w-full h-full object-cover rounded-b-2xl transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};
export { CardImage };
