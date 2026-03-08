import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import subscriptionImg from "@/assets/lwittlepumkiens.png";
import travelEaseImg from "@/assets/travelease.png";
import learningImg from "@/assets/learning.png";

const projects = [
  {
    title: "Subscription Marketplace",
    desc: "Web application that provides a catalog of premium apps and subscription services.",
    tags: ["JavaScript", "ReactJs"],
    link: "https://github.com/arsenicbreaker/editorial-hero",
    image: subscriptionImg,
  },
  {
    title: "TravelEase",
    desc: "Web-based system for booking travel packages with a modern and user-friendly interface.",
    tags: ["Laravel", "TypeScript", "Next JS"],
    link: "https://travelease-ten.vercel.app/",
    image: travelEaseImg,
  },
  {
    title: "Learning Progress",
    desc: "Personal platform to track learning progress and showcase developer growth.",
    tags: ["React", "Vite"],
    link: "https://github.com/arsenicbreaker/daily-js",
    image: learningImg,
  },
];

const ProjectSection = () => {
  const ref = useScrollReveal<HTMLElement>();
  return (
    <section
      ref={ref}
      id="project"
      className="reveal px-8 flex flex-col items-center py-[40px]"
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

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl w-full">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-2xl border border-border bg-card overflow-hidden flex flex-col shadow-sm relative"
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            >
              <ArrowUpRight size={16} />
            </a>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-44 object-cover"
            />
            <div className="p-5 flex flex-col flex-1">
              <h3 className="font-semibold text-foreground mb-1.5 text-sm">
                {project.title}
              </h3>
              <p className="text-xs text-muted-foreground mb-4 flex-1 leading-relaxed">
                {project.desc}
              </p>
              <div className="mb-1">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2 block">
                  Technologies
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
