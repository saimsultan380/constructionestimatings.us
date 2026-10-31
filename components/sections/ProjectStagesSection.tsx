import { homepage } from "@/content/homepage";
import { Section } from "@/components/ui/Section";
import { ProjectStages } from "@/components/sections/ProjectStages";

export function ProjectStagesSection() {
  return (
    <Section tint>
      <h2 className="max-w-[20ch] font-heading text-[28px] font-semibold leading-[1.15] lg:text-[40px]">
        {homepage.stages.title}
      </h2>
      <p className="mt-4 max-w-[68ch] text-ink-soft lg:text-[17px]">{homepage.stages.intro}</p>
      <ProjectStages />
    </Section>
  );
}
