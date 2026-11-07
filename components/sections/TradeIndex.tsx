import { homepage } from "@/content/homepage";
import { publicImage } from "@/lib/images";
import { TradeIndexClient } from "@/components/sections/TradeIndexClient";

export function TradeIndex() {
  const images = Object.fromEntries(
    homepage.trades.items.map((item) => [item.slot, publicImage("trades", item.slot)]),
  );

  return (
    <section id="trades" className="overflow-hidden bg-surface-tint py-14 md:py-[72px] lg:py-24">
      <TradeIndexClient images={images} />
    </section>
  );
}
