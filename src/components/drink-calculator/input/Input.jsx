import React from "react";
import PropTypes from "prop-types";

import Button from "../button";
import "./style.scss";

const Input = ({
  header,
  label,
  name,
  value,
  increaseFunc,
  decreaseFunc,
  handleChange,
}) => {
  return (
    <div className="input-container input">
      <div className="input__header">{header}</div>
      <div className="input__content-container">
        <div>
          <Button callback={decreaseFunc}>-</Button>
          <input
            className="input__content"
            type="number"
            id={name}
            value={value}
            onChange={handleChange}
          />
          <Button callback={increaseFunc}>+</Button>
        </div>
        <label className="input__label" htmlFor={name}>
          {label}
        </label>
      </div>
    </div>
  );
};

Input.propTypes = {
  header: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  increaseFunc: PropTypes.func.isRequired,
  decreaseFunc: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Input;
