import { painPoints } from "@/components/home/landing-content";
import { SectionShell } from "@/components/home/section-shell";

export function ProblemSection() {
  return (
    <SectionShell
      id="problem"
      eyebrow="Common Friction"
      title="你也想幫自己的事業做網站吸引客戶嗎？"
      description="很多人不是沒想法，而是每個關鍵環節都卡一點：內容不知道怎麼排、畫面不知道怎麼做、技術不知道怎麼上線，最後網站一直停在待辦清單。"
    >
      <div className="grid gap-4 md:grid-cols-2">
        {painPoints.map((item, index) => (
          <div
            key={item}
            className="landing-panel landing-reveal grid gap-6 rounded-[2rem] p-5 sm:grid-cols-[auto_1fr] sm:items-start sm:p-6"
            style={{ animationDelay: `${index * 90}ms` }}
          >
            <span className="flex size-12 items-center justify-center rounded-full border border-primary-border bg-primary-subtle font-medium text-primary">
              0{index + 1}
            </span>
            <div className="space-y-2">
              <p className="text-lg font-heading tracking-tight text-foreground">{item}</p>
              <p className="text-sm leading-7 text-muted-foreground">
                這些問題通常不是單點，而是會連在一起，讓你明明知道該有網站，卻很難開始。
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
