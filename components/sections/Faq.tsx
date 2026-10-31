import { homepage } from "@/content/homepage";
import { publicImage } from "@/lib/images";
import { phone } from "@/lib/site";
import { Section } from "@/components/ui/Section";
import { FramedImage } from "@/components/ui/FramedImage";
import { Button } from "@/components/ui/Button";
import { PhoneLink } from "@/components/ui/ContactLinks";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { JsonLd } from "@/components/seo/JsonLd";

export function Faq() {
  const { faq, slots, hero } = homepage;
  const photo = publicImage(slots.faq.section, slots.faq.id);
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <Section>
      <JsonLd data={schema} />
      <div className="grid items-start gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <div className="lg:sticky lg:top-32">
          <h2 className="font-heading text-[28px] font-semibold leading-[1.15] lg:text-[40px]">{faq.title}</h2>
          <p className="mt-4 text-ink-soft">{faq.aside}</p>
          {photo ? (
            <div className="mt-6 max-w-sm">
              <FramedImage section={slots.faq.section} slotId={slots.faq.id} brief={slots.faq.brief} ratio={slots.faq.ratio} />
            </div>
          ) : null}
          <div className="mt-4 max-w-sm rounded-xl border border-line bg-surface p-4 shadow-[var(--shadow)]">
            {phone ? <PhoneLink /> : null}
            <Button href="/contact/" className={phone ? "mt-4 w-full" : "w-full"}>
              {hero.primaryCta}
            </Button>
          </div>
        </div>
        <FaqAccordion />
      </div>
    </Section>
  );
}
