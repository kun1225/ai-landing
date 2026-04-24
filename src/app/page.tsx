import type { Metadata } from "next";

import { AudienceSection } from "@/components/home/audience-section";
import { DiagnosisSection } from "@/components/home/diagnosis-section";
import { HeroSection } from "@/components/home/hero-section";
import { MethodSection } from "@/components/home/method-section";
import { OutcomesSection } from "@/components/home/outcomes-section";
import { SiteHeader } from "@/components/home/site-header";
import { StudentWorkSection } from "@/components/home/student-work-section";
import { WaitlistSection } from "@/components/home/waitlist-section";

export const metadata: Metadata = {
  title: "用 AI 做出沒有 AI 味的高品質網站",
  description:
    "給在意網站質感與完成度的人，學會用 AI 做出更像自己、沒有模板感的第一版網站。",
};

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <StudentWorkSection />
        <AudienceSection />
        <DiagnosisSection />
        <MethodSection />
        <OutcomesSection />
        <WaitlistSection />
      </main>
    </div>
  );
}
