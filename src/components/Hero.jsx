import { useEffect, useState } from "react";
import profilePic from "../assets/media/profile-pic.jpg";
import linkedin from "../assets/media/linkedin.png";
import github from "../assets/media/github.png";

// ⬅️ konstanta di luar component (BEST PRACTICE)
const ROLES = ["Junior Developer", "Tech Enthusiast", "Graphic Designer"];

export default function Hero() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timeout;

    if (isTyping) {
      timeout = setTimeout(() => {
        setText(currentRole.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === currentRole.length) {
          setIsTyping(false);
        }
      }, 120);
    } else {
      timeout = setTimeout(() => {
        setText(currentRole.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex - 1 === 0) {
          setIsTyping(true);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }, 60);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isTyping, roleIndex]);

  return (
    <section id="profile" className="container hero reveal">
      <div className="pic">
        <img src={profilePic} alt="Agustia Eriani" />
      </div>

      <div className="hero-content">
        <p className="lead">Hello, I'm</p>
        <h1>Agustia Eriani</h1>

        <p className="lead">
          <span id="typing">{text}</span>
        </p>

        <div className="actions">
          <a
            href="https://www.linkedin.com/in/agustiaeriani"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn">See Resume</button>
          </a>

          <a href="#contact">
            <button className="btn primary">Email Me</button>
          </a>
        </div>

        <div className="socials">
          <a
            href="https://www.linkedin.com/in/agustiaeriani"
            target="_blank"
            rel="noreferrer"
          >
            <img className="icon" src={linkedin} alt="LinkedIn" />
          </a>

          <a
            href="https://github.com/arsenicbreaker"
            target="_blank"
            rel="noreferrer"
          >
            <img className="icon" src={github} alt="GitHub" />
          </a>
        </div>
      </div>
    </section>
  );
}
