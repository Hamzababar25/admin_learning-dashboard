import { NextResponse } from "next/server";

const publicRoutes = "/";

export async function middleware(request) {
  const path = request.nextUrl.pathname;
  const sessionCookie = request.cookies.get("saloonsession");

  if (path !== publicRoutes && !sessionCookie) {
    const response = NextResponse.redirect(new URL("/", request.nextUrl));
    response.headers.set("x-middleware-cache", "no-cache");
    return response;
  }

  if (path === publicRoutes && sessionCookie) {
    const response = NextResponse.redirect(
      new URL("/dashboard", request.nextUrl)
    );
    response.headers.set("x-middleware-cache", "no-cache");
    return response;
  }

  const response = NextResponse.next();
  response.headers.set("x-middleware-cache", "no-cache");
  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
