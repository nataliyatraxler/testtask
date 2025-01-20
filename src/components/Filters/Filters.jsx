import React from "react";
import "./Filters.css";

import table1Icon from "../../assets/images/icon.table1.png";
import table2Icon from "../../assets/images/icon.table2.png";
import table3Icon from "../../assets/images/icon.table3.png";
import windIcon from "../../assets/images/icon.wind.png";
import tvIcon from "../../assets/images/icon.tv.png";
import cupIcon from "../../assets/images/icon.cup.png";
import showerIcon from "../../assets/images/icon_shower.png";

const Filters = ({ onFilterChange }) => {
  return (
    <div className="filters">
      <h2>Filters</h2>
      <div className="filter-group">
        <label htmlFor="location">Location</label>
        <input
          id="location"
          type="text"
          placeholder="Enter location"
          onChange={(e) => onFilterChange("location", e.target.value)}
        />
      </div>

      <div className="filter-group">
        <h3>Vehicle equipment</h3>
        <div className="filter-icons">
          <button onClick={() => onFilterChange("AC", true)}>
            <img src={windIcon} alt="AC" />
          </button>
          <button onClick={() => onFilterChange("TV", true)}>
            <img src={tvIcon} alt="TV" />
          </button>
          <button onClick={() => onFilterChange("Kitchen", true)}>
            <img src={cupIcon} alt="Kitchen" />
          </button>
          <button onClick={() => onFilterChange("Bathroom", true)}>
            <img src={showerIcon} alt="Bathroom" />
          </button>
        </div>
      </div>

      <div className="filter-group">
        <h3>Vehicle type</h3>
        <div className="filter-icons">
          <button onClick={() => onFilterChange("type", "van")}>
            <img src={table1Icon} alt="Van" />
          </button>
          <button onClick={() => onFilterChange("type", "fullyIntegrated")}>
            <img src={table2Icon} alt="Fully Integrated" />
          </button>
          <button onClick={() => onFilterChange("type", "alcove")}>
            <img src={table3Icon} alt="Alcove" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
