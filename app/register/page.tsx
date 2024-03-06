import RegisterForm from "./form";
import { useRouter } from "next/router";

export default function Register() {
  return (
    <div className="h-[85vh] flex flex-col gap-5 items-center justify-center">
      <p className="text-4xl">Create Account</p>
      <RegisterForm />
    </div>
  );
}
