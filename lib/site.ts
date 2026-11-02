export const siteName = "Construction Estimatings";

/** Canonical apex hostname (non-www) — matches production: https://constructionestimations.us/ */
export const siteHost = "constructionestimations.us";

/** Old / typo hosts that must 301 to siteHost. */
export const legacyHosts = ["constructionestimatings.us"] as const;

/**
 * Canonical origin: always https + non-www, no trailing slash on the origin.
 * Env override is normalized the same way so staging mistakes cannot ship www or legacy hosts.
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

/** Force https + non-www + canonical apex, without a trailing slash on the origin. */
export function normalizeSiteOrigin(raw: string) {
  try {
    const url = new URL(raw);
    url.protocol = "https:";
    let hostname = url.hostname.replace(/^www\./i, "").toLowerCase();
    if ((legacyHosts as readonly string[]).includes(hostname)) {
      hostname = siteHost;
    }
    url.hostname = hostname || siteHost;
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
 * Homepage → https://constructionestimations.us/
 * Inner page → https://constructionestimations.us/page/
 */
export function absoluteUrl(path = "/") {
  const normalized = withTrailingSlash(path);
  return normalized === "/" ? `${siteUrl}/` : `${siteUrl}${normalized}`;
}
