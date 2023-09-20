import React from "react";
import { Link } from "react-router-dom";

const Card = ({ property }) => {
  return (
    <li className="card">
      <Link className="cardLink" to={`/logement/${property.id}`}></Link>
      <img className="cardImage" src={property.cover} alt={property.title} />
      <h4 className="cardTitle">{property.title}</h4>
    </li>
  );
};

export default Card;