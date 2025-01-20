import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Details.css";

const Details = () => {
  const { id } = useParams();
  const [camper, setCamper] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("features");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers");
        if (!response.ok) throw new Error(`Ошибка: ${response.statusText}`);
        const data = await response.json();
        const selectedCamper = data.items.find((item) => item.id === id);
        setCamper(selectedCamper || null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!camper) return <div>Camper not found</div>;

  const { name, price, location, gallery = [], description, features = {}, specs = {}, reviews = [] } = camper;

  return (
    <div className="details">
      <h1 className="details-title">{name}</h1>
      <p className="details-location">{location}</p>
      <p className="details-price">€{price}</p>

      <div className="details-gallery">
        {gallery.map((image, index) => (
          <img key={index} src={image.original} alt={`${name} image ${index + 1}`} />
        ))}
      </div>

      <p className="details-description">{description}</p>

      <div className="details-sections">
        {/* Левый блок: Vehicle Features & Vehicle Details */}
        <div className="details-left">
          <div className="tabs">
            <button
              className={`tab-button ${activeTab === "features" ? "active" : ""}`}
              onClick={() => setActiveTab("features")}
            >
              Features
            </button>
            <button
              className={`tab-button ${activeTab === "reviews" ? "active" : ""}`}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews
            </button>
          </div>

          {activeTab === "features" && (
            <div className="features">
              <h3>Features</h3>
              <div className="feature-icons">
                {Object.entries(features).map(([key, value]) =>
                  value ? (
                    <div key={key} className="feature-item">
                      <img src={`/path-to-icons/icon.${key.toLowerCase()}.png`} alt={key} />
                      <span>{key}</span>
                    </div>
                  ) : null
                )}
              </div>
              <div className="specs">
                <h3>Vehicle Details</h3>
                <table>
                  <tbody>
                    {Object.entries(specs).map(([key, value]) => (
                      <tr key={key}>
                        <td>{key}</td>
                        <td>{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="reviews">
              <h3>Reviews</h3>
              {reviews.length > 0 ? (
                reviews.map((review, index) => (
                  <div key={index} className="review-item">
                    <p>
                      <strong>{review.reviewer_name}</strong> ({review.reviewer_rating}⭐): {review.comment}
                    </p>
                  </div>
                ))
              ) : (
                <p>No reviews available</p>
              )}
            </div>
          )}
        </div>

        {/* Правый блок: Booking Form */}
        <div className="details-right">
          <div className="booking-form">
            <h3>Book your campervan now</h3>
            <p>Stay connected! We are always ready to help you.</p>
            <form>
              <input type="text" placeholder="Name*" required />
              <input type="email" placeholder="Email*" required />
              <input type="date" placeholder="Booking date*" required />
              <textarea placeholder="Comment"></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
