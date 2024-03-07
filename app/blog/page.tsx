import { getServerSession } from "next-auth";
import PostForm  from "../components/PostForm";
import { options } from "../api/auth/[...nextauth]/options";
import { BlogForm } from "./form";
import axios from "axios";
import Comment from "../components/Comment";

interface Post {
  _id: string;
  avatar: string;
  name: string;
  createdAt: string;
  title: string;
  comments: [];
}

const getAllPost = async () => {
  try {
    const res = await axios.get("http://localhost:3000/api/post");
    // console.log(res.data);
    return res.data.allPost;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return []; // Return an empty array if there's an error
  }
};

export default async function Blog() {
  const allPost: Post[] = await getAllPost();

  // console.log(`All Post: ====> `,allPost);

  const session = await getServerSession(options);

  // Format the date
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return (
    <div className="flex flex-col gap-4">
      {session && <PostForm session={session} />}
      <div className=" flex flex-col gap-5 sm:mx-20 md:mx-32 my-5">
        {allPost.map((post, index) => (
          <div
            key={index}
            className="border-l-8  border-l-secondary border-t border-t-gray-100 shadow-lg rounded-md p-5"
          >
            <div className="flex gap-3">
              {/* <p>{post._id}</p> */}
              {post.avatar ? (
                <img
                  src={post.avatar}
                  alt=""
                  width={50}
                  className="rounded-full"
                />
              ) : (
                <img
                  alt=""
                  src="/images/michael-sum-LEpfefQf4rU-unsplash.webp"
                  width={50}
                  className="rounded-full"
                ></img>
              )}
              <div>
                <p>{post.name}</p>
                <p>{formatDate(post.createdAt)}</p>
              </div>
            </div>
            <p className="mt-2">{post.title}</p>
            <hr />
            {session && (
              <div className="mt-2">
                <BlogForm session={session} postId={post._id} />
              </div>
            )}

            {/* Comments */}
            <Comment postId={post._id} />
          </div>
        ))}
      </div>
    </div>
  );
}
