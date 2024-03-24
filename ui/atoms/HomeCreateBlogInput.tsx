export default function HomeCreateBlogInput({handleOnChange}:any) {
  return (
    <input
    type="text"
    name="title"
    placeholder="Title"
    className="border rounded-lg p-2 w-full"
    onChange={handleOnChange}
  />
  )
}
