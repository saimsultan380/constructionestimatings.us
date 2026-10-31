import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import Script from "next/script";
import { homepage } from "@/content/homepage";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { JsonLd } from "@/components/seo/JsonLd";
import { metaDescription, phone, siteName, siteUrl } from "@/lib/site";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-X5MF3PLSCY";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-archivo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const title = "Construction Estimating Services | Bid-Ready Estimates in 24 to 48 Hours";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${siteName}`,
  },
  description: metaDescription,
  applicationName: siteName,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description: metaDescription,
    url: siteUrl,
    siteName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description: metaDescription,
  },
  robots: { index: true, follow: true },
  verification: {
    google: "fgs7j058c2HazHg6FulFBC-NjCaEgle-Zc0j7QnlFNQ",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const organization: Record<string, unknown> = {
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
    description: homepage.footer.description,
    areaServed: "US",
  };
  const service: Record<string, unknown> = {
    "@type": "ProfessionalService",
    name: siteName,
    url: siteUrl,
    description: homepage.hero.body,
    areaServed: "US",
  };
  if (phone) {
    organization.telephone = phone;
    service.telephone = phone;
  }

  return (
    <html lang="en" className={`${archivo.variable} ${inter.variable}`}>
      <body className="min-h-full bg-surface pb-24 font-body text-ink antialiased lg:pb-0">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`}
        </Script>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [organization, service],
          }}
        />
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:bg-surface focus:px-3 focus:py-2"
        >
          Skip to content
        </a>
        <Header />
        <main id="content">{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
