import React from "react";

const Rating = ({ rating }) => {
  // rating du fichier .json
  const fullRedStars = rating;
  
  const emptyGreyStars = 5 - fullRedStars;

  const displayRating = () => {
    const stars = [];

    for (let i = 0; i < fullRedStars; i++) {
      stars.push(
        <i
          key={`fullRedStars_${i}`}
          className="fa-solid fa-star fullRedStars"
        ></i>
      );
    }

    for (let n = 0; n < emptyGreyStars; n++) {
      stars.push(
        <i 
          key={`emptyGreyStars_${n}`} 
          className="fa-solid fa-star emptyGreyStars"
        ></i>
      );
    }

    return stars;
  };

  return <div className="displayRating">{displayRating()}</div>;
};

export default Rating;