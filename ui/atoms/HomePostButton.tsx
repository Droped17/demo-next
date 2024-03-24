export default function HomePostButton({handleSubmit}:any) {
  return (
    <button className="inline-block rounded-lg bg-green-500 px-5 py-2.5  text-md text-white shadow-dark-3 transition duration-150 ease-in-out hover:bg-green-700 hover:shadow-dark-2 focus:bg-green-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-green-900 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong" onClick={handleSubmit}>post</button>
  )
}
