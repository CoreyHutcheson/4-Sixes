import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

const DrinkOutputPanel = ({ count, text }) => (
  <div className="output__panel">
    <div>{count}</div>
    <div>{text}</div>
  </div>
);

DrinkOutputPanel.propTypes = {
  count: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default DrinkOutputPanel;
