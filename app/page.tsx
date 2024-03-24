import axios from "axios";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import HomePostFormArticle from "@/ui/organisms/HomePostFormArticle";
import BlogHomePage from "./components/homepage/BlogHomePage";
import { Posts } from "@/type";
import HomeBannerArticle from "@/ui/molecules/HomeBannerArticle";

// Server Component

const getAllPost = async () => {
  try {
    const res = await axios.get(
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
      {session && <HomePostFormArticle session={session} />}
      <BlogHomePage allPost={allPost} postMoreRender={postMoreRender} />
    </main>
  );
}
