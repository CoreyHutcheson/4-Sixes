import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

function SaleBanner() {
  return (
    <div className="sales-banner">
      <Link to="/about" className="sales-banner__link">
        SAVE $! Check out our Sales!
      </Link>
    </div>
  );
}

export default SaleBanner;
