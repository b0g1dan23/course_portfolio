import { WorkCardProps } from "@/components/WorkCard";
import affluence_card from '@/public/affluence-website.webp'
import ba_zlatibor_card from '@/public/ba_zlatibor.webp'
import fascility_managment_card from '@/public/fascility_management.webp'

import affluence_img from '@/public/affluence-website-big.webp'
import ba_zlatibor from '@/public/ba_zlatibor-big.webp'
import fascility_managment from '@/public/fascility_management-big.webp'

import { StaticImageData } from "next/image";

export interface ProjectDetailProps extends WorkCardProps {
  slug: string;
  client: string;
  year: string;
  image: StaticImageData;
  technologies: string[];
  projectUrl?: string;
  githubUrl?: string;
  challenge: string;
  solution: string;
  results: string[];
  fullDescription: string;
}

const projectsData: ProjectDetailProps[] = [
  {
    image: affluence_img,
    cardImage: affluence_card,
    title: "Affluence",
    slug: "affluence",
    client: "Affluence Investment Platform",
    year: "2025",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    projectUrl: "https://www.useaffluence.io/",
    description:
      "After switching from an unreliable AI-built site to my custom NextJS solution, Affluence got a complete overhaul — with a one-time password system, pixel-perfect design, and an investment calculator that boosted engagement and client confidence.",
    projectLink: "/work/affluence",
    challenge: "Affluence had an AI-generated website that was unreliable, buggy, and didn't inspire confidence in potential clients. The platform needed a complete redesign with secure authentication and interactive investment calculators.",
    solution: "I rebuilt the entire platform from scratch using Next.js with TypeScript for type safety and maintainability. Implemented a custom one-time password authentication system, designed a pixel-perfect interface, and created an interactive investment calculator that helps users visualize their potential returns.",
    results: [
      "50% increase in user engagement with the investment calculator",
      "Zero security incidents since launch",
      "Improved load times by 70% compared to the AI-built version",
      "Positive client feedback on design and usability"
    ],
    fullDescription: "This project involved a complete overhaul of Affluence's online presence. The previous AI-generated site was causing trust issues with potential investors due to frequent bugs and an unprofessional appearance. I took on the challenge of rebuilding everything from the ground up, focusing on reliability, security, and user experience. The new platform features a modern, trust-inspiring design, secure authentication flow, and interactive tools that help users make informed investment decisions."
  },
  {
    image: ba_zlatibor,
    cardImage: ba_zlatibor_card,
    title: "B&A Zlatibor",
    slug: "ba-zlatibor",
    client: "B&A Zlatibor Property Rentals",
    year: "2025",
    technologies: ["Next.js", "Tailwind CSS", "Mailchimp API"],
    projectUrl: "https://stevanoviclux.com",
    description:
      "B&A Zlatibor, a property rental business on Zlatibor, reached out to me to build their first website. I created a modern platform with a multi-step booking form and an image gallery for guests to explore their apartments.",
    projectLink: "/work/ba-zlatibor",
    challenge: "B&A Zlatibor had no online presence, making it difficult for potential guests to discover and book their properties on Zlatibor. They needed a website that would showcase their apartment beautifully and provide an easy booking experience.",
    solution: "I designed and developed a modern, visually appealing website with a focus on showcasing the properties through a professional image gallery. Implemented a user-friendly multi-step booking form that guides guests through the reservation process smoothly. Added smooth animations to enhance the user experience without compromising performance.",
    results: [
      "Established first-ever online presence for the business",
      "30+ booking inquiries in the first month",
      "Reduced booking-related phone calls by providing self-service options",
      "Positive guest feedback on the easy-to-use interface"
    ],
    fullDescription: "This was B&A Zlatibor's first venture into the digital space. The property rental business needed a professional website that would attract tourists visiting Zlatibor and provide an easy way to view available apartments and make reservations. I created a visually stunning platform with high-quality image galleries, detailed property information, and a streamlined booking process that converts visitors into guests."
  },
  {
    image: fascility_managment,
    cardImage: fascility_managment_card,
    title: "Maintenance Hub",
    slug: "facility-management-system",
    client: "MY HOME MANAGER DOO",
    year: "2025",
    technologies: ["Angular", "NestJS", "TypeScript", "PostgreSQL", "WebSockets", "Tailwind CSS"],
    description:
      "Developed a real-time facility management app for an administrator overseeing 50+ properties, enabling residents to report issues, workers to resolve them instantly, and full oversight for the administrator.",
    projectLink: "/work/facility-management-system",
    challenge: "Managing maintenance requests across 50+ properties was chaotic, with issues reported via phone calls, text messages, and emails. There was no centralized system to track requests, assign workers, or monitor resolution progress, leading to delays and resident dissatisfaction.",
    solution: "I built a comprehensive real-time facility management system with role-based access for administrators, workers, and residents. Residents can submit maintenance requests with photos and descriptions, workers receive instant notifications and can update status in real-time, and administrators have a complete dashboard to oversee all properties and track performance metrics.",
    results: [
      "90% reduction in response time to maintenance requests",
      "Complete transparency with real-time status updates",
      "Improved resident satisfaction scores by 40%",
      "Reduced administrative overhead by centralizing all communications"
    ],
    fullDescription: "This facility management system transformed how a property management company handles maintenance across their portfolio of 50+ properties. The platform provides a seamless experience for all stakeholders: residents can easily report issues and track progress, maintenance workers can efficiently manage their tasks, and administrators gain full visibility into operations. The real-time nature of the system ensures everyone stays informed and issues are resolved quickly."
  },
];
export default projectsData;
