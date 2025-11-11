import WorkCard from "@/components/WorkCard";
import projectsData from "@/data/projectsData";

const page = () => {
    return (
        <section className="relative overflow-x-clip py-20!">
            <div className="container flex flex-col gap-20">
                {/* Heading Section */}
                <div className="flex flex-col items-center gap-[1.6rem] animate-slide-in-up-300">
                    <div className="flex flex-col items-center gap-[.4rem]">
                        <span className="uppercase">Work</span>
                        <h1 className="text-center">
                            My Work
                        </h1>
                    </div>
                    <p className="max-w-[60ch] text-center opacity-90">
                        Explore my portfolio of web development projects. Each project showcases modern design,
                        clean code, and solutions tailored to real business needs.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[2.4rem]">
                    {projectsData.map((project, index) => (
                        <WorkCard key={index} {...project} index={index} />
                    ))}
                </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute -bottom-1/2 blur-[56rem] opacity-20 left-0 -translate-x-1/2 w-312 h-312 rounded-full bg-(--primary-400)"></div>
            <div className="absolute -top-1/3 blur-[56rem] opacity-20 right-0 translate-x-1/2 w-312 h-312 rounded-full bg-(--primary-500)"></div>
        </section>
    )
}
export default page