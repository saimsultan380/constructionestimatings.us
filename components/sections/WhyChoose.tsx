import Image from "next/image";
import { Clock, CurrencyDollar, FileXls, Globe, MapPin, Note, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import { homepage } from "@/content/homepage";

const icons = [Clock, CurrencyDollar, MapPin, Note, FileXls, ShieldCheck, Globe];

export function WhyChoose() {
  const { why } = homepage;

  return (
    <section id="why-choose" className="relative overflow-hidden py-14 md:py-[72px] lg:py-24">
      <Image
        src="/images/services/svc-commercial.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="relative mx-auto w-full max-w-[1240px] px-4 min-[480px]:px-6">
        <div className="w-full rounded-xl bg-surface p-6 shadow-[var(--shadow-soft)] sm:p-8 lg:p-10">
          <h2 className="max-w-[22ch] font-heading text-[28px] font-semibold leading-[1.15] lg:text-[40px]">
            {why.title}
          </h2>
          <p className="mt-4 max-w-[68ch] text-ink-soft lg:text-[17px]">{why.body}</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {why.items.map((item, index) => {
              const Icon = icons[index];
              return (
                <li key={item} className="flex items-start gap-3 rounded-xl border border-line bg-surface-tint p-4">
                  <Icon size={22} weight="regular" aria-hidden="true" className="mt-0.5 shrink-0 text-brand" />
                  <h3 className="font-heading text-base font-semibold leading-snug">{item}</h3>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
