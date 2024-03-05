import { getServerSession } from "next-auth";
import Link from "next/link";
import { options } from "../api/auth/[...nextauth]/options";
import { Button } from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default async function Navbar() {
  const session = await getServerSession(options);
  // console.log("NAVBAR SESSION ===>: ", session);

  return (
    <nav className="p-3 border-b sticky top-0 bg-white flex sm:flex-col md:flex-row lg:flex-row justify-between items-center">
      <div className="flex-1 md:w-full">
        <Link href="/">
          <p className="font-bold">HotCoffee</p>
        </Link>
      </div>
      <div className="flex-1 flex items-center gap-2">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input type="text" className="p-2" placeholder="Search..." />
      </div>
      <div className="">
        {session ? (
          <div className="flex gap-5 flex-1 items-center justify-end md:w-full">
            {/* <p>{session.user?.email}</p> */}
            <Link href="/">Home</Link>
            <Link href="/">Article</Link>
            <Link href="https://instagram.com">
              <FontAwesomeIcon icon={faInstagram} size="xl" />
            </Link>
            <Link href="https://twitter.com">
              <FontAwesomeIcon icon={faTwitter} size="xl" />
            </Link>
            <Link href="https://linkedin.com">
              <FontAwesomeIcon icon={faLinkedin} size="xl" />
            </Link>

            <Link href="/api/auth/signout">
              <Button
                onClick={null}
                title="SignOut"
                style={`text-white bg-red-500 hover:bg-red-600 transition rounded-md p-1`}
              />
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
