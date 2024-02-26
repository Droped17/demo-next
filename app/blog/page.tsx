import PostForm from "../components/PostForm";

const getAllPost = async () => {
  const res = await fetch("https://65dc325c3ea883a15292ae24.mockapi.io/post");
  if (!res.ok) {
    throw new Error("cannot fetch");
  }
  return res.json();
};

export default async function Blog() {
  const allPost: Post[] = await getAllPost();
  return (
    <div className="flex flex-col gap-4">
      <PostForm />
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
                <p>{item.createdAt}</p>
              </div>
            </div>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
