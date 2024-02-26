import Link from "next/link";

export default function Navbar(){
    return (
        <nav className="p-2 border-b sticky top-0 bg-white flex justify-between">
            <Link href="/">LOGO</Link>
            <div>
                <input type="text" placeholder="Search..."/>
            </div>
            <div className="flex gap-2">
                <Link href="/">Home</Link>
                <Link href="/login">Login</Link>
                <Link href="/blog">Blog</Link>
            </div>
        </nav>
    );
}