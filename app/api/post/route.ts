import Post from "@/app/models/Post";
import { NextRequest, NextResponse } from "next/server";

// Get All post
// export async function GET() {
//   try {
//     const allPost = await Post.find({}).sort({ createdAt: 1 });
//     return NextResponse.json({ message: "GET Success", allPost });
//   } catch (error) {
//     return NextResponse.json({ message: "Error", error });
//   }
// }

// Get Post By Id
export async function GET(req:NextRequest){
  try {
    const searchParams = req.nextUrl.searchParams
    // console.log(`SEARCH PARAMS:===>`, searchParams.get("postId"));
    const params = searchParams.get("postId");

    const foundPost = await Post.findById(params);
    console.log(`FOUND POST:===> `,foundPost);


    return NextResponse.json({message: `Ok happy`,foundPost});
    // const postById = await Post.findById({})
  } catch (error) {
       NextResponse.json({message: `Error`});
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

