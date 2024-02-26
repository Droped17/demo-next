"use client";

import { FormEvent, useState } from "react";

export default function LoginForm() {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    console.log("login");
  };
  return (
    <form
      onSubmit={handleLogin}
      className="flex flex-col justify-around h-[150px] w-[500px]"
    >
      <input
        type="text"
        placeholder="username"
        className="border rounded-full p-2"
      />
      <input
        type="password"
        placeholder="password"
        className="border rounded-full p-2"
      />
      <button className="p-2 bg-primary hover:bg-primary-hover transition rounded-full text-white">
        LOGIN
      </button>
    </form>
  );
}
