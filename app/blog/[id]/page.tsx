"use client";

import { useParams } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";
import Comment from "@/app/comments/page";
import { useSession } from "next-auth/react";
import { BlogForm } from "../form";

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
  avatar: string;
  name: string;
  createdAt: string;
  title: string;
  comments: [];
}

export default function BlogId() {
  const params = useParams<{ id: string }>();
  const [postById, setPostById] = useState<Post | null>(null);
  const { data: session, status } = useSession()

  useEffect(() => {
    const fetchData = async () => {
      const posts = await getPostById(params.id);
      setPostById(posts);
    };
    fetchData();
  }, []);

  return (
    <>
      <img
        src="/images/michael-sum-LEpfefQf4rU-unsplash.webp"
        alt=""
        className="w-full h-auto max-w-md"
      />
      <div className="lg:mx-32 md:mx-20">
        <p className="text-3xl">{postById?.title}</p>
        <div className="flex gap-3">
          <p>Written by {postById?.name}</p>
          <p>{postById?.createdAt}</p>
        </div>
        <p>{postById?.title}</p>

        <div className="p-5 border bg-gray-200">
          <p>Comment Zone!</p>
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
