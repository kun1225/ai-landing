import { HeroTypewriter } from "@/components/home/hero-typewriter";
import { Button } from "@/components/ui/button";

const heroKeywords = ["作品集網站", "品牌網站", "預約網站"];

export function HeroSection() {
  return (
    <section className="border-b border-border/70">
      <div className="mx-auto flex min-h-[calc(100dvh-4rem)] w-full max-w-5xl items-center justify-center px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="flex max-w-4xl flex-col items-center text-center">
          <div className="landing-reveal space-y-7">
            <h1 className="text-balance text-[clamp(3rem,8vw,6rem)] font-semibold leading-[1.08] tracking-[-0.06em] text-foreground">
              <span className="block">不寫一行程式</span>
              <span className="block">2 小時用 AI 上線你的</span>
              <span className="mt-7 block text-[clamp(3.9rem,9.4vw,6.9rem)] leading-[0.92] text-primary">
                <span className="font-serif italic">
                  <HeroTypewriter words={heroKeywords} />
                </span>
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-pretty text-lg leading-8 text-muted-foreground sm:text-xl">
              從想法到可上線首頁，用更少時間做出真的能代表你的網站。
            </p>
          </div>

          <div className="landing-reveal mt-10" style={{ animationDelay: "120ms" }}>
            <Button
              render={<a href="#waitlist" />}
              nativeButton={false}
              size="lg"
              className="min-h-12 px-6 shadow-[0_20px_50px_var(--primary-shadow)]"
            >
              加入候補名單
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
