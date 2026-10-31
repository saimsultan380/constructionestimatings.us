function Frame({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 220 140" role="img" aria-label={label} className="h-auto w-full max-w-[220px]">
      {children}
    </svg>
  );
}

export function BottomUpDiagram() {
  return (
    <Frame label="Stacked measured items adding up to a total">
      <rect x="40" y="96" width="140" height="22" fill="var(--brand-tint)" stroke="var(--brand)" strokeWidth="2" />
      <rect x="56" y="70" width="108" height="22" fill="var(--brand-tint)" stroke="var(--brand)" strokeWidth="2" />
      <rect x="72" y="44" width="76" height="22" fill="var(--accent)" stroke="var(--ink)" strokeWidth="2" />
      <path d="M186 44V118" stroke="var(--ink)" strokeWidth="1.5" />
      <path d="M180 44H192M180 118H192" stroke="var(--ink)" strokeWidth="1.5" />
    </Frame>
  );
}

export function UnitCostDiagram() {
  return (
    <Frame label="Quantity multiplied by unit price">
      <text x="24" y="78" fill="var(--ink)" fontSize="22" fontFamily="Archivo, sans-serif" fontWeight="700">
        Qty × Unit
      </text>
      <path d="M24 96H196" stroke="var(--brand)" strokeWidth="2" />
    </Frame>
  );
}

export function AssemblyDiagram() {
  return (
    <Frame label="Layered wall section used for assembly estimating">
      <rect x="70" y="16" width="28" height="108" fill="var(--brand-tint)" stroke="var(--brand)" strokeWidth="2" />
      <rect x="98" y="16" width="18" height="108" fill="var(--surface)" stroke="var(--ink)" strokeWidth="2" />
      <rect x="116" y="16" width="34" height="108" fill="var(--accent)" stroke="var(--ink)" strokeWidth="2" />
    </Frame>
  );
}

export function ParametricDiagram() {
  return (
    <Frame label="Building outline with a cost per square foot dimension">
      <rect x="36" y="28" width="120" height="80" fill="var(--surface)" stroke="var(--brand)" strokeWidth="2" />
      <path d="M36 122H156" stroke="var(--ink)" strokeWidth="1.5" />
      <path d="M36 116V128M156 116V128" stroke="var(--ink)" strokeWidth="1.5" />
      <text x="48" y="78" fill="var(--ink)" fontSize="13" fontFamily="Inter, sans-serif">
        cost / sf
      </text>
    </Frame>
  );
}
