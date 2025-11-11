import { WorkCardProps } from "@/components/WorkCard";
import project_placeholder from "@/public/project-placeholder.png";

const projectsData: WorkCardProps[] = [
  {
    image: project_placeholder,
    title: "Affluence",
    description:
      "After switching from an unreliable AI-built site to my custom NextJS solution, Affluence got a complete overhaul — with a one-time password system, pixel-perfect design, and an investment calculator that boosted engagement and client confidence.",
    projectLink: "/work/affluence",
  },
  {
    image: project_placeholder,
    title: "B&A Stevanovic",
    description:
      "B&A Stevanovic, a property rental business on Zlatibor, reached out to me to build their first website. I created a modern platform with a multi-step booking form and an image gallery for guests to explore their apartments.",
    projectLink: "/work/ba-stevanovic",
  },
  {
    image: project_placeholder,
    title: "Maintenance hub",
    description:
      "Developed a real-time facility management app for an administrator overseeing 50+ properties, enabling residents to report issues, workers to resolve them instantly, and full oversight for the administrator.",
    projectLink: "/work/facility-management-system",
  },
];
export default projectsData;
