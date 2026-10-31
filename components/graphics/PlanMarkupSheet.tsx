export function PlanMarkupSheet({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 220"
      className={className}
      role="img"
      aria-label="Marked-up floor plan with counted areas in blue and flagged items in yellow"
    >
      <rect x="1" y="1" width="318" height="218" fill="var(--surface)" stroke="var(--line)" />
      <path d="M28 36H292M28 184H292M28 36V184M292 36V184M110 36V184M200 36V184M28 100H292" stroke="var(--ink)" strokeWidth="1.5" fill="none" />
      <rect x="32" y="40" width="74" height="56" fill="var(--brand-tint)" stroke="var(--brand)" strokeWidth="2" />
      <rect x="114" y="104" width="82" height="76" fill="var(--brand-tint)" stroke="var(--brand)" strokeWidth="2" />
      <rect x="214" y="48" width="22" height="22" fill="var(--accent)" stroke="var(--ink)" strokeWidth="1.5" />
      <rect x="48" y="128" width="18" height="18" fill="var(--accent)" stroke="var(--ink)" strokeWidth="1.5" />
      <path d="M40 168H96" stroke="var(--brand)" strokeWidth="1" />
      <path d="M40 164V172M96 164V172" stroke="var(--brand)" strokeWidth="1" />
      <text x="16" y="206" fill="var(--ink)" fontSize="11" fontFamily="Inter, sans-serif">
        Counted
      </text>
      <rect x="68" y="196" width="12" height="12" fill="var(--brand-tint)" stroke="var(--brand)" />
      <text x="88" y="206" fill="var(--ink)" fontSize="11" fontFamily="Inter, sans-serif">
        Flagged
      </text>
      <rect x="138" y="196" width="12" height="12" fill="var(--accent)" stroke="var(--ink)" />
    </svg>
  );
}
