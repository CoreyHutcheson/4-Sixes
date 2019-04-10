import React from "react";
import PropTypes from "prop-types";

const CheckboxSelection = ({ categories, handleChange }) => {
  return (
    <div className="input-container">
      <div className="input-container__header">Serving</div>
      <div className="input-container__choice-container">
        <div className="input-container__choice">
          <input
            type="checkbox"
            id="beer"
            checked={categories.beer}
            onChange={handleChange}
          />
          <label htmlFor="beer">Beer</label>
        </div>
        <div className="input-container__choice">
          <input
            type="checkbox"
            id="wine"
            checked={categories.wine}
            onChange={handleChange}
          />
          <label htmlFor="wine">Wine</label>
        </div>
        <div className="input-container__choice">
          <input
            type="checkbox"
            id="liquor"
            checked={categories.liquor}
            onChange={handleChange}
          />
          <label htmlFor="liquor">Liquor</label>
        </div>
      </div>
    </div>
  );
};

CheckboxSelection.propTypes = {
  categories: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default CheckboxSelection;
