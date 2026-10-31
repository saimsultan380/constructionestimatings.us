import { Check } from "@phosphor-icons/react/dist/ssr";
import { homepage } from "@/content/homepage";
import { Section } from "@/components/ui/Section";

export function Deliverables() {
  const { deliverables } = homepage;

  return (
    <Section tint>
      <h2 className="font-heading text-[28px] font-semibold leading-[1.15] lg:text-[40px]">{deliverables.title}</h2>
      <p className="mt-4 max-w-[68ch] text-ink-soft lg:text-[17px]">{deliverables.intro}</p>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {deliverables.items.map((item) => (
          <li key={item} className="flex gap-3 rounded-xl border border-line bg-surface p-4 shadow-[var(--shadow)]">
            <Check size={20} aria-hidden="true" className="mt-0.5 shrink-0 text-brand" />
            <h3 className="text-base font-semibold leading-snug">{item}</h3>
          </li>
        ))}
      </ul>
    </Section>
  );
}
