import type { Metadata } from "next";
import { masonry } from "@/content/masonry";
import { MasonryView } from "@/components/sections/masonry/MasonryView";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl, siteName } from "@/lib/site";

const path = masonry.seo.path;

export const metadata: Metadata = pageMetadata({
  title: masonry.seo.title,
  description: masonry.seo.description,
  path,
  absoluteTitle: true,
});

export default function MasonryEstimatingPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Trades", path: "/concrete-estimating-services/" },
          { name: "Masonry Estimating", path },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Masonry Estimating Services",
          serviceType: "Masonry estimating and takeoff",
          url: absoluteUrl(path),
          description: masonry.seo.description,
          areaServed: "US",
          provider: {
            "@type": "Organization",
            name: siteName,
            url: absoluteUrl("/"),
          },
        }}
      />
      <MasonryView />
    </>
  );
}
