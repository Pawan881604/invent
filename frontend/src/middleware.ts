// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// List of routes that are protected
const protectedRoutes = ["/dashboard", "/crm", "/settings"];

export function middleware(req: NextRequest) {
  // Get the token from cookies
  const token = req.cookies.get("authToken");

  // // Check if the user is trying to access a protected route
  // if (protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route))) {
  //   // If the token is missing, redirect to login page
  //   if (!token) {
  //     return NextResponse.redirect(new URL("/auth/sign-in", req.url));
  //   }
  // }

  // Continue to the requested page if token exists
  return NextResponse.next();
}

// Config to define which routes to run the middleware on
export const config = {
  matcher: ["/dashboard/:path*", "/crm/:path*", "/settings/:path*"],
};
