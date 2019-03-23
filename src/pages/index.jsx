import React from "react";

import PageWrapper from "src/components/page-wrapper";
import Carousel from "src/components/carousel";
import Services from "src/components/services";
import Banner from "src/components/banner";

const Home = () => (
  <PageWrapper>
    <div className="page-home">
      <Banner link="about">SAVE $! Check out our Sales!</Banner>
      <Banner link="about">WINE TASTING April 7th, 2019</Banner>
      <Carousel />
      <Services />
    </div>
  </PageWrapper>
);

export default Home;
