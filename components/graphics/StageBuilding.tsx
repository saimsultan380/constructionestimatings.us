export function StageBuilding({ stage = 4, className }: { stage?: number; className?: string }) {
  const show = (index: number) => stage >= index;
  return (
    <svg
      viewBox="0 0 220 140"
      className={className}
      role="img"
      aria-label="Building drawing that progresses from a site outline to a revision mark"
    >
      {show(0) ? <path d="M16 120H204" stroke="var(--ink)" strokeWidth="2" /> : null}
      {show(1) ? (
        <path d="M48 120L110 48L172 120" fill="none" stroke="var(--line)" strokeWidth="2" />
      ) : null}
      {show(2) ? (
        <path d="M60 120V72H160V120M60 96H160M90 120V72M130 120V72" fill="none" stroke="var(--brand)" strokeWidth="2" />
      ) : null}
      {show(3) ? (
        <path d="M70 120V84H150V120M86 120V96H114V120" fill="var(--brand-tint)" stroke="var(--brand)" strokeWidth="2" />
      ) : null}
      {show(4) ? (
        <path d="M168 36c8-10 22-8 26 2 8-4 16 4 12 12 8 2 6 14-2 14-8 8-20 4-24-4-8 0-12-10-6-16-6-8-2-12-6-8z" fill="none" stroke="var(--accent-strong)" strokeWidth="2" />
      ) : null}
    </svg>
  );
}
