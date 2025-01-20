import React from "react";
import { Link } from "react-router-dom";
import "./CamperCard.css";

const CamperCard = ({ camper }) => {
  const { id, name, location, price, gallery, rating, features } = camper;

  return (
    <div className="camper-card-horizontal">
      <img src={gallery[0]?.thumb || "placeholder.jpg"} alt={name} className="card-image-horizontal" />
      <div className="card-content-horizontal">
        <h2 className="camper-name">{name}</h2>
        <p className="camper-location">{location}</p>
        <p className="camper-price">€{price}</p>
        <p className="camper-rating">
          <span>⭐ {rating}</span>
        </p>
        <div className="camper-features-horizontal">
          {Object.entries(features).map(([key, value]) =>
            value ? <span key={key} className="feature-item-horizontal">{key}</span> : null
          )}
        </div>
        <Link to={`/details/${id}`} className="card-button-horizontal">
          Show more
        </Link>
      </div>
    </div>
  );
};

export default CamperCard;
