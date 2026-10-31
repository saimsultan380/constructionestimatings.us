"use client";

import Image from "next/image";
import { homepage } from "@/content/homepage";

const briefs: Record<string, string> = {
  "trade-concrete": "Crew tying rebar for a concrete pour",
  "trade-masonry": "Mason laying concrete block with a trowel",
  "trade-drywall": "Drywall board hanging on metal framing",
  "trade-painting": "Paint roller on an interior wall",
  "trade-steel": "Structural steel frame and tower cranes",
  "trade-lumber": "Wood stud framing with insulation",
  "trade-millwork": "Installed kitchen cabinetry",
  "trade-sitework": "Excavator cutting a slope on a site",
  "trade-roofing": "Roof membrane or shingle installation",
  "trade-demolition": "Selective interior demolition",
  "trade-solar": "Ground-mounted solar array",
  "trade-flooring": "Finished hardwood floor",
};

export function TradeIndexClient({ images }: { images: Record<string, string | null> }) {
  const { trades } = homepage;
  const loop = [...trades.items, ...trades.items];

  return (
    <div className="mt-10 overflow-hidden">
      <div className="flex w-max flex-row flex-nowrap gap-4 px-4 animate-trade-marquee motion-reduce:animate-none hover:[animation-play-state:paused]">
        {loop.map((item, index) => {
          const src = images[item.slot];
          const copy = index >= trades.items.length;
          return (
            <article
              key={`${item.slot}-${index}`}
              aria-hidden={copy}
              className="w-[320px] shrink-0 overflow-hidden rounded-xl border border-line bg-surface shadow-[var(--shadow)]"
            >
              <div className="relative aspect-[16/10] bg-surface-tint">
                {src ? (
                  <Image
                    src={src}
                    alt={copy ? "" : briefs[item.slot]}
                    fill
                    sizes="340px"
                    className="object-cover"
                  />
                ) : null}
              </div>
              <div className="p-4">
                <h3 className="font-heading text-lg font-semibold leading-snug">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-soft">{item.body}</p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
