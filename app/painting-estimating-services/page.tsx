import type { Metadata } from "next";
import { painting } from "@/content/painting";
import { PaintingView } from "@/components/sections/painting/PaintingView";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl, siteName } from "@/lib/site";

const path = painting.seo.path;

export const metadata: Metadata = pageMetadata({
  title: painting.seo.title,
  description: painting.seo.description,
  path,
  absoluteTitle: true,
});

export default function PaintingEstimatingPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/commercial-estimating-service/" },
          { name: "Painting Estimating", path },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Painting Estimating Services",
          serviceType: "Painting construction estimating",
          url: absoluteUrl(path),
          description: painting.seo.description,
          areaServed: "US",
          provider: {
            "@type": "Organization",
            name: siteName,
            url: absoluteUrl("/"),
          },
        }}
      />
      <PaintingView />
    </>
  );
}
