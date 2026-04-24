import { PageShell } from "@/components/layout/page-shell";
import { cn } from "@/lib/utils";

type SectionShellProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
};

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 border-t border-border/70 py-16 sm:py-20 lg:py-24",
        className
      )}
    >
      <PageShell className="grid gap-12">
        <div className="grid gap-5 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.25fr)] lg:items-end">
          <div className="space-y-4">
            <span className="inline-flex w-fit rounded-full border border-primary-border bg-primary-subtle px-4 py-1 text-xs font-medium tracking-[0.22em] text-primary uppercase">
              {eyebrow}
            </span>
            <h2 className="max-w-2xl text-balance font-heading text-3xl leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[3.35rem]">
              {title}
            </h2>
          </div>
          {description ? (
            <p className="max-w-2xl text-pretty text-base leading-8 text-muted-foreground sm:text-lg">
              {description}
            </p>
          ) : null}
        </div>
        {children}
      </PageShell>
    </section>
  );
}
