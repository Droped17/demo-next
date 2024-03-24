import RegisterText from "@/ui/atoms/RegisterText";
import RegisterFormArticle from "@/ui/organisms/RegisterFormArticle";

export default function Register() {
  return (
    <div className="h-[85vh] flex flex-col gap-5 items-center justify-center">
      <RegisterText />
      <RegisterFormArticle />
    </div>
  );
}
