import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import "./style.scss";

function Panel({ title, desc }) {
  const uniqueClass = title
    .toLowerCase()
    .trim()
    .replace(/[ ]/g, "-");

  return (
    <Link
      to={`/${title.toLowerCase()}`}
      className={`panel panel__${uniqueClass}`}
    >
      <h3 className="panel__title">{title}</h3>
      <p className="panel__description">{desc}</p>
    </Link>
  );
}

Panel.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default Panel;
