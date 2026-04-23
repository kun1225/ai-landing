import { outcomePoints } from "@/components/home/landing-content";
import { SectionShell } from "@/components/home/section-shell";

export function OutcomesSection() {
  return (
    <SectionShell
      id="outcomes"
      eyebrow="What You Leave With"
      title="這堂課不只讓你上手 AI 開發，也幫你做出一個可上線專業網站"
      description="做完之後，你手上不只會有一套方法，還會有一個真的能展示、能說服、也能推動下一步行動的第一版網站。"
    >
      <div className="grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="landing-panel rounded-[2.5rem] p-6 sm:p-8">
          <p className="text-sm font-medium tracking-[0.18em] text-primary uppercase">
            Core Result
          </p>
          <p className="mt-6 max-w-xl text-4xl font-heading leading-tight tracking-tight text-foreground">
            不只是做出一個好看的頁面，而是做出一個能幫你接住機會的入口。
          </p>
          <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground">
            你會知道網站該怎麼安排資訊、怎麼寫得更像你自己、怎麼把 CTA 與名單機制補上，讓它開始發揮作用。
          </p>
        </div>

        <div className="grid gap-4">
          {outcomePoints.map((item, index) => (
            <div
              key={item}
              className="landing-panel landing-reveal rounded-[2rem] p-5 sm:p-6"
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
