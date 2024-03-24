export default function RegisterInput({type,checkError,onChange,formData,text}:any) {
  return (
    <input
    type={type}
    className={`border p-3 ${
      checkError ? "border-red-500 " : ""
    }`}
    placeholder={text}
    name={text}
    onChange={onChange}
    value={formData}
  />
  )
}
