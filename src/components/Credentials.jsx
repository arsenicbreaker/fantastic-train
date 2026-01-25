import gcloud from "../assets/media/gcloud.png";
import hacktiv from "../assets/media/hacktiv.png";
import coursera from "../assets/media/coursera.png";

export default function Credentials() {
  return (
    <section id="credentials" className="reveal">
      <div className="container">
        <p className="lead" style={{ textAlign: "center" }}>
          Browse My Recent
        </p>

        <h2 style={{ textAlign: "center", margin: "6px 0 22px" }}>
          Credentials
        </h2>

        <div className="grid-cards">
          <CredentialCard
            img={gcloud}
            title="Google Cloud"
            link="https://www.credly.com/users/agustia-eriani"
          />
          <CredentialCard
            img={hacktiv}
            title="Hacktiv8"
            link="https://drive.google.com/file/d/1splupOXlZWPmgr21oL9D82wC-7LoYpqE/view"
          />
          <CredentialCard
            img={coursera}
            title="Coursera"
            link="https://www.coursera.org/account/accomplishments/verify/H0NYZ5L062GT"
          />
        </div>
      </div>
    </section>
  );
}

function CredentialCard({ img, title, link }) {
  return (
    <article className="tile">
      <img src={img} alt={title} />
      <div className="pad">
        <h3>{title}</h3>
        <a href={link} target="_blank" rel="noreferrer">
          <button className="btn" style={{ marginTop: "8px" }}>
            View
          </button>
        </a>
      </div>
    </article>
  );
}
