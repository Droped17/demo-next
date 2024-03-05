"use client";

import { useState, useEffect } from "react";
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

const Comment: React.FC<Props> = ({ postId }) => {
  const [allComment, setAllComment] = useState<Comment[]>([]);

  useEffect(() => {
    const getAllComment = () => {
      try {
        axios
          .get("http://localhost:3000/api/comment")
          .then((result) => setAllComment(result.data.allComment));

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

export default Comment;
