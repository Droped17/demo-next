import Post from "@/app/models/Post";
import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";
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
    console.log(allPost);
    return new NextResponse(JSON.stringify({message: "Get allPost success",allPost}),{status: 200});
  } catch (error) {
    return new NextResponse(JSON.stringify({message: "Error to GET allPost"}),{status: 500});
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

export async function DELETE(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const params = searchParams.get("postId");

    console.log(`DELETE===> `, params);
    
    if (!params) {
      return NextResponse.json({ message: "postId parameter is missing" });
    }
    const postIdObject = new ObjectId(params);
    console.log(`ID: ==> `,postIdObject._id);

    // Perform the deletion
    const result = await Post.deleteOne({ _id: postIdObject });

    return NextResponse.json({ message: "Delete Success"});
  } catch (error) {
    return NextResponse.json({ message: "Error to delete" });
  }
}

