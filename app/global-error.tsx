"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-white px-6 py-24 text-[#303030]">
        <h1 className="text-3xl font-semibold">Something went wrong</h1>
        <p className="mt-4 max-w-xl">The page could not be loaded. Try again.</p>
        <button type="button" className="mt-6 h-12 bg-[#FFC20E] px-5 font-semibold" onClick={() => reset()}>
          Try again
        </button>
      </body>
    </html>
  );
}
