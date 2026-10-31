export function Logo({ className }: { className?: string }) {
  return (
    <span className={className ?? "inline-flex items-center gap-2.5 text-ink"}>
      <span
        aria-hidden="true"
        className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand font-heading text-base font-bold leading-none tracking-tight text-surface"
      >
        CE
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-heading text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-strong">
          Construction
        </span>
        <span className="mt-1 font-heading text-[17px] font-bold tracking-tight text-ink">
          Estimatings
        </span>
      </span>
    </span>
  );
}
