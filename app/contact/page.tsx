import type { Metadata } from "next";
import {
  Clock,
  EnvelopeSimple,
  MapPin,
  Phone,
  ShieldCheck,
  UploadSimple,
} from "@phosphor-icons/react/dist/ssr";
import { homepage } from "@/content/homepage";
import { UploadForm } from "@/components/sections/UploadForm";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { Eyebrow } from "@/components/ui/Eyebrow";
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

const facts = [
  {
    label: "Turnaround",
    value: "24 to 48 hours",
    icon: Clock,
  },
  {
    label: "Coverage",
    value: homepage.footer.coverage,
    icon: MapPin,
  },
  {
    label: "Quote",
    value: homepage.topBar.quote,
    icon: UploadSimple,
  },
  {
    label: "Privacy",
    value: homepage.topBar.nda,
    icon: ShieldCheck,
  },
] as const;

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

      <section className="border-b border-line bg-brand-tint">
        <div className="mx-auto w-full max-w-[1240px] px-4 py-12 min-[480px]:px-6 md:py-16">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="max-w-[14ch] font-heading text-[36px] font-semibold leading-[1.15] text-ink lg:text-[52px]">
            {homepage.process.form.submit}
          </h1>
          <p className="mt-4 max-w-[54ch] text-base leading-[1.6] text-ink-soft lg:text-[17px]">
            {homepage.process.intro}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {homepage.finalCta.trust.map((item) => (
              <li key={item}>
                <Chip>{item}</Chip>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-surface py-14 md:py-[72px] lg:py-24">
        <div className="mx-auto grid w-full max-w-[1240px] items-start gap-10 px-4 min-[480px]:px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="font-heading text-[28px] font-semibold leading-[1.15] text-ink lg:text-[32px]">
              {homepage.hero.primaryCta}
            </h2>
            <p className="mt-4 max-w-[48ch] text-base leading-[1.6] text-ink-soft lg:text-[17px]">
              {homepage.footer.description}
            </p>
            <p className="mt-4 max-w-[48ch] font-semibold text-ink">{homepage.hero.note}</p>

            <ul className="mt-8 border-t border-line">
              {facts.map((fact) => {
                const Icon = fact.icon;
                return (
                  <li key={fact.label} className="flex gap-4 border-b border-line py-4">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-line bg-brand-tint text-brand">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink-soft">{fact.label}</p>
                      <p className="mt-1 font-heading text-lg font-semibold text-ink">{fact.value}</p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 space-y-4 rounded-xl border border-line bg-surface-tint p-5">
              <p className="font-heading text-base font-semibold text-ink">{homepage.finalCta.callLabel}</p>
              {phone ? (
                <p className="flex items-center gap-3">
                  <Phone size={20} aria-hidden="true" className="text-brand" />
                  <PhoneLink />
                </p>
              ) : null}
              {email ? (
                <p className="flex items-center gap-3">
                  <EnvelopeSimple size={20} aria-hidden="true" className="text-brand" />
                  <EmailLink />
                </p>
              ) : null}
              {!phone && !email ? (
                <>
                  <p className="text-sm text-ink-soft">{homepage.process.form.note}</p>
                  <Button href="#upload" className="w-full sm:w-auto">
                    {homepage.process.form.submit}
                  </Button>
                </>
              ) : null}
            </div>
          </div>

          <UploadForm />
        </div>
      </section>

      <section className="border-t border-line bg-surface-tint py-14 md:py-[72px]">
        <div className="mx-auto w-full max-w-[1240px] px-4 min-[480px]:px-6">
          <Eyebrow>What happens next</Eyebrow>
          <h2 className="max-w-[20ch] font-heading text-[28px] font-semibold leading-[1.15] lg:text-[36px]">
            {homepage.process.title}
          </h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {homepage.process.steps.map((step, index) => (
              <li key={step.title} className="rounded-xl border border-line bg-surface p-5">
                <p className="font-heading text-sm font-semibold tabular text-brand-strong">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-heading text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-soft">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-accent">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-4 px-4 py-8 min-[480px]:px-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-heading text-xl font-semibold text-ink">{homepage.intro.bandTitle}</p>
            <p className="mt-1 text-ink">{homepage.intro.bandBody}</p>
          </div>
          <Button href="#upload" variant="onYellow">
            {homepage.intro.bandCta}
          </Button>
        </div>
      </section>
    </>
  );
}
