import { GraduationCap, BookOpen } from "lucide-react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center px-6 md:px-8 py-[80px] pb-[31px]"
    >
      <p className="text-sm text-muted-foreground mb-1">Get to Know More</p>
      <h2 className="text-3xl font-bold text-foreground mb-10">About Me</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl w-full mb-10">
        <div className="flex flex-col items-center p-6 rounded-2xl border border-border bg-card text-center">
          <GraduationCap className="w-8 h-8 mb-3 text-foreground" />
          <h3 className="font-semibold text-foreground">Educational</h3>
          <p className="text-sm text-muted-foreground mt-1">
            B. Informatics of University International Semen Indonesia
          </p>
        </div>
        <div className="flex flex-col items-center p-6 rounded-2xl border border-border bg-card text-center">
          <BookOpen className="w-8 h-8 mb-3 text-foreground" />
          <h3 className="font-semibold text-foreground">
            Professional Training
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            Superteam Weekend Class Web3 Development Program 2026
          </p>
        </div>
      </div>

      <div className="max-w-2xl text-sm text-muted-foreground leading-relaxed space-y-4">
        <p className="text-justify">
          I am an Informatics undergraduate at Universitas Internasional Semen
          Indonesia with a strong interest in web development and emerging
          technologies. I enjoy building digital products and continuously
          improving my skills through projects, hackathons, and community
          programs.
        </p>
        <p className="text-justify">
          My current focus is on JavaScript and modern web development, building
          responsive and interactive web applications. At the same time, I am
          exploring Web3 development with Rust, learning how decentralized
          applications and blockchain ecosystems work.
        </p>
        <p className="text-justify">
          I am passionate about creating clean, functional, and user-friendly
          applications while continuously learning new technologies to grow as a
          developer.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
