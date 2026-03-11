import { motion, type Variants } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";
import {
  useStaggerReveal,
  containerVariants,
  itemVariants,
} from "@/hooks/useStaggerReveal";

/* ── Icon hover variant ───────────────────────────────────────────── */
const iconVariants: Variants = {
  rest: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.1,
    rotate: [0, -8, 8, -4, 0],
    transition: { duration: 0.45, ease: "easeInOut" as const },
  },
};

/* ── Card hover variant ───────────────────────────────────────────── */
const cardHoverVariants: Variants = {
  rest: {
    y: 0,
    boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
  },
  hover: {
    y: -6,
    boxShadow:
      "0 12px 32px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)",
    transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] as const },
  },
  tap: { scale: 0.98 },
};

/* ── Keyword highlight helper ─────────────────────────────────────── */
const Keyword = ({ children }: { children: React.ReactNode }) => (
  <span className="keyword-highlight">{children}</span>
);

/* ── Card data ────────────────────────────────────────────────────── */
const cards = [
  {
    icon: GraduationCap,
    title: "Educational",
    description: "B. Informatics of University International Semen Indonesia",
  },
  {
    icon: BookOpen,
    title: "Professional Training",
    description: "Superteam Weekend Class Web3 Development Program 2026",
  },
];

/* ── Component ────────────────────────────────────────────────────── */
const AboutSection = () => {
  const { ref, isInView } = useStaggerReveal();

  return (
    <section
      id="about"
      className="flex flex-col items-center px-6 md:px-8 py-[80px] pb-[31px]"
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="flex flex-col items-center w-full"
      >
        {/* ── Heading ──────────────────────────────────────────── */}
        <motion.div variants={itemVariants} className="text-center">
          <p className="text-sm text-muted-foreground mb-1">Get to Know More</p>
          <h2 className="text-3xl font-bold text-foreground mb-10">About Me</h2>
        </motion.div>

        {/* ── Cards ────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl w-full mb-10">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                variants={itemVariants}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                className="flex flex-col items-center p-6 rounded-2xl border border-border bg-card text-center cursor-default"
              >
                <motion.div variants={cardHoverVariants} className="w-full flex flex-col items-center">
                  <motion.div variants={iconVariants}>
                    <Icon className="w-8 h-8 mb-3 text-foreground" />
                  </motion.div>
                  <h3 className="font-semibold text-foreground">{card.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {card.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Paragraphs with keyword highlights ───────────────── */}
        <motion.div
          variants={itemVariants}
          className="max-w-2xl text-sm text-muted-foreground leading-relaxed space-y-4"
        >
          <p className="text-justify">
            I am an Informatics undergraduate at Universitas Internasional Semen
            Indonesia with a strong interest in{" "}
            <Keyword>web development</Keyword> and emerging technologies. I
            enjoy building digital products and continuously improving my skills
            through projects, hackathons, and community programs.
          </p>
          <p className="text-justify">
            My current focus is on JavaScript and{" "}
            <Keyword>modern web development</Keyword>, building responsive and
            interactive web applications. At the same time, I am exploring{" "}
            <Keyword>Web3</Keyword> development with Rust, learning how
            decentralized applications and{" "}
            <Keyword>blockchain ecosystems</Keyword> work.
          </p>
          <p className="text-justify">
            I am passionate about creating clean, functional, and user-friendly
            applications while continuously learning new technologies to grow as
            a developer.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
