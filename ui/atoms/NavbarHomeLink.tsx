import Link from "next/link"
export default function NavbarLink({text,href}:any) {
  return (
    <Link href={href}>{text}</Link>
  )
}
