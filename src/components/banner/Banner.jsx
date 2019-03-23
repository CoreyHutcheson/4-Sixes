import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import "./style.scss";

function Banner({ link, children, otherProp }) {
  return (
    <div className="banner">
      <Link to={`/${link.toLowerCase()}`} className="banner__link">
        {children}
      </Link>
    </div>
  );
}

Banner.propTypes = {
  link: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Banner;
