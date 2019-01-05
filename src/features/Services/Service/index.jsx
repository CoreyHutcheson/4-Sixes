import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

function Service({ title, desc }) {
  const uniqueClass = title
    .toLowerCase()
    .trim()
    .replace(/[ ]/g, "-");

  return (
    <div className={`service service__${uniqueClass}`}>
      <h3 className="service__title">{title}</h3>
      <p className="service__description">{desc}</p>
    </div>
  );
}

Service.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
};

export default Service;
