import React from "react";
import Link from "next/link";
import { formatDate } from "@/lib/formatDate";
import MoreBlog from "../MoreBlog";
import Image from "next/image";
import { Posts } from "@/type";

interface Props {
  allPost: Posts[];
  postMoreRender: any;
}

const BlogHomePage: React.FC<Props> = ({ allPost, postMoreRender }) => {
  return (
    <article className="sm:mx-5 md:mx-10 lg:mx-32">
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
                  } ${
                    index === 4
                      ? "bg-gray-blog lg:flex-row-reverse md:flex-row-reverse sm:flex-row-reverse xs:flex-col"
                      : ""
                  }`}
                >
                  <div className="flex-1">
                    <Image
                      alt="blog-img"
                      src={"https://images.pexels.com/photos/15022089/pexels-photo-15022089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                      width={2500}
                      height={300}
                      style={{
                        height: "40vh",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div
                    className={`flex-1 ${
                      index === 0 || index === 4 ? "px-10" : "p-2"
                    }`}
                  >
                    <div className="flex flex-col gap-3">
                      <p
                        className={`${
                          index === 0 || index === 4 ? "text-4xl" : "text-xl"
                        } font-bold`}
                      >
                        {post.title}
                      </p>
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
    </article>
  );
};

export default BlogHomePage;
