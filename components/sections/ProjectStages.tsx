import { ArrowsClockwise, Gavel, HardHat, Lightbulb, PencilRuler } from "@phosphor-icons/react/dist/ssr";
import { homepage } from "@/content/homepage";

const icons = [Lightbulb, PencilRuler, Gavel, HardHat, ArrowsClockwise];

export function ProjectStages() {
  const { stages } = homepage;

  return (
    <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
      {stages.items.map((item, index) => {
        const Icon = icons[index];
        return (
          <li key={item.title} className="rounded-xl border border-line bg-surface p-5 shadow-[var(--shadow)]">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-tint text-brand-strong">
              <Icon size={22} weight="regular" aria-hidden="true" />
            </span>
            <p className="mt-4 font-heading text-sm font-semibold tabular text-brand-strong">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-1 font-heading text-lg font-semibold lg:text-xl">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-ink-soft">{item.body}</p>
          </li>
        );
      })}
    </ol>
  );
}
