"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

interface Props {
  postId: string;
}

interface Comment {
  postId: string;
  avatar: string;
  name: string;
  createdAt: string;
  title: string;
}

export default function Comment({ postId }: Props) {
  const [allComment, setAllComment] = useState<Comment[]>([]);

  useEffect(() => {
    const getAllComment = async () => {
      try {
        const response = await axios.get<{ allComment: Comment[] }>(
          "https://demo-next-jk36.vercel.app/api/comment"
        );
        setAllComment(response.data.allComment);
      } catch (error) {
        console.log(error);
      }
    };

    getAllComment();
  }, []);

  return (
    <div>
      {allComment.map((comment, index) => (
        <div key={`${comment.postId} ${index}`}>
          {postId === comment.postId ? (
            <div className="border-l-8 border-secondary p-1 bg-gray-100 rounded-md mt-3">
              <div className="flex gap-2 items-center">
                <Image
                  alt="comment-img"
                  src={comment.avatar}
                  width={30}
                  height={30}
                  className="rounded-full"
                />
                {/* <img
                  src={comment.avatar}
                  alt=""
                  width={30}
                  className="rounded-full"
                /> */}
                <p className="font-bold">{comment.name}</p>
              </div>
              <p>{comment.title}</p>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
