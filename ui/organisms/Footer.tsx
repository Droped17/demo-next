import FooterDetail from "@/ui/atoms/FooterDetail";
import FooterIcon from "@/ui/atoms/FooterIcon";
import FooterText from "@/ui/atoms/FooterText";
import {
    faInstagram,
    faTwitter,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer className="flex justify-between items-center p-2 border h-[7.5vh]">
            <div className="flex gap-3">
                <FooterText />
                <FooterDetail />
            </div>
            <div className="flex gap-[31px]">
                <FooterIcon href="https://instagram.com" icon={faInstagram} size="xl" color="grey"/>
                <FooterIcon href="https://twitter.com" icon={faTwitter} size="xl" color="grey"/>
                <FooterIcon href="https://linkedin.com" icon={faLinkedin} size="xl" color="grey"/>
            </div>
        </footer>
    );
}