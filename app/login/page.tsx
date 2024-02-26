import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex justify-center">
      <div className="shadow-md rounded-md p-5 lg:mx-32 sm:mx-28">
        <p>Login</p>
        <LoginForm/>
      </div>
    </div>
  );
}
