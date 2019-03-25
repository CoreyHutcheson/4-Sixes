import React from "react";

import PageWrapper from "src/components/page-wrapper";
import ContactForm from "src/components/contact-form";
import GoogleMap from "src/components/google-map";
import FAQ from "src/components/faq";
import "src/utils/scss/page-styles/about.scss";

const About = () => (
  <PageWrapper>
    <div className="page-content page-about">
      <ContactForm />
      <FAQ />
      <GoogleMap />
    </div>
  </PageWrapper>
);

export default About;
