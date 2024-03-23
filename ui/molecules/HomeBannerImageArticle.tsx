import BannerImage from "../atoms/HomeBannerImage"

export default function HomeBannerImageArticle() {
  return (
    <div className="flex-1 flex justify-center items-center">
    <BannerImage
      alt="logo"
      src={`/images/asd.png`}
      width={476}
      height={323}
    />
  </div>
  )
}
