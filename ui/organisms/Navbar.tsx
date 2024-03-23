import { getServerSession } from "next-auth";
import Link from "next/link";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import NavbarText from "@/ui/atoms/NavbarText";
import NavbarSearchInput from "@/ui/atoms/NavbarSearchInput";
import NavbarUsername from "@/ui/atoms/NavbarUsername";
import NavbarSignOutButton from "@/ui/atoms/NavbarSignOutButton";
import NavbarLink from "@/ui/atoms/NavbarHomeLink";
import NavbarGroupLink from "../molecules/NavbarGroupLink";

export default async function Navbar() {
  const session = await getServerSession(options); //move to redux

  return (
    <nav className="p-3 border-b sticky top-0 z-20 bg-white flex xs:flex-col sm:flex-col md:flex-row lg:flex-row justify-between items-center">
      <div className="flex-1 md:w-full">
        <Link href="/">
          <NavbarText/>
        </Link>
      </div>
      <div className="flex-1 flex items-center gap-2">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <NavbarSearchInput/>
      </div>
      <div className="">
        {session ? (
          <div className="flex gap-5 flex-1 items-center justify-end md:w-full">
            <NavbarUsername session={session}/>
            <NavbarLink text="Home" href="/"/>
            <NavbarLink text="Article" href="/"/>
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
              <NavbarSignOutButton title="signOut"/>
            </Link>
          </div>
        ) : (
          <NavbarGroupLink/>
        )}
      </div>
    </nav>
  );
}

