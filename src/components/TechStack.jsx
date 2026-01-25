import htmlIcon from "../assets/media/html.png";
import cssIcon from "../assets/media/css-3.png";
import jsIcon from "../assets/media/java-script.png";
import reactIcon from "../assets/media/atom.png";
import javaIcon from "../assets/media/java.png";
import gitIcon from "../assets/media/social.png";
import githubIcon from "../assets/media/github.png";
import figmaIcon from "../assets/media/figma.png";
import canvaIcon from "../assets/media/Canva-icon-01.png";
import vercelIcon from "../assets/media/bleach.png";
import gcpIcon from "../assets/media/checkmark.png";

export default function TechStack() {
  return (
    <section id="experience" className="reveal">
      <div className="container">
        <p className="lead" style={{ textAlign: "center" }}>
          My technical skill set
        </p>

        <h2 style={{ textAlign: "center", margin: "6px 0 22px" }}>
          Tech Stack
        </h2>

        <h3 style={{ margin: "16px 0" }}>Language & Framework</h3>

        <div className="stack-grid">
          <StackItem icon={htmlIcon} title="HTML" />
          <StackItem icon={cssIcon} title="CSS" />
          <StackItem icon={jsIcon} title="JavaScript" />
          <StackItem icon={reactIcon} title="React" />
          <StackItem icon={javaIcon} title="Java" />
          <StackItem icon={javaIcon} title="Swing" />
        </div>

        <h3 style={{ margin: "28px 0 12px" }}>Tools & Platform</h3>

        <div className="stack-grid">
          <StackItem icon={gitIcon} title="Git" />
          <StackItem icon={githubIcon} title="GitHub" />
          <StackItem icon={figmaIcon} title="Figma" />
          <StackItem icon={canvaIcon} title="Canva" />
          <StackItem icon={vercelIcon} title="Vercel" />
          <StackItem icon={gcpIcon} title="GCP" />
        </div>
      </div>
    </section>
  );
}

function StackItem({ icon, title }) {
  return (
    <div className="stack-item">
      <img className="icon" src={icon} alt={title} />
      <div>
        <strong>{title}</strong>
        <p>Experienced</p>
      </div>
    </div>
  );
}
