import type { Metadata } from "next";
import { plumbing } from "@/content/plumbing";
import { PlumbingView } from "@/components/sections/plumbing/PlumbingView";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl, siteName } from "@/lib/site";

const path = plumbing.seo.path;

export const metadata: Metadata = pageMetadata({
  title: plumbing.seo.title,
  description: plumbing.seo.description,
  path,
  absoluteTitle: true,
});

export default function PlumbingEstimatingPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Trades", path: "/concrete-estimating-services/" },
          { name: "Plumbing Estimating", path },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Plumbing Estimating Services",
          serviceType: "Plumbing estimating and takeoff",
          url: absoluteUrl(path),
          description: plumbing.seo.description,
          areaServed: "US",
          provider: {
            "@type": "Organization",
            name: siteName,
            url: absoluteUrl("/"),
          },
        }}
      />
      <PlumbingView />
    </>
  );
}
