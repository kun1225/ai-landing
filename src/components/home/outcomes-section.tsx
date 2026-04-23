import { resultPoints, resultProof } from "@/components/home/landing-content";
import { SectionShell } from "@/components/home/section-shell";

export function OutcomesSection() {
  return (
    <SectionShell
      id="results"
      eyebrow="你會得到什麼"
      title="你最後會帶走什麼"
      description="不是一堆零散 prompt，也不是一個暫時看起來很滿的頁面，而是一個更像你自己、也更接近可上線狀態的第一版網站。"
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-8">
        <div className="landing-panel rounded-[2.5rem] p-6 sm:p-8">
          <p className="text-sm font-medium tracking-[0.18em] text-primary uppercase">
            最核心的結果
          </p>
          <p className="mt-6 max-w-xl text-4xl font-heading leading-tight tracking-tight text-foreground">
            不是只讓網站變漂亮，而是讓它更清楚、更可信，也更能推動下一步。
          </p>
          <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground">
            你會比較清楚網站該怎麼安排資訊、怎麼把文案寫得更像你自己、怎麼補齊 CTA 與名單機制，讓它開始發揮作用。
          </p>

          <div className="mt-8 grid gap-3">
            {resultProof.map((item) => (
              <div key={item.label} className="rounded-[1.6rem] border border-border/70 bg-background/90 p-4">
                <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
                <p className="mt-2 text-base leading-7 text-foreground">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          {resultPoints.map((item, index) => (
            <div
              key={item}
              className="landing-reveal rounded-[2rem] border border-border/70 bg-background/80 p-5 sm:p-6"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="grid gap-3 sm:grid-cols-[auto_1fr]">
                <span className="mt-1 h-3 w-14 rounded-full bg-primary" />
                <p className="text-base leading-8 text-foreground sm:text-lg">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
