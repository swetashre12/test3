"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Power3 } from "gsap";

interface AnimateTextProps {
  texts?: string[];
  animationDuration?: number;
  delayBetweenAnimations?: number;
  className?: string;
}

const AnimateText: React.FC<AnimateTextProps> = ({
  texts = ["Web app", "Security", "Infrastructure", "AI"],
  animationDuration = 0.3,
  delayBetweenAnimations = 3000,
  className = "app-text"
}) => {
  const textRef = useRef<HTMLSpanElement | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let currentIndex = 0;

    const animateText = () => {
      currentIndex = (currentIndex + 1) % texts.length;

      if (textRef.current) {
        gsap.fromTo(
          textRef.current,
          { opacity: 0, y: -50 },
          {
            duration: animationDuration,
            opacity: 1,
            y: 0,
            ease: Power3.easeIn,
            onComplete: () => {
              timeoutRef.current = setTimeout(() => {
                if (textRef.current) {
                  gsap.to(textRef.current, {
                    duration: animationDuration,
                    opacity: 0,
                    ease: Power3.easeOut,
                    onComplete: () => {
                      if (textRef.current) {
                        textRef.current.textContent = texts[currentIndex];
                        animateText();
                      }
                    },
                  });
                }
              }, delayBetweenAnimations);
            },
          }
        );
      }
    };

    if (textRef.current) {
      textRef.current.textContent = texts[currentIndex];
      animateText();
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [texts, animationDuration, delayBetweenAnimations]);

  return (
    <span ref={textRef} className={className}>
      {texts[0]}
    </span>
  );
};

export default AnimateText;