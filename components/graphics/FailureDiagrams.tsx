function Frame({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <svg viewBox="0 0 280 160" role="img" aria-label={label} className="h-auto w-full">
      {children}
    </svg>
  );
}

export function RushedTakeoffDiagram() {
  return (
    <Frame label="Stack of plan sheets beside a clock, for rushed takeoffs">
      <rect x="28" y="36" width="120" height="86" fill="var(--surface)" stroke="var(--ink)" strokeWidth="2" />
      <rect x="40" y="26" width="120" height="86" fill="var(--surface)" stroke="var(--brand)" strokeWidth="2" />
      <rect x="52" y="16" width="120" height="86" fill="var(--brand-tint)" stroke="var(--brand)" strokeWidth="2" />
      <circle cx="214" cy="78" r="36" fill="var(--surface)" stroke="var(--ink)" strokeWidth="2" />
      <path d="M214 78V54M214 78L232 90" stroke="var(--brand)" strokeWidth="2" fill="none" />
    </Frame>
  );
}

export function StalePricingDiagram() {
  return (
    <Frame label="Price tag beside a calendar page, for stale pricing">
      <path d="M36 40H150L170 70L150 100H36V40Z" fill="var(--accent)" stroke="var(--ink)" strokeWidth="2" />
      <circle cx="58" cy="70" r="6" fill="var(--surface)" stroke="var(--ink)" />
      <rect x="186" y="28" width="70" height="90" fill="var(--surface)" stroke="var(--brand)" strokeWidth="2" />
      <path d="M186 50H256" stroke="var(--brand)" strokeWidth="2" />
      <path d="M204 28V40M238 28V40" stroke="var(--ink)" strokeWidth="2" />
      <text x="206" y="78" fill="var(--ink)" fontSize="12" fontFamily="Inter, sans-serif">
        Last qtr
      </text>
    </Frame>
  );
}

export function MissedAddendaDiagram() {
  return (
    <Frame label="Plan sheet with a revision cloud and a delta mark, for missed addenda">
      <rect x="24" y="20" width="150" height="120" fill="var(--surface)" stroke="var(--ink)" strokeWidth="2" />
      <path d="M40 48H158M40 78H158M40 108H120" stroke="var(--line)" strokeWidth="2" />
      <path
        d="M168 46c10-16 28-16 38 0 12-8 28 2 24 16 14 6 12 24-2 28-2 14-20 18-30 8-10 12-28 8-32-4-14-2-20-18-8-26-8-14 2-26 10-22z"
        fill="var(--surface)"
        stroke="var(--accent-strong)"
        strokeWidth="2"
      />
      <path d="M214 118L232 150H196Z" fill="var(--brand)" stroke="var(--ink)" strokeWidth="2" />
    </Frame>
  );
}
