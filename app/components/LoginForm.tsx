"use client";

import { signIn } from "next-auth/react";
import { FormEvent, useState } from "react";

export default function LoginForm() {
  const handleSubmit = async(e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    signIn("credentials",{
      username: formData.get('username'),
      password: formData.get("password"),
      redirect: false
    });

    
};
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-around h-[150px] w-[500px]"
    >
      <input
        type="text"
        name="username"
        placeholder="username"
        className="border rounded-full p-2"
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        className="border rounded-full p-2"
      />
      <button className="p-2 bg-primary hover:bg-primary-hover transition rounded-full text-white">
        LOGIN
      </button>
    </form>
  );
}
