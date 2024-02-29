import { getServerSession } from "next-auth";
import { PostForm } from "../components/PostForm";
import { options } from "../api/auth/[...nextauth]/options";
import { BlogForm } from "./form";
import axios from "axios";


interface Post {
  id: string;
  avatar: string;
  name: string;
  createdAt: string;
  title: string;
}

interface ApiResponse {
  message: string;
  allPost: Post[];
}


const getAllPost = async () => {
  try {
    const res = await axios.get("http://localhost:3000/api/post");
    // console.log(res.data);
    return res.data.allPost;

    //  Fetch cannot fetch all post
    // const res = await fetch("http://localhost:3000/api/post",{
    // });
    // if (!res.ok) {
    //   throw new Error("Cannot fetch Post");
    // }
    // //data fetch 1
    // const data = await res.json();
    // console.log(data);

    // return data.allPost;


  } catch (error) {
    console.error("Error fetching posts:", error);
    return []; // Return an empty array if there's an error
  }
};

export default async function Blog() {
  const allPost: Post[] = await getAllPost();

  console.log(`All Post: ====> `,allPost);

  const session = await getServerSession(options);

  // Format the date
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return (
    <div className="flex flex-col gap-4">
      {session && <PostForm session={session} />}
      <div className="flex flex-col gap-2 mx-32">
        {allPost.map((item,index) => (
          <div key={index} className="border-l-8 border-secondary shadow-md rounded-md p-5">
            <div className="flex gap-3">
              {item.avatar ? <img
                src={item.avatar}
                alt=""
                width={50}
                className="rounded-full"
              /> : <img alt="" src="/images/michael-sum-LEpfefQf4rU-unsplash.webp" width={50} className="rounded-full"></img>}
              <div>
                <p>{item.name}</p>
                <p>{formatDate(item.createdAt)}</p>
              </div>
            </div>
            <p className="mt-2">{item.title}</p>
            <hr />
            {session &&  <div className="mt-2">
              <BlogForm session={session}/>
            </div>}
          </div>
        ))}
      </div>
    </div>
  );
}