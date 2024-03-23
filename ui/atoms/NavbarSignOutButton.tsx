export default function NavbarSignOutButton({title}:any) {
  return (
    <button
    type="button"
    className={`inline-block rounded-lg bg-red-500 p-2 text-md text-white shadow-dark-3 transition duration-150 ease-in-out hover:bg-red-700 hover:shadow-dark-2 focus:bg-red-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-red-900 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong`}
  > 
    {title}
  </button>
  )
}
