"use client";

import { FormEvent, useState } from "react";

interface Props {
  session: any;
}

interface FormData {
  name: string;
  title: string;
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
    name: session.user.email,
    title: "test",
    avatar: "",
    createdAt: currentDate,
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    console.log(formData);

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
    <div className="mt-5 text-center sm:mx-4 lg:mx-32">
      {isOpen === false ? (
        <button
          onClick={handleOpen}
          className="bg-primary p-1 text-white rounded-md"
        >
          add blog
        </button>
      ) : undefined}
      {isOpen && (
        <div className="flex flex-col shadow-xl p-5 rounded-2xl border">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="text"
              name="title"
              className="border rounded-full p-1 w-full"
              onChange={handleOnChange}
            />
            <div className="flex justify-end gap-1">
              <button
                className="p-1 bg-gray-200 rounded-md"
                onClick={handleOpen}
              >
                Cancel
              </button>
              <button
                className="p-1 bg-primary rounded-md text-white"
                type="submit"
              >
                Confirm
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
