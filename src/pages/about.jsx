import React from "react";

import PageWrapper from "src/components/page-wrapper";
import GoogleMap from "src/components/google-map";
import "src/utils/scss/page-styles/about.scss";

const About = () => (
  <PageWrapper>
    <div className="page-about">
      <h2 className="page-about__title">About</h2>
      <div className="page-about__map">
        <GoogleMap />
      </div>
    </div>
  </PageWrapper>
);

export default About;
