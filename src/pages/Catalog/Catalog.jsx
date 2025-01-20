import React, { useState } from "react";
import Filters from "../../components/Filters/Filters";
import CamperList from "../../components/CamperList/CamperList";

const Catalog = ({ campers }) => {
  const [filters, setFilters] = useState({});
  
  const handleFilterChange = (key, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));
  };

  const filteredCampers = campers.filter((camper) => {
    if (filters.location && !camper.location.toLowerCase().includes(filters.location.toLowerCase())) {
      return false;
    }
    if (filters.AC && !camper.features?.AC) return false;
    if (filters.TV && !camper.features?.TV) return false;
    if (filters.Kitchen && !camper.features?.Kitchen) return false;
    if (filters.Bathroom && !camper.features?.Bathroom) return false;
    if (filters.type && camper.type !== filters.type) {
      return false;
    }
    return true;
  });

  return (
    <div className="catalog">
      <Filters onFilterChange={handleFilterChange} />
      <CamperList campers={filteredCampers} />
    </div>
  );
};

export default Catalog;
