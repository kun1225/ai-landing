import Image from "next/image";

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
            <h2 className="max-w-xl text-balance font-heading text-3xl leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[3.1rem]">
              不靠模板堆疊，也能做出有自己語氣的第一版網站。
            </h2>
          </div>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-14 sm:gap-y-16 lg:grid-cols-12 lg:gap-y-20">
          {studentShowcaseItems.map((item, index) => (
            <article
              key={item.name}
              className={cn(
                "group landing-reveal flex self-start flex-col",
                item.layoutClassName,
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[1938/1198] overflow-hidden border border-primary-border bg-muted/40">
                <Image
                  src="/學員 Demo 1.png"
                  alt={`${item.name} 示意網站畫面`}
                  fill
                  sizes="(max-width: 1023px) 100vw, (max-width: 1536px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>

              <div className="mt-5">
                <p className="text-sm leading-6 text-foreground">{item.name}</p>
                <p className="mt-1 text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
                  {item.type}
                </p>
              </div>
            </article>
          ))}
        </div>
      </PageShell>
    </section>
  );
}
