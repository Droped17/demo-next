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
    const name = target.name;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
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
    <form onSubmit={handleSubmit}>
      <input
        name="username"
        onChange={handleOnChange}
        value={formData.username}
        type="text"
        className="border"
      />
      <input
        name="password"
        onChange={handleOnChange}
        value={formData.password}
        type="password"
        className="border"
      />
      <button type="submit">Register</button>
    </form>
  );
}
