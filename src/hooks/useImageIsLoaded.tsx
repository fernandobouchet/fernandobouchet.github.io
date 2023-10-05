import { useEffect, useState } from 'react';

const useImageIsLoaded = (src: string) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => setIsLoaded(true);
  }, [src]);

  return isLoaded;
};

export default useImageIsLoaded;
