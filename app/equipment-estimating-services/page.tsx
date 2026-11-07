import type { Metadata } from "next";
import { equipment } from "@/content/equipment";
import { EquipmentView } from "@/components/sections/equipment/EquipmentView";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl, siteName } from "@/lib/site";

const path = equipment.seo.path;

export const metadata: Metadata = pageMetadata({
  title: equipment.seo.title,
  description: equipment.seo.description,
  path,
  absoluteTitle: true,
});

export default function EquipmentEstimatingPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Trades", path: "/concrete-estimating-services/" },
          { name: "Equipment Estimating", path },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Equipment Estimating Services",
          serviceType: "Equipment cost estimating and takeoff",
          url: absoluteUrl(path),
          description: equipment.seo.description,
          areaServed: "US",
          provider: {
            "@type": "Organization",
            name: siteName,
            url: absoluteUrl("/"),
          },
        }}
      />
      <EquipmentView />
    </>
  );
}
