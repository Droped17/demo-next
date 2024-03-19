import Comments from "@/app/models/Comment";
import Post from "@/app/models/Post";
import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";

// Get Comment By Id
export async function GET(req: NextRequest) {
  try {
    const allComment = await Comments.find();
    return NextResponse.json({ message: "GET Success", allComment });
  } catch (error) {
    return NextResponse.json({ message: "Error", error });
  }
}

// Create Comment
// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();
//     const commentData = body.formData;

//     // console.log(commentData);

//     await Comments.create(commentData);

//     return NextResponse.json({ message: "success", commentData });
//   } catch (error) {
//     return NextResponse.json({ message: "Error", error });
//   }
// }

export async function POST(req: NextRequest) {
  try {
    // get data from body
    const body = await req.json();
    const commentData = body.formData;
    // console.log(postDetail);

    // create comment to mongoDB
    await Comments.create(commentData);
    return NextResponse.json({ message: "Post Success", commentData });
  } catch (error) {
    return NextResponse.json({ message: "Error", error });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const params = searchParams.get("postId");
    // console.log(params);

    if (!params) {
      return NextResponse.json({ message: "postId parameter is missing" });
    }
    const postIdObject = new ObjectId(params);
    console.log(`ID: ==> `,postIdObject._id);

    // Perform the deletion
    await Post.deleteOne({ _id: postIdObject });

    return NextResponse.json({ message: "Delete Success"});
  } catch (error) {
    return NextResponse.json({ message: "Error to delete" });
  }
}
