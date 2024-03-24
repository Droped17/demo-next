"use client";

import React, { FormEvent, useState } from "react";
import axios from "axios";
import moment from "moment";
import { FormData } from "@/type";
import HomeCreateBlogButton from "@/ui/atoms/HomeCreateBlogButton";
import HomeCreateBlogForm from "@/ui/molecules/HomeCreateBlogForm";

const date = moment().format();

export default function HomePostFormArticle({ session }: any) {
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
        <HomeCreateBlogButton onClick={handleOpen} text={`create blog`}/>
      ) : undefined}
      {isOpen && (
        <div className="flex flex-col shadow-xl p-5 rounded-2xl border">
            <HomeCreateBlogForm handleOnChange={handleOnChange} handleOpen={handleOpen} handleSubmit={handleSubmit}/>
        </div>
      )}
    </div>
  );
}
