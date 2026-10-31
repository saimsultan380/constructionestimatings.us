import { homepage } from "@/content/homepage";
import { Button } from "@/components/ui/Button";
import { FramedImage } from "@/components/ui/FramedImage";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";

export function BidFailures() {
  const { failures, slots } = homepage;

  return (
    <Section>
      <FadeIn>
        <h2 className="max-w-[18ch] font-heading text-[28px] font-semibold leading-[1.15] lg:text-[40px]">
          {failures.title}
        </h2>
        <p className="mt-4 max-w-[68ch] text-ink-soft lg:text-[17px]">{failures.intro}</p>
      </FadeIn>
      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {failures.items.map((item, index) => (
          <FadeIn key={item.title} delay={index * 0.06}>
            <article className="h-full rounded-xl border border-line bg-surface p-5 shadow-[var(--shadow)]">
              <p className="font-heading text-sm font-semibold tabular text-brand-strong">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-heading text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-ink-soft">{item.body}</p>
            </article>
          </FadeIn>
        ))}
      </div>
      <div className="mt-8 grid items-center gap-8 rounded-xl bg-brand-tint p-6 lg:grid-cols-2 lg:p-8">
        <div>
          <h3 className="font-heading text-2xl font-semibold">{failures.solutionTitle}</h3>
          <p className="mt-3 max-w-[62ch] text-ink-soft">{failures.solutionBody}</p>
          <Button href="/contact/" className="mt-6">
            {failures.solutionCta}
          </Button>
        </div>
        <FramedImage
          section={slots.solution.section}
          slotId={slots.solution.id}
          brief={slots.solution.brief}
          ratio={slots.solution.ratio}
        />
      </div>
    </Section>
  );
}
