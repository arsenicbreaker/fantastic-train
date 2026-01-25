import laporAir from "../assets/media/lapor-air.png";

export default function Projects() {
  return (
    <section id="project" className="reveal">
      <div className="container">
        <p className="lead" style={{ textAlign: "center" }}>
          Have a Look on My Recent
        </p>

        <h2 style={{ textAlign: "center", margin: "6px 0 22px" }}>
          Project
        </h2>

        <div className="grid-cards">
          <article className="tile">
            <img
              className="blog-img"
              src={laporAir}
              alt="Lapor Air"
            />

            <div className="pad">
              <h3>Lapor Air</h3>
              <a
                href="https://lapor-air.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn" style={{ marginTop: "8px" }}>
                  Live Demo
                </button>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
