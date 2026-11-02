import { cn } from "@/lib/cn";

function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      aria-hidden="true"
      className={cn("h-10 w-10 shrink-0", className)}
    >
      <rect width="40" height="40" rx="8" fill="#387ABC" />
      <path
        d="M9 29.5V17.2L20 9.5l11 7.7v12.3"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M14 21.5h12M14 25.5h12" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M12 33.2h16" stroke="#FFC20E" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 31.4v3.6M28 31.4v3.6" stroke="#FFC20E" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function Logo({
  className,
  tone = "default",
}: {
  className?: string;
  tone?: "default" | "inverse";
}) {
  const kicker = tone === "inverse" ? "text-accent" : "text-brand-strong";
  const name = tone === "inverse" ? "text-surface" : "text-ink";

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Mark />
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
