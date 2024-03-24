import { NextRequest, NextResponse } from "next/server";
import Comments from "@/app/models/Comment";

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const params = searchParams.get("postId");

    const foundComment = await Comments.find({postId: params});
    console.log(`FOUND COMMENT:===> `, foundComment);

    return NextResponse.json({ message: `Ok happy`, foundComment });
  } catch (error) {
    return NextResponse.json({ message: "Get Comment Error" });
  }
}
