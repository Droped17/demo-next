import axios from "axios";
import Link from "next/link";
import { formatDate } from "@/lib/formatDate";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import { PostForm } from "./components/PostForm";
import { MoreBlog } from "./components/MoreBlog";
import BannerHomePage from "./components/homepage/BannerHomePage";
import BlogHomePage from "./components/homepage/BlogHomePage";

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
      <BannerHomePage />
      
      <article>{session && <PostForm session={session} />}</article>

      <BlogHomePage allPost={allPost} postMoreRender={postMoreRender}/>

      {/* <article className="sm:mx-5 md:mx-10 lg:mx-32">
        <div className="my-2 grid gap-x-[33px] gap-y-[45px] lg:grid-cols-3 md:grid-cols-6 sm:grid-cols-4 xs:grid-cols-3 justify-items-center">
          {allPost.length !== 0
            ? allPost.slice(0, 5).map((post, index) => (
                <Link
                  href={`/blog/${post._id}`}
                  key={`${post._id}` + index}
                  className={`${
                    index === 0 || index === 4
                      ? "border shadow-md hover:shadow-xl transition col-span-full w-full object-cover overflow-hidden"
                      : "lg:col-span-1 md:col-span-2 sm:col-span-2 xs:col-span-3 border shadow-md hover:shadow-xl transition"
                  }`}
                >
         
                    <div
                      className={`${
                        index === 0 || index === 4
                          ? "flex lg:flex-row-reverse md:flex-row-reverse sm:flex-row-reverse xs:flex-col items-center"
                          : "flex flex-col gap-3"
                      } ${index === 4 ? "bg-gray-blog lg:flex-row-reverse md:flex-row-reverse sm:flex-row-reverse xs:flex-col" : ""}`}
                    >
                      <div className="flex-1">
                        <img
                          src="/images/michael-sum-LEpfefQf4rU-unsplash.webp"
                          alt=""
                          className="object-cover"
                        />
                      </div>
                      <div className={`flex-1 ${index === 0 || index === 4 ? "px-10" : "p-2"}`}>
                        <div className="flex flex-col gap-3">
                        <p className={`${index === 0 || index === 4 ? "text-4xl": "text-xl"} font-bold`}>{post.title}</p>
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

        <section className="my-[43px] ">
          <MoreBlog allPost={postMoreRender} />
        </section>
        
      </article> */}
    </main>
  );
}
