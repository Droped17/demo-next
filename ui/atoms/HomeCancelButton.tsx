export default function HomeCancelButton({handleOpen}:any) {
  return (
    <button className="inline-block rounded-lg bg-gray-400 px-5 py-2.5  text-md text-white shadow-dark-3 transition duration-150 ease-in-out hover:bg-gray-500 hover:shadow-dark-2 focus:bg-gray-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong" onClick={handleOpen}>cancel</button>
  )
}
