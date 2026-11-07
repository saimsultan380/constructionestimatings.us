"use client";

import { useRef } from "react";
import Image from "next/image";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { homepage } from "@/content/homepage";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

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

const CARD_STEP = 336;

export function TradeIndexClient({ images }: { images: Record<string, string | null> }) {
  const { trades } = homepage;
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (direction: -1 | 1) => {
    scrollerRef.current?.scrollBy({
      left: direction * CARD_STEP,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-6 px-4 min-[480px]:px-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-[68ch]">
          <h2 className="max-w-[18ch] font-heading text-[28px] font-semibold leading-[1.15] lg:text-[40px]">
            {trades.title}
          </h2>
          <p className="mt-4 text-ink-soft lg:text-[17px]">{trades.intro}</p>
        </div>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label="Previous trades"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-surface text-ink hover:border-brand hover:text-brand-strong"
          >
            <CaretLeft size={20} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label="Next trades"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-surface text-ink hover:border-brand hover:text-brand-strong"
          >
            <CaretRight size={20} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-2 [scrollbar-width:none] min-[480px]:px-6 [&::-webkit-scrollbar]:hidden"
      >
        {trades.items.map((item) => {
          const src = images[item.slot];
          const brief = briefs[item.slot] ?? item.title;
          return (
            <article
              key={item.slot}
              className="w-[320px] shrink-0 snap-start overflow-hidden rounded-xl border border-line bg-surface shadow-[var(--shadow)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-surface-tint">
                {src ? (
                  <Image src={src} alt={brief} fill sizes="340px" className="object-cover" />
                ) : (
                  <PlaceholderImage
                    slotId={item.slot}
                    ratio="16 / 10"
                    brief={brief}
                    className="h-full rounded-none border-0"
                  />
                )}
              </div>
              <div className="p-4">
                <h3 className="font-heading text-lg font-semibold leading-snug">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-soft">{item.body}</p>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
