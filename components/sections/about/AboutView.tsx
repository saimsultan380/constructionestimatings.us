import { Check, MapPin } from "@phosphor-icons/react/dist/ssr";
import { about } from "@/content/about";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FramedImage } from "@/components/ui/FramedImage";
import { Section } from "@/components/ui/Section";
import { phone, phoneHref } from "@/lib/site";

export function AboutView() {
  return (
    <>
      <section className="border-b border-line bg-surface">
        <div className="mx-auto grid w-full max-w-[1240px] items-center gap-10 px-4 py-14 min-[480px]:px-6 md:py-[72px] lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div>
            <Eyebrow>{about.hero.eyebrow}</Eyebrow>
            <h1 className="max-w-[16ch] font-heading text-[36px] font-semibold leading-[1.15] text-ink lg:text-[52px]">
              {about.hero.title}
            </h1>
            <p className="mt-5 max-w-[54ch] text-base leading-[1.6] text-ink-soft lg:text-[17px]">
              {about.hero.body}
            </p>
            <p className="mt-4 text-base font-semibold text-ink">{about.hero.note}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {about.hero.trust.map((item) => (
                <li key={item}>
                  <Chip>{item}</Chip>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact/">{about.hero.primaryCta}</Button>
              <Button href="/commercial-estimating-service/" variant="secondary">
                {about.hero.secondaryCta}
              </Button>
            </div>
          </div>
          <FramedImage
            section={about.slots.hero.section}
            slotId={about.slots.hero.id}
            brief={about.slots.hero.brief}
            ratio={about.slots.hero.ratio}
            priority
            sizes="(min-width: 1024px) 560px, 100vw"
          />
        </div>
      </section>

      <Section tint>
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>Who we are</Eyebrow>
            <h2 className="font-heading text-[28px] font-semibold leading-[1.15] lg:text-[40px]">
              {about.story.title}
            </h2>
            <div className="mt-5 space-y-4">
              {about.story.paragraphs.map((paragraph, index) => (
                <p key={index} className="max-w-[58ch] text-base leading-[1.7] text-ink-soft lg:text-[17px]">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <FramedImage
            section={about.slots.intro.section}
            slotId={about.slots.intro.id}
            brief={about.slots.intro.brief}
            ratio="4 / 3"
            sizes="(min-width: 1024px) 540px, 100vw"
          />
        </div>
      </Section>

      <Section>
        <div className="max-w-[68ch]">
          <Eyebrow>Process</Eyebrow>
          <h2 className="font-heading text-[28px] font-semibold leading-[1.15] lg:text-[40px]">
            {about.process.title}
          </h2>
          <p className="mt-4 text-ink-soft lg:text-[17px]">{about.process.intro}</p>
        </div>
        <ol className="mt-10 grid gap-4 md:grid-cols-2">
          {about.process.steps.map((step, index) => (
            <li key={step.title} className="rounded-xl border border-line bg-surface p-5 shadow-[var(--shadow)]">
              <p className="font-heading text-sm font-semibold tabular text-brand-strong">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-heading text-xl font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink-soft lg:text-base">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <section className="border-y border-line bg-brand-tint py-14 md:py-[72px] lg:py-24">
        <div className="mx-auto grid w-full max-w-[1240px] items-center gap-10 px-4 min-[480px]:px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <FramedImage
            section={about.slots.solution.section}
            slotId={about.slots.solution.id}
            brief={about.slots.solution.brief}
            ratio={about.slots.solution.ratio}
            sizes="(min-width: 1024px) 480px, 100vw"
          />
          <div>
            <Eyebrow>Why us</Eyebrow>
            <h2 className="font-heading text-[28px] font-semibold leading-[1.15] lg:text-[40px]">
              {about.why.title}
            </h2>
            <p className="mt-4 max-w-[48ch] text-ink-soft lg:text-[17px]">{about.why.body}</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {about.why.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-line bg-surface px-4 py-3"
                >
                  <Check size={20} aria-hidden="true" className="mt-0.5 shrink-0 text-brand" />
                  <span className="font-heading text-sm font-semibold leading-snug text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>Audience</Eyebrow>
            <h2 className="font-heading text-[28px] font-semibold leading-[1.15] lg:text-[40px]">
              {about.audiences.title}
            </h2>
            <ul className="mt-6 flex flex-wrap gap-2">
              {about.audiences.items.map((item) => (
                <li key={item}>
                  <Chip>
                    <span className="font-heading text-sm font-semibold">{item}</span>
                  </Chip>
                </li>
              ))}
            </ul>
          </div>
          <FramedImage
            section={about.slots.serve.section}
            slotId={about.slots.serve.id}
            brief={about.slots.serve.brief}
            ratio={about.slots.serve.ratio}
            sizes="(min-width: 1024px) 540px, 100vw"
          />
        </div>
      </Section>

      <Section tint>
        <div className="max-w-[68ch]">
          <Eyebrow>Deliverables</Eyebrow>
          <h2 className="font-heading text-[28px] font-semibold leading-[1.15] lg:text-[40px]">
            {about.deliverables.title}
          </h2>
          <p className="mt-4 text-ink-soft lg:text-[17px]">{about.deliverables.intro}</p>
        </div>
        <ul className="mt-10 grid gap-3 md:grid-cols-2">
          {about.deliverables.items.map((item, index) => (
            <li
              key={item}
              className="flex gap-4 border-b border-line bg-surface px-4 py-4 last:border-b md:odd:border-r"
            >
              <span className="font-heading text-sm font-semibold tabular text-brand-strong">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-base font-medium leading-snug text-ink">{item}</p>
            </li>
          ))}
        </ul>
      </Section>

      <section className="bg-surface py-14 md:py-[72px] lg:py-24">
        <div className="mx-auto grid w-full max-w-[1240px] gap-8 px-4 min-[480px]:px-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <Eyebrow>Coverage</Eyebrow>
            <h2 className="font-heading text-[28px] font-semibold leading-[1.15] lg:text-[40px]">
              {about.coverage.title}
            </h2>
            <p className="mt-4 max-w-[62ch] text-ink-soft lg:text-[17px]">{about.coverage.body}</p>
          </div>
          <div className="inline-flex items-center gap-3 rounded-xl border border-line bg-brand-tint px-5 py-4">
            <MapPin size={22} aria-hidden="true" className="text-brand" />
            <p className="font-heading text-lg font-semibold text-ink">{about.coverage.fact}</p>
          </div>
        </div>
      </section>

      <section className="blueprint-grid-brand text-surface">
        <div className="mx-auto w-full max-w-[1240px] px-4 py-14 min-[480px]:px-6 md:py-[72px]">
          <h2 className="max-w-[16ch] font-heading text-[28px] font-semibold leading-[1.15] lg:text-[40px]">
            {about.finalCta.title}
          </h2>
          <p className="mt-4 max-w-[62ch] text-base leading-[1.6] text-surface/95 lg:text-[17px]">
            {about.finalCta.body}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/contact/">{about.finalCta.primaryCta}</Button>
            <Button href="/contact/" variant="onBlue">
              Upload Your Plans
            </Button>
          </div>
          <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {about.finalCta.trust.map((item) => (
              <li
                key={item}
                className="text-base font-semibold sm:border-r sm:border-surface/40 sm:pr-4 sm:last:border-0"
              >
                {item}
              </li>
            ))}
          </ul>
          {phone ? (
            <p className="mt-6">
              <a href={phoneHref(phone)} className="text-base font-semibold text-accent underline">
                {about.finalCta.callLabel} {phone}
              </a>
            </p>
          ) : null}
        </div>
      </section>
    </>
  );
}
