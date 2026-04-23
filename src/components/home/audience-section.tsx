import { audiences } from "@/components/home/landing-content";
import { SectionShell } from "@/components/home/section-shell";

export function AudienceSection() {
  return (
    <SectionShell
      id="audience"
      eyebrow="Who It Fits"
      title="如果你現在正想把零散想法變成一個清楚、可信、可聯絡的網站"
      description="這堂講座是替想盡快做出第一版的人設計的。你不用有設計背景，也不用先會寫程式，只要你會使用 AI，就能跟上這套流程。"
    >
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.84fr)]">
        <div className="grid gap-4">
          {audiences.map((item, index) => (
            <div
              key={item}
              className="landing-panel landing-reveal rounded-[2rem] p-5 sm:p-6"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <p className="text-sm font-medium tracking-[0.18em] text-primary uppercase">
                Scenario 0{index + 1}
              </p>
              <p className="mt-3 text-base leading-8 text-foreground">{item}</p>
            </div>
          ))}
        </div>

        <div className="landing-panel rounded-[2.5rem] p-6 sm:p-8">
          <p className="text-sm font-medium tracking-[0.18em] text-primary uppercase">
            No Extra Prerequisite
          </p>
          <h3 className="mt-5 text-3xl font-heading leading-tight tracking-tight text-foreground">
            不是只有工程師或設計師才能做出像樣的網站。
          </h3>
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            這堂課會把工作順序與判斷標準一起整理好，所以你不是單純照著模板抄，而是知道每個區塊為什麼存在、要怎麼調整，網站才會更像你自己的門面。
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
