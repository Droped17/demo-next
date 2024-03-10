import Post from "@/app/models/Post";
import { NextRequest,NextResponse } from "next/server";

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
      const searchParams = req.nextUrl.searchParams;
      return  NextResponse.json({message: `Error`,searchParams});
    }
  }