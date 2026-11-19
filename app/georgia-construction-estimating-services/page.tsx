import type { Metadata } from "next";
import { georgia } from "@/content/georgia";
import { GeorgiaView } from "@/components/sections/georgia/GeorgiaView";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl, siteName } from "@/lib/site";

const path = georgia.seo.path;

export const metadata: Metadata = pageMetadata({
  title: georgia.seo.title,
  description: georgia.seo.description,
  path,
  absoluteTitle: true,
});

export default function GeorgiaConstructionEstimatingPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Areas", path: "/texas-construction-estimating-services/" },
          { name: "Georgia", path },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Construction Estimating Services Georgia",
          serviceType: "Construction estimating and takeoff for Georgia projects",
          url: absoluteUrl(path),
          description: georgia.seo.description,
          areaServed: {
            "@type": "State",
            name: "Georgia",
          },
          provider: {
            "@type": "Organization",
            name: siteName,
            url: absoluteUrl("/"),
          },
        }}
      />
      <GeorgiaView />
    </>
  );
}
