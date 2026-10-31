import { ClipboardText, Crane, Handshake, HardHat, Package, Ruler } from "@phosphor-icons/react/dist/ssr";
import { homepage } from "@/content/homepage";

const icons = [ClipboardText, Ruler, HardHat, Package, Crane, Handshake];

export function EstimateAnatomy() {
  const { anatomy } = homepage;

  return (
    <ol className="mt-10 grid gap-4 lg:grid-cols-2">
      {anatomy.items.map((item, index) => {
        const Icon = icons[index];
        return (
          <li key={item.title} className="flex gap-4 rounded-xl border border-line bg-surface p-5 shadow-[var(--shadow)]">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-tint text-brand-strong">
              <Icon size={22} weight="regular" aria-hidden="true" />
            </span>
            <div>
              <p className="font-heading text-sm font-semibold tabular text-brand-strong">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-1 font-heading text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-ink-soft">{item.body}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
