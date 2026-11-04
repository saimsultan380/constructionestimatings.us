import type { Metadata } from "next";
import { electrical } from "@/content/electrical";
import { ElectricalView } from "@/components/sections/electrical/ElectricalView";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl, siteName } from "@/lib/site";

const path = electrical.seo.path;

export const metadata: Metadata = pageMetadata({
  title: electrical.seo.title,
  description: electrical.seo.description,
  path,
  absoluteTitle: true,
});

export default function ElectricalEstimatingPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Trades", path: "/concrete-estimating-services/" },
          { name: "Electrical Estimating", path },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Electrical Estimating Services",
          serviceType: "Electrical estimating and takeoff",
          url: absoluteUrl(path),
          description: electrical.seo.description,
          areaServed: "US",
          provider: {
            "@type": "Organization",
            name: siteName,
            url: absoluteUrl("/"),
          },
        }}
      />
      <ElectricalView />
    </>
  );
}
