import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import {
  useStaggerReveal,
  containerVariants,
  itemVariants,
} from "@/hooks/useStaggerReveal";

import gcloudLogo from "@/assets/gcloud.png";
import hacktivLogo from "@/assets/hacktiv.png";
import courseraLogo from "@/assets/coursera.png";

interface Credential {
  name: string;
  logo: string;
  description: string;
  link: string;
}

const credentials: Credential[] = [
  {
    name: "Google Cloud",
    logo: gcloudLogo,
    description: "Cloud computing fundamentals and infrastructure on Google Cloud Platform.",
    link: "#",
  },
  {
    name: "Hacktiv8",
    logo: hacktivLogo,
    description: "Intensive full-stack JavaScript bootcamp certification.",
    link: "#",
  },
  {
    name: "Coursera",
    logo: courseraLogo,
    description: "Professional development courses in software engineering.",
    link: "#",
  },
];

const CredentialCard = ({ name, logo, description, link }: Credential) => (
  <motion.div
    variants={itemVariants}
    whileHover={{
      scale: 1.02,
      boxShadow: "0 12px 32px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.04)",
    }}
    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
    className="group rounded-2xl border border-border bg-card overflow-hidden flex flex-col cursor-default transition-colors duration-300 hover:border-foreground/15"
  >
    {/* Image area with hover overlay */}
    <div className="relative overflow-hidden">
      <img
        src={logo}
        alt={name}
        className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-foreground/70 flex flex-col items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-background text-xs text-center leading-relaxed mb-3">
          {description}
        </p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 bg-background text-foreground text-xs font-medium px-4 py-2 rounded-full hover:bg-background/90 transition-colors duration-200"
        >
          <ExternalLink size={12} />
          View Certificate
        </a>
      </div>
    </div>

    {/* Card body */}
    <div className="p-4">
      <h3 className="font-semibold text-foreground mb-1">{name}</h3>
      <p className="text-xs text-muted-foreground line-clamp-2">{description}</p>
    </div>
  </motion.div>
);

const CredentialsSection = () => {
  const { ref, isInView } = useStaggerReveal();

  return (
    <section id="credentials" className="px-8 flex flex-col items-center py-[40px]">
      <span className="inline-block bg-foreground text-background text-sm font-medium px-5 py-1.5 rounded-full mb-5">
        Credentials
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-center">
        Browse my recent credentials
      </h2>
      <p className="text-sm text-muted-foreground mb-10 text-center max-w-lg">
        Certifications and courses that have shaped my skills and knowledge in technology.
      </p>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl w-full"
      >
        {credentials.map((cred) => (
          <CredentialCard key={cred.name} {...cred} />
        ))}
      </motion.div>
    </section>
  );
};

export default CredentialsSection;