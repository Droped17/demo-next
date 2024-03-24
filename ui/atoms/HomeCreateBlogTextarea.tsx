export default function HomeCreateBlogTextarea({handleOnChange}:any) {
  return (
    <textarea
    placeholder="Write Something"
    name="detail"
    className="border rounded-lg p-2 w-full"
    onChange={handleOnChange}
  />
  )
}
