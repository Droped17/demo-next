import HomeCancelButton from "../atoms/HomeCancelButton";
import HomeCreateBlogInput from "../atoms/HomeCreateBlogInput";
import HomeCreateBlogTextarea from "../atoms/HomeCreateBlogTextarea";
import HomePostButton from "../atoms/HomePostButton";

export default function HomeCreateBlogForm({handleSubmit,handleOnChange,handleOpen}:any) {
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
    <HomeCreateBlogInput handleOnChange={handleOnChange}/>
    <HomeCreateBlogTextarea handleOnChange={handleOnChange}/>
    <div className="flex justify-end gap-1">
      <HomeCancelButton handleOpen={handleOpen}/>
      <HomePostButton handleSubmit={handleSubmit}/>
    </div>
  </form>
  )
}
