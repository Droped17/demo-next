import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-2 border-b sticky top-0 bg-white flex justify-between">
      <div className="flex-1 md:w-full">
        <Link href="/">LOGO</Link>
      </div>
      <div className="flex-1 md:w-full">
        <input type="text" placeholder="Search..." className="w-full"/>
      </div>
      <div className="flex gap-2 flex-1 justify-end md:w-full">
        <Link href="/">Home</Link>
        <Link href="/login">Login</Link>
        <Link href="/blog">Blog</Link>
      </div>
    </nav>
  );
}
