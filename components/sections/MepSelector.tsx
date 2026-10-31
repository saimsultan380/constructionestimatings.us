"use client";

import { useState } from "react";
import Image from "next/image";
import * as Tabs from "@radix-ui/react-tabs";
import { homepage } from "@/content/homepage";

const briefs: Record<string, string> = {
  "mep-hvac": "Ductwork and HVAC equipment in a warehouse",
  "mep-electrical": "Electrician working an electrical panel",
  "mep-plumbing": "Bathroom plumbing fixtures",
  "mep-fire": "Fire protection pump, risers, and red piping",
};

export function MepSelector({
  images,
}: {
  images: Record<string, string | null>;
}) {
  const { mep } = homepage;
  type MepKey = (typeof mep.items)[number]["key"];
  const [value, setValue] = useState<MepKey>(mep.items[0].key);
  const current = mep.items.find((item) => item.key === value) ?? mep.items[0];
  const src = images[current.slot];
  const select = (next: string) => {
    if (mep.items.some((item) => item.key === next)) setValue(next as MepKey);
  };

  return (
    <Tabs.Root value={value} onValueChange={select} orientation="vertical" className="mt-10 grid items-start gap-6 lg:grid-cols-[1.05fr_0.95fr]">
      <Tabs.List className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1" aria-label="MEP trades">
        {mep.items.map((item) => (
          <Tabs.Trigger
            key={item.key}
            value={item.key}
            onMouseEnter={() => select(item.key)}
            onFocus={() => select(item.key)}
            className="rounded-xl bg-surface px-4 py-4 text-left shadow-[inset_4px_0_0_transparent] data-[state=active]:bg-brand-tint data-[state=active]:shadow-[inset_4px_0_0_var(--brand)]"
          >
            <span className="block font-heading text-lg font-semibold text-ink lg:text-xl">{item.title}</span>
            <span className="mt-2 block text-sm leading-6 text-ink-soft">{item.body}</span>
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      <div className="lg:sticky lg:top-32">
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-line bg-surface-tint shadow-[var(--shadow)]">
          {src ? (
            <Image src={src} alt={briefs[current.slot]} fill sizes="(min-width: 1024px) 520px, 100vw" className="object-cover" />
          ) : null}
        </div>
      </div>
    </Tabs.Root>
  );
}
