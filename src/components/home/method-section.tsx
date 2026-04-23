import { methodSteps } from "@/components/home/landing-content";
import { SectionShell } from "@/components/home/section-shell";

export function MethodSection() {
  return (
    <SectionShell
      id="method"
      eyebrow="方法"
      title="這堂工作坊怎麼把 AI 粗稿拉回高品質"
      description="重點不是工具清單，而是順序。先把網站任務講清楚，再讓 AI 幫你出第一版，最後用判斷把質感、信任感和轉換路徑整理起來。"
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] lg:gap-8">
        <div className="landing-panel rounded-[2.5rem] p-6 sm:p-8">
          <p className="text-sm font-medium tracking-[0.16em] text-primary uppercase">
            核心轉換
          </p>
          <p className="mt-5 text-3xl font-heading leading-tight tracking-tight text-foreground">
            從「先叫 AI 生一版」
            <span className="mt-2 block font-sans text-2xl text-muted-foreground">
              到「我知道怎麼把它修成能代表我的網站」
            </span>
          </p>
          <p className="mt-5 text-base leading-8 text-muted-foreground">
            你會把目標、文案、畫面與收名單機制接起來，重點是知道每一步要判斷什麼，而不是只看 AI 當下吐出了什麼。
          </p>
        </div>

        <div className="grid gap-4">
          {methodSteps.map((step, index) => (
            <div
              key={step.title}
              className="landing-reveal rounded-[2rem] border border-border/70 bg-background/80 p-5 sm:p-6"
              style={{ animationDelay: `${index * 110}ms` }}
            >
              <div className="grid gap-4 sm:grid-cols-[auto_1fr]">
                <span className="flex size-12 items-center justify-center rounded-full border border-secondary-border bg-secondary-soft font-medium text-secondary-foreground">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-2xl font-heading tracking-tight text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
