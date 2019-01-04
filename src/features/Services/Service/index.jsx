import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

function Service({ num, title, desc }) {
  return (
    <div className={`service service-${num}`}>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

Service.propTypes = {
  num: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
};

export default Service;
