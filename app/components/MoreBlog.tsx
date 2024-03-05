"use client";

import { FormEvent, useState } from "react";
import { Button } from "./Button";
import Link from "next/link";
import { formatDate } from "@/lib/formatDate";

interface Post {
  _id: string;
  avatar: string;
  createdAt: string;
  title: string;
  detail: string;
  author: string;
}

interface Props {
  allPost: Post[];
}

export const MoreBlog: React.FC<Props> = ({ allPost }) => {
  //   console.log(allPost);
  const [morePost, setMorePost] = useState(false);

  const handleMorePost = (e: FormEvent) => {
    e.preventDefault();
    setMorePost(!morePost);
  };

  return (
    <div>
      {!morePost ? <div className="text-end">
        <Button
          onClick={handleMorePost}
          title="See more"
          style={`bg-primary text-white px-2 py-1 rounded-md`}
        />
      </div> : null}

      {morePost && (
        <div className="my-2 grid gap-x-[33px] gap-y-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 justify-items-center">
          {allPost.map((post, index) => (
            <Link href={`/blog/${post._id}`} key={`${post._id}` + index}>
              <div
                className={`border shadow-md hover:shadow-lg transition w-[300px] `}
              >
                <div>
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
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
