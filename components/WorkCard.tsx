import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

export interface WorkCardProps {
  image: StaticImageData;
  title: string;
  description: string;
  projectLink: string;
}

const WorkCard = ({
  image,
  title,
  description,
  projectLink,
}: WorkCardProps) => {
  return (
    <div className="bg-(--primary-700)  hover:-translate-y-4 transition-all duration-300 ease-in-out">
      <div className="relative w-full aspect-3/2">
        <Image src={image} alt={`${title} - project image`} fill unoptimized />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, transparent 0%, var(--primary-700) 130%)",
          }}
        />
      </div>
      <div className="py-8! px-[2.4rem]! flex flex-col gap-[2.8rem]">
        <div className="flex flex-col gap-[1.6rem]">
          <h3 className="text-[3.2rem]">{title}</h3>
          <p>{description}</p>
        </div>
        <Link
          href={projectLink}
          className="flex gap-[.4rem] items-center text-(--primary-400)"
        >
          <span className="opacity-100!">View project</span>{" "}
          <IoIosArrowForward size={16} />
        </Link>
      </div>
    </div>
  );
};
export default WorkCard;
