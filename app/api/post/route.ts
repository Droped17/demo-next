import Post from "@/app/models/Post";
import { NextRequest, NextResponse } from "next/server";
// import { limiter } from "../config/limiter";

// Get All post
export async function GET(request: Request) {
  try {
    // const remaining = await limiter.removeTokens(1);
    // console.log(remaining);
    // const origin =  request.headers.get('origin');
    const allPost = await Post.find({}).sort({ createdAt: -1 });
    // return new NextResponse(JSON.stringify(allPost),{
    //   headers: {
    //     'Access-Control-Allow-Origin': origin || "*",
    //     'Content-Type': 'application/json',
    //   }
    // });

    return NextResponse.json({message:"get post",allPost});
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

