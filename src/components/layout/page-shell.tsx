import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

const widthClassNames = {
  default: "max-w-7xl",
  narrow: "max-w-5xl",
  wide: "max-w-page-wide",
} as const;

type PageShellProps = ComponentPropsWithoutRef<"div"> & {
  width?: keyof typeof widthClassNames;
};

export function PageShell({
  width = "default",
  className,
  ...props
}: PageShellProps) {
  return (
    <div
      className={cn("page-shell", widthClassNames[width], className)}
      {...props}
    />
  );
}
