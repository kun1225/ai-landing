import { buttonVariants } from "@/components/ui/button";
import { navigation } from "@/components/home/landing-content";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
        <a href="#" className="flex items-center gap-3 text-sm text-foreground">
          <span className="flex size-10 items-center justify-center rounded-full border border-primary-border bg-card shadow-[0_12px_30px_var(--secondary-shadow)]">
            <span className="size-3 rounded-full bg-primary" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-medium tracking-[0.18em] uppercase text-muted-foreground">
              ThisWeb
            </span>
            <span className="mt-1 font-heading text-base">AI Landing Workshop</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary-soft hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#outline"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "hidden sm:inline-flex"
            )}
          >
            看工作坊內容
          </a>
          <a
            href="#waitlist"
            className={cn(buttonVariants({ size: "sm" }), "shadow-[0_16px_36px_var(--primary-shadow)]")}
          >
            加入等候名單
          </a>
        </div>
      </div>
    </header>
  );
}
