import React from "react";
import PropTypes from "prop-types";

import getEventTime from "src/utils/js/getEventTime";
import "./style.scss";

const Event = ({ title, content, start, end }) => {
  const eventTime = getEventTime(start, end);

  return (
    <div className="event">
      <h2 className="event__title">{title}</h2>
      <div className="event__time">{eventTime}</div>
      <p className="event__content">{content}</p>
    </div>
  );
};

Event.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};

export default Event;
