import HomeTitle from "../atoms/HomeTitle"
import HomeText from "../atoms/HomeText"

export default function HomeBannerText() {
  return (
    <div className="flex-1 flex flex-wrap flex-col items-center justify-center">
    <div className="flex flex-col flex-wrap">
      <HomeTitle />
      <HomeText />
    </div>
  </div>
  )
}
