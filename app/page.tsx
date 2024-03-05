import axios from "axios";
import Link from "next/link";
import { formatDate } from "@/lib/formatDate";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import { PostForm } from "./components/PostForm";
import { Button } from "./components/Button";
import { MoreBlog } from "./components/MoreBlog";

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

  // FirstRender
  // const postFirstRender = allPost.slice(0, 5).map((item, index) => (
  //   <div key={item._id}>
  //     <p className="">{item.title}</p>
  //   </div>
  // ));

  // // Show More
  const postMoreRender = allPost.slice(5).map((item, index) => item);

  return (
    <main className="flex flex-col gap-[39px]">
      <article className="flex sm:flex-col-reverse md:flex-row lg:flex-row bg-grey-color h-[467px]">
        <div className="flex-1 flex flex-wrap flex-col items-center justify-center">
          <div className="flex flex-col flex-wrap">
            <p className="text-4xl font-bold">Make better coffee</p>
            <p className="text-xl text-gray-300">why learn how to blog?</p>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img src="/images/asd.png" alt="" className="h-[323px] w-[476px]" />
        </div>
      </article>

      <article>{session && <PostForm session={session} />}</article>

      <article className="sm:mx-5 md:mx-10 lg:mx-32">
        {/* <div>{postMoreRender}</div> */}

        <div className="my-2 grid gap-x-[33px] gap-y-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 justify-items-center">
          {allPost.length !== 0
            ? allPost.slice(0, 5).map((post, index) => (
                <Link
                  href={`/blog/${post._id}`}
                  key={`${post._id}` + index}
                  className={`${
                    index === 0 || index === 4
                      ? "col-span-3 w-full object-cover overflow-hidden"
                      : "col-span-1 w-[300px]"
                  }`}
                >
                  <div
                    className={`border shadow-md hover:shadow-lg transition`}
                  >
                    <div
                      className={`${
                        index === 0 || index === 4
                          ? "flex flex-row-reverse items-center"
                          : "flex flex-col gap-3"
                      } ${index === 4 ? "bg-gray-blog" : ""}`}
                    >
                      <div className="flex-1">
                        <img
                          src="/images/michael-sum-LEpfefQf4rU-unsplash.webp"
                          alt=""
                          className="object-cover"
                        />
                      </div>
                      <div className="p-2 h-full flex-1">
                        <p className="mt-2 font-bold">{post.title}</p>
                        <p className="w-full">
                          {post.detail && post.detail.slice(0, 100)}
                        </p>
                        {post.detail && post.detail.length > 100 && <p>...</p>}

                        <div className="flex justify-between">
                          <p>{formatDate(post.createdAt)}</p>
                          <p className="font-semibold">Read more</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            : null}
        </div>

        <MoreBlog allPost={postMoreRender}/>
      </article>

      {/* <article className="flex sm:mx-5 md:mx-10 lg:mx-32 h-[500px] mb-[111px]">
        <div className="flex-1 bg-gray-blog flex items-center justify-center">
          <p className="font-bold text-4xl">What is Lorem Ipsum?</p>
        </div>
        <div className="flex-1">
          <img
            src="/images/michael-sum-LEpfefQf4rU-unsplash.webp"
            alt=""
            className="object-cover h-full"
          />
        </div>
      </article> */}
    </main>
  );
}
