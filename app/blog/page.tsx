import { getServerSession } from "next-auth";
import PostForm from "../components/PostForm";
import { options } from "../api/auth/[...nextauth]/options";

const getAllPost = async () => {
  const res = await fetch("https://65dc325c3ea883a15292ae24.mockapi.io/post");
  if (!res.ok) {
    throw new Error("cannot fetch");
  }
  return res.json();
};

export default async function Blog() {
  const allPost: Post[] = await getAllPost();

  const session = await getServerSession(options);
  // console.log('SESSION IS: ',session);

  //format the date
  const formatDate = (dateString: string) => {
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
      {session ? <PostForm /> : null}
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
