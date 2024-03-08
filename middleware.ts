import { NextResponse, NextRequest } from "next/server";

const allowOrigins =
  process.env.NODE_ENV === "production"
    ? ['https://demo-next-w6gp.vercel.app', 'https://demo-next-w6gp.vercel.app']
    : ['http://localhost:3000', 'https://www.google.com'];

export function middleware(request: Request) {
  const origin = request.headers.get("origin");
  console.log(origin);
  console.log(process.env.NODE_ENV)

  if (origin && allowOrigins.includes(origin)) {
    return new NextResponse(null, {
      status: 400,
      statusText: "Bad Request",
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }
  console.log("Middleware!");
  console.log(request.method);
  console.log(request.url);

  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};
