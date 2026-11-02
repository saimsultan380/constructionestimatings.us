import { homepage } from "@/content/homepage";
import { Button } from "@/components/ui/Button";
import { FramedImage } from "@/components/ui/FramedImage";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";

export function Intro() {
  const { intro, slots } = homepage;

  return (
    <>
      <Section tint>
        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <FadeIn>
            <FramedImage
              section={slots.intro.section}
              slotId={slots.intro.id}
              brief={slots.intro.brief}
              ratio={slots.intro.ratio}
            />
          </FadeIn>
          <FadeIn delay={0.06}>
            <h2 className="max-w-[20ch] font-heading text-[28px] font-semibold leading-[1.15] text-ink lg:text-[40px]">
              {intro.title}
            </h2>
            {intro.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-4 max-w-[68ch] text-base leading-[1.6] text-ink-soft lg:text-[17px]">
                {paragraph}
              </p>
            ))}
          </FadeIn>
        </div>
      </Section>
      <section className="bg-surface px-4 py-6 min-[480px]:px-6">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col items-start gap-6 rounded-xl bg-accent px-6 py-10 text-ink md:flex-row md:items-center md:justify-between md:px-8">
          <div>
            <p className="font-heading text-2xl font-semibold leading-tight lg:text-[32px]">{intro.bandTitle}</p>
            <p className="mt-2 max-w-[48ch] text-base lg:text-[17px]">{intro.bandBody}</p>
          </div>
          <Button href="/contact/" variant="onYellow">
            {intro.bandCta}
          </Button>
        </div>
      </section>
    </>
  );
}
