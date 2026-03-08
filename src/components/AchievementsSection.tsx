import { Award, Users, GraduationCap } from "lucide-react";

const achievements = [
  {
    icon: Users,
    date: "September 2025 – Now",
    title: "Himpunan Mahasiswa Informatika",
    location: "Staff Ahli Divisi Kominfo",
    description:
      "Contributed to managing digital communication and media for the Informatics Student Association. Collaborated with the team to create visual content, manage social media platforms, and support the promotion of organizational programs and events.",
  },
  {
    icon: GraduationCap,
    date: "Agustus 2025 – Now",
    title: "Internship Teman Ambiss",
    location: "Associate Creative Design",
    description:
      "Worked as part of the creative team to design visual content for educational and community initiatives. Assisted in producing engaging graphics and digital materials to support campaigns and improve audience engagement.",
  },
  {
    icon: Award,
    date: "2026",
    title: "Runner Up - NexaByte 2026 Hackathons",
    location: "Online",
    description:
      "Secured Runner Up in NexaByte 2026 Hackathon as a solo participant by independently designing and developing a full prototype within a limited time frame. Demonstrated strong problem-solving, rapid prototyping, and end-to-end development skills under competitive conditions.",
  },
];

const AchievementsSection = () => {
  return (
    <section
      id="achievements"
      className="flex flex-col items-center px-6 md:px-8 py-[36px] pb-0 pt-[55px]"
    >
      <span className="inline-block bg-primary text-primary-foreground text-sm font-semibold px-5 py-1.5 rounded-full mb-4">
        Achievements & Leadership
      </span>
      <h2 className="text-3xl font-bold text-foreground mb-3">
        Recognition & Impact
      </h2>
      <p className="text-muted-foreground text-center max-w-2xl mb-12">
        From leading a student body of hundreds to being recognized nationally
        for academic excellence — here are some milestones that shaped my
        journey.
      </p>

      <div className="relative max-w-2xl w-full">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

        <div className="flex flex-col gap-10">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="relative flex gap-6">
                {/* Icon circle */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center">
                  <Icon className="w-5 h-5 text-foreground" />
                </div>

                {/* Content */}
                <div className="pt-1">
                  <p className="text-sm text-muted-foreground mb-1">
                    {item.date}
                  </p>
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {item.location}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
