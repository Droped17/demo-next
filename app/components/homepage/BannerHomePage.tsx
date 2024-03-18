import Image from "next/image";
export default function BannerHomePage() {
  return (
    <article className="flex xs:flex-col-reverse sm:flex-col-reverse md:flex-row lg:flex-row bg-grey-color h-[467px]">
      <div className="flex-1 flex flex-wrap flex-col items-center justify-center">
        <div className="flex flex-col flex-wrap">
          <p className="text-4xl font-bold">Make better coffee</p>
          <p className="text-xl text-gray-300">why learn how to blog?</p>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        {/* <img src="/images/asd.png" alt="" className="h-[323px] w-[476px]" /> */}
        <Image alt="logo" src={`/images/asd.png`} width={476} height={323}/>
      </div>
    </article>
  );
}
