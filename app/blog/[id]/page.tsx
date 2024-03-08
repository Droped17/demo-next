"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import { BlogForm } from "../form";
import { formatDate } from "@/lib/formatDate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTurnUp } from "@fortawesome/free-solid-svg-icons";
import Comment from "@/app/components/Comment";
import Image from "next/image";

const getPostById = async (params: any) => {
  try {
    const res = await axios.get(
      `https://demo-next-jk36.vercel.app/api/postById/?postId=${params}`
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
  const { data: session } = useSession();

  const handleGotoTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchData = async () => {
      const posts = await getPostById(params.id);
      setPostById(posts);
      console.log(postById);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div className="lg:mx-[97px] md:mx-20">
        
          <Image
            alt="blog-img"
            src={"/images/michael-sum-LEpfefQf4rU-unsplash.webp"}
            width={2560}
            height={200}
            style={{ height: '40vh', width: '100%',objectFit:"cover" }}
          />
    
        {/* <img
          src="/images/michael-sum-LEpfefQf4rU-unsplash.webp"
          alt=""
          className="w-full max-h-[40vh] object-cover"
        /> */}
      </div>
      <div className="flex flex-col gap-2 lg:mx-32 sm:mx-20">
        <p className="text-3xl font-semibold">{postById?.title}</p>
        <div className="flex gap-3">
          <p className="font-semibold ">Written by {postById?.author}</p>
          <p className="text-gray-400">
            {postById?.createdAt && formatDate(postById.createdAt)}
          </p>
        </div>
        <hr />

        <p>{postById?.detail}</p>

        <div className="p-5 border bg-gray-200 my-5">
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

      <div className="fixed right-10 bottom-16">
        <button
          onClick={handleGotoTop}
          className={`bg-primary p-2 rounded-full text-white w-[50px] h-[50px]`}
        >
          <FontAwesomeIcon icon={faArrowTurnUp} size="xl" color="white" />
        </button>
      </div>
    </div>
  );
}
