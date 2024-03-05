"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import Comment from "@/app/comments/page";
import { BlogForm } from "../form";
import { formatDate } from "@/lib/formatDate";

const getPostById = async (params: any) => {
  try {
    const res = await axios.get(
      `http://localhost:3000/api/postById/?postId=${params}`
    );
    return res.data.foundPost;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

interface Post {
  _id: string;
  author: string;
  title: string;
  detail: string;
  createdAt: string;
  avatar: string;
}

export default function BlogId() {
  const params = useParams<{ id: string }>();
  const [postById, setPostById] = useState<Post | null>(null);
  const { data: session, status } = useSession();

  useEffect(() => {
    const fetchData = async () => {
      const posts = await getPostById(params.id);
      setPostById(posts);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="mx-[97px]">
        <img
          src="/images/michael-sum-LEpfefQf4rU-unsplash.webp"
          alt=""
          className="w-full max-h-[40vh] object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 lg:mx-32 sm:mx-20">
        <p className="text-3xl font-semibold">{postById?.title}</p>
        <div className="flex gap-3">
          <p className="font-semibold">Written by {postById?.author}</p>
          <p>{postById?.createdAt}</p>
        </div>
        <hr />

       <p>{postById?.detail}</p>
 

        <div className="p-5 border bg-gray-200">
          <p>Comment</p>
          {session && (
            <div className="mt-2">
              <BlogForm session={session} postId={params.id} />
            </div>
          )}

          <div className="">
            <Comment postId={params.id} />
          </div>
        </div>
      </div>
    </>
  );
}
