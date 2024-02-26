import Image from "next/image";

// Server Component
const getBlog = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) {
    throw new Error("cannot fetch");
  }
  return res.json();
};

export default async function Home() {
  const user: User[] = await getBlog();
  // console.log(user);

  return (
    <main className="">
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

      <article>
        {user.map((item) => (
          <div key={item.id}>
            {item.id} : {item.name}
          </div>
        ))}
      </article>
    </main>
  );
}
