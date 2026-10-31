export const siteName = "Construction Estimatings";

/** Apex hostname without www — used for redirects and host checks. */
export const siteHost = "constructionestimatings.us";

/**
 * Canonical origin: always https + non-www, no trailing slash on the origin.
 * Env override is normalized the same way so staging mistakes cannot ship www.
 */
export const siteUrl = normalizeSiteOrigin(
  process.env.NEXT_PUBLIC_SITE_URL || `https://${siteHost}`,
);

export const phone = process.env.NEXT_PUBLIC_PHONE?.trim() || "";
export const email = process.env.NEXT_PUBLIC_EMAIL?.trim() || "";

export const metaDescription =
  "Professional construction cost estimating services turn your drawings into measured quantities and a priced estimate. A building construction estimator reviews.";

export function phoneHref(value: string) {
  const compact = value.replace(/[^\d+]/g, "");
  return `tel:${compact}`;
}

/** Force https + non-www origin without a trailing slash. */
export function normalizeSiteOrigin(raw: string) {
  try {
    const url = new URL(raw);
    url.protocol = "https:";
    url.hostname = url.hostname.replace(/^www\./i, "");
    url.pathname = "";
    url.search = "";
    url.hash = "";
    return url.origin;
  } catch {
    return `https://${siteHost}`;
  }
}

/** Ensure a path starts with / and ends with / (homepage stays "/"). File paths keep their extension. */
export function withTrailingSlash(path: string) {
  if (!path || path === "/") return "/";
  const bare = path.split(/[?#]/)[0] || "/";
  const withLeading = bare.startsWith("/") ? bare : `/${bare}`;
  if (/\.[a-z0-9]+$/i.test(withLeading)) return withLeading;
  return withLeading.endsWith("/") ? withLeading : `${withLeading}/`;
}

/**
 * Absolute canonical URL for a path.
 * Homepage → https://example.com/
 * Inner page → https://example.com/page/
 */
export function absoluteUrl(path = "/") {
  const normalized = withTrailingSlash(path);
  return normalized === "/" ? `${siteUrl}/` : `${siteUrl}${normalized}`;
}
