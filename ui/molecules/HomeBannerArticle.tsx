import HomeBannerText from "./HomeBannerText"
import HomeBannerImageArticle from "./HomeBannerImageArticle"

export default function HomeBannerArticle() {
  return (
    <article className="flex xs:flex-col-reverse sm:flex-col-reverse md:flex-row lg:flex-row bg-grey-color h-[467px]">
      <HomeBannerText/>
      <HomeBannerImageArticle/>
  </article>
  )
}
