// "use client";
// import { FormEvent, useState } from "react";
// import { useRouter } from "next/navigation";
// import registerSchema from "../validate/register-validate";

// interface FormData {
//   username: string;
//   password: string;
// }

// const registerValidate = (formData: FormData): { [key: string]: string } | undefined => {
//   const { value, error } = registerSchema.validate(formData, {
//     abortEarly: false,
//   });
//   console.log(value);
//   if (error) {
//     const result = error.details.reduce((acc, data) => {
//       const { message, path } = data;
//       console.log(acc);
//       // acc[path[0]] = message;
//       return acc;
//     }, {});
//     return result;
//   }
// };

// export default function RegisterForm() {
//   const router = useRouter();
//   const [formData, setFormData] = useState<FormData>({
//     username: "",
//     password: "",
//   });

//   const handleOnChange = (e: FormEvent) => {
//     const target = e.target as HTMLInputElement;
//     const value = target.value;
//     const username = target.name;
//     setFormData((prev) => ({
//       ...prev,
//       [username]: value,
//     }));
//   };

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {

//     e.preventDefault();
//     const validateError = registerValidate(formData);
//     console.log(validateError);

//     // const res = await fetch("/api/auth/Users", {
//     //   method: "POST",
//     //   body: JSON.stringify({
//     //     formData,
//     //     "content-type": "application/json",
//     //   }),
//     // });

//     // if (!res.ok) {
//     //   const response = await res.json();
//     //   console.error(response.message);
//     // }
//     // alert("Register Success");
//     // router.push('/');
//   };

//   return (
//     <form onSubmit={handleSubmit} className="flex flex-col gap-5">
//       <div className="flex flex-col">
//         <label htmlFor="">username</label>
//         <input
//           name="username"
//           onChange={handleOnChange}
//           value={formData.username}
//           type="text"
//           className={`border p-2 rounded-md`}
//           placeholder="Enter your username"
//         />
//       </div>

//       <div className="flex flex-col">
//         <label htmlFor="">Password</label>
//         <input
//           name="password"
//           onChange={handleOnChange}
//           value={formData.password}
//           type="password"
//           className="border p-2 rounded-md"
//           placeholder="Enter your password"
//         />
//       </div>
//       <button type="submit" className="rounded-full text-white  p-2 bg-primary">
//         Register
//       </button>
//     </form>
//   );
// }

"use client";

import axios from "axios";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import registerSchema from "../validate/register-validate";

interface FormData {
  username: string;
  password: string;
}

interface ValidationError {
  [key: string]: string;
}

const registerValidate = (formData: FormData) => {
  const { error } = registerSchema.validate(formData, {
    abortEarly: false,
  });

  if (error) {
    const result: ValidationError = {};
    error.details.forEach((detail) => {
      const { message, path } = detail;
      result[path[0]] = message;
    });
    return result;
  }
};

export default function RegisterPage() {
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
  });

  const [checkError, setCheckError] = useState<ValidationError>({});

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const validateError = registerValidate(formData);
      console.log(validateError);
      if (validateError) {
        return setCheckError(validateError);
      }
      setCheckError({});
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
    alert("Register Success");
    router.push('/');
 
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className="flex flex-col w-5/12 mx-auto gap-5"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className={`border p-3 ${
          checkError.username ? "border-red-500 " : ""
        }`}
        placeholder="firstName"
        name="username"
        onChange={handleOnChange}
        value={formData.username}
      />
      {checkError.username && (
        <p className="text-red-500">{checkError.username}</p>
      )}
      <input
        type="password"
        className={`border p-3 ${checkError.password ? "border-red-500 " : ""}`}
        placeholder="password"
        name="password"
        onChange={handleOnChange}
        value={formData.password}
      />
      {checkError.password && (
        <span className="text-red-500">{checkError.password}</span>
      )}
      {/* <input
        type="password"
        className={`border p-3 ${
          checkError.confirmPassword ? "border-red-500 " : ""
        }`}
        placeholder="confirm password"
        name="confirmPassword"
        onChange={handleOnChange}
        value={formData.confirmPassword}
      />
      {checkError.confirmPassword && (
        <span className="text-red-500">{checkError.confirmPassword}</span>
      )} */}

      <button className="bg-black text-white px-4 py-3">Register</button>
    </form>
  );
}
