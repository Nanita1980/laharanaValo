import React, { useState } from "react";
import arrowLeft from "./arrowLeft.png";
import arrowRight from "./arrowRight.png";

const Carousel = ({ pictures }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideNavigation = (direction) => {
    if (direction === "left") {
      setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? pictures.length - 1 : prevSlide - 1
      );
    } else if (direction === "right") {
      setCurrentSlide((nextSlide) =>
        nextSlide === pictures.length - 1 ? 0 : nextSlide + 1
      );
    }
  };

  return (
    <div className="containerCarousel">
      {pictures.length > 1 && (
        <div className="containerArrow">
          <button className="arrowLeft" onClick={() => slideNavigation("left")}>
            <img src={arrowLeft} alt="Flèche gauche" className="arrow" />
          </button>
          <button
            className="arrowRight"
            onClick={() => slideNavigation("right")}
          >
            <img src={arrowRight} alt="Flèche droite" className="arrow" />
          </button>
        </div>
      )}
      <img
        className="CurrentSlideImg"
        src={pictures[currentSlide]}
        alt={`Slide numéro ${currentSlide + 1}`}
      />
      <div className="containerCounter">
        <p className="counter">
          {pictures.length > 1 ? `${currentSlide + 1}/${pictures.length}` : ""}
        </p>
      </div>
    </div>
  );
};

export default Carousel;