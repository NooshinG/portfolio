import { useEffect, useRef, useState } from "react";

interface optionsType {
  root?: HTMLElement | null;
  rootMargin?: string;
  threshold?: number | number[];
}

export const useElementOnScreen = (
  //   ref: HTMLElement | null,
  options: optionsType = { root: null, rootMargin: "0px", threshold: [1] },
) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  // let isVisible: boolean = false;

  const callbackFunction = (entries: IntersectionObserverEntry[]) => {
    //   console.log(entries);
    const entry = entries[0];
    // console.log(entry);
    if (entry.isIntersecting && entry.intersectionRatio === 1 ) {
      setIsVisible(entry?.isIntersecting);
    }
    // isVisible = entry?.isIntersecting;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (ref.current) {
      observer.observe(ref.current);
      // observer.unobserve(ref.current);
    }

    return () => {
      // observer.disconnect();
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, isVisible };
};
