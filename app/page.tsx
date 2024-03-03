import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import { formatDate } from "@/lib/formatDate";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import { PostForm } from "./components/PostForm";

// Server Component
interface Post {
  _id: string;
  author: string;
  title: string;
  detail: string;
  createdAt: string;
  avatar: string;
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

export default async function Home() {
  const allPost: Post[] = await getAllPost();
  const session = await getServerSession(options);
  return (
    <main className="flex flex-col gap-3">
      <article className="flex sm:mx-5 sm:flex-col-reverse md:flex-row lg:flex-row md:mx-10 lg:mx-32">
        <div className="flex-1 flex flex-wrap flex-col items-center justify-center">
          <div className="flex flex-col flex-wrap">
            <p className="sm:text-sm lg:text-2xl">Make better coffee</p>
            <p className="sm:text-sm lg:text-sm text-gray-300">
              why learn how to blog?
            </p>
          </div>
        </div>
        <div className="flex-1 max-h-[40vh] overflow-hidden">
          <img
            src="/images/michael-sum-LEpfefQf4rU-unsplash.webp"
            alt=""
            className="object-fill"
          />
        </div>
      </article>

      {/* <article className="max-h-[30vh] overflow-hidden sm:mx-5 sm:flex-col-reverse md:flex-row lg:flex-row md:mx-10 lg:mx-32 flex">
        <div className="flex-1 border">
          <p>Banner</p>
        </div>
        <div className="flex-1">
          <div className="flex flex-col gap-3">
            <img
              src="/images/michael-sum-LEpfefQf4rU-unsplash.webp"
              alt=""
              className="object-fill"
            />
          </div>
        </div>
      </article> */}

      <article>{session && <PostForm session={session} />}</article>

      <article className="sm:mx-5 md:mx-10 lg:mx-32">
        <div className="my-2 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-4 justify-items-center">
          {allPost.map((post, index) => (
            <Link href={`/blog/${post._id}`} key={`${post._id}` + index}>
              <div className=" border-t-gray-100 shadow-lg rounded-md cursor-pointer hover:shadow-2xl hover:transition">
                <div className="flex flex-col gap-3">
                  <img
                    src="/images/michael-sum-LEpfefQf4rU-unsplash.webp"
                    alt=""
                  />
                </div>
                <div className="p-2">
                  <p className="mt-2 font-bold">{post.title}</p>
                  <p>{post.detail && post.detail.slice(0, 100)}</p>
                  {post.detail && post.detail.length > 100 && <p>...</p>}

                  <div className="flex justify-between">
                    <p>{formatDate(post.createdAt)}</p>
                    <p className="font-semibold">Read more</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </article>
    </main>
  );
}
