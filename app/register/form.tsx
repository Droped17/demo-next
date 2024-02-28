"use client";
import { FormEvent, useState } from "react";
import { redirect } from "next/navigation";

interface FormData {
  username: string;
  password: string;
}

export default function RegisterForm() {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
  });

  const handleOnChange = (e: FormEvent) => {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    const username = target.name;
    setFormData((prev) => ({
      ...prev,
      [username]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("/api/auth/Users", {
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
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex flex-col">
        <label htmlFor="">username</label>
        <input
          name="username"
          onChange={handleOnChange}
          value={formData.username}
          type="text"
          className="border p-2 rounded-md"
          placeholder="Enter your username"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="">Password</label>
        <input
          name="password"
          onChange={handleOnChange}
          value={formData.password}
          type="password"
          className="border p-2 rounded-md"
          placeholder="Enter your password"
        />
      </div>
      <button type="submit" className="rounded-full text-white  p-2 bg-primary">
        Register
      </button>
    </form>
  );
}
