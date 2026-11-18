import type { Metadata } from "next";
import { sitework } from "@/content/sitework";
import { SiteworkView } from "@/components/sections/sitework/SiteworkView";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl, siteName } from "@/lib/site";

const path = sitework.seo.path;

export const metadata: Metadata = pageMetadata({
  title: sitework.seo.title,
  description: sitework.seo.description,
  path,
  absoluteTitle: true,
});

export default function SiteworkEstimatingPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Trades", path: "/concrete-estimating-services/" },
          { name: "Sitework Estimating", path },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Sitework Estimating Services",
          serviceType: "Sitework and earthwork estimating",
          url: absoluteUrl(path),
          description: sitework.seo.description,
          areaServed: "US",
          provider: {
            "@type": "Organization",
            name: siteName,
            url: absoluteUrl("/"),
          },
        }}
      />
      <SiteworkView />
    </>
  );
}
