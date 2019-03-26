import React from "react";

import PageWrapper from "src/components/page-wrapper";
import ContactForm from "src/components/contact-form";
import GoogleMap from "src/components/google-map";
import "src/utils/scss/page-styles/about.scss";

const About = () => (
  <PageWrapper>
    <div className="page-content page-about">
      <ContactForm />
      <GoogleMap />
    </div>
  </PageWrapper>
);

export default About;
