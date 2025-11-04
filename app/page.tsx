import APIsUsedTrack from "@/components/APIsUsedTrack";
import FeaturedWork from "@/components/FeaturedWork";
import Hero from "@/components/Hero";
import Button from "@/components/ui/Button";

import Image from "next/image";
import selfie from "@/public/selfie-no-bg.png";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const page = () => {
  return (
    <>
      <Hero />
      <APIsUsedTrack />
      <FeaturedWork />
      <section>
        <div className="container flex ">
          <div className="flex-1 group relative">
            <Image
              className="max-w-200 max-h-200 border-[2rem] 
                    border-(--primary-800) rounded-full 
                    overflow-hidden object-cover
                    saturate-80 group-hover:saturate-100 
                    transition-all duration-300"
              src={selfie}
              alt="Bogdan Stevanovic - selfie"
            />
            <Link
              href="https://www.linkedin.com/in/bogdan-stevanovic/"
              target="_blank"
              className="absolute bottom-0 left-0 
              p-[4.8rem]! bg-[#1F56B1] rounded-full
              hover:scale-105 active:scale-95 duration-300 transition-all"
            >
              <FaLinkedin size={48} />
            </Link>
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-[.4rem]">
              <span className="uppercase">About me</span>
              <h2>
                Who am <span className="text-(--primary-400)">I?</span>
              </h2>
            </div>
            <p className="mt-12!">
              Hi, I&apos;m Bogdan Stevanović, a Full-Stack Web Developer based
              in Serbia, helping startups and eCommerce brands under $500K build
              SaaS apps, tools, and digital products that actually drive growth.
              Also, I&apos;m a coffee enthusiast who can&apos;t resist testing
              new brews while coding!
            </p>
            <div className="">
              <div className=" flex gap-[1.6rem] items-center py-[1.6rem]!">
                <h3>
                  2<span className="text-(--primary-400)">+</span>
                </h3>
                <p>years experience building digital products</p>
              </div>
              <hr className="opacity-30 text-(--primary-400)" />
            </div>
            <div className="">
              <div className="flex gap-[1.6rem] items-center py-[1.6rem]!">
                <h3>
                  5<span className="text-(--primary-400)">+</span>
                </h3>
                <p>projects delivered from concept to production</p>
              </div>
              <hr className="opacity-30 text-(--primary-400)" />
            </div>
            <div className="flex gap-[1.6rem] items-center py-[1.6rem]!">
              <h3>Optimization</h3>
              <p>for speed and conversions across all projects</p>
            </div>
            <div className="flex items-center gap-[2.4rem] mt-16!">
              <Button variant="gradient">Get to know me</Button>
              <Button variant="secondary">Download CV</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default page;
