export function DimensionLine({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 72 12"
      className={className ?? "h-3 w-16"}
      aria-hidden="true"
    >
      <path d="M2 6H70" stroke="var(--brand)" strokeWidth="1" />
      <path d="M2 2V10M70 2V10" stroke="var(--brand)" strokeWidth="1" />
    </svg>
  );
}
