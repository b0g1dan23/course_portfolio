import ServicesStep, { ServicesStepProps } from "@/components/ServicesStep";
import Button from "@/components/ui/Button";
import { MdDesignServices } from "react-icons/md";
import { GrConnectivity, GrOptimize } from "react-icons/gr";
import { FaCode } from "react-icons/fa";

const data: Omit<ServicesStepProps, "idx">[] = [
  {
    title: "Web Design",
    icon: MdDesignServices,
    description:
      "I design clean, conversion-focused interfaces that boost sales and engagement.",
  },
  {
    title: "Web Development",
    icon: FaCode,
    description:
      "I build scalable business apps and tools that streamline operations and drive revenue.",
  },
  {
    title: "API Integration",
    icon: GrConnectivity,
    description:
      "I connect your store with payment gateways, CRMs, and other platforms for seamless workflows.",
  },
  {
    title: "CRO Optimization",
    icon: GrOptimize,
    description:
      "I enhance checkout flows, landing pages, and user experience to maximize sales and AOV.",
  },
];

const Services = () => {
  return (
    <section className="relative" id="services">
      <div className="container flex gap-80 max-lg:flex-col max-lg:gap-40 max-lg:items-center">
        <div className="flex flex-col gap-[2.4rem] max-w-180 items-start max-lg:items-center max-lg:text-center">
          <div className="flex flex-col gap-[.4rem] max-lg:text-center">
            <span className="uppercase">Services</span>
            <h2>How can I help you?</h2>
          </div>
          <p>
            From custom features to full-stack applications — I make your ideas
            run smoothly.
          </p>
          <Button variant="gradient" href="https://calendly.com/hi-boge/let-s-discuss-your-project">
            Book a 30-min call
          </Button>
        </div>
        <div className="flex-1">
          {data.map((step, index) => (
            <ServicesStep
              key={index}
              idx={index + 1}
              title={step.title}
              icon={step.icon}
              description={step.description}
              isLast={index === data.length - 1}
            />
          ))}
        </div>
      </div>
      <div className="w-356 h-356 absolute max-lg:hidden bottom-0 left-0 translate-y-1/2 -translate-x-1/2 border-[1.6rem] -z-1 border-(--primary-800) rounded-full"></div>
      <div className="w-272 h-272 absolute max-lg:hidden bottom-0 left-0 translate-y-1/2 -translate-x-1/2 border-[1.6rem] -z-1 border-(--primary-800) rounded-full"></div>
      <div className="w-172 h-172 absolute max-lg:hidden bottom-0 left-0 translate-y-1/2 -translate-x-1/2 border-[1.6rem] -z-1 border-(--primary-800) rounded-full"></div>
    </section>
  );
};
export default Services;
