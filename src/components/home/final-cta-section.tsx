import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function FinalCtaSection() {
  return (
    <section className="border-t border-border/70 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="landing-panel rounded-[2.8rem] p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end">
            <div className="space-y-5">
              <p className="text-sm font-medium tracking-[0.18em] text-primary uppercase">
                Final Prompt
              </p>
              <h2 className="max-w-4xl text-balance font-heading text-4xl leading-tight tracking-tight text-foreground sm:text-5xl">
                你不缺靈感，而是缺一條能有架構做出網站的技能。
              </h2>
              <div className="max-w-3xl space-y-4 text-base leading-8 text-muted-foreground">
                <p>
                  如果你也想做出一個能清楚介紹自己、讓人留下資料、願意主動聯絡你的網站，那就先加入等候名單。
                </p>
                <p>
                  就算你現在還不確定要賣什麼、頁面怎麼規劃、文案怎麼寫，也沒關係。這堂課就是要幫你把那些卡住你的問題，一步一步拆開，讓你更快做出第一個能上線、能驗證、也能開始帶來機會的網站。
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:justify-self-end">
              <a
                href="#waitlist"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "min-h-12 min-w-56 shadow-[0_20px_50px_var(--primary-shadow)]"
                )}
              >
                加入等候名單
              </a>
              <a
                href="#outline"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "min-h-12 min-w-56")}
              >
                回到工作坊大綱
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
