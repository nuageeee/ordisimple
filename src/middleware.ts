// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  // Seule page accessible
  const allowedPath = "/";

  if (url.pathname !== allowedPath) {
    url.pathname = allowedPath;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// Appliquer le middleware à toutes les routes sauf _next et API
export const config = {
  matcher: ["/((?!_next|api).*)"],
};
