import { useScrollReveal } from "@/hooks/useScrollReveal";
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

const languages = [
  { name: "Express", logo: node },
  { name: "Laravel", logo: laravel },
  { name: "JavaScript", logo: jsLogo },
  { name: "React", logo: reactLogo },
  { name: "Next.js", logo: nextjsLogo },
  { name: "TypeScript", logo: tsLogo },
];

const tools = [
  { name: "Git", logo: codeLogo },
  { name: "Supabase", logo: supabase },
  { name: "Figma", logo: figmaLogo },
  { name: "SQL", logo: sql },
  { name: "Vercel", logo: vercel },
  { name: "GCP", logo: cloud },
];

const SkillBadge = ({ name, logo }: { name: string; logo: string }) => (
  <div className="flex flex-col items-center gap-2 px-2 py-4 rounded-xl border border-border bg-card text-center">
    <img src={logo} alt={name} className="w-8 h-8 object-contain" />
    <div>
      <p className="text-xs font-semibold text-foreground leading-tight">{name}</p>
      <p className="text-[10px] text-muted-foreground">Experienced</p>
    </div>
  </div>
);

const TechStackSection = () => {
  const ref = useScrollReveal<HTMLElement>();
  return (
    <section
      ref={ref}
      id="tech-stack"
      className="reveal px-8 flex flex-col items-center py-[40px]"
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
        <div>
          <h3 className="font-semibold text-foreground mb-4">
            Language & Framework
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
            {languages.map((s) => (
              <SkillBadge key={s.name} {...s} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-foreground mb-4">
            Tools & Platform
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
            {tools.map((s) => (
              <SkillBadge key={s.name} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
