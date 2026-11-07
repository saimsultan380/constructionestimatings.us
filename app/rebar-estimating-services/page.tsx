import type { Metadata } from "next";
import { rebar } from "@/content/rebar";
import { RebarView } from "@/components/sections/rebar/RebarView";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl, siteName } from "@/lib/site";

const path = rebar.seo.path;

export const metadata: Metadata = pageMetadata({
  title: rebar.seo.title,
  description: rebar.seo.description,
  path,
  absoluteTitle: true,
});

export default function RebarEstimatingPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Trades", path: "/concrete-estimating-services/" },
          { name: "Rebar Estimating", path },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Rebar Estimating Services",
          serviceType: "Rebar estimating and takeoff",
          url: absoluteUrl(path),
          description: rebar.seo.description,
          areaServed: "US",
          provider: {
            "@type": "Organization",
            name: siteName,
            url: absoluteUrl("/"),
          },
        }}
      />
      <RebarView />
    </>
  );
}
