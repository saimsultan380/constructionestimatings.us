import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { homepage } from "@/content/homepage";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationJsonLd } from "@/lib/seo";
import { metaDescription, phone, siteName, siteUrl } from "@/lib/site";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-X5MF3PLSCY";

// Self-hosted latin variable fonts — avoids Turbopack next/font/google fetch failures on Vercel.
const archivo = localFont({
  src: "./fonts/archivo-latin.woff2",
  weight: "600 700",
  style: "normal",
  variable: "--font-archivo",
  display: "swap",
});

const inter = localFont({
  src: "./fonts/inter-latin.woff2",
  weight: "400 600",
  style: "normal",
  variable: "--font-inter",
  display: "swap",
});

const title = "Construction Estimating Services | Bid-Ready Estimates in 24 to 48 Hours";

export const metadata: Metadata = {
  // Canonicals are set per-page only — never inherit homepage "/" into child routes.
  metadataBase: new URL(`${siteUrl}/`),
  title: {
    default: title,
    template: `%s | ${siteName}`,
  },
  description: metaDescription,
  applicationName: siteName,
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title,
    description: metaDescription,
    siteName,
    locale: "en_US",
    type: "website",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: siteName }],
  },
  twitter: {
    card: "summary",
    title,
    description: metaDescription,
    images: ["/logo.png"],
  },
  robots: { index: true, follow: true },
  verification: {
    google: "fgs7j058c2HazHg6FulFBC-NjCaEgle-Zc0j7QnlFNQ",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const organization = organizationJsonLd(homepage.footer.description, phone || undefined);
  const service: Record<string, unknown> = {
    "@type": "ProfessionalService",
    name: siteName,
    url: `${siteUrl}/`,
    description: homepage.hero.body,
    areaServed: "US",
  };
  if (phone) service.telephone = phone;

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
