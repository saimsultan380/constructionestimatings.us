import Image from "next/image";
import { cn } from "@/lib/cn";

const sizes = {
  header: { px: 44, className: "h-11 w-11" },
  footer: { px: 48, className: "h-12 w-12" },
} as const;

export function Logo({
  className,
  tone = "default",
  size = "header",
}: {
  className?: string;
  tone?: "default" | "inverse";
  size?: keyof typeof sizes;
}) {
  const kicker = tone === "inverse" ? "text-accent" : "text-brand-strong";
  const name = tone === "inverse" ? "text-surface" : "text-ink";
  const mark = sizes[size];

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image
        src="/logo.png"
        alt=""
        width={mark.px}
        height={mark.px}
        className={cn("shrink-0 object-contain", mark.className)}
        priority={size === "header"}
      />
      <span className="flex flex-col leading-none">
        <span className={cn("font-heading text-[11px] font-semibold uppercase tracking-[0.16em]", kicker)}>
          Construction
        </span>
        <span className={cn("mt-1 font-heading text-[17px] font-bold tracking-tight", name)}>
          Estimatings
        </span>
      </span>
    </span>
  );
}
