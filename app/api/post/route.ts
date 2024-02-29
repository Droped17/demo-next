import Post from "@/app/models/Post";
import { NextRequest, NextResponse } from "next/server";

// Get All post
export async function GET() {
  try {
    const allPost = await Post.find({});
    return NextResponse.json({ message: "GET Success", allPost });
  } catch (error) {
    return NextResponse.json({ message: "Error", error });
  }
}

// Create post
export async function POST(req: NextRequest) {
  try {
    // get data from body
    const body = await req.json();
    const postDetail = body.formData;
    // console.log(postDetail);

    // create post to mongoDB
    await Post.create(postDetail);
    return NextResponse.json({ message: "Post Success", postDetail });
  } catch (error) {
    return NextResponse.json({ message: "Error", error });
  }
}
