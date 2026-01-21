import { useParams, Navigate } from "react-router-dom";
import data from "../../data/logements.json";
import Slideshow from "../../components/Slideshow/Slideshow";
import Collapse from "../../components/Collapse/Collapse";
import "./Logement.scss";

export default function Logement() {
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);

  if (!logement) {
    return <Navigate to="/404" />;
  }

  return (
    <div className="logement">
      <Slideshow pictures={logement.pictures} />

      <div className="logement__top">
        <div className="logement__infos">
          <h1>{logement.title}</h1>
          <p className="logement__location">{logement.location}</p>

          <div className="logement__tags">
            {logement.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="logement__host">
          <div className="host__name">{logement.host.name}</div>
          <img
            src={logement.host.picture}
            alt={logement.host.name}
            className="host__picture"
          />
        </div>
      </div>

      <div className="logement__rating">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={i < logement.rating ? "star star--full" : "star"}
          >
            ★
          </span>
        ))}
      </div>

      <div className="logement__collapses">
        <Collapse title="Description">{logement.description}</Collapse>

        <Collapse title="Équipements">
          <ul>
            {logement.equipments.map((eq) => (
              <li key={eq}>{eq}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}
