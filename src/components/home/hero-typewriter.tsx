"use client";

import { useEffect, useMemo, useState } from "react";

type HeroTypewriterProps = {
  words: string[];
};

const TYPE_DELAY_MS = 140;
const DELETE_DELAY_MS = 90;
const HOLD_DELAY_MS = 1600;
const NEXT_WORD_DELAY_MS = 220;

export function HeroTypewriter({ words }: HeroTypewriterProps) {
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [visibleLength, setVisibleLength] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const longestWord = useMemo(
    () => words.reduce((longest, word) => (word.length > longest.length ? word : longest), words[0] ?? ""),
    [words]
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotionPreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    syncMotionPreference();
    mediaQuery.addEventListener("change", syncMotionPreference);

    return () => {
      mediaQuery.removeEventListener("change", syncMotionPreference);
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || words.length <= 1) {
      return;
    }

    const activeWord = words[activeWordIndex] ?? "";
    const hasTypedFullWord = visibleLength === activeWord.length;
    const hasDeletedWord = visibleLength === 0;

    let delay = isDeleting ? DELETE_DELAY_MS : TYPE_DELAY_MS;

    if (!isDeleting && hasTypedFullWord) {
      delay = HOLD_DELAY_MS;
    }

    if (isDeleting && hasDeletedWord) {
      delay = NEXT_WORD_DELAY_MS;
    }

    const timeoutId = window.setTimeout(() => {
      if (!isDeleting && hasTypedFullWord) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && hasDeletedWord) {
        setIsDeleting(false);
        setActiveWordIndex((currentIndex) => (currentIndex + 1) % words.length);
        return;
      }

      setVisibleLength((currentLength) => currentLength + (isDeleting ? -1 : 1));
    }, delay);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [activeWordIndex, isDeleting, prefersReducedMotion, visibleLength, words]);

  const visibleWord = prefersReducedMotion
    ? words[0] ?? ""
    : (words[activeWordIndex] ?? "").slice(0, visibleLength);

  return (
    <span className="relative inline-grid align-top">
      <span className="invisible [grid-area:1/1]">{longestWord}</span>
      <span aria-hidden="true" className="whitespace-nowrap [grid-area:1/1]">
        {visibleWord}
        {!prefersReducedMotion ? (
          <span className="ml-1 inline-block h-[0.9em] w-px animate-pulse bg-current align-[-0.08em]" />
        ) : null}
      </span>
      <span className="sr-only">{words.join("、")}</span>
    </span>
  );
}
