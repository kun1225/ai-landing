import { fitSignals } from "@/components/home/landing-content";
import { SectionShell } from "@/components/home/section-shell";

export function AudienceSection() {
  return (
    <SectionShell
      id="fit"
      eyebrow="適合誰"
      title="這堂工作坊比較適合這樣的人"
      description="你不一定是設計師或工程師，但你在意網站做出來不能廉價、不能太像模板，也不能一眼看出來只是把 AI 產出直接貼上去。"
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.84fr)] lg:gap-8">
        <div className="grid gap-4">
          {fitSignals.map((item, index) => (
            <div
              key={item.title}
              className="landing-reveal rounded-[2rem] border border-border/70 bg-background/80 p-5 sm:p-6"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <p className="text-sm font-medium tracking-[0.18em] text-primary uppercase">
                重點 0{index + 1}
              </p>
              <p className="mt-3 text-xl font-heading tracking-tight text-foreground">{item.title}</p>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="landing-panel rounded-[2.5rem] p-6 sm:p-8">
          <p className="text-sm font-medium tracking-[0.18em] text-primary uppercase">
            這不是什麼
          </p>
          <h3 className="mt-5 text-3xl font-heading leading-tight tracking-tight text-foreground">
            這不是教你怎麼讓 AI 一鍵生出一個看起來很滿的頁面。
          </h3>
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            這堂課比較像是把工作順序與判斷標準一起整理好，讓你知道每個區塊為什麼存在、哪些地方需要收斂、哪些地方會直接讓網站變得像模板。
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
