"use client";

import React , { useState, useEffect } from "react";
import axios from "axios";

interface Props {
  postId: string;
}

interface MyComment {
  postId: string;
  avatar: string;
  name: string;
  createdAt: string;
  title: string;
}

export default function Comment(props: Props | MyComment) {
  const [allComment, setAllComment] = useState<MyComment[]>([]);

  useEffect(() => {
    const getAllComment = async () => {
      try {
        const response = await axios.get<{ allComment: MyComment[] }>("http://localhost:3000/api/comment");
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
          {props.postId === comment.postId ? (
            <div className="border-l-8 border-secondary p-1 bg-gray-100 rounded-md mt-3">
              <div className="flex gap-2 items-center">
                <img
                  src={comment.avatar}
                  alt=""
                  width={30}
                  className="rounded-full"
                />
                <p className="font-bold">{comment.name}</p>
              </div>
              <p>{comment.title}</p>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

