export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.08em] text-brand-strong">
      <span aria-hidden="true" className="inline-block h-px w-8 bg-brand" />
      {children}
    </p>
  );
}
