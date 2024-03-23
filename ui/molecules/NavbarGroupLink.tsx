import NavbarLink from "../atoms/NavbarHomeLink"
export default function NavbarGroupLink() {
  return (
    <div className="flex gap-2">
            <NavbarLink text="Home" href="/"/>
            <NavbarLink text="Article" href="/"/>
            <NavbarLink text="Login" href="/api/auth/signin"/>
            <NavbarLink text="Register" href="/register"/>
          </div>
  )
}
