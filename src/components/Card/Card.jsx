import "./Card.scss";

const Card = ({ cover, title }) => {
  return (
    <div className="card">
      <img src={cover} alt={title} className="card-image" />
      {title && <h3 className="card-title">{title}</h3>}
    </div>
  );
};

export default Card;
