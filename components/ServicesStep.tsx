import { IconType } from "react-icons";

export interface ServicesStepProps {
  idx: number;
  title: string;
  icon: IconType;
  description: string;
  isLast?: boolean;
}

const ServicesStep = ({
  idx,
  title,
  icon: Icon,
  description,
  isLast = false,
}: ServicesStepProps) => {
  return (
    <div className="flex items-start gap-12 max-lg:gap-8">
      {!isLast ? (
        <div className="flex flex-col items-center">
          <div className="p-[2.6rem]! relative aspect-square bg-(--primary-700) rounded-[.4rem]">
            <Icon size={48} />
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 px-4! py-[.4rem]! bg-(--primary-600) rounded-[.2rem]">
              <span className="opacity-100">{idx}</span>
            </div>
          </div>
          <div className="h-[6.4rem] max-lg:h-32 w-[.4rem]! bg-(--primary-700)"></div>
        </div>
      ) : (
        <div className="p-[2.6rem]! relative aspect-square bg-(--primary-700) rounded-[.4rem]">
          <Icon size={48} />
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 px-4! py-[.4rem]! bg-(--primary-600) rounded-[.2rem]">
            <span className="opacity-100">{idx}</span>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-[1.6rem]">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default ServicesStep;
