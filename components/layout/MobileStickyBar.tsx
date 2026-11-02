"use client";

import { useEffect, useState } from "react";
import { homepage } from "@/content/homepage";
import { phone } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { PhoneLink } from "@/components/ui/ContactLinks";

export function MobileStickyBar() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const target = document.getElementById("upload");
    if (!target) return;
    const observer = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { threshold: 0.15 },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  if (hidden) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-surface p-3 shadow-[var(--shadow-soft)] lg:hidden">
      <div className={phone ? "grid grid-cols-[1fr_auto] gap-2" : "grid"}>
        <Button href="/contact/">{homepage.hero.secondaryCta}</Button>
        {phone ? (
          <PhoneLink className="inline-flex h-12 items-center justify-center rounded-lg border-[1.5px] border-brand bg-surface px-4 text-brand-strong" prefix="Call" />
        ) : null}
      </div>
    </div>
  );
}
