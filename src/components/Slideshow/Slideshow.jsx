import { useState } from "react";
import "./Slideshow.scss";
import chevronLeft from "../../assets/icones/chevron-left.svg";
import chevronRight from "../../assets/icones/chevron-right.svg";

const Slideshow = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const length = pictures.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? length - 1 : prevIndex - 1,
    );
  };

  return (
    <div className="slideshow">
      <img
        src={pictures[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="slideshow__image"
      />

      {length > 1 && (
        <>
          <button
            className="slideshow__arrow slideshow__arrow--left"
            onClick={prevSlide}
          >
            <img src={chevronLeft} alt="Précédent" className="arrow-icon" />
          </button>

          <button
            className="slideshow__arrow slideshow__arrow--right"
            onClick={nextSlide}
          >
            <img src={chevronRight} alt="Suivant" className="arrow-icon" />
          </button>

          <div className="slideshow__counter">
            {currentIndex + 1}/{length}
          </div>
        </>
      )}
    </div>
  );
};

export default Slideshow;
