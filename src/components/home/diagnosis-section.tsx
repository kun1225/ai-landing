import { diagnosisPoints } from "@/components/home/landing-content";
import { SectionShell } from "@/components/home/section-shell";

export function DiagnosisSection() {
  return (
    <SectionShell
      id="why"
      eyebrow="為什麼會有 AI 味"
      title="多數 AI 做的網站，問題通常不在 AI 本身"
      description="真正讓網站看起來有 AI 味的，通常不是工具，而是沒有整理過的主次、沒有收斂過的文案，以及缺少判斷的版面與細節。"
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:gap-8">
        <div className="space-y-5 rounded-[2.5rem] border border-border/70 bg-secondary-subtle p-6 sm:p-8">
          <p className="text-sm font-medium tracking-[0.18em] text-primary uppercase">
            常見問題
          </p>
          <h3 className="text-3xl font-heading leading-tight tracking-tight text-foreground">
            看起來像 AI 做的頁面，通常都有一種共通感。
          </h3>
          <p className="text-base leading-8 text-muted-foreground">
            它可能沒有明顯錯誤，但資訊順序不夠準、用字不夠像人、視覺沒有取捨，所以最後像是把可用元素拼起來，而不是把品牌整理出來。
          </p>
        </div>

        <div className="grid gap-3">
          {diagnosisPoints.map((item, index) => (
            <div
              key={item.title}
              className="landing-reveal rounded-[2rem] border border-border/70 bg-secondary-subtle p-5 sm:p-6"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="grid gap-4 sm:grid-cols-[auto_1fr]">
                <span className="flex size-11 items-center justify-center rounded-full border border-primary-border bg-primary-subtle text-sm font-medium text-primary">
                  0{index + 1}
                </span>
                <div className="space-y-2">
                  <h3 className="text-xl font-heading tracking-tight text-foreground">{item.title}</h3>
                  <p className="text-sm leading-7 text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
