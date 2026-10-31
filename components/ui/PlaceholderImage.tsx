import { cn } from "@/lib/cn";

export function PlaceholderImage({
  slotId,
  ratio,
  brief,
  className,
}: {
  slotId: string;
  ratio: string;
  brief: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex h-full w-full flex-col justify-between rounded-xl border border-line bg-surface-tint p-4 text-left",
        className,
      )}
    >
      <p className="text-sm font-semibold text-brand-strong">{slotId}</p>
      <div>
        <p className="text-sm tabular text-ink-soft">Ratio {ratio}</p>
        <p className="mt-2 text-sm leading-snug text-ink">{brief}</p>
      </div>
    </div>
  );
}
