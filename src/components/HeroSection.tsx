import { useEffect, useState } from "react";
import avatar from "@/assets/avatar.jpg";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const roles = ["Fullstack Developer", "Graphic Designer", "Web3 Enthusiast"];

const HeroSection = () => {
  const [displayed, setDisplayed] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1500);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="home"
      className="flex items-center justify-center min-h-screen px-8 py-0 shadow-none">
      
      <div ref={ref} className="reveal flex-col max-w-4xl w-full gap-0 items-center justify-center flex md:flex-col">
        <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-border shrink-0">
          <img
            src={avatar}
            alt="Agustia Eriani avatar"
            className="w-full h-full object-cover shadow-lg" />
          
        </div>
        <div className="flex-col text-center md:text-left flex items-center justify-center mt-[20px] gap-[4px]">
          <p className="text-muted-foreground text-center text-lg pt-0 pb-0 mb-0 my-[20px] mt-0">
            Hello, I'm
          </p>
          <h1 className="font-bold text-foreground text-5xl my-0">
            Agustia Eriani
          </h1>
          <p className="text-lg font-medium text-muted-foreground text-center">
            {displayed}<span className="animate-pulse">|</span>
          </p>
          <div className="flex gap-3 mt-2 justify-center md:justify-start my-0">
            <Button variant="outline" className="rounded-full">
              See Resume
            </Button>
            <Button className="rounded-full">Email Me</Button>
          </div>
          <div className="flex gap-3 mt-2 justify-center md:justify-start">
            <a
              href="#"
              className="text-foreground hover:text-muted-foreground transition-colors">
            </a>
            <a
              href="#"
              className="text-foreground hover:text-muted-foreground transition-colors">
            </a>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;