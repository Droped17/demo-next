"use client";

import { FormEvent, useState } from "react";
import axios from "axios";

interface Props {
  session: any;
  postId: string;
}

interface FormData {
  postId: string;
  name: string;
  title: string;
  avatar: string;
  createdAt: Date;
}
export const BlogForm: React.FC<Props> = ({ session, postId }) => {
  // console.log(`SESSION====> `, session);
  // console.log(postId);

  const currentDate: Date = new Date();
  const [formData, setFormData] = useState<FormData>({
    postId: postId,
    name: session.user.email,
    title: "",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1088.jpg" ,
    createdAt: currentDate,
  });

  const handleSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();
      axios
        .post("http://localhost:3000/api/comment", { formData })
        .then((result) => console.log(result.data));

      // console.log(formData);
    } catch (error) {
      console.log("Error", error);
    }
  };

  const handleOnChange = (e: FormEvent) => {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    const username = target.name;
    setFormData((prev) => ({
      ...prev,
      [username]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleOnChange}
        name="title"
        className="border rounded-full w-full p-1"
      />
    </form>
  );
};
