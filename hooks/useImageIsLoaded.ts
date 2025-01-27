import { useEffect, useState } from "react";

const useImageIsLoaded = (src: string) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!src) return;

    const image = new Image();
    image.src = src;

    // Verifica si la imagen ya está cargada en caché
    if (image.complete) {
      setIsLoaded(true);
    } else {
      image.onload = () => setIsLoaded(true);
    }
  }, [src]);

  return isLoaded;
};

export default useImageIsLoaded;
