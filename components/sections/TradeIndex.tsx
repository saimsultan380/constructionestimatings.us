import { homepage } from "@/content/homepage";
import { publicImage } from "@/lib/images";
import { TradeIndexClient } from "@/components/sections/TradeIndexClient";

export function TradeIndex() {
  const images = Object.fromEntries(
    homepage.trades.items.map((item) => [item.slot, publicImage("trades", item.slot)]),
  );

  return (
    <section id="trades" className="overflow-hidden bg-surface-tint py-14 md:py-[72px] lg:py-24">
      <div className="mx-auto w-full max-w-[1240px] px-4 min-[480px]:px-6">
        <h2 className="max-w-[18ch] font-heading text-[28px] font-semibold leading-[1.15] lg:text-[40px]">
          {homepage.trades.title}
        </h2>
        <p className="mt-4 max-w-[68ch] text-ink-soft lg:text-[17px]">{homepage.trades.intro}</p>
      </div>
      <TradeIndexClient images={images} />
    </section>
  );
}
