import type { Metadata } from "next";
import { insulation } from "@/content/insulation";
import { InsulationView } from "@/components/sections/insulation/InsulationView";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl, siteName } from "@/lib/site";

const path = insulation.seo.path;

export const metadata: Metadata = pageMetadata({
  title: insulation.seo.title,
  description: insulation.seo.description,
  path,
  absoluteTitle: true,
});

export default function InsulationEstimatingPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Trades", path: "/concrete-estimating-services/" },
          { name: "Insulation Estimating", path },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Insulation Estimating Services",
          serviceType: "Insulation estimating and takeoff",
          url: absoluteUrl(path),
          description: insulation.seo.description,
          areaServed: "US",
          provider: {
            "@type": "Organization",
            name: siteName,
            url: absoluteUrl("/"),
          },
        }}
      />
      <InsulationView />
    </>
  );
}
