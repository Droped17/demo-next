import axios from "axios";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import PostForm from "./components/PostForm";
import BannerHomePage from "./components/homepage/BannerHomePage";
import BlogHomePage from "./components/homepage/BlogHomePage";

// Server Component
interface Post {
  _id: string;
  author: string;
  title: string;
  detail: string;
  createdAt: string;
  avatar: string;
}

const getAllPost = async () => {
  try {
    const res = await axios.get("https://hotcoffeeblog.netlify.app/api/post");
    // console.log(res.data);
    return res.data.allPost;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return []; // Return an empty array if there's an error
  }
};

export default async function Home() {
  const allPost: Post[] = await getAllPost();
  const session = await getServerSession(options);

  // FirstRender
  // const postFirstRender = allPost.slice(0, 5).map((item, index) => (
  //   <div key={item._id}>
  //     <p className="">{item.title}</p>
  //   </div>
  // ));

  // // Show More
  const postMoreRender = allPost.slice(5).map((item, index) => item);

  return (
    <main className="flex flex-col gap-[39px]">
      <BannerHomePage />

      <article>{session && <PostForm session={session} />}</article>

      <BlogHomePage allPost={allPost} postMoreRender={postMoreRender} />

    </main>
  );
}
