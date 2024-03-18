"use client";

import { FormEvent, useState } from "react";
import axios from "axios";
import moment from "moment";

interface Props {
  session: any;
  postId: string;
}

interface FormData {
  postId: string;
  name: string;
  title: string;
  avatar: string;
  createdAt: string;
}

const date = moment().format();

export const BlogForm: React.FC<Props> = ({ session, postId }) => {
  // console.log(`SESSION====> `, session);
  // console.log(postId);

  // const currentDate: Date = new Date();

  const [formData, setFormData] = useState<FormData>({
    postId: postId,
    name: session.user.name || session.user.email || "anonymous",
    title: "",
    avatar: session.user.name
      ? "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1088.jpg"
      : "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1150.jpg",
    createdAt: date,
  });

  const handleSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();
      if (formData.title.trim() === "") {
        alert("Please fill in all required fields.");
        return; // Prevent further execution
      }
      axios
        .post(
          "https://hotcoffeeblog.netlify.app/api/comment" ||
            `https://main--hotcoffeeblog.netlify.app/api/comment`,
          { formData }
        )
        .then((result) => console.log(result.data));
      window.location.reload();
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
      <textarea
        onChange={handleOnChange}
        name="title"
        className="border w-full p-1"
      />
      <div className="text-end">
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-primary rounded-md group-hover:bg-opacity-0">
            Comment
          </span>
        </button>
      </div>
    </form>
  );
};
