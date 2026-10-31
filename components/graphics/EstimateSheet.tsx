const rows = ["Scope", "Quantities", "Labor", "Materials", "Equipment", "Subcontractor costs"];

export function EstimateSheet({
  activeIndex = -1,
  className,
}: {
  activeIndex?: number;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 360 460"
      className={className}
      role="img"
      aria-label="Estimate document with rows for scope, quantities, labor, materials, equipment, and subcontractor costs. Overhead and profit is a separate line. No dollar amounts are shown."
    >
      <rect x="1" y="1" width="358" height="458" fill="var(--surface)" stroke="var(--line)" />
      <rect x="1" y="1" width="358" height="48" fill="var(--brand-tint)" />
      <text x="20" y="30" fill="var(--ink)" fontSize="16" fontFamily="Archivo, sans-serif" fontWeight="600">
        Estimate
      </text>
      {rows.map((label, index) => {
        const y = 64 + index * 52;
        const active = index === activeIndex;
        return (
          <g key={label}>
            {active ? <rect x="12" y={y - 8} width="8" height="40" fill="var(--accent)" /> : null}
            <text x="28" y={y + 8} fill="var(--ink)" fontSize="13" fontFamily="Inter, sans-serif" fontWeight="600">
              {label}
            </text>
            <rect x="28" y={y + 16} width={active ? 220 : 180} height="10" fill={active ? "var(--accent)" : "var(--line)"} />
            <path d={`M20 ${y + 40}H340`} stroke="var(--line)" strokeWidth="1" />
          </g>
        );
      })}
      <text x="28" y="400" fill="var(--ink)" fontSize="13" fontFamily="Inter, sans-serif" fontWeight="600">
        Overhead and profit
      </text>
      <rect x="28" y="412" width="140" height="10" fill="var(--brand-tint)" stroke="var(--brand)" />
    </svg>
  );
}
