import { SectionShell } from "@/components/home/section-shell";
import { outlineItems } from "@/components/home/landing-content";

export function OutlineSection() {
  return (
    <SectionShell
      id="outline"
      eyebrow="Workshop Outline"
      title="這不是只講工具操作的課，而是帶你一步步把網站做出來的實作工作坊"
      description="從網站目標、內容結構，到畫面與 CTA 的安排，整個流程會照著真正做站時的順序展開。"
    >
      <div className="grid gap-5 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)]">
        <div className="landing-panel rounded-[2.5rem] p-6 sm:p-8">
          <p className="text-sm font-medium tracking-[0.18em] text-primary uppercase">
            End State
          </p>
          <p className="mt-5 text-3xl font-heading leading-tight tracking-tight text-foreground">
            你會帶著一套可以反覆用的流程離開，而不是只留下筆記。
          </p>
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            下次做新頁面時，你會更知道該先整理什麼、該怎麼把 AI 拉回正確方向，也知道網站上線之後下一步看哪裡。
          </p>
        </div>

        <ol className="grid gap-4">
          {outlineItems.map((item, index) => (
            <li
              key={item}
              className="landing-panel landing-reveal rounded-[2rem] p-5 sm:p-6"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <div className="grid gap-4 sm:grid-cols-[auto_1fr]">
                <span className="flex size-12 items-center justify-center rounded-full border border-primary-border bg-primary-subtle font-medium text-primary">
                  0{index + 1}
                </span>
                <p className="text-base leading-8 text-foreground">{item}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </SectionShell>
  );
}
