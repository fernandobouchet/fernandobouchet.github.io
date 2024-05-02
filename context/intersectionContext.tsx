"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";

interface IntersectionContextType {
  intersectionSectionId: string | null;
  RegisterAndObserveElement: () => React.MutableRefObject<HTMLElement | null>;
}

const IntersectionContext = createContext<IntersectionContextType | undefined>(
  undefined
);

export const IntersectionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [intersectionSectionId, setIntersectionSectionId] = useState<
    string | null
  >(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const observedElements = useRef<HTMLElement[]>([]);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        const intersectingEntry = entries.find((entry) => entry.isIntersecting);

        setIntersectionSectionId(
          intersectingEntry ? intersectingEntry.target.id : null
        );
      },
      {
        root: null,
        rootMargin: "40px",
        threshold: 0.6,
      }
    );

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  const RegisterAndObserveElement =
    (): React.MutableRefObject<HTMLElement | null> => {
      const ref = useRef<HTMLElement | null>(null);

      useEffect(() => {
        const currentRef = ref.current;

        if (currentRef && !observedElements.current.includes(currentRef)) {
          observer.current?.observe(currentRef);
          observedElements.current.push(currentRef);
        }
        return () => {
          if (currentRef) {
            observer.current?.unobserve(currentRef);
            observedElements.current = observedElements.current.filter(
              (element) => element !== currentRef
            );
          }
        };
      }, []);

      return ref;
    };

  return (
    <IntersectionContext.Provider
      value={{ intersectionSectionId, RegisterAndObserveElement }}
    >
      {children}
    </IntersectionContext.Provider>
  );
};

export const useIntersection = (): IntersectionContextType => {
  const context = useContext(IntersectionContext);
  if (!context) {
    throw new Error(
      "useIntersection must be used within an IntersectionProvider"
    );
  }
  return context;
};
