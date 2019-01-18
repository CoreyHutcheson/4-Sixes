import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./style.scss";

function Service({ title, desc }) {
  const uniqueClass = title
    .toLowerCase()
    .trim()
    .replace(/[ ]/g, "-");

  return (
    <Link to={`${title}`} className={`service service__${uniqueClass}`}>
      <h3 className="service__title">{title}</h3>
      <p className="service__description">{desc}</p>
    </Link>
  );
}

Service.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
};

export default Service;
