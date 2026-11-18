import type { Metadata } from "next";
import { openings } from "@/content/openings";
import { OpeningsView } from "@/components/sections/openings/OpeningsView";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl, siteName } from "@/lib/site";

const path = openings.seo.path;

export const metadata: Metadata = pageMetadata({
  title: openings.seo.title,
  description: openings.seo.description,
  path,
  absoluteTitle: true,
});

export default function OpeningsEstimatingPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Trades", path: "/concrete-estimating-services/" },
          { name: "Openings Estimating", path },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Openings Estimating Services",
          serviceType: "Openings estimating and takeoff",
          url: absoluteUrl(path),
          description: openings.seo.description,
          areaServed: "US",
          provider: {
            "@type": "Organization",
            name: siteName,
            url: absoluteUrl("/"),
          },
        }}
      />
      <OpeningsView />
    </>
  );
}
