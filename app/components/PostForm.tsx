"use client";

import { FormEvent, useState } from "react";
import { Button } from "./Button";
import axios from "axios";

interface Props {
  session: any;
}

interface FormData {
  author: string;
  title: string;
  detail: string;
  avatar: string;
  createdAt: Date;
}
export const PostForm: React.FC<Props> = ({ session }) => {
  const [isOpen, setIsOpen] = useState(false);
  // console.log(session);
  const handleOpen = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  const currentDate: Date = new Date();
  const [formData, setFormData] = useState<FormData>({
    author: session.user.name || session.user.email || "anonymous",
    title: "",
    detail: "",
    avatar: "",
    createdAt: currentDate,
  });

  const handleSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();
      console.log(formData);
      const res = await axios.post("/api/post",{formData});
      console.log(res.data);

      // Wait Dialog
      window.location.reload();
    } catch (error) {
      console.log(error);
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
    <div className="mt-5 text-center sm:mx-4 lg:mx-32">
      {isOpen === false ? (
        <Button
          onClick={handleOpen}
          title="Create Blog"
          style="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        />
      ) : undefined}
      {isOpen && (
        <div className="flex flex-col shadow-xl p-5 rounded-2xl border">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="border rounded-lg p-2 w-full"
              onChange={handleOnChange}
            />
            <textarea
              placeholder="Write Something"
              name="detail"
              className="border rounded-lg p-2 w-full"
              onChange={handleOnChange}
            />
            <div className="flex justify-end gap-1">
              <Button
                onClick={handleOpen}
                title="Cancel"
                style="text-white bg-gradient-to-r from-gray-300 via-gray-400 to-gray-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 shadow-lg shadow-gray-500/50 dark:shadow-lg dark:shadow-gray-300/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              />
              <Button
                onClick={handleSubmit}
                title="Post"
                style="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
