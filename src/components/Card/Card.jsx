import { Link } from "react-router-dom";
import "./Card.scss";

const Card = ({ id, cover, title }) => {
  return (
    <Link
      to={`/logement/${id}`}
      className="card"
      style={{ backgroundImage: `url(${cover})` }}
    >
      {title && <h3 className="card__title">{title}</h3>}
    </Link>
  );
};

export default Card;
