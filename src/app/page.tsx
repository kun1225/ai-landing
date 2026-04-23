import type { Metadata } from "next";

import { AudienceSection } from "@/components/home/audience-section";
import { ComparisonSection } from "@/components/home/comparison-section";
import { FinalCtaSection } from "@/components/home/final-cta-section";
import { HeroSection } from "@/components/home/hero-section";
import { MethodSection } from "@/components/home/method-section";
import { OutcomesSection } from "@/components/home/outcomes-section";
import { ProblemSection } from "@/components/home/problem-section";
import { ShowcaseSection } from "@/components/home/showcase-section";
import { SiteHeader } from "@/components/home/site-header";
import { TakeawaysSection } from "@/components/home/takeaways-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { OutlineSection } from "@/components/home/outline-section";
import { WaitlistSection } from "@/components/home/waitlist-section";

export const metadata: Metadata = {
  title: "2 小時用 AI 上線專業網站",
  description:
    "替服務、產品、個人品牌或新點子做出能展示內容、收集名單、讓人主動聯絡你的專業網站工作坊。",
};

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <ProblemSection />
        <MethodSection />
        <OutcomesSection />
        <AudienceSection />
        <TakeawaysSection />
        <ComparisonSection />
        <ShowcaseSection />
        <TestimonialsSection />
        <OutlineSection />
        <WaitlistSection />
        <FinalCtaSection />
      </main>
    </div>
  );
}
