import type { Metadata } from "next";
import { landscape } from "@/content/landscape";
import { LandscapeView } from "@/components/sections/landscape/LandscapeView";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl, siteName } from "@/lib/site";

const path = landscape.seo.path;

export const metadata: Metadata = pageMetadata({
  title: landscape.seo.title,
  description: landscape.seo.description,
  path,
  absoluteTitle: true,
});

export default function LandscapeEstimatingPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Trades", path: "/concrete-estimating-services/" },
          { name: "Landscape Estimating", path },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Landscape Estimating Services",
          serviceType: "Landscape estimating and takeoff",
          url: absoluteUrl(path),
          description: landscape.seo.description,
          areaServed: "US",
          provider: {
            "@type": "Organization",
            name: siteName,
            url: absoluteUrl("/"),
          },
        }}
      />
      <LandscapeView />
    </>
  );
}
