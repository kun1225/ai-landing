"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import type { ComponentType } from "react";

import { painPoints } from "@/components/home/landing-content";
import { TypewriterHeading } from "@/components/home/typewriter-heading";
import { PageShell } from "@/components/layout/page-shell";

const PAIN_POINT_SCROLL_OFFSET: [string, string] = ["start 92%", "start 28%"];
const PAIN_POINT_REVEAL_END_BASE = 0.58;
const PAIN_POINT_REVEAL_END_STEP = 0.05;
const PAIN_POINT_START_Y_BASE = 88;
const PAIN_POINT_START_Y_STEP = 12;
const PAIN_POINT_START_OPACITY = 0.1;
const PAIN_POINT_START_SCALE = 0.96;
const PAIN_POINT_SPRING = {
  stiffness: 120,
  damping: 30,
  mass: 0.95,
} as const;
const PAIN_POINTS_HEADING = "想幫自己的產品、服務或品牌製作網站，但⋯⋯";

const iconComponents = {
  "repeated-cards": RepeatedCardsIcon,
  "misaligned-slider": MisalignedSliderIcon,
  "broken-code": BrokenCodeIcon,
  "branching-path": BranchingPathIcon,
} satisfies Record<(typeof painPoints)[number]["icon"], ComponentType>;

export function PainPointsSection() {
  return (
    <section id="fit" className="scroll-mt-24 bg-background text-foreground">
      <PageShell width="wide" className="py-20 sm:py-24 lg:py-28">
        <h2 className="text-pretty font-heading text-3xl text-foreground sm:text-4xl lg:text-5xl">
          <TypewriterHeading text={PAIN_POINTS_HEADING} />
        </h2>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:gap-5">
          {painPoints.map((item, index) => (
            <PainPointCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </PageShell>
    </section>
  );
}

type PainPoint = (typeof painPoints)[number];

type PainPointCardProps = {
  item: PainPoint;
  index: number;
};

function PainPointCard({ item, index }: PainPointCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const Icon = iconComponents[item.icon];
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: PAIN_POINT_SCROLL_OFFSET,
  });

  const revealEnd =
    PAIN_POINT_REVEAL_END_BASE + index * PAIN_POINT_REVEAL_END_STEP;
  const rawY = useTransform(
    scrollYProgress,
    [0, revealEnd, 1],
    [PAIN_POINT_START_Y_BASE + index * PAIN_POINT_START_Y_STEP, 0, 0],
  );
  const rawOpacity = useTransform(
    scrollYProgress,
    [0, revealEnd],
    [PAIN_POINT_START_OPACITY, 1],
  );
  const rawScale = useTransform(
    scrollYProgress,
    [0, revealEnd, 1],
    [PAIN_POINT_START_SCALE, 1, 1],
  );

  const y = useSpring(rawY, PAIN_POINT_SPRING);
  const opacity = useSpring(rawOpacity, PAIN_POINT_SPRING);
  const scale = useSpring(rawScale, PAIN_POINT_SPRING);

  return (
    <motion.article
      ref={cardRef}
      className="group relative min-h-72 overflow-hidden rounded-[2rem] border border-border/70 bg-secondary-subtle p-6 sm:min-h-80 sm:p-8"
      style={shouldReduceMotion ? undefined : { y, opacity, scale }}
    >
      <div className="relative z-10 max-w-md">
        <p className="text-[11px] font-medium tracking-[0.22em] text-primary uppercase">
          0{index + 1}
        </p>
        <h3 className="mt-5 max-w-sm font-heading text-2xl leading-snug tracking-tight text-foreground">
          {item.title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
          {item.description}
        </p>
      </div>

      <div className="pointer-events-none absolute -right-5 -bottom-6 text-primary/20 transition-colors duration-500 group-hover:text-primary/35">
        <Icon />
      </div>
    </motion.article>
  );
}

function RepeatedCardsIcon() {
  return (
    <motion.svg
      width="190"
      height="190"
      viewBox="0 0 190 190"
      fill="none"
      aria-hidden="true"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {[0, 1, 2].map((item) => (
        <motion.g
          key={item}
          variants={{
            hidden: { opacity: 0, x: 18, y: 12 },
            visible: {
              opacity: 1,
              x: item * -16,
              y: item * -14,
              transition: { delay: item * 0.12, duration: 0.42 },
            },
          }}
        >
          <rect
            x="70"
            y="72"
            width="86"
            height="64"
            rx="14"
            stroke="currentColor"
            strokeWidth="3"
          />
          <circle cx="92" cy="95" r="7" fill="currentColor" />
          <path
            d="M112 94H140M92 115H140"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="3"
          />
        </motion.g>
      ))}
    </motion.svg>
  );
}

function MisalignedSliderIcon() {
  return (
    <motion.svg
      width="190"
      height="190"
      viewBox="0 0 190 190"
      fill="none"
      aria-hidden="true"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <path
        d="M46 82H148"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="4"
      />
      <path
        d="M58 112H160"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="4"
      />
      <motion.circle
        cx="118"
        cy="82"
        r="13"
        fill="currentColor"
        variants={{
          hidden: { x: -34, opacity: 0 },
          visible: {
            x: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 160, damping: 14 },
          },
        }}
      />
      <motion.circle
        cx="82"
        cy="125"
        r="13"
        fill="currentColor"
        variants={{
          hidden: { y: -13, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 180, damping: 10 },
          },
        }}
      />
      <path
        d="M150 58L162 70M162 58L150 70"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="4"
      />
    </motion.svg>
  );
}

function BrokenCodeIcon() {
  return (
    <motion.svg
      width="190"
      height="190"
      viewBox="0 0 190 190"
      fill="none"
      aria-hidden="true"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.path
        d="M76 58C60 64 52 75 52 91C52 107 60 118 76 124"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="5"
        variants={{
          hidden: { pathLength: 0, x: 10 },
          visible: { pathLength: 1, x: 0, transition: { duration: 0.58 } },
        }}
      />
      <motion.path
        d="M114 58C130 64 138 75 138 91C138 107 130 118 114 124"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="5"
        variants={{
          hidden: { pathLength: 0, x: -10 },
          visible: { pathLength: 1, x: 0, transition: { duration: 0.58 } },
        }}
      />
      <motion.path
        d="M84 92H94M106 92H116"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="5"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: [0, 1, 0.35, 1],
            transition: { delay: 0.34, duration: 0.7 },
          },
        }}
      />
      <path
        d="M124 136H152M138 122V150"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="4"
      />
    </motion.svg>
  );
}

function BranchingPathIcon() {
  return (
    <motion.svg
      width="190"
      height="190"
      viewBox="0 0 190 190"
      fill="none"
      aria-hidden="true"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <circle cx="52" cy="96" r="11" fill="currentColor" />
      <motion.path
        d="M64 96H102M102 96L136 62M102 96H148M102 96L136 130"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
        variants={{
          hidden: { pathLength: 0 },
          visible: { pathLength: 1, transition: { duration: 0.9 } },
        }}
      />
      <circle cx="148" cy="62" r="10" stroke="currentColor" strokeWidth="4" />
      <path
        d="M144 96H152M148 92V100M144 130H152M148 126V134"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="4"
      />
    </motion.svg>
  );
}
