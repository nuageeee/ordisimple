import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  // Seule page accessible
  const allowedPath = "/";

  if (process.env.NODE_ENV === "development") {
    return NextResponse.next();
  }


  if (url.pathname !== allowedPath) {
    url.pathname = allowedPath;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api).*)"],
};