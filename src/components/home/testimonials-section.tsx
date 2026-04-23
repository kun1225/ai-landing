import { SectionShell } from "@/components/home/section-shell";
import { testimonialItems } from "@/components/home/landing-content";

export function TestimonialsSection() {
  return (
    <SectionShell
      id="testimonials"
      eyebrow="Feedback"
      title="課程評價"
      description="不是學一堆工具名稱，而是有人帶你把網站目標、文案、畫面與上線流程真的接起來。"
    >
      <div className="grid gap-5 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <div className="landing-panel rounded-[2.5rem] p-6 sm:p-8">
          <p className="text-sm font-medium tracking-[0.18em] text-primary uppercase">
            Shared Pattern
          </p>
          <p className="mt-5 text-3xl font-heading leading-tight tracking-tight text-foreground">
            最有感的通常不是又多學了一個工具，而是第一次把網站真的推進到可用狀態。
          </p>
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            評價裡反覆出現的關鍵字都是同一件事：更知道怎麼規劃、更像自己的內容、以及一個能拿去驗證市場的第一版頁面。
          </p>
        </div>

        <div className="grid gap-4">
          {testimonialItems.map((item, index) => (
            <blockquote
              key={item.title}
              className="landing-panel landing-reveal rounded-[2rem] p-5 sm:p-6"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <p className="text-sm font-medium tracking-[0.16em] text-primary uppercase">
                {item.title}
              </p>
              <p className="mt-4 text-base leading-8 text-foreground">{item.quote}</p>
            </blockquote>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
