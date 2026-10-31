import type { Metadata } from "next";
import Link from "next/link";
import { homepage } from "@/content/homepage";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page not found",
  description: "That page is not on Construction Estimatings. Return home or open a service page.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="mx-auto w-full max-w-[1240px] px-4 py-24 min-[480px]:px-6">
      <p className="text-sm font-semibold tabular text-brand-strong">404</p>
      <h1 className="mt-2 font-heading text-[36px] font-semibold leading-[1.15] lg:text-[52px]">
        Page not found
      </h1>
      <p className="mt-4 max-w-[48ch] text-ink-soft">
        That URL is not on this site. Use the links below to get back to a published page.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button href="/">Home</Button>
        <Button href="/contact/" variant="secondary">
          Contact
        </Button>
      </div>
      <ul className="mt-10 border-t border-line">
        {homepage.publishedServices.map((item) => (
          <li key={item.href} className="border-b border-line py-3">
            <Link href={item.href} className="font-semibold text-ink hover:text-brand-strong hover:underline">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
