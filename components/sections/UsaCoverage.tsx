import { homepage } from "@/content/homepage";
import { Section } from "@/components/ui/Section";
import { UsMap } from "@/components/graphics/UsMap";

export function UsaCoverage() {
  const { coverage } = homepage;

  return (
    <Section tint>
      <div className="grid items-center gap-8 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <h2 className="font-heading text-[28px] font-semibold leading-[1.15] lg:text-[40px]">{coverage.title}</h2>
          <p className="mt-4 max-w-[42ch] text-ink-soft lg:text-[17px]">{coverage.body}</p>
          <p className="mt-6 font-heading text-2xl font-semibold tabular text-brand-strong">{coverage.fact}</p>
        </div>
        <div className="overflow-hidden">
          <UsMap />
        </div>
      </div>
    </Section>
  );
}
