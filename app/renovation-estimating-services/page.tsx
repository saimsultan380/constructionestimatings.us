import type { Metadata } from "next";
import { renovation } from "@/content/renovation";
import { RenovationView } from "@/components/sections/renovation/RenovationView";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl, siteName } from "@/lib/site";

const path = renovation.seo.path;

export const metadata: Metadata = pageMetadata({
  title: renovation.seo.title,
  description: renovation.seo.description,
  path,
  absoluteTitle: true,
});

export default function RenovationEstimatingPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/commercial-estimating-service/" },
          { name: "Renovation Estimating", path },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Renovation Estimating Services",
          serviceType: "Renovation estimating and takeoff",
          url: absoluteUrl(path),
          description: renovation.seo.description,
          areaServed: "US",
          provider: {
            "@type": "Organization",
            name: siteName,
            url: absoluteUrl("/"),
          },
        }}
      />
      <RenovationView />
    </>
  );
}
