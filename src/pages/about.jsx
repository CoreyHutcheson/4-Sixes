import React from "react";

import PageWrapper from "src/components/page-wrapper";
import FAQ from "src/components/faq";
import "src/utils/scss/page-styles/about.scss";

const About = () => (
  <PageWrapper>
    <div className="page-about">
      <FAQ />
    </div>
  </PageWrapper>
);

export default About;
