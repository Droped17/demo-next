"use client";

import { useState } from "react";
export default function PostForm() {

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  const handleAddBlog = () => {
    console.log("add blog");
  };
  return (
    <div className="mt-5 text-center mx-32">
      {isOpen === false ? (
        <button
          onClick={handleOpen}
          className="bg-primary p-1 text-white rounded-md"
        >
          add blog
        </button>
      ) : undefined}
      {isOpen && (
        <div className="flex flex-col gap-2 shadow-lg p-5 rounded-2xl">
          <input type="text" className="border rounded-full p-1"/>
          <div className="flex justify-end gap-1">
            <button className="p-1 bg-gray-200 rounded-md" onClick={handleOpen}>
              Cancel
            </button>
            <button
              className="p-1 bg-primary rounded-md text-white"
              onClick={handleAddBlog}
            >
              Confirm
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
