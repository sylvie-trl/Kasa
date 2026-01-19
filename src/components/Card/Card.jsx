import "./Card.scss";

const Card = ({ cover, title }) => {
  return (
    <div
      className="card"
      style={{ backgroundImage: `url(${cover})` }}
      aria-label={title}
    >
      {title && <h3 className="card__title">{title}</h3>}
    </div>
  );
};

export default Card;
