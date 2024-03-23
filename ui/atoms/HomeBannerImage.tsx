import Image from "next/image"

export default function BannerImage ({src,alt,width,height}:any){
    return <Image alt={alt} src={src} width={width} height={height}/>
}