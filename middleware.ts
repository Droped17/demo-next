import { NextResponse, NextRequest } from "next/server";

const allowOrigins =
  process.env.NODE_ENV === 'production' ? 'https://demo-next-jk36.vercel.app' : 'http://localhost:3000'


export function middleware(request: NextRequest) {
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


