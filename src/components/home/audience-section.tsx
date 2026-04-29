"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import { fitSignals } from "@/components/home/landing-content";
import { PageShell } from "@/components/layout/page-shell";

const CARD_SCROLL_OFFSETS: [number, number][] = [
  [0, 0.32],
  [0.09, 0.41],
  [0.18, 0.5],
];

export function AudienceSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={sectionRef}
      id="audience"
      className="scroll-mt-24 bg-background text-foreground"
    >
      <PageShell width="wide" className="py-64 sm:py-80 lg:py-96">
        <div className="space-y-4">
          <p className="text-xs font-medium tracking-[0.24em] text-muted-foreground uppercase">
            適合誰
          </p>
          <h2 className="max-w-2xl text-balance font-heading text-3xl leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[3.1rem]">
            這堂工作坊比較適合這樣的人
          </h2>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {fitSignals.map((item, index) => (
            <ScrollCard
              key={item.title}
              item={item}
              index={index}
              scrollYProgress={scrollYProgress}
              inputRange={CARD_SCROLL_OFFSETS[index]}
            />
          ))}
        </div>
      </PageShell>
    </section>
  );
}

type ScrollCardProps = {
  item: { title: string; description: string };
  index: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  inputRange: [number, number];
};

function ScrollCard({
  item,
  index,
  scrollYProgress,
  inputRange,
}: ScrollCardProps) {
  const y = useTransform(scrollYProgress, inputRange, [220, 0]);
  const opacity = useTransform(scrollYProgress, inputRange, [0, 1]);
  const borderOpacity = useTransform(
    scrollYProgress,
    [inputRange[1], inputRange[1] + 0.01],
    [0, 1],
  );

  return (
    <motion.div style={{ y, opacity }} className="relative pt-5">
      <div className="absolute inset-x-0 top-0 h-px bg-border/70" />
      <motion.div
        className="absolute inset-x-0 top-0 h-px bg-primary"
        style={{ opacity: borderOpacity }}
      />

      <p className="text-[11px] font-medium tracking-[0.22em] text-muted-foreground/60 uppercase">
        0{index + 1}
      </p>
      <p className="mt-4 font-heading text-xl leading-snug tracking-tight text-foreground">
        {item.title}
      </p>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">
        {item.description}
      </p>
    </motion.div>
  );
}
