import {
    faInstagram,
    faTwitter,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="flex justify-between items-center p-2 border h-[7.5vh]">
            <div className="flex gap-3">
                <p className="font-bold">hotcoffee</p>
                <p>2020 copyright all rights reserved</p>
            </div>
            <div className="flex gap-[31px]">
                <Link href="https://instagram.com">
                    <FontAwesomeIcon icon={faInstagram} size="xl" color="grey"/>
                </Link>
                <Link href="https://twitter.com">
                    <FontAwesomeIcon icon={faTwitter} size="xl" color="grey"/>
                </Link>
                <Link href="https://linkedin.com">
                    <FontAwesomeIcon icon={faLinkedin} size="xl" color="grey"/>
                </Link>
            </div>
        </footer>
    );
}