import React from "react";
import CamperCard from "../CamperCard/CamperCard";

const CamperList = ({ campers, visibleCount, setVisibleCount }) => {
  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4); 
  };

  if (!campers || campers.length === 0) {
    return <div>No campers available</div>;
  }

  return (
    <div className="camper-list-container">
      <div className="camper-list">
        {campers.slice(0, visibleCount).map((camper) => (
          <CamperCard key={camper.id} camper={camper} />
        ))}
      </div>
      {/* Кнопка "Load More" */}
      {visibleCount < campers.length && (
        <div className="load-more-container">
          <button onClick={handleLoadMore} className="load-more-button">
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default CamperList;
