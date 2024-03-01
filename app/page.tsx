import Image from "next/image";
import axios from "axios";

// Server Component
interface Post {
  _id: string;
  avatar: string;
  name: string;
  createdAt: string;
  title: string;
}

const getAllPost = async () => {
  try {
    const res = await axios.get("http://localhost:3000/api/post");
    // console.log(res.data);
    return res.data.allPost;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return []; // Return an empty array if there's an error
  }
};

export default async function Home() {
  const allPost: Post[] = await getAllPost();
  // console.log(allPost);

  return (
    <main className="flex flex-col gap-3">
      <article className="w-full border flex">
        <div className="flex-1 flex items-center justify-center">
          <h6>Make</h6>
          <p>why learn Next.js</p>
        </div>
        <div className="flex-1">
          <div style={{ width: "100%", maxWidth: "500px" }}>
            <Image
              alt="Description of image"
              src="/images/michael-sum-LEpfefQf4rU-unsplash.webp"
              layout="responsive"
              width={500}
              height={300}
              loading="lazy"
            />
          </div>
        </div>
      </article>

      <article className="sm:mx-5 md:mx-10 lg:mx-32">
        <div className="my-2 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-4 justify-items-center">
          {allPost.map((post, index) => (
            <div
              key={index}
              className=" border-t-gray-100 shadow-lg rounded-md cursor-pointer hover:shadow-2xl hover:transition"
            >
              <div className="flex flex-col gap-3">
                {/* <p>{post._id}</p> */}
                <img
                  src="/images/michael-sum-LEpfefQf4rU-unsplash.webp"
                  alt=""
                />
              </div>
              <div className="p-2">
                <p className="mt-2 font-bold">{post.title}</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  commodi velit ipsum expedita voluptates deleniti!
                </p>
              </div>
            </div>
          ))}
        </div>
      </article>
    </main>
  );
}
