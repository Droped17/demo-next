import Image from "next/image";
import Card from "./components/Card";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

// Server Component
const getBlog = async () => {
  const res = await fetch("https://65dc325c3ea883a15292ae24.mockapi.io/post");
  if (!res.ok) {
    throw new Error("cannot fetch");
  }
  return res.json();
};

export default async function Home() {
  const allPost: Post[] = await getBlog();
  // console.log(user);

  const session = await getServerSession(options);
  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/server');
    // redirect('/login');
  }

  return (
    <main className="flex flex-col gap-3">
      <article className="w-full border flex">
        <div className="flex-1 flex items-center justify-center">
          <p>Make</p>
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

      <article className="mx-32">
        <div className="my-2 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-4 justify-items-center">
          {allPost.map((item) => (
            <div className="max-w-[300px] shadow-md" key={item.id}>
              {/* <img src={item.avatar} alt="" /> */}
                <Image
                  alt="Description of image"
                  src="/images/michael-sum-LEpfefQf4rU-unsplash.webp"
                  layout="responsive"
                  width={500}
                  height={300}
                  loading="lazy"
                />
              <div className="p-3">
              <p>{item.name}</p>
              <p>{item.title}</p>
              </div>
            </div>
            // <Card name={item.name} key={item.id} />
          ))}
        </div>
      </article>
    </main>
  );
}
