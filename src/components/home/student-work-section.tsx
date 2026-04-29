"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import { studentShowcaseItems } from "@/components/home/landing-content";
import { PageShell } from "@/components/layout/page-shell";
import { cn } from "@/lib/utils";

export function StudentWorkSection() {
  return (
    <section id="student-work" className="bg-background text-foreground">
      <PageShell width="wide" className="py-20 sm:py-24 lg:py-28">
        <div className="border-t border-border/70 pt-5">
          <div className="space-y-4">
            <p className="text-xs font-medium tracking-[0.24em] text-muted-foreground uppercase">
              學員作品
            </p>
            <h2 className="max-w-xl leading-[1.2em] text-pretty font-heading text-3xl text-foreground sm:text-4xl lg:text-5xl">
              不靠模板堆疊，也能做出有自己語氣的第一版網站。
            </h2>
          </div>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-12 sm:gap-y-14 lg:grid-cols-12 lg:gap-y-16">
          {studentShowcaseItems.map((item, index) => (
            <ShowcaseCard key={item.name} item={item} index={index} />
          ))}
        </div>
      </PageShell>
    </section>
  );
}

type ShowcaseItem = (typeof studentShowcaseItems)[number];

type ShowcaseCardProps = {
  item: ShowcaseItem;
  index: number;
};

function ShowcaseCard({ item, index }: ShowcaseCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const variant = index % 2;

  const revealEnd = variant === 0 ? 0.56 : 0.5;
  const startY = variant === 0 ? 200 : 100;
  const startScale = 0.9;
  const startOpacity = 0;
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 90%", "start 10%"],
  });
  const y = useTransform(scrollYProgress, [0, revealEnd, 1], [startY, 0, 0]);
  const opacity = useTransform(
    scrollYProgress,
    [0, revealEnd],
    [startOpacity, 1],
  );
  const scale = useTransform(
    scrollYProgress,
    [0, revealEnd, 1],
    [startScale, 1, 1],
  );

  return (
    <motion.article
      ref={cardRef}
      className={cn("group flex self-start flex-col", item.layoutClassName)}
      style={{ y, opacity, scale }}
    >
      <div className="relative  overflow-hidden border border-primary-border bg-muted/40">
        <div className="relative size-full aspect-video">
          <Image
            src="/學員 Demo 1.png"
            alt={`${item.name} 示意網站畫面`}
            fill
            sizes="(max-width: 1023px) 100vw, (max-width: 1536px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
        </div>
      </div>

      <div className="mt-4">
        <p className="text-[13px] leading-5 text-foreground">{item.name}</p>
        <p className="mt-0.5 text-[10px] leading-4 tracking-[0.16em] text-muted-foreground uppercase">
          {item.type}
        </p>
      </div>
    </motion.article>
  );
}
