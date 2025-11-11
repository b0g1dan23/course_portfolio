import Button from "@/components/ui/Button";
import { BiSolidHappyHeartEyes } from "react-icons/bi";
import Image from "next/image";
import selfie_1 from "@/public/selfie-1.jpg";
import selfie_2 from "@/public/selfie-2.jpg";
import selfie_3 from "@/public/selfie-3.jpg";
import selfie_4 from "@/public/selfie-4.jpg";
import my_selfie from "@/public/selfie-no-bg.png";
import vector from "@/public/line_vector.svg";
import { RiNextjsFill } from "react-icons/ri";
import { FaStripe } from "react-icons/fa";
import { FaShopify } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="container relative flex max-lg:flex-col justify-between h-[calc(100vh-8rem)] max-lg:h-auto items-center">
      <div className="w-full flex flex-1 flex-col max-lg:items-start max-lg:pt-16!">
        <div className="flex items-center gap-[.8rem] bg-(--primary-600) w-fit px-4! py-4! rounded-md animate-slide-in-left-0">
          <BiSolidHappyHeartEyes size={24} />
          <span>Satisfaction guaranteed</span>
        </div>
        <div className="flex flex-col gap-4 max-lg:gap-[2.4rem] mt-[1.6rem]! animate-slide-in-left-150">
          <h1>
            I fix code that kills conversion
          </h1>
          <p className="max-w-[48ch]">
            I help businesses fix the invisible technical issues that
            steal revenue: slow product pages, bad bundle logic, broken events,
            low lighthouse scores, half-broken apps, messy JS. <br />
            <br />I ship fixes that turn traffic into orders — consistently.
          </p>
        </div>
        <div className="mt-16! flex items-center gap-[2.4rem] max-w-[48ch] max-lg:w-full animate-slide-in-up-300">
          <Button
            className="w-full text-center"
            variant="gradient"
            href="https://calendly.com/hi-boge/let-s-discuss-your-project"
          >
            Book a call
          </Button>
          <Button
            className="w-full text-center"
            variant="secondary"
            href="/work"
          >
            My Work
          </Button>
        </div>
        <div
          className="w-7xl h-276 rounded-full absolute top-1/2 -left-250 -translate-y-1/2 -z-1 
        bg-(--primary-700)/70 blur-[40rem]"
        ></div>
        <div className="flex items-center max-lg:flex-col w-full gap-[1.6rem] mt-16!">
          <div className="flex items-center animate-slide-in-left-450">
            <div className="rounded-full overflow-hidden w-fit border border-(--white)">
              <Image
                className="pointer-events-none"
                src={selfie_1}
                alt="Selfie 1"
                width={36}
                height={36}
              />
            </div>
            <div className="rounded-full overflow-hidden w-fit border border-(--white) -ml-3!">
              <Image
                className="pointer-events-none"
                src={selfie_2}
                alt="Selfie 2"
                width={36}
                height={36}
              />
            </div>
            <div className="rounded-full overflow-hidden w-fit border border-(--white) -ml-3!">
              <Image
                className="pointer-events-none"
                src={selfie_3}
                alt="Selfie 3"
                width={36}
                height={36}
              />
            </div>
            <div className="rounded-full overflow-hidden w-fit border border-(--white) -ml-3!">
              <Image
                className="pointer-events-none"
                src={selfie_4}
                alt="Selfie 4"
                width={36}
                height={36}
              />
            </div>
          </div>
          <div className="relative animate-slide-in-left-450">
            <span>Trusted by businesses worldwide</span>
            <Image
              src={vector}
              alt="Line vector"
              className="absolute -bottom-3 left-0"
            />
          </div>
        </div>
      </div>
      <div className="flex-1 relative self-end w-full animate-slide-in-right-200 ">
        <Image
          src={my_selfie}
          alt="Bogdan Stevanovic - Fullstack Web Developer"
          quality={100}
          className="max-lg:w-[80vh] max-lg:mx-auto!"
        />
        <div className="absolute inset-0 bg-linear-to-t from-(--primary-900) to-60% to-transparent z-1"></div>
        <div
          className="w-6xl max-xl:w-3xl max-md:w-xl aspect-square bg-(--primary-900) border-[.4rem] border-(--primary-700) rounded-full 
                absolute top-1/2 left-1/2 -translate-1/2
                -z-2"
        ></div>
        <div
          className="w-4xl max-xl:w-2xl max-md:w-lg aspect-square bg-(--primary-900) border-[.4rem] border-(--primary-700) rounded-full 
                absolute top-1/2 left-1/2 -translate-1/2
                -z-2"
        ></div>
        <div
          className="w-2xl max-xl:w-1xl max-md:w-md aspect-square bg-(--primary-900) border-[.4rem] border-(--primary-700) rounded-full 
                absolute top-1/2 left-1/2 -translate-1/2
                -z-2"
        ></div>
        <div
          className="w-sm max-xl:w-sm aspect-square bg-(--primary-400) rounded-full blur-3xl
                absolute top-1/2 left-1/2 -translate-x-1/2
                -z-2"
        ></div>
        <div className="absolute -z-1 p-3! max-md:p-2! bg-blue-900 rounded-md -rotate-10 animate-load-golang">
          <div className="p-3! max-md:p-2! bg-blue-700 rounded-lg">
            <div className="bg-blue-500 rounded-xl p-3! max-md:p-2!">
              <FaGolang size={36} className="max-md:size-12" />
            </div>
          </div>
        </div>
        <div className="absolute -z-1 p-3! max-md:p-2! bg-neutral-900 rounded-md rotate-20 animate-load-next">
          <div className="p-3! max-md:p-2! bg-neutral-700 rounded-lg">
            <div className="bg-neutral-500 rounded-xl p-3! max-md:p-2!">
              <RiNextjsFill size={36} className="max-md:size-12" />
            </div>
          </div>
        </div>
        <div className="absolute -z-1 p-3! max-md:p-2! bg-purple-900 rounded-md -rotate-20 animate-load-stripe">
          <div className="p-3! max-md:p-2! bg-purple-700 rounded-lg">
            <div className="bg-purple-500 rounded-xl p-3! max-md:p-2!">
              <FaStripe size={36} className="max-md:size-12" />
            </div>
          </div>
        </div>
        <div className="absolute -z-1 p-3! max-md:p-2! bg-green-900 rounded-md rotate-20 animate-load-shopify">
          <div className="p-3! max-md:p-2! bg-green-700 rounded-lg">
            <div className="bg-green-500 rounded-xl p-3! max-md:p-2!">
              <FaShopify size={36} className="max-md:size-12" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
