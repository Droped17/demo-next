import { getServerSession } from "next-auth";
import PostForm from "../components/PostForm";
import { options } from "../api/auth/[...nextauth]/options";

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

const getAllPost = async (): Promise<Post[]> => {
  const res = await fetch("http://localhost:3000/api/post");
  if (!res.ok) {
    throw new Error("Cannot fetch Post");
  }
  const data: ApiResponse = await res.json();
  return data.allPost;
};

export default async function Blog() {
  const allPost: Post[] = await getAllPost();
  console.log(allPost);

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
      {session && <PostForm />}
      <div className="flex flex-col gap-2 mx-32">
        {allPost.map((item) => (
          <div key={item.id} className="shadow-md rounded-md p-5">
            <div className="flex gap-3">
              <img
                src={item.avatar}
                alt=""
                width={50}
                className="rounded-full"
              />
              <div>
                <p>{item.name}</p>
                <p>{formatDate(item.createdAt)}</p>
              </div>
            </div>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}