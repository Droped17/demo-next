import React, { useState, useEffect } from "react";
import axios from "axios";

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

const getAllComment = async (postId: string) => {
  try {
    const response = await axios.get(
      `/api/commentById?postId=${postId}`
    );
    // console.log(response.data);
    return response.data.foundComment;
  } catch (error) {
    console.log(error);
    return []; 
  }
};

export default function Comment({ postId }: Props) {
  const [allComment, setAllComment] = useState<Comment[]>([]); 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const post = await getAllComment(postId);
        setAllComment(post);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {allComment.map((comments, index) => (
        <div key={`${comments.postId}-${index}`}>
          <div className="border-l-8 border-secondary p-1 bg-gray-100 rounded-md mt-3">
            <div className="flex gap-2 items-center">
              <img
                src={comments.avatar}
                alt=""
                width={30}
                className="rounded-full"
              />
              <p className="font-bold">{comments.name}</p>
            </div>
            <p>{comments.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
