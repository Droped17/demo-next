import HomeTitle from "../atoms/HomeTitle"
import HomeText from "../atoms/HomeText"
import BannerImage from "../atoms/HomeBannerImage"

export default function HomeBannerArticle() {
  return (
    <article className="flex xs:flex-col-reverse sm:flex-col-reverse md:flex-row lg:flex-row bg-grey-color h-[467px]">
      
    <div className="flex-1 flex flex-wrap flex-col items-center justify-center">
      <div className="flex flex-col flex-wrap">
        <HomeTitle />
        <HomeText />
      </div>
    </div>
    <div className="flex-1 flex justify-center items-center">
      <BannerImage
        alt="logo"
        src={`/images/asd.png`}
        width={476}
        height={323}
      />
    </div>
  </article>
  )
}
