import Image from "next/image";
import { CalendarBlank, MapPin, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import { homepage } from "@/content/homepage";
import { Button } from "@/components/ui/Button";
import { PhoneLink } from "@/components/ui/ContactLinks";
import { FadeIn } from "@/components/ui/FadeIn";
import { publicImage } from "@/lib/images";

const icons = [CalendarBlank, MapPin, ShieldCheck];

export function Hero() {
  const { hero, slots } = homepage;
  const src = publicImage(slots.hero.section, slots.hero.id);

  return (
    <section className="relative isolate overflow-hidden">
      {src ? (
        <Image
          src={src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-brand" aria-hidden="true" />
      )}
      <div className="absolute inset-0 bg-black/70" aria-hidden="true" />
      <div className="relative mx-auto flex min-h-[70vh] w-full max-w-[1240px] flex-col items-center justify-center px-4 py-20 text-center min-[480px]:px-6 md:py-28 lg:min-h-[78vh] lg:py-32">
        <FadeIn className="flex w-full max-w-[720px] flex-col items-center">
          <h1 className="font-heading text-[36px] font-semibold leading-[1.15] text-surface lg:text-[56px]">
            {hero.title}
          </h1>
          <p className="mt-5 max-w-[36ch] font-heading text-xl font-semibold leading-snug text-accent lg:text-2xl">
            {hero.subhead}
          </p>
          <p className="mt-4 max-w-[58ch] text-base leading-[1.6] text-surface/90 lg:text-[17px]">{hero.body}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button href="/contact/">{hero.primaryCta}</Button>
            <Button href="/contact/" variant="onBlue">
              {hero.secondaryCta}
            </Button>
            <PhoneLink
              prefix={hero.callLabel}
              className="inline-flex h-12 items-center px-2 font-semibold text-surface hover:text-accent"
            />
          </div>
          <p className="mt-4 text-sm text-surface/80">{hero.note}</p>
          <ul className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
            {hero.trust.map((item, index) => {
              const Icon = icons[index];
              return (
                <li
                  key={item}
                  className="inline-flex items-center gap-2 rounded-lg bg-surface/10 px-3 py-2 text-surface"
                >
                  <Icon size={18} aria-hidden="true" className="text-accent" />
                  <span className="text-sm font-medium">{item}</span>
                </li>
              );
            })}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
