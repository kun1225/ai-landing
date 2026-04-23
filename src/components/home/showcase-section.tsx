import { SectionShell } from "@/components/home/section-shell";
import { showcaseItems } from "@/components/home/landing-content";

export function ShowcaseSection() {
  return (
    <SectionShell
      id="showcase"
      eyebrow="Student Output"
      title="學員作品"
      description="從個人品牌頁、服務介紹頁，到能收集名單的活動頁，這些都是學員在工作坊中做出的第一版網站。不是只停在概念，而是能真的拿去展示、收集回饋、開始接住機會。"
    >
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div className="landing-panel landing-grid-bg rounded-[2.75rem] p-4 sm:p-6">
          <div className="rounded-[2.1rem] border border-border/70 bg-background/92 p-5 sm:p-7">
            <div className="flex items-center gap-2">
              <span className="size-3 rounded-full bg-primary" />
              <span className="size-3 rounded-full bg-secondary-border" />
              <span className="size-3 rounded-full bg-tertiary-border" />
            </div>
            <div className="mt-8 grid gap-4">
              <div className="rounded-[1.75rem] border border-primary-border bg-primary-subtle p-5">
                <p className="text-sm font-medium text-primary">Homepage direction</p>
                <p className="mt-3 text-2xl font-heading tracking-tight text-foreground">
                  清楚告訴別人你提供什麼，並且讓人知道下一步去哪裡。
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
                <div className="rounded-[1.75rem] border border-secondary-border bg-secondary-soft p-5">
                  <p className="text-sm font-medium text-secondary-foreground">Content blocks</p>
                  <p className="mt-3 text-base leading-8 text-foreground">
                    服務介紹、信任訊號、流程說明與 CTA 各自在自己的區塊裡，讓頁面更容易掃讀。
                  </p>
                </div>
                <div className="rounded-[1.75rem] border border-border/70 bg-card p-5">
                  <p className="text-sm font-medium text-muted-foreground">Lead capture</p>
                  <p className="mt-3 text-base leading-8 text-foreground">
                    表單、聯絡按鈕與後續邀請不再散落在不同地方。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          {showcaseItems.map((item, index) => (
            <div
              key={item.title}
              className="landing-panel landing-reveal rounded-[2rem] p-5 sm:p-6"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <p className="text-sm font-medium tracking-[0.18em] text-primary uppercase">
                Type 0{index + 1}
              </p>
              <h3 className="mt-3 text-2xl font-heading tracking-tight text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
