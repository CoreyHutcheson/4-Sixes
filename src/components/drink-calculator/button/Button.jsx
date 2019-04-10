import React from "react";
import PropTypes from "prop-types";

const Button = ({ callback, children }) => {
  return (
    <input
      className="input__button"
      type="button"
      onClick={callback}
      value={children}
    />
  );
};

Button.propTypes = {
  callback: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
