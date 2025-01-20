import React from "react";
import CamperCard from "./components/CamperCard/CamperCard";

const CamperList = ({ campers }) => {
  if (!Array.isArray(campers) || campers.length === 0) {
    return <div>No campers available</div>;
  }

  return (
    <div className="camper-list">
      {campers.map((camper) => (
        <CamperCard key={camper.id} camper={camper} />
      ))}
    </div>
  );
};

export default CamperList;
