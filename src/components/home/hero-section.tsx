import { heroHighlights } from "@/components/home/landing-content";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="border-b border-border/70">
      <div className="mx-auto grid min-h-[calc(100dvh-4rem)] w-full max-w-7xl gap-12 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:px-10 lg:py-20">
        <div className="space-y-10">
          <div className="space-y-5">
            <span className="inline-flex w-fit rounded-full border border-secondary-border bg-secondary-soft px-4 py-1 text-xs font-medium tracking-[0.24em] text-secondary-foreground uppercase">
              2 小時工作坊
            </span>
            <div className="space-y-5">
              <h1 className="max-w-4xl text-balance font-heading text-[clamp(3.25rem,9vw,6.5rem)] leading-[0.94] tracking-[-0.04em] text-foreground">
                用 AI 做出
                <span className="block font-sans text-[0.78em] tracking-[-0.05em] text-primary">
                  能展示服務、收集名單、讓人主動聯絡你的專業網站
                </span>
              </h1>
              <p className="max-w-2xl text-pretty text-lg leading-8 text-muted-foreground sm:text-xl">
                如果你想替自己的服務、產品、個人品牌，或新點子做網站，卻一直卡在設計、文案、技術與頁面架構，這堂課會帶你走一條更短、更清楚的實作路徑。
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#waitlist"
              className={cn(
                buttonVariants({ size: "lg" }),
                "min-h-12 shadow-[0_20px_50px_var(--primary-shadow)]"
              )}
            >
              加入等候名單
            </a>
            <a
              href="#method"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "min-h-12")}
            >
              先看這堂課會怎麼帶
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {heroHighlights.map((item, index) => (
              <div
                key={item}
                className="landing-panel landing-reveal flex flex-col gap-4 rounded-[2rem] p-5"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <span className="text-xs font-medium tracking-[0.18em] text-primary uppercase">
                  0{index + 1}
                </span>
                <p className="text-sm leading-7 text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="landing-panel landing-grid-bg rounded-[2.5rem] p-6 sm:p-8">
          <div className="grid gap-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-medium tracking-[0.22em] text-primary uppercase">
                  Workshop Flow
                </p>
                <h2 className="mt-3 text-2xl font-heading tracking-tight text-foreground sm:text-3xl">
                  不只講工具，而是把網站真的做出來
                </h2>
              </div>
              <div className="landing-float rounded-[1.75rem] border border-primary-border bg-background/80 px-4 py-3 text-sm text-muted-foreground">
                有想知道的內容？
                <span className="mt-1 block text-base font-medium text-foreground">
                  先填表單，優先收到課程資訊與規劃進度。
                </span>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[2rem] border border-border/70 bg-background/90 p-5 sm:p-6">
                <p className="text-sm font-medium text-muted-foreground">第一段</p>
                <p className="mt-3 text-xl font-heading tracking-tight text-foreground">
                  釐清網站目標與頁面架構
                </p>
                <p className="mt-2 max-w-xl text-sm leading-7 text-muted-foreground">
                  先搞懂這個頁面要替你完成什麼，再決定要放哪些內容和 CTA。
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-[2rem] border border-secondary-border bg-secondary-soft p-5">
                  <p className="text-sm font-medium text-secondary-foreground">第二段</p>
                  <p className="mt-3 text-xl font-heading tracking-tight text-foreground">
                    把文案與畫面一起整理出來
                  </p>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    用 AI 拆出第一版文案，並把內容轉成能落地的版面結構。
                  </p>
                </div>

                <div className="rounded-[2rem] border border-primary-border bg-primary-subtle p-5">
                  <p className="text-sm font-medium text-primary">第三段</p>
                  <p className="mt-3 text-xl font-heading tracking-tight text-foreground">
                    做出第一版可上線頁面
                  </p>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    修掉模板感、補上表單與聯絡方式，讓它能開始幫你收集名單與接住詢問。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
