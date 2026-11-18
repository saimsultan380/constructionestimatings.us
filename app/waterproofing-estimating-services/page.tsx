import type { Metadata } from "next";
import { waterproofing } from "@/content/waterproofing";
import { WaterproofingView } from "@/components/sections/waterproofing/WaterproofingView";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl, siteName } from "@/lib/site";

const path = waterproofing.seo.path;

export const metadata: Metadata = pageMetadata({
  title: waterproofing.seo.title,
  description: waterproofing.seo.description,
  path,
  absoluteTitle: true,
});

export default function WaterproofingEstimatingPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Trades", path: "/concrete-estimating-services/" },
          { name: "Waterproofing Estimating", path },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Waterproofing Estimating Services",
          serviceType: "Waterproofing estimating and takeoff",
          url: absoluteUrl(path),
          description: waterproofing.seo.description,
          areaServed: "US",
          provider: {
            "@type": "Organization",
            name: siteName,
            url: absoluteUrl("/"),
          },
        }}
      />
      <WaterproofingView />
    </>
  );
}
