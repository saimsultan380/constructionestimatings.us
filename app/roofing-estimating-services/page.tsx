import type { Metadata } from "next";
import { roofing } from "@/content/roofing";
import { RoofingView } from "@/components/sections/roofing/RoofingView";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl, siteName } from "@/lib/site";

const path = roofing.seo.path;

export const metadata: Metadata = pageMetadata({
  title: roofing.seo.title,
  description: roofing.seo.description,
  path,
  absoluteTitle: true,
});

export default function RoofingEstimatingPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Trades", path: "/concrete-estimating-services/" },
          { name: "Roofing Estimating", path },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Roofing Estimating Services",
          serviceType: "Roofing estimating and takeoff",
          url: absoluteUrl(path),
          description: roofing.seo.description,
          areaServed: "US",
          provider: {
            "@type": "Organization",
            name: siteName,
            url: absoluteUrl("/"),
          },
        }}
      />
      <RoofingView />
    </>
  );
}
