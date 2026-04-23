import { SectionShell } from "@/components/home/section-shell";
import { takeaways } from "@/components/home/landing-content";

export function TakeawaysSection() {
  return (
    <SectionShell
      id="takeaways"
      eyebrow="Extra Gains"
      title="除了以上流程與方法，上完這堂課你還能學到"
      description="你會同時拿到工具視角、流程視角與設計視角，之後不只這次能做，未來做其他頁面也會更快。"
    >
      <div className="grid gap-5 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <div className="landing-panel rounded-[2.5rem] p-6 sm:p-8">
          <p className="text-sm font-medium tracking-[0.18em] text-primary uppercase">
            Why It Sticks
          </p>
          <p className="mt-5 text-3xl font-heading leading-tight tracking-tight text-foreground">
            你學到的不只是某一個工具的用法，而是一套能持續擴充的做站流程。
          </p>
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            後續不管你要做服務頁、活動頁，或是新的產品驗證頁，都能從這套流程延伸下去。
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {takeaways.map((item, index) => (
            <div
              key={item}
              className="landing-panel landing-reveal rounded-[2rem] p-5 sm:p-6"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <p className="text-sm font-medium tracking-[0.16em] text-muted-foreground uppercase">
                Learn {index + 1}
              </p>
              <p className="mt-3 text-xl font-heading tracking-tight text-foreground">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
