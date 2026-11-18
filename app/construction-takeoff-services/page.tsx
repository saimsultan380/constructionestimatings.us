import type { Metadata } from "next";
import { takeoff } from "@/content/takeoff";
import { TakeoffView } from "@/components/sections/takeoff/TakeoffView";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl, siteName } from "@/lib/site";

const path = takeoff.seo.path;

export const metadata: Metadata = pageMetadata({
  title: takeoff.seo.title,
  description: takeoff.seo.description,
  path,
  absoluteTitle: true,
});

export default function ConstructionTakeoffPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/commercial-estimating-service/" },
          { name: "Construction Takeoff", path },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Construction Takeoff Services",
          serviceType: "Construction quantity takeoff",
          url: absoluteUrl(path),
          description: takeoff.seo.description,
          areaServed: "US",
          provider: {
            "@type": "Organization",
            name: siteName,
            url: absoluteUrl("/"),
          },
        }}
      />
      <TakeoffView />
    </>
  );
}
