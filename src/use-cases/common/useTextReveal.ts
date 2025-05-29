import { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const useTextReveal = () => {
  const textRef = useRef(null);
  useEffect(() => {
    const split = new SplitText(textRef.current, { type: "chars" });

    gsap.from(split.chars, {
      opacity: 0.3,
      duration: 1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: textRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });
  }, []);

  return {
    textRef,
  };
};
