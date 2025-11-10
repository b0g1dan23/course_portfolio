import Marquee from "react-fast-marquee";
import { AiOutlineOpenAI } from "react-icons/ai";
import { RiClaudeFill } from "react-icons/ri";
import { SiMake } from "react-icons/si";
import { FaMailchimp } from "react-icons/fa";
import { FaCcStripe } from "react-icons/fa";
import { SiPaddle } from "react-icons/si";
import { SiClerk } from "react-icons/si";
import { BsPaypal } from "react-icons/bs";
import { SiWoocommerce } from "react-icons/si";
import { FaShopify } from "react-icons/fa";
import { SiAuth0 } from "react-icons/si";
import { SiGoogleanalytics } from "react-icons/si";

const logos = [
    AiOutlineOpenAI,
    RiClaudeFill,
    SiMake,
    FaMailchimp,
    FaCcStripe,
    SiPaddle,
    SiClerk,
    BsPaypal,
    SiWoocommerce,
    FaShopify,
    SiAuth0,
    SiGoogleanalytics,
];

export default function LogoLoop() {
    return (
        <Marquee
            gradient={false}
            speed={30}
            pauseOnHover={false}
        >
            <div className="flex items-center gap-24 max-md:gap-12 px-12!">
                {logos.map((Logo, i) => (
                    <div
                        key={i}
                        className="pr-12 last:pr-0 shrink-0"
                    >
                        <Logo size={64} className="opacity-70 max-md:size-24" />
                    </div>
                ))}
            </div>
        </Marquee>
    );
}
