import type { Metadata } from "next";
import { homepage } from "@/content/homepage";
import { UploadForm } from "@/components/sections/UploadForm";
import { EmailLink, PhoneLink } from "@/components/ui/ContactLinks";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl, email, phone, siteName } from "@/lib/site";

const title = "Contact";
const description =
  "Upload plans for a free construction estimating quote. NDA on request. Reach Construction Estimatings for bid-ready takeoffs in 24 to 48 hours.";
const path = "/contact/";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path,
});

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Contact", path },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: `${title} | ${siteName}`,
          url: absoluteUrl(path),
          description,
          about: {
            "@type": "Organization",
            name: siteName,
            url: absoluteUrl("/"),
          },
        }}
      />
      <section className="bg-surface py-14 md:py-[72px] lg:py-24">
        <div className="mx-auto grid w-full max-w-[1240px] items-start gap-10 px-4 min-[480px]:px-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h1 className="font-heading text-[36px] font-semibold leading-[1.15] text-ink lg:text-[52px]">
              {homepage.hero.secondaryCta}
            </h1>
            <p className="mt-4 max-w-[48ch] text-base leading-[1.6] text-ink-soft lg:text-[17px]">
              {homepage.footer.description}
            </p>
            <p className="mt-4 max-w-[48ch] text-ink">{homepage.hero.note}</p>
            <ul className="mt-8 border-t border-line">
              <li className="border-b border-line py-4">
                <p className="text-sm font-semibold text-ink-soft">Coverage</p>
                <p className="mt-1 font-heading text-lg font-semibold">{homepage.footer.coverage}</p>
              </li>
              <li className="border-b border-line py-4">
                <p className="text-sm font-semibold text-ink-soft">Quote</p>
                <p className="mt-1 font-heading text-lg font-semibold">{homepage.topBar.quote}</p>
              </li>
              <li className="border-b border-line py-4">
                <p className="text-sm font-semibold text-ink-soft">Privacy</p>
                <p className="mt-1 font-heading text-lg font-semibold">{homepage.topBar.nda}</p>
              </li>
              {phone ? (
                <li className="border-b border-line py-4">
                  <PhoneLink />
                </li>
              ) : null}
              {email ? (
                <li className="border-b border-line py-4">
                  <EmailLink />
                </li>
              ) : null}
            </ul>
          </div>
          <UploadForm />
        </div>
      </section>
    </>
  );
}
