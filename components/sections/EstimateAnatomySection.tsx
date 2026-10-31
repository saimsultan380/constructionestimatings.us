import { homepage } from "@/content/homepage";
import { Section } from "@/components/ui/Section";
import { EstimateAnatomy } from "@/components/sections/EstimateAnatomy";

export function EstimateAnatomySection() {
  return (
    <Section>
      <h2 className="max-w-[18ch] font-heading text-[28px] font-semibold leading-[1.15] lg:text-[40px]">
        {homepage.anatomy.title}
      </h2>
      <p className="mt-4 max-w-[68ch] text-ink-soft lg:text-[17px]">{homepage.anatomy.intro}</p>
      <EstimateAnatomy />
    </Section>
  );
}
