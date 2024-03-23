import axios from "axios";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import PostForm from "./components/PostForm";
import BlogHomePage from "./components/homepage/BlogHomePage";
import { Posts } from "@/type";
import BannerImage from "@/ui/atoms/HomeBannerImage";
import HomeText from "@/ui/atoms/HomeText";
import HomeTitle from "@/ui/atoms/HomeTitle";
import HomeBannerArticle from "@/ui/molecules/HomeBannerArticle";

// Server Component

const getAllPost = async () => {
  try {
    const res = await axios.get(
      "https://demo-next-w6gp.vercel.app/api/post" ||
        "https://main--hotcoffeeblog.netlify.app/api/post"
    );
    // console.log(res.data);
    return res.data.allPost;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return []; // Return an empty array if there's an error
  }
};

export default async function Home() {
  const allPost: Posts[] = await getAllPost();
  const session = await getServerSession(options);
  // // Show More
  const postMoreRender = allPost.slice(5).map((item, index) => item);

  return (
    <main className="flex flex-col gap-[39px]">
      <HomeBannerArticle />
      <article>{session && <PostForm session={session} />}</article>
      <BlogHomePage allPost={allPost} postMoreRender={postMoreRender} />
    </main>
  );
}
