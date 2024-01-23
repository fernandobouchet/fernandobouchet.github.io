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
      { rootMargin: '-150px' }
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
