import type { Metadata } from "next";
import { florida } from "@/content/florida";
import { FloridaView } from "@/components/sections/florida/FloridaView";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl, siteName } from "@/lib/site";

const path = florida.seo.path;

export const metadata: Metadata = pageMetadata({
  title: florida.seo.title,
  description: florida.seo.description,
  path,
  absoluteTitle: true,
});

export default function FloridaConstructionEstimatingPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Areas", path: "/texas-construction-estimating-services/" },
          { name: "Florida", path },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Construction Estimating Services Florida",
          serviceType: "Construction estimating and takeoff for Florida projects",
          url: absoluteUrl(path),
          description: florida.seo.description,
          areaServed: {
            "@type": "State",
            name: "Florida",
          },
          provider: {
            "@type": "Organization",
            name: siteName,
            url: absoluteUrl("/"),
          },
        }}
      />
      <FloridaView />
    </>
  );
}
