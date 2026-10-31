import { CalendarBlank, MapPin, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import { homepage } from "@/content/homepage";
import { Button } from "@/components/ui/Button";
import { PhoneLink } from "@/components/ui/ContactLinks";
import { FramedImage } from "@/components/ui/FramedImage";
import { FadeIn } from "@/components/ui/FadeIn";

const icons = [CalendarBlank, MapPin, ShieldCheck];

export function Hero() {
  const { hero, slots } = homepage;

  return (
    <section className="bg-surface py-14 md:py-[72px] lg:py-24">
      <div className="mx-auto grid w-full max-w-[1240px] items-center gap-10 px-4 min-[480px]:px-6 lg:grid-cols-[55fr_45fr]">
        <FadeIn>
          <h1 className="max-w-[18ch] font-heading text-[36px] font-semibold leading-[1.15] text-ink lg:text-[56px]">
            {hero.title}
          </h1>
          <p className="mt-5 max-w-[42ch] font-heading text-xl font-semibold leading-snug text-ink lg:text-2xl">
            {hero.subhead}
          </p>
          <p className="mt-4 max-w-[68ch] text-base leading-[1.6] text-ink-soft lg:text-[17px]">{hero.body}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button href="/contact/">{hero.primaryCta}</Button>
            <Button href="/contact/" variant="secondary">
              {hero.secondaryCta}
            </Button>
            <PhoneLink prefix={hero.callLabel} className="inline-flex h-12 items-center px-2" />
          </div>
          <p className="mt-3 text-sm text-ink-soft">{hero.note}</p>
          <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {hero.trust.map((item, index) => {
              const Icon = icons[index];
              return (
                <li key={item} className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface-tint px-3 py-2">
                  <Icon size={18} aria-hidden="true" className="text-brand" />
                  <span className="text-sm font-medium text-ink">{item}</span>
                </li>
              );
            })}
          </ul>
        </FadeIn>
        <FadeIn delay={0.06}>
          <FramedImage
            section={slots.hero.section}
            slotId={slots.hero.id}
            brief={slots.hero.brief}
            ratio={slots.hero.ratio}
            priority
            sizes="(min-width: 1024px) 520px, 100vw"
          />
        </FadeIn>
      </div>
    </section>
  );
}
