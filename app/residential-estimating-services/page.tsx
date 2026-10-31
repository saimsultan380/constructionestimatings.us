import type { Metadata } from "next";
import { residential } from "@/content/residential";
import { ResidentialView } from "@/components/sections/residential/ResidentialView";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteName, siteUrl } from "@/lib/site";

const canonical = `${siteUrl}${residential.seo.path}`;

export const metadata: Metadata = {
  title: { absolute: residential.seo.title },
  description: residential.seo.description,
  alternates: { canonical: residential.seo.path },
  openGraph: {
    title: residential.seo.title,
    description: residential.seo.description,
    url: canonical,
    siteName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: residential.seo.title,
    description: residential.seo.description,
  },
};

export default function ResidentialEstimatingPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Residential Estimating Services",
          serviceType: "Residential construction estimating",
          url: canonical,
          description: residential.seo.description,
          areaServed: "US",
          provider: {
            "@type": "Organization",
            name: siteName,
            url: siteUrl,
          },
        }}
      />
      <ResidentialView />
    </>
  );
}
