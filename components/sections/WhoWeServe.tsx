import { homepage } from "@/content/homepage";
import { Section } from "@/components/ui/Section";
import { FramedImage } from "@/components/ui/FramedImage";
import { Chip } from "@/components/ui/Chip";

export function WhoWeServe() {
  const { audiences, slots } = homepage;

  return (
    <Section>
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <FramedImage
          section={slots.serve.section}
          slotId={slots.serve.id}
          brief={slots.serve.brief}
          ratio={slots.serve.ratio}
        />
        <div>
          <h2 className="font-heading text-[28px] font-semibold leading-[1.15] lg:text-[40px]">{audiences.title}</h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {audiences.items.map((item) => (
              <li key={item}>
                <Chip>
                  <span className="font-heading text-sm font-semibold">{item}</span>
                </Chip>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
