import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { Award, Users, GraduationCap } from "lucide-react";

/* ── Data ──────────────────────────────────────────────────────────── */
const achievements = [
  {
    icon: Users,
    date: "September 2025 – Now",
    title: "Himpunan Mahasiswa Informatika",
    role: "Staff Ahli Divisi Kominfo",
    description:
      "Contributed to managing digital communication and media for the Informatics Student Association. Collaborated with the team to create visual content, manage social media platforms, and support the promotion of organizational programs and events.",
  },
  {
    icon: GraduationCap,
    date: "Agustus 2025 – Now",
    title: "Internship Teman Ambiss",
    role: "Associate Creative Design",
    description:
      "Worked as part of the creative team to design visual content for educational and community initiatives. Assisted in producing engaging graphics and digital materials to support campaigns and improve audience engagement.",
  },
  {
    icon: Award,
    date: "2026",
    title: "Runner Up - NexaByte 2026 Hackathons",
    role: "Online",
    description:
      "Secured Runner Up in NexaByte 2026 Hackathon as a solo participant by independently designing and developing a full prototype within a limited time frame. Demonstrated strong problem-solving, rapid prototyping, and end-to-end development skills under competitive conditions.",
  },
];

/* ── Variants ──────────────────────────────────────────────────────── */
const sectionContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const headingVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const milestoneVariant: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const cardHover: Variants = {
  rest: { y: 0, scale: 1, boxShadow: "0 1px 3px rgba(0,0,0,0.04)" },
  hover: {
    y: -6,
    scale: 1.02,
    boxShadow: "0 12px 32px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)",
    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as const },
  },
  tap: { scale: 0.98 },
};

const iconBounce: Variants = {
  rest: { rotate: 0, scale: 1 },
  hover: {
    rotate: [0, -10, 10, -5, 0],
    scale: 1.1,
    transition: { duration: 0.3, ease: "easeInOut" as const },
  },
};

const dotVariant: Variants = {
  rest: {
    scale: 1,
    backgroundColor: "hsl(0 0% 97%)",
    boxShadow: "0 0 0 0 rgba(0,0,0,0)",
  },
  hover: {
    scale: 1.35,
    backgroundColor: "hsl(0 0% 7%)",
    boxShadow: "0 0 14px rgba(0,0,0,0.12)",
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
};

const dotIconVariant: Variants = {
  rest: { color: "hsl(0 0% 7%)" },
  hover: { color: "hsl(0 0% 100%)", transition: { duration: 0.3 } },
};

/* ── Component ─────────────────────────────────────────────────────── */
const AchievementsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section
      id="achievements"
      className="flex flex-col items-center px-6 md:px-8 py-[36px] pb-0 pt-[55px]"
    >
      <motion.div
        ref={sectionRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={sectionContainer}
        className="flex flex-col items-center w-full"
      >
        {/* ── Header ───────────────────────────────────────────── */}
        <motion.div variants={headingVariant} className="text-center mb-12">
          <span className="inline-block bg-primary text-primary-foreground text-sm font-semibold px-5 py-1.5 rounded-full mb-4">
            Achievements & Leadership
          </span>
          <h2 className="text-3xl font-bold text-foreground mb-3">
            Recognition & Impact
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl">
            From leading a student body of hundreds to being recognized
            nationally for academic excellence — here are some milestones that
            shaped my journey.
          </p>
        </motion.div>

        {/* ── Timeline ─────────────────────────────────────────── */}
        <div className="relative max-w-2xl w-full">
          {/* Animated vertical line */}
          <motion.div
            className="absolute left-6 top-0 bottom-0 w-px bg-border origin-top"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          />

          {/* Milestones */}
          <div className="flex flex-col gap-10">
            {achievements.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={milestoneVariant}
                  className="relative flex gap-6"
                >
                  {/* ── Timeline dot ──────────────────────────── */}
                  <motion.div
                    initial="rest"
                    whileHover="hover"
                    variants={dotVariant}
                    className="timeline-dot relative z-10 flex-shrink-0 w-12 h-12 rounded-full border border-border flex items-center justify-center cursor-pointer"
                  >
                    <motion.div variants={dotIconVariant}>
                      <Icon className="w-5 h-5" style={{ color: "inherit" }} />
                    </motion.div>
                  </motion.div>

                  {/* ── Card ──────────────────────────────────── */}
                  <motion.div
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                    variants={cardHover}
                    className="pt-1 pb-5 px-5 rounded-2xl border border-border bg-card flex-1 cursor-default"
                  >
                    <p className="text-sm text-muted-foreground mb-1">
                      {item.date}
                    </p>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <span className="inline-block text-xs font-medium text-muted-foreground bg-secondary px-2.5 py-0.5 rounded-full mb-2">
                      {item.role}
                    </span>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AchievementsSection;
