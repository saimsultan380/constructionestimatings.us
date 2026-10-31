import { homepage } from "@/content/homepage";
import { publicImage } from "@/lib/images";
import { Section } from "@/components/ui/Section";
import { MepSelector } from "@/components/sections/MepSelector";

export function Mep() {
  const images = Object.fromEntries(
    homepage.mep.items.map((item) => [item.slot, publicImage("mep", item.slot)]),
  );

  return (
    <Section>
      <h2 className="max-w-[16ch] font-heading text-[28px] font-semibold leading-[1.15] lg:text-[40px]">
        {homepage.mep.title}
      </h2>
      <p className="mt-4 max-w-[68ch] text-ink-soft lg:text-[17px]">{homepage.mep.intro}</p>
      <MepSelector images={images} />
    </Section>
  );
}
