import type { Metadata } from "next";
import { commercial } from "@/content/commercial";
import { CommercialView } from "@/components/sections/commercial/CommercialView";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteName, siteUrl } from "@/lib/site";

const canonical = `${siteUrl}${commercial.seo.path}`;

export const metadata: Metadata = {
  title: { absolute: commercial.seo.title },
  description: commercial.seo.description,
  alternates: { canonical: commercial.seo.path },
  openGraph: {
    title: commercial.seo.title,
    description: commercial.seo.description,
    url: canonical,
    siteName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: commercial.seo.title,
    description: commercial.seo.description,
  },
};

export default function CommercialEstimatingPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Commercial Estimating Services",
          serviceType: "Commercial construction estimating",
          url: canonical,
          description: commercial.seo.description,
          areaServed: "US",
          provider: {
            "@type": "Organization",
            name: siteName,
            url: siteUrl,
          },
        }}
      />
      <CommercialView />
    </>
  );
}
