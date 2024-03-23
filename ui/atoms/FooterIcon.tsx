import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function FooterIcon({href,icon,size,color}:any) {
  return (
    <Link href={href}>
    <FontAwesomeIcon icon={icon} size={size} color={color}/>
</Link>
  )
}
