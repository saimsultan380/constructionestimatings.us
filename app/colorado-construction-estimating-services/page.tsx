import type { Metadata } from "next";
import { colorado } from "@/content/colorado";
import { ColoradoView } from "@/components/sections/colorado/ColoradoView";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl, siteName } from "@/lib/site";

const path = colorado.seo.path;

export const metadata: Metadata = pageMetadata({
  title: colorado.seo.title,
  description: colorado.seo.description,
  path,
  absoluteTitle: true,
});

export default function ColoradoConstructionEstimatingPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Areas", path: "/texas-construction-estimating-services/" },
          { name: "Colorado", path },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Construction Estimating Services Colorado",
          serviceType: "Construction estimating and takeoff for Colorado projects",
          url: absoluteUrl(path),
          description: colorado.seo.description,
          areaServed: {
            "@type": "State",
            name: "Colorado",
          },
          provider: {
            "@type": "Organization",
            name: siteName,
            url: absoluteUrl("/"),
          },
        }}
      />
      <ColoradoView />
    </>
  );
}
