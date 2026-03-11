import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Github } from "lucide-react";
import {
  useStaggerReveal,
  containerVariants,
  itemVariants,
} from "@/hooks/useStaggerReveal";

import subscriptionImg from "@/assets/lwittlepumkiens.png";
import travelEaseImg from "@/assets/travelease.png";
import learningImg from "@/assets/learning.png";

interface Project {
  title: string;
  desc: string;
  tags: string[];
  link: string;
  github: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Subscription Marketplace",
    desc: "Web application that provides a catalog of premium apps and subscription services.",
    tags: ["JavaScript", "ReactJs"],
    link: "https://github.com/arsenicbreaker/editorial-hero",
    github: "https://github.com/arsenicbreaker/editorial-hero",
    image: subscriptionImg,
  },
  {
    title: "TravelEase",
    desc: "Web-based system for booking travel packages with a modern and user-friendly interface.",
    tags: ["Laravel", "TypeScript", "Next JS"],
    link: "https://travelease-ten.vercel.app/",
    github: "https://github.com/arsenicbreaker",
    image: travelEaseImg,
  },
  {
    title: "Learning Progress",
    desc: "Personal platform to track learning progress and showcase developer growth.",
    tags: ["React", "Vite"],
    link: "https://github.com/arsenicbreaker/daily-js",
    github: "https://github.com/arsenicbreaker/daily-js",
    image: learningImg,
  },
];

const ProjectCard = ({ title, desc, tags, link, github, image }: Project) => (
  <motion.div
    variants={itemVariants}
    whileHover={{
      y: -6,
      boxShadow: "0 16px 40px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.04)",
    }}
    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
    className="group rounded-2xl border border-border bg-card overflow-hidden flex flex-col shadow-sm transition-colors duration-300 hover:border-foreground/15"
  >
    {/* Image area with hover overlay */}
    <div className="relative overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-foreground/75 backdrop-blur-[2px] flex flex-col items-center justify-center p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-background text-xs text-center leading-relaxed mb-3">
          {desc}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap justify-center gap-1.5 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-medium text-background/90 bg-background/15 px-2 py-0.5 rounded-full backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-2">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-background text-foreground text-xs font-medium px-4 py-2 rounded-full hover:bg-background/90 transition-colors duration-200"
          >
            <ArrowUpRight size={12} />
            Live Demo
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-background/15 text-background text-xs font-medium px-4 py-2 rounded-full hover:bg-background/25 transition-colors duration-200 backdrop-blur-sm border border-background/20"
          >
            <Github size={12} />
            GitHub
          </a>
        </div>
      </div>
    </div>

    {/* Card body */}
    <div className="p-5 flex flex-col flex-1">
      <h3 className="font-semibold text-foreground mb-1.5 text-sm">
        {title}
      </h3>
      <p className="text-xs text-muted-foreground mb-4 flex-1 leading-relaxed">
        {desc}
      </p>
      <div className="mb-1">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2 block">
          Technologies
        </span>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="rounded-lg px-2.5 py-1 text-[10px] font-medium bg-secondary/60 text-secondary-foreground shadow-sm"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const ProjectSection = () => {
  const { ref, isInView } = useStaggerReveal();

  return (
    <section
      id="project"
      className="px-8 flex flex-col items-center py-[40px]"
    >
      <span className="inline-block bg-foreground text-background text-sm font-medium px-5 py-1.5 rounded-full mb-5">
        My Projects
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-center">
        Check out my latest work
      </h2>
      <p className="text-sm text-muted-foreground mb-10 text-center max-w-lg">
        I've worked on a variety of projects, from simple websites to complex
        web applications. Here are a few of my favorites.
      </p>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl w-full"
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectSection;
