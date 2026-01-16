import "./Banner.scss";

const Banner = ({ image, title, opacity, className }) => {
  return (
    <div
      className={`banner ${className}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div
        className="banner-overlay"
        style={{ backgroundColor: `rgba(0, 0, 0, ${opacity})` }}
      />

      {title && <h1 className="banner-title">{title}</h1>}
    </div>
  );
};

export default Banner;
