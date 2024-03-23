export default function NavbarUsername({session}:any) {
  return (
    <p>{session.user?.name}</p>
  )
}
