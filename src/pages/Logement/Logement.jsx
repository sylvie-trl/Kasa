import { useParams, Navigate } from "react-router-dom";
import data from "../../data/logements.json";
import Slideshow from "../../components/Slideshow/Slideshow";
import Collapse from "../../components/Collapse/Collapse";
import "./Logement.scss";
import starActive from "../../assets/icones/star-active.png";
import starInactive from "../../assets/icones/star-inactive.png";

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
          <h1 className="logement__title">{logement.title}</h1>
          <p className="logement__location">{logement.location}</p>
          <div className="logement__tags">
            {logement.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="logement__right-column">
          <div className="logement__host">
            <div className="host__name">{logement.host.name}</div>
            <img
              src={logement.host.picture}
              alt={logement.host.name}
              className="host__picture"
            />
          </div>
          <div className="logement__rating">
            {Array.from({ length: 5 }).map((_, i) => (
              <img
                key={i}
                src={i < parseInt(logement.rating) ? starActive : starInactive}
                alt={`Étoile ${i < parseInt(logement.rating) ? "pleine" : "vide"}`}
                className="star"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="logement__collapses">
        <Collapse title="Description">
          <p>{logement.description}</p>
        </Collapse>

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
