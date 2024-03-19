"use client";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import axios from "axios";

export default function DeleteBlogButton() {
  const id = useParams();
  //   console.log(param);
  const router = useRouter();
  const handleDeleteBlog = async () => {
    try {
      const res = await axios.delete(
        `https://hotcoffeeblog.netlify.app/api/comment?postId=${id}`
      );
      if (res.data) {
        alert("Confirm?");
        router.push("/");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <button
      onClick={handleDeleteBlog}
      className="p-1 bg-red-500 text-white rounded-md"
    >
      delete
    </button>
  );
}
