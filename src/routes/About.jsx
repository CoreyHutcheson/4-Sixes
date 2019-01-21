import React from "react";

import GoogleMap from "features/GoogleMap";
import "./about.scss";

const About = () => (
  <div className="page-about">
    <h2>About</h2>
    <div className="page-about__content-container">
      <div className="page-about__map">
        <GoogleMap />
      </div>

      <div className="page-about__other" />
    </div>
  </div>
);

export default About;
