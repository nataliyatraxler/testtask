import React from "react";
import { Link } from "react-router-dom";
import "./CamperCard.css";

const CamperCard = ({ camper, onFavoriteToggle, isFavorite }) => {
  if (!camper) {
    return <div>Error: Camper data is missing</div>;
  }

  const {
    id = "",
    name = "Unknown",
    location = "Unknown location",
    price = 0,
    gallery = [],
    rating = 0,
    features = {},
    reviews = [], // Предполагается, что в этом массиве есть `reviewer_name`
  } = camper;

  const reviewerName = reviews[0]?.reviewer_name || "Unknown";

  return (
    <div className="camper-card-horizontal">
      {/* Иконка сердечка в верхнем правом углу */}
      <div className="favorite-icon" onClick={() => onFavoriteToggle && onFavoriteToggle(id)}>
        {isFavorite ? "❤️" : "🤍"}
      </div>
      <img
        src={gallery[0]?.thumb || "placeholder.jpg"}
        alt={name}
        className="card-image-horizontal"
      />
      <div className="card-content-horizontal">
        <h2 className="camper-name">{name}</h2>
        <p className="camper-location">{location}</p>
        <p className="camper-price">€{price}</p>
        <p className="camper-rating">
          <span>⭐ {rating}</span> by {reviewerName}
        </p>
        {/* Проверяем наличие features */}
        <div className="camper-features-horizontal">
          {Object.keys(features).map(
            (key) =>
              features[key] && (
                <span key={key} className="feature-item-horizontal">
                  {key}
                </span>
              )
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
