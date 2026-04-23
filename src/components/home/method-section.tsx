import { methodSteps } from "@/components/home/landing-content";
import { SectionShell } from "@/components/home/section-shell";

export function MethodSection() {
  return (
    <SectionShell
      id="method"
      eyebrow="Working Method"
      title="只需要按照以下步驟"
      description="課程的重點不是把工具清單塞給你，而是帶你照著順序把網站做出來。每一步都在替下一步鋪路，所以不會只停在抽象概念。"
    >
      <div className="grid gap-5 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] lg:gap-8">
        <div className="landing-panel rounded-[2.5rem] p-6 sm:p-8">
          <p className="text-sm font-medium tracking-[0.16em] text-primary uppercase">
            What Changes
          </p>
          <p className="mt-5 text-3xl font-heading leading-tight tracking-tight text-foreground">
            從「我好像應該做網站」
            <span className="mt-2 block font-sans text-2xl text-muted-foreground">
              到「我知道先做什麼，下一步也知道怎麼做」
            </span>
          </p>
          <p className="mt-5 text-base leading-8 text-muted-foreground">
            你會把目標、文案、畫面與收名單機制接起來，學到一套能反覆用在未來專案上的方法，而不是只做完一頁就結束。
          </p>
        </div>

        <div className="grid gap-4">
          {methodSteps.map((step, index) => (
            <div
              key={step.title}
              className="landing-panel landing-reveal rounded-[2rem] p-5 sm:p-6"
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
