"use client";

import React, { FormEvent, useState } from "react";
import { Button } from "./Button";
import axios from "axios";
import moment from "moment";

interface Props {
  session: any;
}

interface FormData {
  author: string;
  title: string;
  detail: string;
  avatar: string;
  createdAt: string;
}
// const currentDate: Date = new Date();
const date = moment().format();

export default function PostForm({ session }: Props) {
  console.log(date);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    author: session.user.name || session.user.email || "anonymous",
    title: "",
    detail: "",
    avatar: "",
    createdAt: date,
  });
  // console.log(session);
  const handleOpen = () => {
    setIsOpen(!isOpen);
    // console.log(isOpen);
  };

  const handleSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();
      // console.log(formData);
      if (formData.title.trim() === "" || formData.detail.trim() === "") {
        alert("Please fill in all required fields.");
        return; // Prevent further execution
      }
      const res = await axios.post(
        "/api/post" ||
          `https://main--hotcoffeeblog.netlify.app/api/post`,
        { formData }
      );
      // console.log(res.data);

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
                style="inline-block rounded-lg bg-gray-400 px-5 py-2.5  text-md text-white shadow-dark-3 transition duration-150 ease-in-out hover:bg-gray-500 hover:shadow-dark-2 focus:bg-gray-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
              />
              <Button
                onClick={handleSubmit}
                title="Post"
                style="inline-block rounded-lg bg-green-500 px-5 py-2.5  text-md text-white shadow-dark-3 transition duration-150 ease-in-out hover:bg-green-700 hover:shadow-dark-2 focus:bg-green-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-green-900 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
