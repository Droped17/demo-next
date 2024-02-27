import { getServerSession } from "next-auth";
import Link from "next/link";
// import { options } from "../api/auth/[...nextauth]/options";

export default async function Navbar() {
  // const session = await getServerSession(options);
  // console.log("NAVBAR SESSION ===>: ", session);

  return (
    <nav className="p-2 border-b sticky top-0 bg-white flex justify-between items-center">
      <div className="flex-1 md:w-full">
        <Link href="/">LOGO</Link>
      </div>
      <div className="flex-1 md:w-full">
        <input type="text" placeholder="Search..." className="w-full" />
      </div>
      <div className="flex gap-2 flex-1 items-center justify-end md:w-full">
        {/* {session ? (
          <p>{session.user?.name}</p>
        ) : (
          <Link href="/login">Login</Link>
        )} */}
        <Link href="/blog">Blog</Link>
        <Link href="/api/auth/signout">
          <button className="bg-red-500 p-1 text-white rounded-md">SignOut</button>
        </Link>
      </div>
    </nav>
  );
}
