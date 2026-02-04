import laporAir from "../assets/media/lapor-air.png";
import travelease from "../assets/media/travelease.png";
import learning from "../assets/media/learning.png";

export default function Projects() {
  return (
    <section id="project" className="reveal">
      <div className="container">
        <p className="lead" style={{ textAlign: "center" }}>
          Have a Look on My Recent
        </p>

        <h2 style={{ textAlign: "center", margin: "6px 0 22px" }}>Project</h2>

        <div className="grid-cards">
          {/* CARD 1 */}
          <article className="tile">
            <img className="blog-img" src={laporAir} alt="Lapor Air" />

            <div className="pad">
              <h3>Lapor Air</h3>

              <p style={{ color: "#555", fontSize: "0.9rem" }}>
                Web application for reporting clean water issues in the
                surrounding environment.
              </p>

              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                <span className="badge">HTML</span>
                <span className="badge">CSS</span>
                <span className="badge">JavaScript</span>
              </div>

              <a
                href="https://lapor-air.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn" style={{ marginTop: "20px" }}>
                  Live Preview
                </button>
              </a>
            </div>
          </article>

          {/* CARD 2 */}
          <article className="tile">
            <img className="blog-img" src={travelease} alt="TravelEase" />

            <div className="pad">
              <h3>TravelEase</h3>

              <p style={{ color: "#555", fontSize: "0.9rem" }}>
                Modern travel landing page for discovering destinations with a
                clean and responsive design.
              </p>

              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                <span className="badge">Laravel</span>
                <span className="badge">TypeScript</span>
                <span className="badge">Next-JS</span>
              </div>

              <a
                href="https://travelease-ten.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn" style={{ marginTop: "20px" }}>
                  Live Preview
                </button>
              </a>
            </div>
          </article>

          {/* CARD 3 */}
          <article className="tile">
            <img className="blog-img" src={learning} alt="Learning" />

            <div className="pad">
              <h3>Learning Progress</h3>

              <p style={{ color: "#555", fontSize: "0.9rem" }}>
                Personal platform to track learning progress and showcase
                developer growth.
              </p>

              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                <span className="badge">React</span>
                <span className="badge">Vite</span>
              </div>

              <a
                href="https://github.com/arsenicbreaker/daily-js"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn" style={{ marginTop: "20px" }}>
                  Check on Github
                </button>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
