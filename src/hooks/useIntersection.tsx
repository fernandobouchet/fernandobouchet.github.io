import { useEffect, useState, MutableRefObject } from 'react';

function useIntersection(refs: MutableRefObject<null>[]) {
  const [intersectionSectionId, setIntersectionSectionId] = useState<
    null | string
  >(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const intersectingEntry = entries.find((entry) => entry.isIntersecting);

        setIntersectionSectionId(
          intersectingEntry ? intersectingEntry.target.id : null
        );
      },
      { root: null, rootMargin: '0px', threshold: 0.5 }
    );

    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, [refs]);

  return intersectionSectionId;
}

export default useIntersection;
