import type { Metadata } from "next";
import { demolition } from "@/content/demolition";
import { DemolitionView } from "@/components/sections/demolition/DemolitionView";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl, siteName } from "@/lib/site";

const path = demolition.seo.path;

export const metadata: Metadata = pageMetadata({
  title: demolition.seo.title,
  description: demolition.seo.description,
  path,
  absoluteTitle: true,
});

export default function DemolitionEstimatingPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Trades", path: "/concrete-estimating-services/" },
          { name: "Demolition Estimating", path },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Demolition Estimating Services",
          serviceType: "Demolition estimating and takeoff",
          url: absoluteUrl(path),
          description: demolition.seo.description,
          areaServed: "US",
          provider: {
            "@type": "Organization",
            name: siteName,
            url: absoluteUrl("/"),
          },
        }}
      />
      <DemolitionView />
    </>
  );
}
