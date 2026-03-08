import BottomNav from "@/components/BottomNav";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TechStackSection from "@/components/TechStackSection";
import CredentialsSection from "@/components/CredentialsSection";
import ProjectSection from "@/components/ProjectSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-24">
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <CredentialsSection />
      <ProjectSection />
      <AchievementsSection />
      <ContactSection />
      <BottomNav />
    </div>
  );
};

export default Index;
