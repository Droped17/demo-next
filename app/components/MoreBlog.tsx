"use client";

import React, { useState, FormEvent } from "react";
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

export default function MoreBlog({ allPost }: Props) {
  //   console.log(allPost);

  const [morePost, setMorePost] = useState<boolean>(false);

  const handleMorePost = (e: FormEvent) => {
    e.preventDefault();
    setMorePost(!morePost);
  };

  return (
    <div>
      {!morePost ? (
        <div className="lg:text-end sm:text-end xs:text-center">
          <Button
            onClick={handleMorePost}
            title="See more"
            style={`bg-primary hover:bg-primary-hover text-white px-3 py-2 rounded-md`}
          />
        </div>
      ) : null}

      {morePost && (
        <div className="my-2 grid gap-x-[33px] gap-y-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 justify-items-center">
          {allPost.map((post, index) => (
            <Link href={`/blog/${post._id}`} key={`${post._id}` + index}>
              <div className={`border shadow-md hover:shadow-xl transition`}>
                <div>
                  <img
                    src="https://images.pexels.com/photos/15022089/pexels-photo-15022089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
}
