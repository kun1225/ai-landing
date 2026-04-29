import { HeroTypewriter } from "@/components/home/hero-typewriter";
import { PageShell } from "@/components/layout/page-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const heroKeywords = [
  "作品集網站",
  "品牌形象網站",
  "服務預約網站",
  "產品介紹網站",
];

export function HeroSection() {
  return (
    <section>
      <PageShell
        width="narrow"
        className="flex min-h-[calc(100dvh-4rem)] items-center justify-center py-16 sm:py-20 lg:py-24"
      >
        <div className="flex max-w-4xl flex-col items-center text-center">
          <div className="landing-reveal flex flex-col items-center">
            <Badge variant="secondary">線上工作坊</Badge>

            <h1 className="mt-6 text-balance text-[clamp(2.5rem,6.5vw,5rem)] font-semibold leading-[1.2em] tracking-[-0.06em] text-foreground">
              <span className="block">不寫一行程式</span>
              <span className="block">3 小時用 AI 上線你的</span>
              <span className=" block text-[clamp(3rem,7vw,5.5rem)] text-primary">
                <span className="font-serif italic">
                  <HeroTypewriter words={heroKeywords} />
                </span>
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-pretty mt-12 text-muted-foreground sm:text-xl">
              從「做得出來」到「做得專業」：給程式小白的 AI 網頁設計指南
            </p>
          </div>

          <div
            className="landing-reveal mt-12 flex flex-col items-center gap-4"
            style={{ animationDelay: "120ms" }}
          >
            <Button
              render={<a href="#waitlist" />}
              nativeButton={false}
              size="lg"
              className="min-h-12 px-6 shadow-[0_20px_50px_var(--primary-shadow)]"
            >
              加入候補名單
            </Button>
            <p className="mt-2 whitespace-nowrap text-sm leading-[2em] text-muted-foreground">
              工作坊預計限量 100 位
              <br />
              填寫表單獲得最新資訊與優先報名資格
            </p>
          </div>
        </div>
      </PageShell>
    </section>
  );
}
