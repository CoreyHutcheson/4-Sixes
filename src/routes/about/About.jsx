import React from "react";

import GoogleMap from "components/google-map";
import "./about.scss";

const About = () => (
  <div className="page-about">
    <h2 className="page-about__title">About</h2>
    <div className="page-about__map">
      <GoogleMap />
    </div>
  </div>
);

export default About;
