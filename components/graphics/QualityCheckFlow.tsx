export function QualityCheckFlow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 920 140"
      className={className}
      role="img"
      aria-label="Quality check flow from takeoff software to a second estimator check, then Excel and PDF files"
    >
      <rect x="8" y="28" width="220" height="84" fill="var(--brand-tint)" stroke="var(--brand)" strokeWidth="2" />
      <text x="28" y="76" fill="var(--ink)" fontSize="16" fontFamily="Archivo, sans-serif" fontWeight="600">
        Takeoff software
      </text>
      <path d="M240 70H310" stroke="var(--ink)" strokeWidth="2" />
      <path d="M300 62L316 70L300 78" fill="none" stroke="var(--ink)" strokeWidth="2" />
      <rect x="328" y="28" width="250" height="84" fill="var(--surface)" stroke="var(--ink)" strokeWidth="2" />
      <text x="348" y="68" fill="var(--ink)" fontSize="16" fontFamily="Archivo, sans-serif" fontWeight="600">
        Second estimator
      </text>
      <text x="348" y="90" fill="var(--ink-soft)" fontSize="14" fontFamily="Inter, sans-serif">
        check
      </text>
      <path d="M590 70H660" stroke="var(--ink)" strokeWidth="2" />
      <path d="M650 62L666 70L650 78" fill="none" stroke="var(--ink)" strokeWidth="2" />
      <rect x="678" y="20" width="100" height="100" fill="var(--surface)" stroke="var(--brand)" strokeWidth="2" />
      <text x="696" y="76" fill="var(--ink)" fontSize="16" fontFamily="Archivo, sans-serif" fontWeight="600">
        Excel
      </text>
      <rect x="792" y="20" width="100" height="100" fill="var(--accent)" stroke="var(--ink)" strokeWidth="2" />
      <text x="820" y="76" fill="var(--ink)" fontSize="16" fontFamily="Archivo, sans-serif" fontWeight="600">
        PDF
      </text>
    </svg>
  );
}
