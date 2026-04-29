"use client";

import { useRef } from "react";
import {
  motion,
  type Variants,
  useAnimationControls,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import type { ComponentType } from "react";

import { painPoints } from "@/components/home/landing-content";
import { TypewriterHeading } from "@/components/home/typewriter-heading";
import { PageShell } from "@/components/layout/page-shell";

const PAIN_POINT_SCROLL_OFFSET = [
  "start 92%",
  "start 28%",
] satisfies NonNullable<Parameters<typeof useScroll>[0]>["offset"];
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
const ICON_DRAW_TRANSITION = {
  duration: 0.7,
  ease: "easeInOut",
} as const;
const ICON_DRAW_VARIANTS: Variants = {
  rest: {
    pathLength: 1,
    opacity: 1,
  },
  draw: {
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: ICON_DRAW_TRANSITION,
  },
};
const ICON_DOT_VARIANTS: Variants = {
  rest: {
    scale: 1,
    opacity: 1,
  },
  draw: {
    scale: [0, 1.18, 1],
    opacity: [0, 1],
    transition: { duration: 0.38, ease: "easeOut" },
  },
};

const iconComponents = {
  "repeated-cards": RepeatedCardsIcon,
  "misaligned-slider": MisalignedSliderIcon,
  "broken-code": BrokenCodeIcon,
  "branching-path": BranchingPathIcon,
} satisfies Record<
  (typeof painPoints)[number]["icon"],
  ComponentType<IconProps>
>;

type IconControls = ReturnType<typeof useAnimationControls>;

type IconProps = {
  controls: IconControls;
};

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
  const iconAnimationRunningRef = useRef(false);
  const shouldReduceMotion = useReducedMotion();
  const iconControls = useAnimationControls();
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

  const playIconDrawAnimation = async () => {
    if (iconAnimationRunningRef.current) {
      return;
    }

    iconAnimationRunningRef.current = true;
    iconControls.set("rest");
    await iconControls.start("draw");
    iconAnimationRunningRef.current = false;
  };

  return (
    <motion.article
      ref={cardRef}
      className="group relative min-h-72 overflow-hidden rounded-[2rem] border border-border/70 bg-secondary-subtle p-6 sm:min-h-80 sm:p-8"
      style={shouldReduceMotion ? undefined : { y, opacity, scale }}
      onHoverStart={playIconDrawAnimation}
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

      <div className="absolute -right-5 -bottom-6 text-primary/20 transition-colors duration-500 group-hover:text-primary/35">
        <Icon controls={iconControls} />
      </div>
    </motion.article>
  );
}

function RepeatedCardsIcon({ controls }: IconProps) {
  return (
    <motion.svg
      width="190"
      height="190"
      viewBox="0 0 190 190"
      fill="none"
      aria-hidden="true"
      initial="hidden"
      whileInView="visible"
      animate={controls}
      viewport={{ once: true }}
    >
      {[
        { y: 34, lines: ["M70 47H106", "M70 59H134", "M116 47H142"] },
        { y: 78, lines: ["M70 91H116", "M70 103H132", "M124 91H142"] },
        { y: 122, lines: ["M70 135H100", "M70 147H136", "M110 135H142"] },
      ].map((mockup, index) => (
        <motion.g
          key={mockup.y}
          variants={{
            hidden: { opacity: 0, y: 18 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: index * 0.12, duration: 0.42 },
            },
          }}
        >
          <motion.rect
            x="52"
            y={mockup.y}
            width="100"
            height="36"
            rx="8"
            stroke="currentColor"
            strokeWidth="3"
            variants={ICON_DRAW_VARIANTS}
          />
          {mockup.lines.map((line) => (
            <motion.path
              key={line}
              d={line}
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="3"
              variants={ICON_DRAW_VARIANTS}
            />
          ))}
          <motion.circle
            cx="62"
            cy={mockup.y + 8}
            r="2.5"
            fill="currentColor"
            variants={ICON_DOT_VARIANTS}
          />
        </motion.g>
      ))}
    </motion.svg>
  );
}

function MisalignedSliderIcon({ controls }: IconProps) {
  return (
    <motion.svg
      width="190"
      height="190"
      viewBox="0 0 190 190"
      fill="none"
      aria-hidden="true"
      initial="hidden"
      whileInView="visible"
      animate={controls}
      viewport={{ once: true }}
    >
      {[
        { y: 62, startX: 48, endX: 132, knobX: 92, hiddenY: -18, delay: 0.02 },
        { y: 100, startX: 48, endX: 144, knobX: 122, hiddenY: 18, delay: 0.12 },
        { y: 138, startX: 48, endX: 148, knobX: 82, hiddenY: -18, delay: 0.22 },
      ].map((slider) => (
        <g key={slider.y}>
          <motion.path
            d={`M${slider.startX} ${slider.y}H${slider.endX}`}
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="8"
            opacity="0.62"
            variants={ICON_DRAW_VARIANTS}
          />
          <motion.circle
            cx={slider.knobX}
            cy={slider.y}
            r="9"
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
            opacity="0.72"
            variants={{
              hidden: { y: slider.hiddenY, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  delay: slider.delay,
                  type: "spring",
                  stiffness: 170,
                  damping: 14,
                },
              },
              rest: {
                scale: 1,
                opacity: 1,
              },
              draw: {
                scale: [0.85, 1.12, 1],
                transition: { duration: 0.4, ease: "easeOut" },
              },
            }}
          />
        </g>
      ))}
    </motion.svg>
  );
}

function BrokenCodeIcon({ controls }: IconProps) {
  return (
    <motion.svg
      width="190"
      height="190"
      viewBox="0 0 190 190"
      fill="none"
      aria-hidden="true"
      initial="hidden"
      whileInView="visible"
      animate={controls}
      viewport={{ once: true }}
    >
      <motion.path
        d="M80 52C66 52 66 64 66 72V82C66 91 60 96 52 96C60 96 66 101 66 110V120C66 128 66 140 80 140"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
        variants={{
          hidden: { pathLength: 0, x: 12 },
          visible: { pathLength: 1, x: 0, transition: { duration: 0.58 } },
          draw: {
            pathLength: [0, 1],
            transition: ICON_DRAW_TRANSITION,
          },
        }}
      />
      <motion.path
        d="M110 52C124 52 124 64 124 72V82C124 91 130 96 138 96C130 96 124 101 124 110V120C124 128 124 140 110 140"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
        variants={{
          hidden: { pathLength: 0, x: -12 },
          visible: { pathLength: 1, x: 0, transition: { duration: 0.58 } },
          draw: {
            pathLength: [0, 1],
            transition: ICON_DRAW_TRANSITION,
          },
        }}
      />
      <motion.path
        d="M88 96H89M95 96H96M102 96H103"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="5"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: [0, 1, 0.35, 1],
            transition: { delay: 0.34, duration: 0.7 },
          },
          rest: {
            opacity: 1,
          },
          draw: {
            opacity: [0, 1, 0.35, 1],
            transition: { delay: 0.2, duration: 0.48 },
          },
        }}
      />
      <motion.path
        d="M139 55L153 69M153 55L139 69"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="4"
        variants={ICON_DRAW_VARIANTS}
      />
    </motion.svg>
  );
}

function BranchingPathIcon({ controls }: IconProps) {
  return (
    <motion.svg
      width="190"
      height="190"
      viewBox="0 0 190 190"
      fill="none"
      aria-hidden="true"
      initial="hidden"
      whileInView="visible"
      animate={controls}
      viewport={{ once: true }}
    >
      <motion.rect
        x="52"
        y="48"
        width="96"
        height="104"
        rx="14"
        stroke="currentColor"
        strokeWidth="4"
        variants={{
          hidden: { opacity: 0, y: 16 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.46 },
          },
          rest: {
            pathLength: 1,
            opacity: 1,
            y: 0,
          },
          draw: {
            pathLength: [0, 1],
            transition: ICON_DRAW_TRANSITION,
          },
        }}
      />
      <motion.path
        d="M84 78C88 62 112 62 116 78C120 95 100 98 100 113"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
        variants={ICON_DRAW_VARIANTS}
      />
      <motion.circle
        cx="100"
        cy="129"
        r="4"
        fill="currentColor"
        variants={ICON_DOT_VARIANTS}
      />
    </motion.svg>
  );
}
