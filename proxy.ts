import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SITE_HOST = "constructionestimatings.us";

/**
 * Force a single host: https + non-www.
 * Trailing-slash normalization is handled by next.config trailingSlash: true.
 */
export function proxy(request: NextRequest) {
  const hostHeader = request.headers.get("host") || "";
  const hostname = hostHeader.split(":")[0]?.toLowerCase() || "";

  if (hostname.startsWith("www.")) {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.hostname = hostname.replace(/^www\./, "") || SITE_HOST;
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
