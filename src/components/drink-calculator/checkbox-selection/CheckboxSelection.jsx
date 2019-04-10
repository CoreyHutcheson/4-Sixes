import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

const CheckboxSelection = ({ categories, handleChange }) => {
  return (
    <div className="input-container checkbox-input">
      <div className="checkbox-input__header">Serving</div>
      <div className="checkbox-input__content">
        <div className="checkbox-input__choice">
          <input
            type="checkbox"
            id="beer"
            className="checkbox-input__input"
            checked={categories.beer}
            onChange={handleChange}
          />
          <label htmlFor="beer" className="checkbox-input__label">
            Beer
          </label>
        </div>
        <div className="checkbox-input__choice">
          <input
            type="checkbox"
            id="wine"
            className="checkbox-input__input"
            checked={categories.wine}
            onChange={handleChange}
          />
          <label htmlFor="wine" className="checkbox-input__label">
            Wine
          </label>
        </div>
        <div className="checkbox-input__choice">
          <input
            type="checkbox"
            id="liquor"
            className="checkbox-input__input"
            checked={categories.liquor}
            onChange={handleChange}
          />
          <label htmlFor="liquor" className="checkbox-input__label">
            Liquor
          </label>
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
