import type { Metadata } from "next";
import { california } from "@/content/california";
import { CaliforniaView } from "@/components/sections/california/CaliforniaView";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl, siteName } from "@/lib/site";

const path = california.seo.path;

export const metadata: Metadata = pageMetadata({
  title: california.seo.title,
  description: california.seo.description,
  path,
  absoluteTitle: true,
});

export default function CaliforniaConstructionEstimatingPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Areas", path: "/texas-construction-estimating-services/" },
          { name: "California", path },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Construction Estimating Services California",
          serviceType: "Construction estimating and takeoff for California projects",
          url: absoluteUrl(path),
          description: california.seo.description,
          areaServed: {
            "@type": "State",
            name: "California",
          },
          provider: {
            "@type": "Organization",
            name: siteName,
            url: absoluteUrl("/"),
          },
        }}
      />
      <CaliforniaView />
    </>
  );
}
