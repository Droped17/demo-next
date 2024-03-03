import { getServerSession } from "next-auth";
import Link from "next/link";
import { options } from "../api/auth/[...nextauth]/options";
import { Button } from "./Button";

export default async function Navbar() {
  const session = await getServerSession(options);
  // console.log("NAVBAR SESSION ===>: ", session);

  return (
    <nav className="p-2 border-b sticky top-0 bg-white flex justify-between items-center">
      <div className="flex-1 md:w-full">
        <Link href="/">
          <p>My Blog</p>
        </Link>
      </div>
      {/* <div className="flex-1">
        <input type="text" className="" placeholder="Search..."/>
      </div> */}
      <div className="">
        {session ? (
          <div className="flex gap-2 flex-1 items-center justify-end md:w-full">
            <p>{session.user?.email}</p>
            <Link href="/">Home</Link>
            <Link href="/">Article</Link>
            <Link href="/api/auth/signout">
              <Button onClick={null} title="SignOut" style={`text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-md text-sm p-1 text-center`}/>
            </Link>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link href="/">Home</Link>
            <Link href="/">Article</Link>
            <Link href="/api/auth/signin">Login</Link>
            <Link href="/register">Register</Link>
          </div>
        )}
        {/* <Link href="/login">Login</Link> */}
      </div>
    </nav>
  );
}
