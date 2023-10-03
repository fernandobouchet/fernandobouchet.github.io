import { useEffect, useState } from 'react';

function useIntersection(ref: React.MutableRefObject<null>) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    let isComponentUnmounted = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!isComponentUnmounted) {
          setIsIntersecting(entry.isIntersecting);
        }
      },
      { rootMargin: '-120px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      isComponentUnmounted = true;
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}

export default useIntersection;
