import type { Metadata } from "next";
import { commercial } from "@/content/commercial";
import { CommercialView } from "@/components/sections/commercial/CommercialView";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl, siteName } from "@/lib/site";

const path = commercial.seo.path;

export const metadata: Metadata = pageMetadata({
  title: commercial.seo.title,
  description: commercial.seo.description,
  path,
  absoluteTitle: true,
});

export default function CommercialEstimatingPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/commercial-estimating-service/" },
          { name: "Commercial Estimating", path },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Commercial Estimating Services",
          serviceType: "Commercial construction estimating",
          url: absoluteUrl(path),
          description: commercial.seo.description,
          areaServed: "US",
          provider: {
            "@type": "Organization",
            name: siteName,
            url: absoluteUrl("/"),
          },
        }}
      />
      <CommercialView />
    </>
  );
}
