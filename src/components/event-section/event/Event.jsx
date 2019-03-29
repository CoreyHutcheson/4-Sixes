import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

const Event = ({ title, content }) => (
  <div className="event">
    <h2 className="event__title">{title}</h2>
    <p className="event__content">{content}</p>
  </div>
);

Event.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Event;
