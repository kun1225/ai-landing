import { SectionShell } from "@/components/home/section-shell";
import { waitlistFields } from "@/components/home/landing-content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function WaitlistSection() {
  return (
    <SectionShell
      id="waitlist"
      eyebrow="候補名單"
      title="如果你也想做出沒有 AI 味的第一版網站"
      description="加入候補名單，告訴我你現在卡在哪裡。我會優先通知你課程規劃進度，後續若安排訪談或諮詢，也會先從名單中邀請。"
    >
      <div className="grid gap-5 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)]">
        <div className="landing-panel rounded-[2.5rem] p-6 sm:p-8">
          <p className="text-sm font-medium tracking-[0.18em] text-primary uppercase">
            為什麼先留名單
          </p>
          <p className="mt-5 text-3xl font-heading leading-tight tracking-tight text-foreground">
            如果你在意的是質感、完成度與信任感，這份名單就是用來先接住這些需求。
          </p>
          <ul className="mt-6 grid gap-4 text-sm leading-7 text-muted-foreground">
            <li className="landing-panel rounded-[1.75rem] border border-secondary-border bg-secondary-soft p-4">
              你會優先收到課程規劃更新與開課通知。
            </li>
            <li className="landing-panel rounded-[1.75rem] border border-border/70 bg-background/90 p-4">
              如果後續安排訪談或諮詢，會優先從名單中邀請。
            </li>
            <li className="landing-panel rounded-[1.75rem] border border-border/70 bg-background/90 p-4">
              不會寄銷售信，只會在課程規劃更新或需要進一步了解需求時聯絡你。
            </li>
          </ul>
        </div>

        <div className="landing-panel rounded-[2.5rem] p-6 sm:p-8">
          <form className="grid gap-5">
            {waitlistFields.map((field) => (
              <div key={field.id} className="grid gap-3">
                <Label htmlFor={field.id} className="text-sm font-medium text-foreground">
                  {field.label}
                </Label>
                <Input
                  id={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  className="min-h-12 rounded-[1.4rem] border border-border/70 bg-background/90 px-4 text-foreground"
                />
              </div>
            ))}

            <div className="grid gap-3">
              <Label htmlFor="motivation" className="text-sm font-medium text-foreground">
                為什麼想做網站？
              </Label>
              <Textarea
                id="motivation"
                placeholder="你現在卡在哪裡、想做什麼類型的網站、最想優先解決的問題是什麼？"
                className="min-h-36 rounded-[1.6rem] border border-border/70 bg-background/90 px-4 py-4 text-foreground"
              />
            </div>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-md text-sm leading-7 text-muted-foreground">
                目前先開放候補名單登記介面，之後若確定開課方向，會先從這份名單回頭確認需求。
              </p>
              <Button type="button" size="lg" className="min-h-12 shadow-[0_20px_50px_var(--primary-shadow)]">
                加入候補名單
              </Button>
            </div>
          </form>
        </div>
      </div>
    </SectionShell>
  );
}
