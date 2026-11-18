import type { Metadata } from "next";
import { mechanical } from "@/content/mechanical";
import { MechanicalView } from "@/components/sections/mechanical/MechanicalView";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl, siteName } from "@/lib/site";

const path = mechanical.seo.path;

export const metadata: Metadata = pageMetadata({
  title: mechanical.seo.title,
  description: mechanical.seo.description,
  path,
  absoluteTitle: true,
});

export default function MechanicalEstimatingPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Trades", path: "/concrete-estimating-services/" },
          { name: "Mechanical Estimating", path },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Mechanical Estimating Services",
          serviceType: "Mechanical estimating and takeoff",
          url: absoluteUrl(path),
          description: mechanical.seo.description,
          areaServed: "US",
          provider: {
            "@type": "Organization",
            name: siteName,
            url: absoluteUrl("/"),
          },
        }}
      />
      <MechanicalView />
    </>
  );
}
