import { comparisonRows } from "@/components/home/landing-content";
import { SectionShell } from "@/components/home/section-shell";

export function ComparisonSection() {
  return (
    <SectionShell
      id="comparison"
      eyebrow="Why This Format"
      title="這堂講座和其他免費資源差在哪？"
      description="問題通常不是資訊太少，而是缺一條能從目標、文案、畫面一路走到上線的完整路徑。"
    >
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)]">
        <div className="grid gap-4">
          {comparisonRows.map((row, index) => (
            <div
              key={row.label}
              className="landing-panel landing-reveal rounded-[2rem] p-5 sm:p-6"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="grid gap-4 sm:grid-cols-[minmax(0,11rem)_1fr]">
                <h3 className="text-2xl font-heading tracking-tight text-foreground">{row.label}</h3>
                <p className="text-sm leading-7 text-muted-foreground">{row.limitation}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="landing-panel rounded-[2.5rem] p-6 sm:p-8">
          <p className="text-sm font-medium tracking-[0.18em] text-primary uppercase">
            What This Workshop Adds
          </p>
          <p className="mt-5 text-3xl font-heading leading-tight tracking-tight text-foreground">
            有人帶你把整條路接起來。
          </p>
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            你不會只拿到零碎技巧，而是會一起把網站目標、文案、畫面與上線前該補的轉換設計整理完成，知道每一步為什麼做、下一步接什麼。
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
