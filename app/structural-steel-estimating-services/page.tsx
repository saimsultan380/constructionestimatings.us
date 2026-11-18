import type { Metadata } from "next";
import { steel } from "@/content/steel";
import { SteelView } from "@/components/sections/steel/SteelView";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl, siteName } from "@/lib/site";

const path = steel.seo.path;

export const metadata: Metadata = pageMetadata({
  title: steel.seo.title,
  description: steel.seo.description,
  path,
  absoluteTitle: true,
});

export default function StructuralSteelEstimatingPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Trades", path: "/concrete-estimating-services/" },
          { name: "Structural Steel Estimating", path },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Structural Steel Estimating Services",
          serviceType: "Structural steel estimating and takeoff",
          url: absoluteUrl(path),
          description: steel.seo.description,
          areaServed: "US",
          provider: {
            "@type": "Organization",
            name: siteName,
            url: absoluteUrl("/"),
          },
        }}
      />
      <SteelView />
    </>
  );
}
