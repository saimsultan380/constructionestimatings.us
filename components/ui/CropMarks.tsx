export function CropMarks() {
  return (
    <span aria-hidden="true" className="pointer-events-none absolute inset-0">
      <span className="absolute left-2 top-2 h-3 w-3 border-l border-t border-ink" />
      <span className="absolute right-2 top-2 h-3 w-3 border-r border-t border-ink" />
      <span className="absolute bottom-2 left-2 h-3 w-3 border-b border-l border-ink" />
      <span className="absolute bottom-2 right-2 h-3 w-3 border-b border-r border-ink" />
    </span>
  );
}
