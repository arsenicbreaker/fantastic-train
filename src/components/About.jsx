import experienceIcon from "../assets/media/experience.png";
import educationIcon from "../assets/media/education.png";

export default function About() {
  return (
    <section id="about" className="reveal">
      <div className="container">
        <p className="lead" style={{ textAlign: "center" }}>
          Get To Know More
        </p>

        <h2 style={{ textAlign: "center", margin: "6px 0 18px" }}>About Me</h2>

        <div className="cards" style={{ marginTop: "24px" }}>
          <article className="card">
            <img
              src={experienceIcon}
              alt="Experience icon"
              style={{
                width: "32px",
                height: "32px",
                marginInline: "auto",
              }}
            />
            <h3>Educational Experience</h3>
            <p>I'm still learning dude</p>
          </article>

          <article className="card">
            <img
              src={educationIcon}
              alt="Education icon"
              style={{
                width: "32px",
                height: "32px",
                marginInline: "auto",
              }}
            />
            <h3>Education</h3>
            <p>
              Undergraduate of Informatics at University Internasional Semen
              Indonesia
            </p>
          </article>
        </div>

        <div className="prose" style={{ marginTop: "16px" }}>
          <p style={{ textAlign: "justify" }}>
            I am an Informatics undergraduate student who loves exploring new
            things, especially in the fields of technology and design.
            Currently, I’m focusing on mastering HTML, CSS, and JavaScript to
            strengthen my web development skills, while also exploring Java to
            broaden my knowledge of backend development.
          </p>

          <p style={{ textAlign: "justify" }}>
            In addition, I have a strong interest in UI/UX design. I enjoy
            creating designs as a hobby, which helps me combine both technical
            and aesthetic aspects when building applications and websites.
          </p>

          <p style={{ textAlign: "justify" }}>
            I am passionate about learning new technologies, working on personal
            projects, and constantly improving my skills to prepare for future
            opportunities in the tech industry.
          </p>
        </div>
      </div>
    </section>
  );
}
