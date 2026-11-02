import Link from "next/link";
import { homepage } from "@/content/homepage";
import { Section } from "@/components/ui/Section";
import { SlotVisual } from "@/components/ui/SlotVisual";

const briefs: Record<string, string> = {
  "svc-cost": "Itemized cost estimate document beside plans",
  "svc-design": "Architect and engineer drawings under revision at a table",
  "svc-takeoff": "Plan set on screen with highlighted measurements",
  "svc-commercial": "Commercial building under construction (office or retail frame)",
  "svc-industrial": "Warehouse or industrial plant shell",
  "svc-residential": "Custom home framing in progress",
  "svc-freelance": "Single estimator at a laptop with plans",
  "svc-bid": "Bid documents and a binder on a table",
  "svc-change": "Marked-up change order drawing",
};

export function Services() {
  const { services } = homepage;

  return (
    <Section id="services" tint>
      <h2 className="max-w-[22ch] font-heading text-[28px] font-semibold leading-[1.15] lg:text-[40px]">
        {services.title}
      </h2>
      <p className="mt-4 max-w-[68ch] text-ink-soft lg:text-[17px]">{services.intro}</p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {services.items.map((item, index) => {
          const href =
            item.key === "commercial"
              ? "/commercial-estimating-service/"
              : item.key === "residential"
                ? "/residential-estimating-services/"
                : item.key === "industrial"
                  ? "/industrial-estimating-services/"
                  : "/contact/";
          return (
            <article key={item.key} className="flex h-full flex-col overflow-hidden rounded-xl border border-line border-t-4 border-t-brand bg-surface shadow-[var(--shadow)]">
              <div className="relative aspect-[16/10] overflow-hidden bg-surface-tint">
                <div className="absolute inset-0">
                  <SlotVisual
                    section="services"
                    slotId={item.slot}
                    brief={briefs[item.slot]}
                    ratio="16 / 10"
                    className="object-cover"
                    sizes="(min-width: 1280px) 380px, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-sm font-semibold tabular text-brand-strong">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-heading text-xl font-semibold leading-snug">
                  <Link href={href} className="hover:text-brand-strong hover:underline">
                    {item.title}
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-6 text-ink-soft">{item.body}</p>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
