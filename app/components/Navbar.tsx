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
    <nav className="p-3 border-b sticky top-0 z-20 bg-white flex xs:flex-col sm:flex-col md:flex-row lg:flex-row justify-between items-center">
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
            <p>{session.user?.name}</p>
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
                style="inline-block rounded-lg bg-red-500 p-2 text-md text-white shadow-dark-3 transition duration-150 ease-in-out hover:bg-red-700 hover:shadow-dark-2 focus:bg-red-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-red-900 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
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

