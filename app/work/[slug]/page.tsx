import projectsData from "@/data/projectsData";
import Image from "next/image";
import { notFound } from "next/navigation";
import Button from "@/components/ui/Button";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import BookACall from "@/components/BookACall";

interface ProjectPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return projectsData.map((project) => ({
        slug: project.slug,
    }));
}

const ProjectPage = async ({ params }: ProjectPageProps) => {
    const { slug } = await params;
    const project = projectsData.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <article className="relative overflow-x-clip">
            <div className="container py-20!">
                {/* Back Button */}
                <div className="mb-12! animate-slide-in-left-0">
                    <Button href="/work" variant="secondary" className="inline-flex items-center gap-2">
                        <IoIosArrowBack size={20} />
                        Back to Work
                    </Button>
                </div>

                {/* Hero Section */}
                <div className="flex flex-col gap-12 mb-20! animate-slide-in-up-300">
                    <div className="flex flex-col gap-6">
                        <h1 className="text-[4.8rem] md:text-[6rem] leading-tight">
                            {project.title}
                        </h1>
                        <p className="text-[2rem] opacity-90 max-w-[80ch]">
                            {project.description}
                        </p>
                    </div>

                    {/* Project Meta */}
                    <div className="flex flex-wrap gap-8 md:gap-16 text-[1.6rem]">
                        <div>
                            <span className="text-(--primary-400) font-bold uppercase text-[1.2rem] block mb-2">Client</span>
                            <span>{project.client}</span>
                        </div>
                        <div>
                            <span className="text-(--primary-400) font-bold uppercase text-[1.2rem] block mb-2">Year</span>
                            <span>{project.year}</span>
                        </div>
                        <div>
                            <span className="text-(--primary-400) font-bold uppercase text-[1.2rem] block mb-2">Role</span>
                            <span>Full-Stack Developer</span>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    {(project.projectUrl || project.githubUrl) && (
                        <div className="flex flex-wrap gap-4">
                            {project.projectUrl && (
                                <a
                                    href={project.projectUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-8! py-4! bg-(--primary-400) text-(--black) font-bold rounded-xl hover:scale-105 transition-transform"
                                >
                                    <FaExternalLinkAlt size={16} />
                                    View Live Site
                                </a>
                            )}
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-(--primary-700) text-(--white) font-bold rounded-xl hover:scale-105 transition-transform border border-(--primary-600)"
                                >
                                    <FaGithub size={20} />
                                    View on GitHub
                                </a>
                            )}
                        </div>
                    )}
                </div>

                {/* Project Image */}
                <div className="relative w-full aspect-video mb-20! rounded-xl overflow-hidden animate-slide-in-up-300">
                    <Image
                        src={project.image}
                        alt={`${project.title} - Project Image`}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Technologies */}
                <div className="mb-20! animate-fade-in-1">
                    <h2 className="text-[3.2rem] mb-8!">Technologies Used</h2>
                    <div className="flex flex-wrap gap-4">
                        {project.technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="px-6! py-3! bg-(--primary-700) text-(--primary-400) font-bold rounded-lg border border-(--primary-600)"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Challenge, Solution, Results */}
                <div className="grid md:grid-cols-1 gap-16 mb-20!">
                    <div className="animate-fade-in-2">
                        <h2 className="text-[3.2rem] mb-6! text-(--primary-400)">The Challenge</h2>
                        <p className="text-[1.8rem] leading-relaxed opacity-90">
                            {project.challenge}
                        </p>
                    </div>

                    <div className="animate-fade-in-3">
                        <h2 className="text-[3.2rem] mb-6! text-(--primary-400)">The Solution</h2>
                        <p className="text-[1.8rem] leading-relaxed opacity-90">
                            {project.solution}
                        </p>
                    </div>

                    <div className="animate-fade-in-4">
                        <h2 className="text-[3.2rem] mb-6! text-(--primary-400)">Results & Impact</h2>
                        <ul className="space-y-4">
                            {project.results.map((result, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-4 text-[1.8rem] leading-relaxed opacity-90"
                                >
                                    <span className="text-(--primary-400) font-bold text-[2rem] shrink-0">✓</span>
                                    <span>{result}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Full Description */}
                <div className="mb-20! animate-fade-in-5">
                    <h2 className="text-[3.2rem] mb-6!">Project Overview</h2>
                    <p className="text-[1.8rem] leading-relaxed opacity-90">
                        {project.fullDescription}
                    </p>
                </div>

                {/* CTA Section */}
                <BookACall />
            </div>

            {/* Background Decoration */}
            <div className="absolute -top-1/4 blur-[56rem] opacity-10 left-0 -translate-x-1/2 w-312 h-312 rounded-full bg-(--primary-400)"></div>
            <div className="absolute bottom-0 blur-[56rem] opacity-10 right-0 translate-x-1/2 w-312 h-312 rounded-full bg-(--primary-500)"></div>
        </article>
    );
};

export default ProjectPage;
