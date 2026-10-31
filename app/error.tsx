"use client";

import { Button } from "@/components/ui/Button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mx-auto w-full max-w-[1240px] px-4 py-24 min-[480px]:px-6">
      <h1 className="font-heading text-[36px] font-semibold leading-[1.15]">Something went wrong</h1>
      <p className="mt-4 max-w-[62ch] text-ink-soft">This page could not be loaded.</p>
      <Button className="mt-6" onClick={() => reset()}>
        Try again
      </Button>
    </div>
  );
}
