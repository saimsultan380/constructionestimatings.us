export const siteName = "Construction Estimatings";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://constructionestimatings.us"
).replace(/\/$/, "");

export const phone = process.env.NEXT_PUBLIC_PHONE?.trim() || "";
export const email = process.env.NEXT_PUBLIC_EMAIL?.trim() || "";

export const metaDescription =
  "Professional construction cost estimating services turn your drawings into measured quantities and a priced estimate. A building construction estimator reviews.";

export function phoneHref(value: string) {
  const compact = value.replace(/[^\d+]/g, "");
  return `tel:${compact}`;
}
