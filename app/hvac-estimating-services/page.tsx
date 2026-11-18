import type { Metadata } from "next";
import { hvac } from "@/content/hvac";
import { HvacView } from "@/components/sections/hvac/HvacView";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl, siteName } from "@/lib/site";

const path = hvac.seo.path;

export const metadata: Metadata = pageMetadata({
  title: hvac.seo.title,
  description: hvac.seo.description,
  path,
  absoluteTitle: true,
});

export default function HvacEstimatingPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Trades", path: "/concrete-estimating-services/" },
          { name: "HVAC Estimating", path },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "HVAC Estimating Services",
          serviceType: "HVAC estimating and takeoff",
          url: absoluteUrl(path),
          description: hvac.seo.description,
          areaServed: "US",
          provider: {
            "@type": "Organization",
            name: siteName,
            url: absoluteUrl("/"),
          },
        }}
      />
      <HvacView />
    </>
  );
}
