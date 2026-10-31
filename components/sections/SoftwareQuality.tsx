import { homepage } from "@/content/homepage";
import { publicImage } from "@/lib/images";
import { Section } from "@/components/ui/Section";
import { FramedImage } from "@/components/ui/FramedImage";
import { Chip } from "@/components/ui/Chip";

export function SoftwareQuality() {
  const { software, slots } = homepage;
  const photo = publicImage(slots.software.section, slots.software.id);

  return (
    <Section tint>
      <div className={photo ? "grid items-center gap-10 lg:grid-cols-2" : ""}>
        {photo ? (
          <FramedImage
            section={slots.software.section}
            slotId={slots.software.id}
            brief={slots.software.brief}
            ratio={slots.software.ratio}
          />
        ) : null}
        <div>
          <h2 className="font-heading text-[28px] font-semibold leading-[1.15] lg:text-[40px]">{software.title}</h2>
          {software.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="mt-4 max-w-[68ch] text-ink-soft lg:text-[17px]">
              {paragraph}
            </p>
          ))}
          <ul className="mt-6 flex flex-wrap gap-2">
            {software.names.map((name) => (
              <li key={name}>
                <Chip className="bg-surface">{name}</Chip>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
