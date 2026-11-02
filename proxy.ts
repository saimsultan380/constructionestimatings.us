import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SITE_HOST = "constructionestimations.us";
const LEGACY_HOSTS = new Set(["constructionestimatings.us"]);

/**
 * Force a single host: https://constructionestimations.us (non-www).
 * Also 301 legacy/typo hosts. Trailing slash is handled by next.config.
 */
export function proxy(request: NextRequest) {
  const hostHeader = request.headers.get("host") || "";
  const hostname = hostHeader.split(":")[0]?.toLowerCase() || "";
  const apex = hostname.replace(/^www\./, "");
  const needsHostFix = hostname.startsWith("www.") || LEGACY_HOSTS.has(apex);

  if (needsHostFix) {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.hostname = SITE_HOST;
    url.port = "";
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff2?)$).*)",
  ],
};
