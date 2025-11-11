import Button from "@/components/ui/Button";
import WorkCard from "@/components/WorkCard";
import projectsData from "@/data/projectsData";

const FeaturedWork = () => {
  return (
    <section className="relative overflow-x-clip">
      <div className="container flex flex-col gap-20">
        <div className="flex flex-col items-center gap-[1.6rem]">
          <div className="flex flex-col items-center gap-[.4rem]">
            <span className="uppercase">Work</span>
            <h2>
              Featured <span className="text-(--primary-400)">work</span>
            </h2>
          </div>
          <p className="max-w-135 text-center">
            A few examples of work demonstrating problem-solving and
            high-quality code.
          </p>
        </div>
        <div className="flex gap-[2.4rem] max-lg:flex-col">
          {projectsData.map((project, index) => (
            <WorkCard key={index} {...project} />
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Button variant="secondary">My work</Button>
        </div>
      </div>
      <div className="absolute -bottom-2/3 blur-[56rem] opacity-30 right-0 translate-x-1/2 w-312 h-312 rounded-full bg-(--primary-500)"></div>
    </section>
  );
};
export default FeaturedWork;
