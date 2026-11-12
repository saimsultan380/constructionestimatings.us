import type { Metadata } from "next";
import { xactimate } from "@/content/xactimate";
import { XactimateView } from "@/components/sections/xactimate/XactimateView";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl, siteName } from "@/lib/site";

const path = xactimate.seo.path;

export const metadata: Metadata = pageMetadata({
  title: xactimate.seo.title,
  description: xactimate.seo.description,
  path,
  absoluteTitle: true,
});

export default function XactimateEstimatingPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/commercial-estimating-service/" },
          { name: "Xactimate Estimating", path },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Xactimate Estimating Services",
          serviceType: "Xactimate estimate writing",
          url: absoluteUrl(path),
          description: xactimate.seo.description,
          areaServed: "US",
          provider: {
            "@type": "Organization",
            name: siteName,
            url: absoluteUrl("/"),
          },
        }}
      />
      <XactimateView />
    </>
  );
}
