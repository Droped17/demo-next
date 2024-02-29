"use client";

import { FormEvent, useState } from "react";

interface Props {
  session: object;
}

interface FormData {
  name: string;
  title: string;
  avatar: string;
  createdAt: Date;
}
export const BlogForm: React.FC<Props> = ({ session }) => {
  // console.log(session);
  const currentDate: Date = new Date();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    title: "",
    avatar: "",
    createdAt: currentDate,
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/post", {
      method: "POST",
      body: JSON.stringify({
        formData,
        "content-type": "application/json",
      }),
    });

    if (!res.ok) {
      const response = await res.json();
      console.error(response.message);
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
