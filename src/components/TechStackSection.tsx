import { motion } from "framer-motion";
import {
  useStaggerReveal,
  containerVariants,
  itemVariants,
} from "@/hooks/useStaggerReveal";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";

import jsLogo from "@/assets/java-script.png";
import reactLogo from "@/assets/atom.png";
import nextjsLogo from "@/assets/nextjs.png";
import tsLogo from "@/assets/typescript.png";
import figmaLogo from "@/assets/figma.png";
import vercel from "@/assets/bleach.png";
import codeLogo from "@/assets/code.png";
import supabase from "@/assets/supabase.png";
import sql from "@/assets/database.png";
import laravel from "@/assets/laravel.png";
import node from "@/assets/node.png";
import cloud from "@/assets/cloud.png";

interface Skill {
  name: string;
  logo: string;
  level: string;
  description: string;
}

const languages: Skill[] = [
  { name: "Express", logo: node, level: "Intermediate", description: "Backend development with Node.js" },
  { name: "Laravel", logo: laravel, level: "Intermediate", description: "Full-stack PHP framework" },
  { name: "JavaScript", logo: jsLogo, level: "Advanced", description: "Core web language, ES6+" },
  { name: "React", logo: reactLogo, level: "Advanced", description: "Component-based UI development" },
  { name: "Next.js", logo: nextjsLogo, level: "Intermediate", description: "React meta-framework with SSR" },
  { name: "TypeScript", logo: tsLogo, level: "Intermediate", description: "Type-safe JavaScript" },
];

const tools: Skill[] = [
  { name: "Git", logo: codeLogo, level: "Advanced", description: "Version control & collaboration" },
  { name: "Supabase", logo: supabase, level: "Intermediate", description: "Backend-as-a-service with Postgres" },
  { name: "Figma", logo: figmaLogo, level: "Intermediate", description: "UI/UX design & prototyping" },
  { name: "SQL", logo: sql, level: "Intermediate", description: "Database querying & management" },
  { name: "Vercel", logo: vercel, level: "Intermediate", description: "Frontend deployment platform" },
  { name: "GCP", logo: cloud, level: "Beginner", description: "Google Cloud Platform services" },
];

const SkillBadge = ({ name, logo, level, description }: Skill) => (
  <TooltipProvider delayDuration={200}>
    <Tooltip>
      <TooltipTrigger asChild>
        <motion.div
          variants={itemVariants}
          whileHover={{
            y: -4,
            boxShadow: "0 8px 24px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)",
          }}
          className="flex flex-col items-center gap-2 px-2 py-4 rounded-xl border border-border bg-card text-center cursor-default transition-colors duration-300 hover:border-foreground/15"
        >
          <motion.img
            src={logo}
            alt={name}
            className="w-8 h-8 object-contain"
            whileHover={{ scale: 1.18 }}
            transition={{ type: "spring", stiffness: 350, damping: 15 }}
          />
          <div>
            <p className="text-xs font-semibold text-foreground leading-tight">{name}</p>
            <p className="text-[10px] text-muted-foreground">{level}</p>
          </div>
        </motion.div>
      </TooltipTrigger>
      <TooltipContent side="top" className="text-xs max-w-[180px] text-center">
        <p className="font-semibold">{name}</p>
        <p className="text-muted-foreground">{description}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

const SkillGrid = ({ title, skills }: { title: string; skills: Skill[] }) => {
  const { ref, isInView } = useStaggerReveal();
  return (
    <div>
      <h3 className="font-semibold text-foreground mb-4">{title}</h3>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2"
      >
        {skills.map((s) => (
          <SkillBadge key={s.name} {...s} />
        ))}
      </motion.div>
    </div>
  );
};

const TechStackSection = () => {
  return (
    <section
      id="tech-stack"
      className="px-8 flex flex-col items-center py-[40px]"
    >
      <span className="inline-block bg-foreground text-background text-sm font-medium px-5 py-1.5 rounded-full mb-5">
        Tech Stack
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-center">
        My technical skill set
      </h2>
      <p className="text-sm text-muted-foreground mb-10 text-center max-w-lg">
        Technologies and tools I use to bring ideas to life, from frontend
        frameworks to design tools.
      </p>

      <div className="max-w-3xl w-full space-y-8">
        <SkillGrid title="Language & Framework" skills={languages} />
        <SkillGrid title="Tools & Platform" skills={tools} />
      </div>
    </section>
  );
};

export default TechStackSection;
