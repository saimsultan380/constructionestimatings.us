import { ChartLine, ListNumbers, SquaresFour, Stack } from "@phosphor-icons/react/dist/ssr";
import { homepage } from "@/content/homepage";
import { Section } from "@/components/ui/Section";

const icons = {
  "bottom-up": ListNumbers,
  unit: SquaresFour,
  assembly: Stack,
  parametric: ChartLine,
};

export function Methods() {
  const { methods } = homepage;

  return (
    <Section>
      <h2 className="max-w-[20ch] font-heading text-[28px] font-semibold leading-[1.15] lg:text-[40px]">
        {methods.title}
      </h2>
      <p className="mt-4 max-w-[68ch] text-ink-soft lg:text-[17px]">{methods.intro}</p>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {methods.items.map((item, index) => {
          const Icon = icons[item.key];
          return (
            <article key={item.key} className="rounded-xl border border-line bg-surface p-6 shadow-[var(--shadow)]">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-tint text-brand-strong">
                  <Icon size={22} weight="regular" aria-hidden="true" />
                </span>
                <p className="font-heading text-sm font-semibold tabular text-brand-strong">
                  {String(index + 1).padStart(2, "0")}
                </p>
              </div>
              <h3 className="mt-4 font-heading text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-ink-soft">{item.body}</p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
