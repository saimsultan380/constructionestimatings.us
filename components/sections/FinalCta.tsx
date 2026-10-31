import { homepage } from "@/content/homepage";
import { Button } from "@/components/ui/Button";
import { phone, phoneHref } from "@/lib/site";

export function FinalCta() {
  const { finalCta } = homepage;

  return (
    <section className="blueprint-grid-brand text-surface">
      <div className="mx-auto w-full max-w-[1240px] px-4 py-14 min-[480px]:px-6 md:py-[72px] lg:py-24">
        <h2 className="max-w-[16ch] font-heading text-[28px] font-semibold leading-[1.15] text-surface lg:text-[40px]">
          {finalCta.title}
        </h2>
        <p className="mt-4 max-w-[62ch] text-base font-semibold leading-[1.6] text-surface lg:text-[17px]">{finalCta.body}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href="/contact/">{finalCta.primaryCta}</Button>
          <Button href="/contact/" variant="onBlue">
            {finalCta.secondaryCta}
          </Button>
        </div>
        <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {finalCta.trust.map((item) => (
            <li key={item} className="text-base font-semibold sm:border-r sm:border-surface sm:pr-4 sm:last:border-0">
              {item}
            </li>
          ))}
        </ul>
        {phone ? (
          <p className="mt-6">
            <a href={phoneHref(phone)} className="text-base font-semibold text-surface underline">
              {finalCta.callLabel} {phone}
            </a>
          </p>
        ) : null}
      </div>
    </section>
  );
}
