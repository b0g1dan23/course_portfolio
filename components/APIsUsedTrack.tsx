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

const APIsUsedTrack = () => {
  return (
    <div className="bg-(--primary-700) pb-10! pt-4!">
      <div className="container overflow-hidden flex flex-col gap-8">
        <p className="text-(--primary-600)">
          Experienced in using the following APIs
        </p>
        <div className="flex items-center gap-24 max-md:gap-12 animate-infinite-scroll">
          <AiOutlineOpenAI
            size={64}
            className="opacity-70 max-md:size-24 shrink-0"
          />
          <RiClaudeFill
            size={64}
            className="opacity-70 max-md:size-24 shrink-0"
          />
          <SiMake size={64} className="opacity-70 max-md:size-24 shrink-0" />
          <FaMailchimp
            size={64}
            className="opacity-70 max-md:size-24 shrink-0"
          />
          <FaCcStripe
            size={64}
            className="opacity-70 max-md:size-24 shrink-0"
          />
          <SiPaddle size={64} className="opacity-70 max-md:size-24 shrink-0" />
          <SiClerk size={64} className="opacity-70 max-md:size-24 shrink-0" />
          <BsPaypal size={64} className="opacity-70 max-md:size-24 shrink-0" />
          <SiWoocommerce
            size={64}
            className="opacity-70 max-md:size-24 shrink-0"
          />
          <FaShopify size={64} className="opacity-70 max-md:size-24 shrink-0" />
          <SiAuth0 size={64} className="opacity-70 max-md:size-24 shrink-0" />
          <SiGoogleanalytics
            size={64}
            className="opacity-70 max-md:size-24 shrink-0"
          />
          {/* Duplicate for seamless loop */}
          <AiOutlineOpenAI
            size={64}
            className="opacity-70 max-md:size-24 shrink-0"
          />
          <RiClaudeFill
            size={64}
            className="opacity-70 max-md:size-24 shrink-0"
          />
          <SiMake size={64} className="opacity-70 max-md:size-24 shrink-0" />
          <FaMailchimp
            size={64}
            className="opacity-70 max-md:size-24 shrink-0"
          />
          <FaCcStripe
            size={64}
            className="opacity-70 max-md:size-24 shrink-0"
          />
          <SiPaddle size={64} className="opacity-70 max-md:size-24 shrink-0" />
          <SiClerk size={64} className="opacity-70 max-md:size-24 shrink-0" />
          <BsPaypal size={64} className="opacity-70 max-md:size-24 shrink-0" />
          <SiWoocommerce
            size={64}
            className="opacity-70 max-md:size-24 shrink-0"
          />
          <FaShopify size={64} className="opacity-70 max-md:size-24 shrink-0" />
          <SiAuth0 size={64} className="opacity-70 max-md:size-24 shrink-0" />
          <SiGoogleanalytics
            size={64}
            className="opacity-70 max-md:size-24 shrink-0"
          />
        </div>
      </div>
    </div>
  );
};
export default APIsUsedTrack;
