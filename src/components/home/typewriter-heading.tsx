"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

type TypewriterHeadingProps = {
  text: string;
  typingDelayMs?: number;
};

const DEFAULT_TYPING_DELAY_MS = 40;

export function TypewriterHeading({
  text,
  typingDelayMs = DEFAULT_TYPING_DELAY_MS,
}: TypewriterHeadingProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });
  const shouldReduceMotion = useReducedMotion();
  const [visibleLength, setVisibleLength] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion || !isInView || visibleLength >= text.length) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setVisibleLength((currentLength) =>
        Math.min(currentLength + 1, text.length),
      );
    }, typingDelayMs);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isInView, shouldReduceMotion, text, typingDelayMs, visibleLength]);

  const visibleText = shouldReduceMotion ? text : text.slice(0, visibleLength);

  return (
    <span ref={containerRef} className="relative inline-grid align-top">
      <span className="invisible [grid-area:1/1]">{text}</span>
      <span aria-hidden="true" className="whitespace-pre-wrap [grid-area:1/1]">
        {visibleText}
        <span className="typewriter-cursor ml-1 inline-block h-[0.9em] w-px align-[-0.08em]" />
      </span>
      <span className="sr-only">{text}</span>
    </span>
  );
}
