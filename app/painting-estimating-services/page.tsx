import type { Metadata } from "next";
import { painting } from "@/content/painting";
import { PaintingView } from "@/components/sections/painting/PaintingView";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteName, siteUrl } from "@/lib/site";

const canonical = `${siteUrl}${painting.seo.path}`;

export const metadata: Metadata = {
  title: { absolute: painting.seo.title },
  description: painting.seo.description,
  alternates: { canonical: painting.seo.path },
  openGraph: {
    title: painting.seo.title,
    description: painting.seo.description,
    url: canonical,
    siteName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: painting.seo.title,
    description: painting.seo.description,
  },
};

export default function PaintingEstimatingPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Painting Estimating Services",
          serviceType: "Painting construction estimating",
          url: canonical,
          description: painting.seo.description,
          areaServed: "US",
          provider: {
            "@type": "Organization",
            name: siteName,
            url: siteUrl,
          },
        }}
      />
      <PaintingView />
    </>
  );
}
