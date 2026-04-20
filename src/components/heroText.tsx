'use client'

import React, { useRef } from "react";
import { gsap } from "gsap";
import { SplitText as GSAPSplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(GSAPSplitText);

const HeroText: React.FC = () => {
  const textRef = useRef<HTMLParagraphElement>(null);
  const texts: string[] = ["I Am Akinola Victor", "I Am Glad to Meet You"];
  const currentIndex = useRef<number>(0);

  useGSAP(() => {
    if (!textRef.current) return;

    const animateText = (newText: string): void => {
      if (!textRef.current) return;

      textRef.current.textContent = newText;

      const split = new GSAPSplitText(textRef.current, { type: "chars" });
      const chars = split.chars;

      gsap.set(chars, { opacity: 0, y: 20 });

      gsap.to(chars, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.05,
        onComplete: () => {
          gsap.delayedCall(2, () => {
            currentIndex.current = (currentIndex.current + 1) % texts.length;
            split.revert();
            animateText(texts[currentIndex.current]);
          });
        },
      });
    };

    animateText(texts[currentIndex.current]);
  }, []);

  return (
    <p
      ref={textRef}
      className="font-semibold text-2xl home-logo lg:text-4xl text-center"
      style={{ overflow: "hidden" }}
    >
      I Am Akinola Victor
    </p>
  );
};

export default HeroText;